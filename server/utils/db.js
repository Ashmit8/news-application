const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin"

const URI = process.env.MONGODB_URI
mongoose.connect(URI)






const connectDb = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("connection successful")
    }
    catch (error){
        console.log("connection error")
        process.exit(0);
    }
};

module.exports = connectDb




// const register = async (req, res) => {
//     try {
//       const data = req.body;
//       console.log(req.body);
//       // res.status(201).json({ message: "User registered successfully" });
//       res.status(200).json({ msg: data });
//     } catch (error) {
//       res.status(500).json({ message: "Internal server error" });
//     }
//   };
  
//   module.exports = { home, register };