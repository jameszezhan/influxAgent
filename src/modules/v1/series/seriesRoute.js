const express = require("express");

const seriesCtr = require("./seriesController");

const seriesRouter = express.Router();

// Routes
// Get series series
seriesRouter.get("/list", function(req, res){
  seriesCtr.getList(req, res);
});

seriesRouter.get("/", function(req, res){
  res.send("one item")
})

module.exports = seriesRouter;
