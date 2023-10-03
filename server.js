const express = require("express");

const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/api/contacts",(req,res) => {
  res.send("Get All Contacts");
});

app.get("/api/contacts",(req,res) => {
  res.json({message: "Get All Contacts"});
});

app.listen(port, () => {
  console.log(`Sever started on port ${port}`);
});


