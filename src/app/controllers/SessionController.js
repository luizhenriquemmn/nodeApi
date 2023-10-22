import jwt from 'jsonwebtoken';
import User from "../models/User";
import authConfig from '../../config/auth';


class SessionController{
 async store(req,res){

    const {email, password} = req.body;

    const user = await User.findOne({where: {email}})


    // Verificar se esse email existe
    if(!user){
        return res.status(401).json({error: 'Usuario não existe'})
    }

    // verificar se senha nao é correspondente

    if(!(await user.checkPassword(password))){
        return res.status(401).json({error: 'Senha Inválida'})
    }


    const {id,name} = user;

    return res.json({
        user:{
            id,
            name,
            email,
        },
        token: jwt.sign({id}, authConfig.secret,{
            expiresIn: authConfig.expiresIn,
        })
    })
   
 }
}

export default new SessionController();