var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;
var UsersSchema = new Schema({
    name: String,
    email:String,
    password:String,
    address:String,
    isActive:Boolean,
    skills:[],
    role:String
});

// UsersSchema.methods.setPassword = function(password) {
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//   };
//   UsersSchema.methods.updatePassword = function(password) {
//     const salt =crypto.randomBytes(16).toString('hex') 
//     const data = {
//       salt:salt,
//       hash:crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
//     }
//     return(data)
//   };
//   UsersSchema.methods.validatePassword = function(password) {
//     const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//     return this.hash === hash;
//   };
  
//   UsersSchema.methods.generateJWT = function() {
//     const today = new Date();
//     const expirationDate = new Date(today);
//     expirationDate.setDate(today.getDate() + 1);
  
//     return jwt.sign({
//       email: this.email,
//       id: this._id,
//       exp: parseInt(expirationDate.getTime() / 1000, 10),
//     }, 'secret');
//   }
  
//   UsersSchema.methods.toAuthJSON = function() {
//     return {
//       _id: this._id,
//       role:this.role,
//       email: this.email,
//       token: this.generateJWT(),
//     };
//   };

  
mongoose.model('users',UsersSchema);