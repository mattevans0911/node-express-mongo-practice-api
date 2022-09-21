const express = require("express");

const router = express.Router();

module.exports = router;

//Post Method
router.post("/post", (req, res) => {
  res.send("Post API");
});

//Router takes two arguments, the route and the callback
//The callback holds the request and response properties
//use res for sending responses
//use req for receiving requests
//res.send is printing the respective api message

//Get all Method
router.get("/getAll", (req, res) => {
  res.send("Get All API");
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send(req.params.id);
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});
