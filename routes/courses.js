const express = require('express');
const router = express.Router();
const CourseController = require('../controller/CouresController');
router.use('/:slug', CourseController.show);


module.exports = router;