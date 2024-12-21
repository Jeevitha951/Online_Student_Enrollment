const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  enrolledCourses: [{ type: String }] // Array of course IDs
});

module.exports = mongoose.model('Student', studentSchema);
