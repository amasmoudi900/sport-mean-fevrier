const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/sportMeanFev", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const User = require("./models/user");
app.get("/getAllPlayers", (req, res) => {
  console.log("AM here into get all players");
  let players = [
    {
      id: 1,
      name: "Messi",
      nbr: "10",
      age: 35,
      description: "Best player for 5 times",
      poste: "MID",
    },
    {
      id: 2,
      name: "Xavi",
      nbr: "06",
      age: 35,
      description: "Best player for 5 times",
      poste: "MID",
    },
    {
      id: 3,
      name: "Iniesta",
      nbr: "08",
      age: 35,
      description: "Best player for 5 times",
      poste: "MID",
    },
    {
      id: 4,
      name: "Ronaldo",
      nbr: "07",
      age: 35,
      description: "Best player for 5 times",
      poste: "ATK",
    },
  ];

  res.status(200).json({
    allPlayers: players,
  });
});

app.post("/addPlayer", (req, res) => {
  console.log("Here in post", req.body);
  // Insert into DB
});

app.get("/getPlayerById/:id", (req, res) => {
  console.log("Here in get By ID", req.params.id);
});

app.delete("/deletePlayer/:id", (req, res) => {
  console.log("Delete player by ID", req.params.id);
});

app.put("/editPlayer/:id", (req, res) => {
  console.log("New Player", req.body);
});

app.post("/api/signup", (req, res) => {
  bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      pwd: cryptedPwd,
    });
    user.save().then(
      res.status(200).json({
        message: "User addes successfully",
      })
    );
  });
});

app.post("/api/login", (req, res) => {
  console.log("Here in login", req.body);
  User.findOne({email:req.body.email}).then(
    (data)=>{
      if (!data) {
        res.status(200).json({
          message: '0'
        })
      }
      return bcrypt.compare(req.body.pwd, data.pwd);
    }
  ).then(
    (findedUser)=> {
      console.log('findedUser',findedUser);
      if (!findedUser) {
        res.status(200).json({
          message: '1'
        })
      }
      User.findOne({email: req.body.email}).then(
        (data)=> {
          const user = {
            email: req.body.email,
            firstName: data.firstName,
            lastName: data.lastName,
          }
          console.log('here in 2');
          res.status(200).json({
            message: '2',
            user:user
          });
        });
    });
});
module.exports = app;
