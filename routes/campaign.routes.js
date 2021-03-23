const controller = require("../controllers/campaing.controller");

module.exports = function (app) {

  app.post("/api/campaigns/create", controller.create)

  app.get("/api/campaigns", controller.findAll);

  app.get("/api/campaigns/find/:_id", controller.findOne);

  app.patch("/api/campaigns/update/:_id", controller.update);

  app.delete("/api/campaigns/delete/:_id", controller.delete);
};
