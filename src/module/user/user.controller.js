const userSchema = require("./user.model");
const { createUserService, getUserService } = require("./user.service");


const createUser = async (req, res) => {
  try {
    const create = await createUserService(req.body);
    if (!create) {
      res.status(404).json({
        message: "Creation failed",
      });
      res.status(200).json(create);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const User = await getUserService();
    if (!User) {
      res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(User);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = {createUser,getUser};
