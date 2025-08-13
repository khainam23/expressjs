const mongoose = require("mongoose");
const Course = require("../models/Course");

class SearchController {
  // GET /search
  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new SearchController();
