const express = require('express');
const { addStudent, getAllStudents } = require('../controllers/studentsController');
const router = express.Router();

router.post('/add', addStudent);
router.get('/all', getAllStudents);

module.exports = router;
