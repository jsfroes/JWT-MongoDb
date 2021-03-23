const creatorSchema = require("./creatorProfile.model");
const staffSchema = require("./staffProfile.model");

const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    creatorProfile: creatorSchema,
    staffProfile: staffSchema,
  })
);

module.exports = User;
