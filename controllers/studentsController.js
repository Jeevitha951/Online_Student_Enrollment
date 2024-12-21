const Student = require('../models/Student');

exports.addStudent = async (req, res) => {
  try {
    const { studentId, name } = req.body;
    const student = new Student({ studentId, name });
    await student.save();
    res.json({ message: 'Student added successfully.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ students });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

