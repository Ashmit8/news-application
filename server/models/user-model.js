

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isadmin: {
        type: Boolean,
        default: false
    }

})

userSchema.methods.validateUser = function () {
    const errors = [];

    if (!this.username || typeof this.username !== 'string') {
        errors.push('Invalid or missing username');
    }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!this.email || !emailRegex.test(this.email)) {
    //     errors.push('Invalid or missing email');
    // }

    if (!this.email || typeof this.email !== 'string') {
        errors.push('Invalid or missing email');
    }

    if (!this.phone || typeof this.phone !== 'number') {
        errors.push('Invalid or missing phone number');
    }

    if (!this.password || typeof this.password !== 'string') {
        errors.push('Invalid or missing password');
    }

    return errors.length > 0 ? errors : null;
};


userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
        next()
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    }
    catch (error) {
        next(error)
    }
})


//compare the password
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
}


// jwt
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            username: this.username
        },
            process.env.JWT_SECRET_KEY, {
            expiresIn: '30d',
        }
        );

    }
    catch (error) {
        console.error(error);

    }
}


const User = new mongoose.model("users", userSchema);

module.exports = User;


