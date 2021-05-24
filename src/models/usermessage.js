const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        minlength: 3
    },
    lastName: {
        type: String,
        require: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email id");
            }
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 9
    }
});

// we need a collection
const User = mongoose.model("User", userSchema);


module.exports = User;