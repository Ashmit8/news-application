
const validate = (schema) => async (req, res, next) => {
  try {
    const errors = [];

    if (!req.body.username || typeof req.body.username !== 'string') {
      errors.push('Invalid or missing username');
    }

    

    if (!req.body.email || typeof req.body.email !== 'string') {
      errors.push('Invalid or missing email');
    }

    if (!req.body.phone || typeof req.body.phone !== 'string') {
      errors.push('Invalid or missing phone number');
    }

    if (!req.body.password || typeof req.body.password !== 'string') {s
      errors.push('Invalid or missing password');
    }
    if (errors.length > 0) {
      throw errors;
    }
    return next();
  } catch (err) {
    console.error("Error parsing body:", err); // Log the error
    const status = 400;
    const message = err.toString();
    const extraDetails = err.issues;

    const error = {
      status,
      message,
      extraDetails,
    };

    next(error); // Pass the error object to next()
  }
};

module.exports = validate;