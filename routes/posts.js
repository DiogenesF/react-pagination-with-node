const express = require("express");
const router = express.Router();
const axios = require("axios");
const mongoose = require("mongoose");
const Posts = require("../models/Posts");

const db = mongoose.connection;
db.once("open", async () => {
  if ((await Posts.countDocuments().exec()) > 0) {
    console.log("Data is already there!");
    return;
  }
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/");
  const titles = res.data.map((each) => {
    return { title: each.title };
  });
  Posts.insertMany(titles, function (err, docs) {
    if (err) console.log(err.message);
    console.log("Data successfully loaded!");
  });
});

router.get("/", async (req, res) => {
  try {
    const page = (req.query.page - 1) * req.query.limit;
    const posts = await Posts.find()
      .limit(parseInt(req.query.limit))
      .skip(page)
      .exec();

    res.json(posts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
