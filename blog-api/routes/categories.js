const router = require("express").Router();
const Category = require("../models/Category");

// POST: Create a new category
router.post("/", async (req, res) => {
  try {
    // Create a new Category instance with the provided data
    const newCat = new Category(req.body);

    // Save the new category to the database
    const savedCat = await newCat.save();

    // Respond with the saved category
    res.status(200).json(savedCat);
  } catch (err) {
    // Handle server error
    res.status(500).json(err);
  }
});

// GET: Retrieve all categories
router.get("/", async (req, res) => {
  try {
    // Fetch all categories from the database
    const cats = await Category.find();

    // Respond with the retrieved categories
    res.status(200).json(cats);
  } catch (err) {
    // Handle server error
    res.status(500).json(err);
  }
});

module.exports = router;

// Cleaned up 1/23/2024
