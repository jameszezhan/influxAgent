const express = require("express");
const bodyParser = require('body-parser')
const temperatureCtr = require("./temperatureController");
const temperatureRouter = express.Router();

temperatureRouter.use(bodyParser.json());

// Routes
// Get temperature series
temperatureRouter.get("/list/:limit?/:sensor?", function(req, res){
    temperatureCtr.getList(req, res);
});

/** add a temperature data point */
temperatureRouter.post("/add", function(req, res){
    temperatureCtr.addPoint(req, res);
})


temperatureRouter.get("/", function(req, res){
  res.send("one item")
})

module.exports = temperatureRouter;
