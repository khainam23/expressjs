const mongoose = require("mongoose");
const Course = require("../models/Course");
const {
  mongooseToObject,
  multipleMongooseToObj,
} = require("../../utils/mongoose");

class SearchController {
  // GET /search
  async index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseToObj(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new SearchController();
