import express from "express";
import bodyParser from "body-parser";
import router from "./routes.js";
import { sequelize } from "./db/index.js";

const app = express();
const port = 3010;

sequelize.sync()
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    });

app.listen(3010, (req, res) => {
    console.log(`Server is running on port ${port}`);
});

app.get("/api", (req, res) => {
    res.send("Hello World, Welcome to server side programming");
});

app.get("/students", (req, res) => {
    res.send("Hello mate, Welcome to server side programming with express and nodejs");
});

app.use(bodyParser.json());

app.use("/api/students", router);