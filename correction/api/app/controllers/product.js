import client from "../db/connect.js"
const database = client.db('products');
const products = database.collection('products');

const ProductController = {

    async index(req, res, next){
        try {
            await products.find()
        } catch(e){
            console.trace(e)
            return next()
        }
    },

    async store(req, res, next){

        const product = req.body
        if(!req.body.name 
            || !req.body.description 
            || !req.body.url 
            || !req.body.quantity
            || !req.body.price
        ) {
            return next()
        }

        try {
            const newProduct = await products.insertOne(...req.body)
            return res.status(201).json(newProduct);
        } catch(e){
            console.trace(e)
            return next()
        }
    },

    async findOne(req, res, next){

        try {

        } catch(e){
            console.trace(e)
            return next()
        }
    },

    async findMultiple(req, res, next){

        try {

        } catch(e){
            console.trace(e)
            return next()
        }

    },

    async delete(req, res, next){

        try {

        } catch(e){
            
        }

    },

   async update(req, res) {
        try {

        } catch(e){
            
        }
    }

}

export default ProductController