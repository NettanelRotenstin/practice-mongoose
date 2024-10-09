import mng from 'mongoose'
import { Todo, todoSchema } from './Todo'

export interface User{
    user_name:string,
    todos:[Todo]
}


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

 