/* eslint-disable arrow-parens */
const express = require('express')
const router = express.Router();
const Controller =require('../controllers')


router.post('/signIn', Controller.UserControllers.signIn)
router.post('/signUp', Controller.UserControllers.signUp)


module.exports = router;