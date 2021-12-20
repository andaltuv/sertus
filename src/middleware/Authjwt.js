import JWT from 'jsonwebtoken';
import config from '../config/jwt-config';
import User from '../models/UserModel';

export let verifyToken = async(req, res, next ) => {
   
   try {
   const token = req.headers["x-access-token"];
    if(!token){ return res.status(403).json({ok:true, message:'No token provided'})}
    const decoded = JWT.verify(token, config.secret);
    
    const user = await User.findByPk(decoded.id);
    
    if (!user){ return res.status(404).json({ok:false, message:"User doesn't exists"})}
    let data = { id: user.dataValues.id, username: user.dataValues.username} 
    req.user_info = data;
    next()

   }catch(error){
        return res.status(401).json({ok:false, message:'Unauthorized'});
   }
}