const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const path = require('path');

// This tells Node to look one folder up (in /var/www/html/) for your files
app.use(express.static(path.join(__dirname, '../')));

// Route to serve the contact page specifically
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../contact.html'));
});

// RDS connection
const db = mysql.createConnection({
  host: "database-1.cytkqs8kil00.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "24P35A0541",
  database: "hospital"
});

db.connect(err => {
  if (err) {
    console.log("DB error:", err);
  } else {
    console.log("Connected to RDS");
  }
});

app.post('/contact', (req, res) => {
    console.log("--- New Request Received ---");
    console.log("Body Content:", req.body); // If this shows {} or undefined, Step 1 is the fix.

    const { name, email, message } = req.body;
    
    // Check if variables are actually populated
    if (!name || !email || !message) {
        console.log("Error: Missing form fields in request");
        return res.status(400).send("Missing fields");
    }

    const sql = "INSERT INTO details (name, email, message) VALUES (?, ?, ?)";
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error("DATABASE ERROR:", err.message);
            return res.status(500).send("DB Error");
        }
        console.log("SUCCESS! Row Inserted ID:", result.insertId);
        res.status(200).send("Data saved to RDS");
    });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});