

// // module.exports = Contact;
// const { Schema, model } = require("mongoose");  
// const contactSchema = new Schema({ 
// username: { type: String, required: true }, 
// email: { type: String, required: true },  
//  message: { type: String, required: true }, 
// }); 
//  // create a new collections(Model) 
// const Contact = new model("Contact", contactSchema); 


// module.exports = Contact;  // export the model


// const Contact = require("../models/contact-model");

// const contactForm = async (req, res) => {
//   try {
//     const { message, email, username } = req.body;

//     // Log the request body to ensure it contains the expected fields
//     console.log("Request body:", req.body);

//     // Check if any of the required fields are missing
//     if (!message || !email || !username) {
//       console.log("Missing fields:", { message, email, username });
//       return res.status(400).json({ message: "All fields are required: message, email, username" });
//     }

//     await Contact.create({ message, email, username });
//     return res.status(200).json({ message: "message send successfully" });
//   } catch (error) {
//     console.error("Error creating contact:", error); // Log the error
//     return res.status(500).json({ message: "message not delivered", error: error.message });
//   }
// };

// module.exports = contactForm;


const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const { message, email, username } = req.body;

    // Log the request body to ensure it contains the expected fields
    console.log("Request body:", req.body);

    // Check if any of the required fields are missing
    // if (!message || !email || !username) {
    //   console.log("Missing fields:", { message, email, username });
    //   return res.status(400).json({ message: "All fields are required: message, email, username" });
    // }

    await Contact.create({ message, email, username });
    return res.status(200).json({ message: "message send successfully" });
  } catch (error) {
    console.error("Error creating contact:", error); // Log the error
    return res.status(500).json({ message: "message not delivered", error: error.message });
  }
};

module.exports = contactForm;