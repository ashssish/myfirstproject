const { isValidObjectId } = require("mongoose");
const userRegistrationModel = require("../models/registrationModel");

const registration = async (req, res) => {
  try {
    const { name, username, email, password, mobile, role } = req.body;

    const Doc = new userRegistrationModel({
      name: name,
      username: username,
      email: email,
      password: password,
      mobile: mobile,
      user_role: role,
    });
    if (Doc) {
      const result = await Doc.save();
      res
        .status(201)
        .send({ message: "New User Created Successfully", result });
    } else {
      console.log("check you data is insert correctly");
    }
  } catch (error) {
    console.log(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const emailVerify = await userRegistrationModel.findOne({ email: email });

    if (password === emailVerify.password) {
      const updateStatus = await userRegistrationModel.findByIdAndUpdate(
        emailVerify._id,
        { is_varified: 1 }
      );

      res.status(201).send({ message: "Login Successfully", updateStatus });
    } else {
      res
        .status(404)
        .send({ message: "Please enter correct email nad password" });
    }
  } catch (error) {
    console.log(error);
  }
};

const logOut = async (req, res) => {
  const id = req.params.id;

  if (id) {
    const userlogout = await userRegistrationModel.findByIdAndUpdate(id, {
      is_varified: 0,
    });
    res
      .status(201)
      .send({ message: "LogOut Successfully", logout: userlogout });
  }
};

const allUsers = async (req, res) => {
  try {
    const allRecords = await userRegistrationModel.find();
    res.status(201).json({ message: "All Users", all: allRecords });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registration,
  userLogin,
  logOut,
  allUsers,
};
