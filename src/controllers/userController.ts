import { Request, Response } from "express"

 
export const createUser = async (req:Request, res:Response) => {
    try {
        await createUserService(req.body)
        res.status(201).json({
            msg: 'user created succesfully!'
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAll = async (req:Request, res:Response) => {
    try {

    } catch (error) {

    }
}

 