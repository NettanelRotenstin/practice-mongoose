import mongoose from 'mongoose'
import nongoose from 'mongoose'

export const connectToMongo = async ():Promise<void> => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todo')
    } catch (error) {
        console.log(error)
    }
}


 