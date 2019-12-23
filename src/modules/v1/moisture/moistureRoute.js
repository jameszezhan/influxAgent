const express = require("express");
const bodyParser = require('body-parser')
const moistureCtr = require("./moistureController");
const moistureRouter = express.Router();

moistureRouter.use(bodyParser.json());

// Routes
// Get moisture series
moistureRouter.get("/list/:limit?/:sensor?", function(req, res){
    moistureCtr.getList(req, res);
});

/** add a moisture data point */
moistureRouter.post("/add", function(req, res){
    moistureCtr.addPoint(req, res);
})


moistureRouter.get("/", function(req, res){
  res.send("one item")
})

module.exports = moistureRouter;
