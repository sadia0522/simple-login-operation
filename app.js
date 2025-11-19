const express = require('express');
const router = express.Router();
const userRouter = require('./src/module/user/user.route');


 router.use('/user',userRouter);

module.exports = router;



  