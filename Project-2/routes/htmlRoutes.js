var db = require("../models");

// require our custom middleware for determining if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated.js");

module.exports = function(app) {
  // the route for the index page with the buttons for the sign-up and log-in routes
  app.get("/", (req, res) => {
    res.render("index");
  });
  // the route for the log-in page
  app.get("/login", (req, res) => {
    // if the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });
  // the route for the sign-up page
  app.get("/signup", (req, res) => {
    // if the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup");
  });
  app.get("/create", (req, res) => {
    // if the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("create");
  });
  app.get("/event", (req, res) => {
    // if the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("event");
  });
  app.get("/list", (req, res) => {
    // if the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("list");
  });
  // the route for the members page
  // this route is authenticated by our authentication middleware
  // if a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members");
  });
};
