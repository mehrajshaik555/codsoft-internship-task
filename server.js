const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const PORT = 3000;

const DATA_FILE = "data.json";

function loadData() {

    if (!fs.existsSync(DATA_FILE)) {

        fs.writeFileSync(
            DATA_FILE,
            JSON.stringify({
                users: [],
                quizzes: []
            }, null, 2)
        );

    }

    return JSON.parse(
        fs.readFileSync(DATA_FILE)
    );

}

function saveData(data) {

    fs.writeFileSync(
        DATA_FILE,
        JSON.stringify(data, null, 2)
    );

}

app.post("/register", (req, res) => {

    const { username, password } = req.body;

    const data = loadData();

    const userExists = data.users.find(
        user => user.username === username
    );

    if (userExists) {

        return res.json({
            success: false,
            message: "User already exists"
        });

    }

    data.users.push({
        username,
        password
    });

    saveData(data);

    res.json({
        success: true,
        message: "Registration successful"
    });

});

app.post("/login", (req, res) => {

    const { username, password } = req.body;

    const data = loadData();

    const user = data.users.find(
        user =>
            user.username === username &&
            user.password === password
    );

    if (!user) {

        return res.json({
            success: false,
            message: "Invalid login"
        });

    }

    res.json({
        success: true,
        message: "Login successful"
    });

});

app.get("/quizzes", (req, res) => {

    const data = loadData();

    res.json(data.quizzes);

});

app.post("/createQuiz", (req, res) => {

    const quiz = req.body;

    const data = loadData();

    data.quizzes.push(quiz);

    saveData(data);

    res.json({
        success: true,
        message: "Quiz created"
    });

});

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});