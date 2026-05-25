const express = require("express");
const path = require("path");

const app = express();

// serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// serve images correctly
app.use("/images", express.static(path.join(__dirname, "../images")));

app.listen(5000, () => {
    console.log("Server Running On http://localhost:5000");
});