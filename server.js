const express = require("express");
const cors = require("cors");
const db = require("./db");
const staffRoutes = require("./routes/staff");

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/staff", staffRoutes);

app.get("/", (req, res) => {
  res.send("FarmLink Backend is Running! 🚀");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
