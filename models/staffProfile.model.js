const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
    profile: [
    {
      fName: String,
      lName: String,
      position: String,
      avatarURL: String,
      bannerURL: String,
    },
  ],
  campaigns: {
    name: String,
  },
});

module.exports = staffSchema;
