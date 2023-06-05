const express = require('express');
const router = express.Router();
const MeController = require('../controller/MeController');
router.get('/store-courses', MeController.storedCourse);
module.exports = router;