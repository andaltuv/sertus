import User from '../models/UserModel';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

const JWTConfig = require('../config/jwt-config');

export async function userLogin(req, res){
    try{
        const { username, password } = req.body;
        let findUser = await User.findOne({
            where:{ username }
        }, {
            fields:['username', 'password']
        });

        if(findUser){

            if(bcrypt.compareSync(password, findUser.dataValues.password))
            {
                let userToken = JWT.sign({
                    id: findUser.dataValues.id 
                },JWTConfig.secret,{
                    expiresIn:  JWTConfig.expiresIn, 
                    audience: JWTConfig.issuer,
                    algorithm: JWTConfig.algorithm 
                });

                return res.status(200).json({
                    ok:true,
                    message:"User logged in successfully",
                    token:userToken
                })

               
            } else {
                return res.status(401).json({
                    ok:false,
                    message:"Password didn't match"
                })
            }

        } else {
            return res.status(401).json({
                ok:false,
                message:'Sorry user not found with this email'
            })
        }

    } catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
}

export async function createAdmin(req, res){
    try{
        let { username, password} = req.body;
        let createUser = await User.create({
            username,
            password: bcrypt.hashSync(password, 10),
        }, {
            fields:['username', 'password']
        });

        if(createUser){
            return res.status(200).json({ok:true, message:"User created Successfully"});
        }

    }catch(error){
        return res.status(500).json({ok:false, message:"Sorry there was a problem"});
    }
}