const Creator= require("../models/creatorProfile.model");
const User = require("../models/user.model");

exports.findAllCreators = (req, res) => {
  User.find({})
    .then((creator) =>
      res.status(200).send({
        creator,
      })
    )
    .catch((err) => res.send({ message: "something went wrong! " + err }));
};

exports.findOneCreator = (req, res) => {
  User.findOne({ username: req.params.username })
    .then((creator) =>
      res.status(200).send({
        creator,
      })
    )
    .catch((err) => res.send({ message: "something went wrong! " + err }));
};

exports.updateCreatorProfile = (req, res) => {
  User.updateOne(
    { username: req.params.username  },
    { $set: req.body },
    function (err) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send({ message: "Creator profile was updated successfully! " });
    }
  );
};

exports.deleteCreator = (req, res) => {
  User.findOneAndDelete({ username: req.params.username })
    .then(() => res.status(200).send({ message: "User deleted! " }))
    .catch((err) => res.send({ message: "something went wrong! " + err }));
};
