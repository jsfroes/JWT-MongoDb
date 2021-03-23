const mongoose = require("mongoose");

const Campaign = mongoose.model(
  "Campaign",
  new mongoose.Schema({
    title: String,
    audience: [
      {
        age: [
          {
            min: Number,
            max: Number,
          },
        ],
        gender: String,
        targetCountry: [String],
      },
    ],
    platform: [
      {
        youTube: [
          {
            inUse: Boolean,
            avgViews: Number,
            subscribers: Number,
            cpm: Number,
            budget: Number,
          },
        ],
        stream: [
          {
            inUse: Boolean,
            avgViews: Number,
            followers: Number,
            cpm: Number,
            budget: Number,
          },
        ],
      },
    ],
    deliverables: [
      {
        url: String,
        description: String,
      },
    ],
    status: {
      active: Boolean,
      approval: Boolean,
      pending: Boolean,
      finalized: Boolean,
      review: Boolean,
    },
    creators: [
      {
        accepted: [
          {
            name: String,
          },
        ],
        pending: [
          {
            name: String,
          },
        ],
        declined: [
          {
            name: String,
          },
        ],
      },
    ],
    company: String,
  })
);

module.exports = Campaign;
