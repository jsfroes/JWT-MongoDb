const controller = require("../controllers/clients.controller");

module.exports = function (app) {

  app.post("/api/clients/create", controller.create)

  app.get("/api/clients", controller.findAll);

  app.get("/api/clients/find/:_id", controller.findOne);

  app.patch("/api/clients/update/:_id", controller.update);

  app.delete("/api/clients/delete/:_id", controller.delete);
};
