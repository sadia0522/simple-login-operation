const express = require('express');
const {createUser,getUser, loginUser} = require('./user.controller');
const router = express.Router();

router.get('/getUser',getUser);
router.post('/createUser',createUser);
router.post('/login',loginUser);


module.exports = router;