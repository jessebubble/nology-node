const studentsArray = ["elton", "rocketman", "john", "eltonjohn"];

export const getStudents = (req, res) => {
    res.status(200).send({
        message: "Here are the students",
        students: studentsArray,
    });
}

export const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    if (id > studentsArray.length) {
        res.status(404).send("Student not found");
    }
    else {
        res.status(200).send({
            student: studentsArray[id],
        });
    }   
}

export const addStudent = (req, res) => {
    studentsArray.push(req.body.student);
    res.status(201).send("Student added successfully");
}

export const deleteStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    if (id > studentsArray.length) {
        res.status(404).send("Student not found");
    } else {
        studentsArray.splice(id, 1);
        res.status(200).send("Student deleted successfully");
    }
}