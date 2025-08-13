const express = require('express');
const router = express.Router();
const searchController = require('../app/controllers/SearchController');

router.get('/', searchController.index);

router.post('/', (req, res) => res.send("Search"));

module.exports = router;