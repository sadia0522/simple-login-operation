const express = require('express');
const {createUser,getUser} = require('./user.controller');
const router = express.Router();

router.get('/getUser',getUser);
router.post('/createUser',createUser);

module.exports = router;