const userSchema = require("./user.model");
const {
  createUserService,
  getUserService,
  loginUserService,
} = require("./user.service");

const createUser = async (req, res) => {
  try {
    const user = await createUserService(req.body);
    if (!user) {
      return res.status(400).json({
        message: "Creation failed",
      });
    }
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await getUserService();
    if (!user|| user.length === 0) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const login = await loginUserService(req.body);
    res.status(200).json({
      success: true,
      message: "login successfull",
      token: login.token,
      user: login.user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createUser, getUser, loginUser };
 