const express = require("express");
const app = express(); // making an express app
app.use(express.static("public"));
