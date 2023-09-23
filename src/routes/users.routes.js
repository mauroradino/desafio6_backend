import { Router } from "express";
import { userModel } from "../models/userModel.js";

const usersRouter = Router()

usersRouter.post('/register', async (req, res) =>{
    const { email, password } = req.body;
    console.log(email)
    console.log(password)

    try{
        const respuesta = await userModel.create({ first_name, last_name, age, email, password })
        res.status(200).send({ respuesta: 'OK', mensaje: respuesta })
    }catch(error){
        res.status(400).send(error)
    }
})

export default usersRouter;