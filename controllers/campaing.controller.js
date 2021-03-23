const Campaign = require("../models/campaign.model");
const User = require("../models/user.model");

// create a new campaign
exports.create = (req, res) => {
  campaign = new Campaign({
    title: req.body.title,
    company: req.body.company,
  })

  campaign.save(function(err) {
    if(!err){
      return res.json("campaign created")
    } else {
      return res.json("something went wrong! " + err)
    }
  })
}

// find all Campaigns
exports.findAll = (req, res) => {
  Campaign.find({})
    .then((campaign) =>
      res.status(200).send({
        campaign,
      })
    )
    .catch((err) => res.send({ message: "something went wrong! " + err }));
};

// find one Campaign
exports.findOne = (req, res) => {
  Campaign.findOne({ _id: req.params._id })
    .then((campaign) =>
      res.status(200).send({
        campaign,
      })
    )
    .catch((err) => res.send({ message: "something went wrong! " + err }));
};

// Update Campaign
exports.update = (req, res) => {
  Campaign.updateOne({ _id: req.params._id }, { $set: req.body }, function (err) {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Campaign was updated successfully! " });
  });
};

// delete Campaign
exports.delete = (req, res) => {
  Campaign.findOneAndDelete({ _id: req.params._id })
    .then(() => res.status(200).send({ message: "Campaign deleted! " }))
    .catch((err) => res.send({ message: "something went wrong! " + err }));
};
