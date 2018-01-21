const express = require("express");
const models = require("./models");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const path = require("path");
const promise = require('bluebird');
const methodOverride = require('method-override')
const session = require('express-session')
const app = express();

var currentshoppinglists;

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.use(methodOverride('_method'))
app.set("view engine", "mustache");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//register the session with its user id
app.use(session({
  secret:'cute dogs',
  resave: false,
  saveUninitialized: true,
}));


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

//testing the query
// let emailAddressLogin = "mak@dog.com"
// let password34 = "dogs"
// models.user.findOne({
//
//   where:{
//       email : emailAddressLogin,
//       password : password34
//   }
// }).then(function(user){
//   console.log(user.password);
// })

//log in the user
app.post('/login', (req,res) => {
  var user = models.user.findOne({
    where:{
      email : req.body.email,
      password : req.body.password
    }
  }).then(user => {
    if(user.password == req.body.password) {
      req.session.email = req.body.email;
      req.session.authenticated = true;
      res.redirect('/home');
    } else {
      res.send('Login attempt failed')
    }
  })
})

//login the user
// app.post('/login',function(req,res){
//   req.session.email = req.body.email;
//   req.session.password  = req.body.password;
//   res.end('done')
// })

//to check if user is logged in
app.get('/logged',function(req,res){
  if(req.session.email){
    res.write("<h1>User Logged In</h1><a href='/logout'>Logout</a>");
    res.end();
  } else{
    res.write("<h1>User not logged in</h1><a href='/home'>Main Page</a>");
    res.end();
  }
})

// logout the user
app.get('/logout',function(req,res){
  req.session.destroy(function(err){
    if(err){
      res.negotiate(err);
    }
    console.log("user is logged out");
    res.redirect('/home');

  });
});

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

app.get('/', (req,res) => {res.redirect('/home')});

//home page for local host is the index.mustache page
app.get('/home', (req, res) => res.render('index'))

//settings page
app.get('/settings', function(req, res) {
  if(req.session.email){
    res.render('settings',{email : req.session.email});
  } else{
    res.render('settingsNoLogin');
  }

});

app.get("/api/stores", function(req, res) {
  db.any("SELECT * FROM shoppinglists").then(function(data) {
    res.status(200).json({ status: "success", items: data });
  });
});

app.listen(3000, function() {
  console.log("node server has started");
});
