
// Require mongoose
console.log("what up from user...");
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var userSchema = new Schema({

    // date is just a string
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    bucket: {
        type: String,
        required: false
    },
    region: {
        type: String,
        required: true
    }
});

// Create the Note model using the noteSchema
var User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;