const Client = require("../models/clients.model");


// create a new client
exports.create = (req, res) => {
  client = new Client({
    companyName: req.body.companyName,
    contactName: req.body.contactName,
    contactEmail: req.body.contactEmail,
    companyUrl: req.body.companyUrl,
    clientOwner: req.body.clientOwner
  })

  client.save(function(err) {
    if(!err){
      return res.json("client created")
    } else {
      return res.json("something went wrong! " + err)
    }
  })
}

// find all clients
exports.findAll = (req, res) => {
  Client.find({})
    .then((client) =>
      res.status(200).send({
        client,
      })
    )
    .catch((err) => res.send({ message: "something went wrong! " + err }));
};

// find one client
exports.findOne = (req, res) => {
  Client.findOne({ _id: req.params._id })
    .then((client) =>
      res.status(200).send({
        client,
      })
    )
    .catch((err) => res.send({ message: "something went wrong! " + err }));
};

// Update client
exports.update = (req, res) => {
  Client.updateOne({ _id: req.params._id }, { $set: req.body }, function (err) {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "client was updated successfully! " });
  });
};

// delete client
exports.delete = (req, res) => {
  Client.findOneAndDelete({ _id: req.params._id })
    .then(() => res.status(200).send({ message: "client deleted! " }))
    .catch((err) => res.send({ message: "something went wrong! " + err }));
};
