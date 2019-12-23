const express = require("express");

const moistureCtr = require("./moistureController");

const moistureRouter = express.Router();

// Routes
// Get moisture series
moistureRouter.get("/list", function(req, res){
    moistureCtr.getList(req, res);
});

moistureRouter.post("/add", function(req, res){
    moistureCtr.addPoint(req, res);
})


moistureRouter.get("/", function(req, res){
  res.send("one item")
})

module.exports = moistureRouter;
