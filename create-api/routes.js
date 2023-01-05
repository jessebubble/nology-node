import Router from "express";
import { getTheBoys, getTheBoysById, postTheBoys, deleteTheBoys } from "./containers/theboys-controller.js"

const router = Router();

router.get("/", (req, res) => {
    getTheBoys(req, res);
});

router.get("/:id", (req, res) => {
    getTheBoysById(req, res);
});

router.post("/", (req, res) => {
    postTheBoys(req, res);
});

router.delete("/:id", (req, res) => {
    deleteTheBoys(req, res);
});

export default router;