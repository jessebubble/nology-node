import { Student } from "../models/student.js";

export const getStudents = (req, res) => {
    Student.findAll()
        .then((students) => {
            res.status(200).send(students);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Something went wrong");
        });
}
export const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    Student.findByPk(id)
        .then((student) => {
            res.status(200).send(student);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Something went wrong");
        });
}

export const addStudent = (req, res) => {
    Student.create({
        name: req.body.name,
        email: req.body.email,
    })
        .then(() => {
            res.status(201).send({
                message: "Student added successfully",
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Something went wrong");
        });
}

export const deleteStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    Student.findByPk(id)
        .then((student) => {
            student.destroy({
                where: {id: id},
            });
        })
        .then(() => {
            res.status(200).send("Student deleted successfully");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Something went wrong");
        });
}