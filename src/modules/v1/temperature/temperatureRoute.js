const express = require("express");

const temperatureCtr = require("./temperatureController");

const temperatureRouter = express.Router();

// Routes
// Get temperature series
temperatureRouter.get("/list", function(req, res){
  temperatureCtr.getList();
  res.send("series of items");
});

temperatureRouter.get("/", function(req, res){
  res.send("one item")
})

module.exports = temperatureRouter;
