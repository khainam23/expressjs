const Course = require("../models/Course");
const {
  mongooseToObject,
  multipleMongooseToObj,
} = require("../../utils/mongoose");

class CourseController {
  async index(req, res, next) {
    try {
      const course = await Course.findById(req.params.slug);
      res.render("detail", { course: mongooseToObject(course) });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CourseController();
