var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers/:name", function(req, res) {
  console.log(req.body);
  burger.create('burger_name', req.body.name, function(result) {
    if ( result ) {
      return res.status(200).end();
    } else {
      res.status(404).end();
    }
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "ID = " + req.params.id;
  burger.update(req.body.devoured, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
