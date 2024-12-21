const Course = require('../models/Course');
const Student = require('../models/Student');

exports.addCourse = async (req, res) => {
  try {
    const { courseId, name, capacity } = req.body;
    const course = new Course({ courseId, name, capacity });
    await course.save();
    res.json({ message: 'Course added successfully.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json({ courses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.enrollStudent = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    // Find the student and course
    const student = await Student.findOne({ studentId });
    const course = await Course.findOne({ courseId });

    if (!student || !course) {
      return res.status(404).json({ error: 'Student or Course not found' });
    }

    // Check if the course is already full
    if (course.enrolled.length >= course.capacity) {
      return res.status(400).json({ error: 'Course is full' });
    }

    // Enroll the student in the course
    if (!student.enrolledCourses.includes(courseId)) {
      student.enrolledCourses.push(courseId);
      await student.save();
    }

    // Enroll the course with the student
    if (!course.enrolled.includes(studentId)) {
      course.enrolled.push(studentId);
      await course.save();
    }

    res.json({ message: 'Enrollment successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchCourses = async (req, res) => {
  try {
    const { query } = req.query;
    const courses = await Course.find({ name: { $regex: query, $options: 'i' } });
    res.json({ results: courses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




  