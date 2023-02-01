const express = require("express");
const router = express.Router();
const Mahasiswa = require("../models/mahasiswa");

router.get("/mahasiswa", function (req, res) {
  Mahasiswa.find({}).then(function (result) {
    res.send(result);
  });
});

router.get("/mahasiswa/:id", function (req, res) {
  Mahasiswa.findOne({ _id: req.params.id }).then(function (result) {
    res.send(result);
  });
});

router.post("/mahasiswa", function (req, res, next) {
  //create & save to mongodb
  Mahasiswa.create(req.body)
    .then(function (result) {
      res.send(result);
    })
    .catch(next);
});

router.put("/mahasiswa/:id", function (req, res) {
  Mahasiswa.findOneAndUpdate({ _id: req.params.id }, req.body).then(
    function () {
      Mahasiswa.findOne({ _id: req.params.id }).then(function (result) {
        res.send(result);
      });
    }
  );
});

router.delete("/mahasiswa/:id", function (req, res) {
  Mahasiswa.findOneAndRemove({ _id: req.params.id }).then(function (result) {
    res.send(result);
  });
});

module.exports = router;
