import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {User} from "../../models/user.model.js";
//register

const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      messege: "Registration successfull",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      massege: "Some error occured",
    });
  }
};



export { registerUser };
