const userSchema = require('./user.model');
// const bcrypt = require('bcrypt');


const createUserService = async (data) => {
    const {username,email,password} = data;
    const newUser = await userSchema.create({username,email,password});
    return newUser;
};

const getUserService = async () => {
    const allUser = await userSchema.find(req.body);
    return allUser;
};



module.exports = {createUserService,getUserService};