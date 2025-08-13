module.exports = {
  multipleMongooseToObj: function (mongooseArray) {
    return mongooseArray.map(function (item) {
      return item.toObject();
    });
  },
  mongooseToObject: function (mongoose) {
    return mongoose.toObject();
  },
};
