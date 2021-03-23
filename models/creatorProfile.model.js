const mongoose = require("mongoose");

const creatorSchema = new mongoose.Schema({
  audience: [
    {
      totalReach: Number,
      youtubeReach: Number,
      twitterReach: Number,
      streaming: [
        {
          platform: String,
          reach: Number,
        },
      ],
      age: [
        {
          min: Number,
          max: Number,
        },
      ],
      gender: String,
      country: String,
    },
  ],
  youtube: [
    {
      url: String,
      channelId: String,
      channelStats: [
        {
          title: String,
          description: String,
          avgVideoViews: Number,
          subscribers: Number,
          avgViewsLast15Videos: Number,
          avgViews30Days: Number,
          avatarURL: String,
          bannerURL: String,
          channelCountry: String,
        },
      ],
    },
  ],
  streaming: [
    {
      platform: String,
      url: String,
      platformId: String,
      platformStats: [
        {
          title: String,
          avgViewers: Number,
          avgViews30Days: Number,
          followers: Number,
          totalPlaybacks: Number,
          totalStreams: Number,
        },
      ],
    },
  ],
});

module.exports = creatorSchema;
