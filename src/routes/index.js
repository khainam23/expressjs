const searchRouter = require("./search");
const homeRouter = require("./home");
const detailRouter = require("./detail");

const routeObjs = {
  "/": homeRouter,
  "/search": searchRouter,
  "/detail": detailRouter,
};

function routes(app) {
  Object.entries(routeObjs).forEach(([path, router]) => {
    app.use(path, router);
  });
}

module.exports = routes;
