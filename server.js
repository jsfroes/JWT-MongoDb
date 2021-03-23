require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// pase requests of content-type - application/json
app.use(bodyParser.json());

// pase requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// connect to the DB and create roles collection

const dbConfig = require("./config/db.config");
const Role = require("./models/role.model")

mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "creator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'creator' to roles collection");
      });

      new Role({
        name: "staff",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'executive' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

app.get("/", (req, res) => {
  res.json("Welcome to the Application");
});

// routes
require("./routes/creatorProfile.routes")(app);
require("./routes/user.routes")(app);
require("./routes/auth.routes")(app);
require("./routes/campaign.routes")(app);
require("./routes/clients.routes")(app);

PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});
