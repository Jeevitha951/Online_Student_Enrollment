const express = require('express');
const { addCourse, getAllCourses, enrollStudent, searchCourses } = require('../controllers/coursesController');
const router = express.Router();

router.post('/add', addCourse);
router.get('/all', getAllCourses);
router.post('/enroll', enrollStudent);
router.get('/search', searchCourses); // Route to search courses by name

module.exports = router;





