const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());

//to access req.body object we need
app.use(express.json());

//ROUTES

// create a form
app.post("/tictactoe", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newDetails = await pool.query(
      `INSERT INTO tictactoe_data (username, email, password) VALUES ('${username}', '${email}', '${password}') RETURNING *`
    );
    res.json(newDetails.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// get all details
app.get("/tictactoe", async (req, res) => {
  try {
    const jsonData = await pool.query("SELECT * FROM tictactoe_data");
    res.json(jsonData.rows);
  } catch (error) {
    console.error(error.message);
  }
});
// get a detail

app.get("/tictactoe/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const detail = await pool.query(
      "SELECT username, email, password from tictactoe_data WHERE tid = $1",
      [id]
    );
    res.json(detail.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5001, () => {
  console.log("server has started on port 5001");
});
