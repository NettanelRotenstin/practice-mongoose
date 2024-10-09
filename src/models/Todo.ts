import mongoose from 'mongoose'
 

export interface Todo{
    title:string,
    user_id:mongoose.Schema.Types.ObjectId
}
export const todoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'title is requierd!'],
    },

    user_id: {
        type: mongoose.Schema.ObjectId,
        require:[true, 'user is requierd!']
    }
})

 

 