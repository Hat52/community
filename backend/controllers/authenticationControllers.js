
 require('../Models/Users')
var mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
var config = require('../config/config.json')
var Users = mongoose.model('users')
const UserControllers = {
    async signIn(req,res){
        Users.find({$and:[{email:req.body.email,password:req.body.password}]},function(err,data){
            if(err){
                res.status(404).json({ message: 'Username or password is incorrect' })
            }
            if(data.length){
            const token = jwt.sign({ sub: data.email, role: data.role }, config.secret);
                res.status(200).json({user:data,token})
            }else{
                res.status(404).json({message:"User Not fount",status:false})
            }
    
        })
    },
    async signUp(req,res){
           const newUser = new Users({
                    email:req.body.email,
                    name: req.body.username,
                    password:req.body.password,
                    address:req.body.address,
                    isActive:true,
                    skills:req.body.skills,
                    role:req.body.role
                });
            newUser.save();
            res.status(200).json({message:"User Has Been Successfully Registered",status:true})
    }
}

module.exports = UserControllers