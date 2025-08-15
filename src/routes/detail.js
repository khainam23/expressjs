const express = require('express');
const router = express.Router();
const detailController = require('../app/controllers/CourseController');
const homeController = require('../app/controllers/HomeController');

router.get('/:slug', detailController.index);
router.get('/', homeController.index);


module.exports = router;