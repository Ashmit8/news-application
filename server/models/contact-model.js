const mongoose = require('mongoose');

const Contact  = {
  createContact: async ({ message, email, username }) => {
    try {
      console.log({ message, email, username })
      const ContactSchema = new mongoose.Schema({
        message: String,
        email: String,
        username: String
      });
      const ContactModel = mongoose.model('contacts', ContactSchema);

      const newContact = new ContactModel({ message, email, username });
      await newContact.save();
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = Contact;