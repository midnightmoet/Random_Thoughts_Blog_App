const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER endpoint
router.post(
  "/register",
  [
    // Validation checks for username, email, and password
    body("username").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Return validation errors if any
        return res.status(400).json({ errors: errors.array() });
      }

      // Generate salt and hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);

      // Create a new User instance with the provided data
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
      });

      // Save the new user to the database
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      // Handle server error
      res.status(500).json({ error: err.message });
    }
  }
);

// LOGIN endpoint
router.post(
  "/login",
  [
    // Validation checks for username and password
    body("username").notEmpty(),
    body("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Return validation errors if any
        return res.status(400).json({ errors: errors.array() });
      }

      // Find user by username
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        // Return error if username is not found
        return res.status(400).json({ error: "Invalid username" });
      }

      // Compare provided password with hashed password in the database
      const validated = await bcrypt.compare(req.body.password, user.password);
      if (!validated) {
        // Return error if password is invalid
        return res.status(400).json({ error: "Invalid password" });
      }

      // Exclude password field from the response
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      // Handle server error
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;

// Cleaned up 1/23/2024