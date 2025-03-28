const express = require("express");
const db = require("../db");

const router = express.Router();

router.post("/register", (req, res) => {
  const { FirstName, LastName, Email, Contact, Address, NIC, Gender, AccNumber, Location, Acres, Compost, Harvest } = req.body;

  if (!FirstName || !LastName || !Email || !Contact || !Address || !NIC || !Gender || !AccNumber || !Location || Acres === undefined || Compost === undefined || Harvest === undefined) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  const sql = `INSERT INTO Farmer (FirstName, LastName, Email, Contact, Address, NIC, Gender, AccNumber, Location, Acres, Compost, Harvest) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [FirstName, LastName, Email, Contact, Address, NIC, Gender, AccNumber, Location, Acres, Compost, Harvest], (err, result) => {
    if (err) {
      console.error("Error inserting Farmer:", err);
      return res.status(500).json({ error: "Database error!" });
    }
    res.status(201).json({ message: "Farmer registered successfully!", FarmerID: result.insertId });
  });
});

module.exports = router;