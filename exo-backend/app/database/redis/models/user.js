import pkg from 'redis-om';
import client from '../../redis-connection.js'
const { Entity, Schema } = pkg;

class User extends Entity {}


const userSchema = new Schema(User, {

    firstname: { type: 'string', required: false },
    lastname: { type: 'string', required: false },
    email: { type: 'string', required: true},
    password: { type: 'string', required: true },
    created_at: { type: 'date', required: false },
    updated_at: { type: 'date', required: false },
  
})



const userRepository = client.fetchRepository(userSchema)
export default userRepository


await userRepository.createIndex()

