import mng from 'mongoose'
import { todoSchema } from './Todo'


export const userSchema = new mng.Schema({

    user_name: {
        type: String,
        required: [true, 'user name is requierd!'],
        minlength: [5, 'too short name!']
    },

    todos: {
        type: [todoSchema]
    }
})

export const userModel = mng.model('user', userSchema)

 