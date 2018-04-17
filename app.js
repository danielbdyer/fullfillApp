const express = require("express");
const models = require("./models");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const path = require("path");
const promise = require("bluebird");
const methodOverride = require("method-override");
const session = require("cookie-session");
const app = express();

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.use(methodOverride("_method"));
app.set("view engine", "mustache");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
//register the session with its user id
app.use(
  session({
    secret: "cute dogs",
    resave: false,
    saveUninitialized: true
  })
);

app.use(function(req, res, next) {
  if (req.url.substr(-1) == "/" && req.url.length > 1)
    res.redirect(301, req.url.slice(0, -1));
  else next();
});

//sign up user and add to user table
app.post("/signup", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var username = email.split("@", 1)[0];

  const newUser = models.user
    .create({
      email: email,
      password: password,
      username: username
    })
    .then(function(newUser) {
      //console.log(newUser);
    })
    .then(res.redirect("/settings"))
    .catch(function(err) {
      //console.log(err, req.body.email);
    });
});

//log in the user
app.post("/login", (req, res) => {
  var user = models.user
    .findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    .then(user => {
      if (user.password == req.body.password) {
        req.session.email = req.body.email;
        req.session.authenticated = true;
        req.session.userId = user.dataValues.id;
        res.redirect("/posts/all");
      } else {
        res.send("Login attempt failed");
      }
    });
});

//to check if user is logged in
app.get("/logged", function(req, res) {
  if (req.session.email) {
    res.write("<h1>User Logged In</h1><a href='/logout'>Logout</a>");
    res.end();
  } else {
    res.write("<h1>User not logged in</h1><a href='/home'>Main Page</a>");
    res.end();
  }
});

// logout the user
app.get("/logout", function(req, res) {
  req.session = null
  //console.log("user is logged out");
  res.redirect("/home");
});

app.get("posts/:id", function(req, res) {
  let reqPost = req.params.id;
  // get all the posts from the database using sequelize
  models.post
    .findAll({
      where: { id: reqPost },
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
      //console.log(error);
    });
});

app.get("/posts/all", function(req, res) {
  var mustachevars = {}
  // get all the posts from the database using sequelize
  models.post
    .findAll({
      include: [
        {
          model: models.tag,
          as: "tags"
        },
        {
          model: models.user,
          as: "user"
        }
      ]
    })
    .then(function(allposts) {
      mustachevars.result = allposts
      models.tag.findAll()
    .then(function(alltags){
      mustachevars.result2 = alltags
      //console.log(alltags)
      res.render("viewAllPosts", { posts: mustachevars.result, alltags: mustachevars.result2 });
    })
    })
    .catch(function(error) {
      //console.log(error);
    });
});

app.get("/topics/all", function(req, res) {
  var mustachevars = {}
  // get all the posts from the database using sequelize
  const allposts = models.post
    .findAll({
      include: [
        {
          model: models.tag,
          as: "tags"
        },
        {
          model: models.user,
          as: "user"
        }
      ]
    })
    .then(function(allposts) {
      mustachevars.result = allposts
      models.tag.findAll()
    .then(function(alltags){
      mustachevars.result2 = alltags
      //console.log(alltags)
      res.render("viewAllPosts", { posts: mustachevars.result, alltags: mustachevars.result2 });
    })
    })
    .catch(function(error) {
      //console.log(error);
    });
});

app.get("/newpost", function(req, res) {
  if (req.session.email) {
    const tag = models.tag.findAll().then(function(alltags) {
      res.render("newPost", {
        email: req.session.email,
        username: req.session.username,
        userId: req.session.userId,
        alltags: alltags
      });
    });
  } else {
    res.render("index");
  }
});

app.get("/topics/:uris/", function(req, res) {
    var mustachevars = {}
  // get all the posts from the database using sequelize
  models.post
    .findAll({
      include: [
        {
          model: models.tag,
          where: { uri: req.params.uris.split("+") },
          as: "tags"
        },
        {
          model: models.user,
          as: "user"
        }
      ]
    })
    .then(function(posts) {
      mustachevars.result = posts
      models.tag.findAll()
    .then(function(alltags){
      mustachevars.result2 = alltags
      //console.log(alltags)
      res.render("viewAllPosts", { posts: mustachevars.result, alltags: mustachevars.result2 });
    })
    })
    .catch(function(error) {
      //console.log(error);
    });
});

app.get("/posts/:id", function(req, res) {
  // get all the posts from the database using sequelize
  models.post
    .findOne({
      where: { id: req.params.id },
      include: [
        {
          model: models.tag,
          as: "tags"
        },
        {
          model: models.user,
          as: "user"
        }
      ]
    })
    .then(function(posts) {
      //console.log(posts);
      res.render("viewSinglePost", { posts: posts });
    })
    .catch(function(error) {
      //console.log(error);
    });
});

app.post("/topics/:id/newpost", function(req, res) {
  if (req.session.email) {
    let postTitle = req.body.title;
    let postSubheader = req.body.subheader;
    let id = req.params.id
  }
})

app.get("/", (req, res) => {
  res.redirect("/home");
});

//home page for local host is the index.mustache page
app.get("/home", function(req, res) {
  if (req.session.email) {
    res.render("loggedInIndex", {
      email: req.session.email,
      userId: req.session.userId
    });
  } else {
    res.render("index");
  }
});

//delete the user Account
app.get("/deleteAccount/:id", function(req, res) {
  let userIdValue = req.params.id;
  req.session.destroy(function(err) {
    if (err) {
      res.negotiate(err);
    }
    //console.log("user is logged out");
  });
  var user = models.user
    .destroy({
      where: {
        id: userIdValue
      }
    })
    .then(function(user) {
      res.redirect("/home");
    });
});

app.get("/settings", function(req, res) {
  if (req.session.email) {
    const tag = models.tag.findAll().then(function(tags) {
      res.render("settings", {
        email: req.session.email,
        userId: req.session.userId,
        tags: tags
      });
    });
  } else {
    res.render("settingsNoLogin");
  }
});

app.get("/api/posts", function(req, res) {
  db.any("SELECT * FROM posts").then(function(data) {
    res.status(200).json({ status: "success", items: data });
  });
});

app.listen(process.env.PORT || 3000, function(){
  //console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
