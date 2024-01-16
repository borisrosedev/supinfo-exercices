import userRepository from "../database/redis/models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import fs from "node:fs"
const privateKey = fs.readFileSync('private.key');


const UserController = {


    async index(req, res){
        const users= await userRepository.search().return.all()
        if(!users){
            return next()
        }
        res.status(200).json(users)
          
    },

    async store(req, res, next){
        const { email, password } = req.body;
        if(!email || !password){
            return next()
        }
        const users = await userRepository
            .search()
            .where('email')
            .equals(email)
            .return.all()

        if(users.length){
            return next()
        }
        const hashPassword = bcrypt.hashSync(password, 10);
        const user = await userRepository.createAndSave({ email: email, password: hashPassword})
        const token = jwt.sign({ userEmail: users[0] }, privateKey, { expiresIn: 60*60 });
        return res.status(200).json({...user, token})
    },


    async findMultipleByEmail(){
        const email = req.params.email
        const users = await userRepository
            .search()
            .where('email')
            .equals(email)
            .return.all()
        res.send(users)
    },

    async login(){
        const email = req.body.email
        const password = req.body.password

        const users = await userRepository
            .search()
            .where('email')
            .equals(email)
            .return.all()
        
        if(users.length !== 1){
            return next()
        }
        if(!bcrypt.compareSync(password, users[0].password)){
            return next()
        }
        const token = jwt.sign({ userEmail: users[0] }, privateKey, { algorithm: 'RS256' });
        res.send({ ...users[0], token})
    },
 
    async findOneUser(req, res, next){
        const { id } = req.params;
        if(!id){
            return next()
        }
        const user = await userRepository.fetch(id)
        return res.status(200).json(user)
    },

    async deleteUser(req, res, next){
        const { id } = req.params;
        if(!id){
            return next()
        }
        await userRepository.remove(id)
        res.status(200).json({ entityId: id })
    },

    async updateUser(req, res, next){
        const { id } = req.params;
        if(!id){
            return next()
        }
        const user = await userRepository.fetch(req.params.id)
      
        user.email = req.body.email ?? user.email
        user.password = req.body.password ?? user.password
        
        await userRepository.save(user)
      
        res.status(200).json(user)
      }

}


export default UserController;
