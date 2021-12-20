import User from '../models/UserModel';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

const JWTConfig = require('../config/jwt-config');

export async function userLogin(req, res){
    try{
        const {username, password} = req.body;
        let findUser = await User.findOne({
            where:{username}
        }, {
            fields:['username', 'password']
        });

        if(findUser){
            console.log(findUser);
        }

    } catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
}