const searchRouter = require("./search");
const homeRouter = require("./home");

const routeObjs = {
  "/": homeRouter,
  "/search": searchRouter,
};

function routes(app) {
  Object.entries(routeObjs).forEach(([path, router]) => {
    app.use(path, router);
  });
}

module.exports = routes;
