const Student = require("../model/student");

const getStudent = async (req, res) => {
  try {
    const studId = req.params.id;
    const currentStudent = await Student.findById(studId);
    const message = currentStudent ? "Student found" : "Student not found";
    return res.json({
      done: true,
      student: currentStudent,
      message
    });
  } catch (err) {
    console.log(err);
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, age, std } = req.body;
    const currentStudent = await new Student({ name, age, std });
    await currentStudent.save();
    return res.send({
      student: currentStudent,
      done: true,
      message: "Student Created"
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const studId = req.params.id;
    await Student.findByIdAndDelete(studId);
    return res.send({
      done: true,
      message: "Student Deleted"
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getStudent, createStudent, deleteStudent };
