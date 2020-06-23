const express = require("express");
const router = express.Router();
const StudentController = require("../controller/StudentController");

router.post("/student", StudentController.createStudent);

router.get("/student/:id", StudentController.getStudent);

router.delete("/student/:id", StudentController.deleteStudent);

router.put("/student", StudentController.editStudent);
module.exports = router;
