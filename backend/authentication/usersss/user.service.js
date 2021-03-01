const config = require('../../config/config.json');
const jwt = require('jsonwebtoken');
const Role = require('../_helpers/role');
require('../../Models/Users')
var mongoose = require('mongoose');
var Users = mongoose.model('users')

// users hardcoded for simplicity, store in a db for production applications
module.exports = {
    authenticate,
    getAll,
    getById
};

 function authenticate(req,res) {

//     const newUser = new Users({
//         email:req.body.email,
//         name: req.body.username,
//         password:req.body.password,
//         address:req.body.address,
//         isActive:true,
//         skills:req.body.skills,
//         role:req.body.role
//     });
// newUser.save();
// res.send('done')
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
}

// async function getAll() {
//     return users.map(u => {
//         const { password, ...userWithoutPassword } = u;
//         return userWithoutPassword;
//     });
// }

// async function getById(id) {
//     const user = users.find(u => u.id === parseInt(id));
//     if (!user) return;
//     const { password, ...userWithoutPassword } = user;
//     return userWithoutPassword;
// }