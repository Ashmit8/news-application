// const {z} = require("zod");



// // creating schema

// const signupSchema = z.object({
//     username:z
//     .string({required_error:"name is required"}).trim().min(3,{message:"name must be at least 3 character"}).max(255,{
// message:"name not be more than 255 character"
//     }),


//     email:z
//     .string({required_error:"email is required"}).trim().email({message:"invalid Email"}).min(3,{message:"must be at least 3 character"}).max(255,{message:"  max 255 char"}),
//     phone:z
//     .string({required_error:"phone no. is required"}).trim().min(10,{message:"phone no. must be at least 10 character"}).max(10,{
// message:"phone no. not be more than 10 character"
//     }),
//      password:z
//     .string({required_error:"password is required"}).trim().min(8,{message:"password must be at least 8 character"}).max(255,{
// message:"password not be more than 255 character"
//     }),

// })



// module.exports = signupSchema;








const { z } = require("zod");

// Creating an object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 6 characters" })
    .max(1024, "Password can't be greater than 1024 characters"),
});

module.exports = signupSchema; 

     
