const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

// add the first app.use to the creator route to validate the user and block content content
// add the authentication from the get methods to the creators route

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/creator", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/staff",
    [authJwt.verifyToken, authJwt.isStaff],
    controller.staffBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};