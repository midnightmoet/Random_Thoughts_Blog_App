// tested
const mongoose = require("mongoose");

// Define the User Schema
const UserSchema = new mongoose.Schema(
  {
    // Username is a required, unique string
    username: {
      type: String,
      required: true,
      unique: true,
    },
    // Email is a required, unique string
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // Password is a required string
    password: {
      type: String,
      required: true,
    },
    // Profile picture is an optional string with a default value
    profilePicture: {
      type: String,
      default: "",
    },
  },
  // Enable timestamps for createdAt and updatedAt fields
  { timestamps: true }
);

// Create and export the User model based on the UserSchema
module.exports = mongoose.model("User", UserSchema);


// Cleaned up 1/23/2024