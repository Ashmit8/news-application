// const Contact = require("../models/contact-model");

// const contactForm = async (req, res) => {
//   try {
//     const response = req.body;
    
//     await Contact.create(response);
//     return res.status(200).json({ message: "message send successfully" });
//   } catch (error) {
//     return res.status(500).json({ message: "message not delivered" });
//   }
// };

// module.exports = contactForm;


// const Contact = require("../models/contact-model");

// const contactForm = async (req, res) => {
//   try {
//     const response = req.body;
//     console.log("Request body:", response);

//     await Contact.create(response);
//     return res.status(200).json({ message: "message send successfully" });
//   } catch (error) {
//     console.error("Error creating contact:", error); // Log the error
//     return res.status(500).json({ message: "message not delivered",error:error.message });
//   }
// };

// module.exports = contactForm;



// const Contact = require("../models/contact-model");

// const contactForm = async (req, res) => {
//   try {
//     const { message, email, username } = req.body;

//     if (!message || !email || !username) {
//       return res.status(400).json({ message: "All fields are required: message, email, username" });
//     }

//     console.log("Request body:", req.body);

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
    if (!message || !email || !username) {
      console.log("Missing fields:", { message, email, username });
      return res.status(400).json({ message: "All fields are required: message, email, username" });
    }

    await Contact.create({ message, email, username });
    return res.status(200).json({ message: "message send successfully" });
  } catch (error) {
    console.error("Error creating contact:", error); // Log the error
    return res.status(500).json({ message: "message not delivered", error: error.message });
  }
};

module.exports = contactForm;