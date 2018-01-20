const express = require("express");
const models = require("./models");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const path = require("path");
const promise = require('bluebird');
const app = express();

var currentshoppinglists;

app.engine("mustache", mustacheExpress());


app.set("views", "./views");
app.set("view engine", "mustache");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

//sign up user and add to user table
app.post('/signup',function(req,res){
  var email = req.body.email;
  var password = req.body.password;
  var username = email.split('@',1)[0];

  const newUser = models.user.create({
    email:email,
    password:password,
    username:username
  }).then(function(newUser){
    console.log(newUser);
  }).then(res.redirect('/home'));
})

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

//home page for local host is the index.mustache page
app.get('/home', (req, res) => res.render('index'))

//settings page
app.get('/settings', (req, res) => res.render('settings'))

app.get("/api/stores", function(req, res) {
  db.any("SELECT * FROM shoppinglists").then(function(data) {
    res.status(200).json({ status: "success", items: data });
  });
});

app.listen(3000, function() {
  console.log("node server has started");
});
