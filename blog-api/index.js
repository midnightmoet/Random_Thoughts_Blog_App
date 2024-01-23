// Import required modules
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

// Load environment variables
dotenv.config();

// Middleware for parsing JSON
app.use(express.json());

// Serve static images from the 'images' directory
app.use("/images", express.static(path.join(__dirname, "/images")));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Note: These two options threw errors that wouldn't clear.
    // useCreateIndex: true,
    // useFindAndModify: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

// API endpoint for file upload
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

// Define routes for authentication, users, posts, and categories
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// Start the server and listen on port 2000
app.listen("2000", () => {
  console.log("Backend is running.");
});


// Updated 1/23/2024