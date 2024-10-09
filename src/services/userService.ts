
import { User, userModel, userSchema } from "../models/User"


export const createUserService = async (user: User) => {
    try {
        const { user_name } = user

        const dbUser = new userModel({
            user_name
        })
        await dbUser.save()
    } catch (error) {
        throw error
    }
}

//export const getAll =  async():Promise<User[]>=>{return await }