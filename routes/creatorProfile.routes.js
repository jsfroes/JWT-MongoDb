const controller = require("../controllers/creatorProfile.controller");

module.exports = function(app) {

    app.get('/api/creators', controller.findAllCreators)

    app.get('/api/creators/find/:username',
    controller.findOneCreator)

    app.patch('/api/creators/update/:username',
    controller.updateCreatorProfile)

    app.delete('/api/creators/delete/:username', controller.deleteCreator)

};