const User = require("../models/user-model");
const bcrypt = require("bcryptjs");


const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};


// Registration Logicsss
  
  const register = async (req, res) => {
    try {
        console.log(req.body);
        const {username, email, phone, password} = req.body;
        const userExist = await User.findOne({ email })

        if(userExist){
            return res.status(400).json({msg:"email already exist"})
        }
       const userCreated =  await User.create({
        username,
        email,
        phone,  
        password
        });
   

    res.status(201).json({ msg:"registration successful"});
  } catch (error) {
    console.log(error)
    res.status(500).json("internal server error");
  }
  };


//user login logic

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExist = await User.findOne({ username: username });
    console.log(userExist, '1');
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const user = await userExist.comparePassword(password);
    console.log(user);
    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });

    } else {
      res.status(401).json({ message: "Invalid email or password" });

    }
  }
  catch (error) {
    res.status(500).json("internal server");
  }
};


module.exports = { home, register, login };





