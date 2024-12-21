const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  enrolled: [{ type: String }] // Array of student IDs
});

module.exports = mongoose.model('Course', courseSchema);

