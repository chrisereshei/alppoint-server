const e = require("express");
var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const contactModel = require("../models/contactModel");

/* GET contact listing. */
// router.get("/", function (req, res, next) {
//   res.send("contact works");
// });

/* add contact listing. */
router.post("/add", function (req, res, next) {
  const { name, surname, email, phonenumber, company, message } = req.body;

  let newContact = new contactModel({
    name: name,
    surname: surname,
    company: company,
    email: email,
    phonenumber: phonenumber,
    message: message,
  });

  // let newContact = new contactModel({
  //   name: "John",
  //   surname: "John",
  //   company: "John",
  //   email: "John@ee.com",
  //   phonenumber: "John",
  //   message: "John",
  // });
  newContact.save(function (err, newContact) {
    if (err) res.send(err);
    else res.send({ message: "user added", studentObj: newContact });
  });
});

module.exports = router;
