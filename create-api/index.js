import express from "express";
import bodyParser from "body-parser";
import router from "./routes.js";

const app = express();
const port = 3020;

app.listen(3020, (req, res) => {
    console.log(`Server is running on port ${port}`);
});

app.get("/api", (req, res) => {
    res.send("Hello World, Welcome to server side programming");
});

app.get("/theboys", (req, res) => {
    res.send("Hello mate, Welcome to server side programming with express and nodejs");
});

app.use(bodyParser.json());

app.use("/api/theboys", router);