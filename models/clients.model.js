const mongoose = require("mongoose");
const campaignSchema = require("./campaign.model");

const Client = mongoose.model(
  "Client",
  new mongoose.Schema({
    companyName: String,
    contactName: String,
    contactEmail: String,
    companyURL: String,
    clientOwner: String,
    clientCampaigns: [
      {
        title: String,
      },
    ],
  })
);

module.exports = Client;
