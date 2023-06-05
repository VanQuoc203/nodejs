const express = require('express');
const router = express.Router();
const CourseController = require('../controller/CouresController');
router.get('/create', CourseController.create);
router.post('/store', CourseController.store);
router.get('/:id/edit', CourseController.edit);
router.put('/:id', CourseController.update);
router.get('/:slug', CourseController.show);

module.exports = router;