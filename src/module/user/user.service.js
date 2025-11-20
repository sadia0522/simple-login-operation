const userModel = require("./user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {JSON_SECRET} = require('../../config/envConfig')

const createUserService = async (data) => {
  try {
    const { username, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

const getUserService = async () => {
  try {
    const allUser = await userModel.find();
    return allUser;
  } catch (error) {
    console.log(error);
  }
};

const loginUserService = async (data) => {
  try {
    const { email, password } = data;
    const user = await userModel.findOne({email});
    if (!user) throw new Error('user not found')

    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch) throw new Error('invalid credential')
     
    
    const token = jwt.sign({ id: user._id, email: user.email }, JSON_SECRET, {
      expiresIn: "1h",
    });
    return {
      message: "login successfully",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUserService, getUserService, loginUserService };
