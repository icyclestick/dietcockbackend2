const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const userName = req.body.userName;
  const id = req.body.id;
  const type = req.body.type;
  const image = req.body.image;

  const newUser = new User({
    id,
    type,
    userName,
    image,
  });

  newUser
    .save()
    .then(() => res.status(200).json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
