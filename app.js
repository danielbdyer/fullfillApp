const express = require("express");
const models = require("./models");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

var currentshoppinglists;

app.engine("mustache", mustacheExpress());

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", "./views");
app.set("view engine", "mustache");

app.get("/posts", function(req, res) {
  // get all the posts from the database using sequelize
  models.post
    .findAll({
      include: [
        {
          model: models.tag,
          as: "tags"
        }
      ]
    })
    .then(function(posts) {
      console.log(posts);
      res.render("posts", { posts: posts });
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.post("/shoppinglists", function(req, res) {
  let storename = req.body.storename;
  let street = req.body.street;
  let city = req.body.city;
  let state = req.body.state;
  let zip = req.body.zip;

  models.shoppinglist
    .create({
      storename: storename,
      street: street,
      city: city,
      state: state,
      zip: zip
    })
    .then(function() {
      res.redirect("back");
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.post("/groceryitems/:id", function(req, res) {
  let itemname = req.body.itemname;
  let quantity = req.body.quantity;
  let price = req.body.price;
  let shoppinglistid = req.params.id;

  models.groceryitem
    .create({
      itemname: itemname,
      quantity: quantity,
      price: price,
      shoppinglistid: shoppinglistid
    })
    .then(function() {
      res.redirect("back");
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.get("/api/stores", function(req, res) {
  db.any("SELECT * FROM shoppinglists").then(function(data) {
    res.status(200).json({ status: "success", items: data });
  });
});

app.listen(3000, function() {
  console.log("node server has started");
});
