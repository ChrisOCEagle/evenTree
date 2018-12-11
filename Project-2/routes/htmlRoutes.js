// require the models
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
  // the route for the members page
  // this route is authenticated by our authentication middleware
  // if a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", (req, res) => {
    res.render("members");
  });
  // the route for the list of events page
  // this route is authenticated by our authentication middleware
  // if a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/events", (req, res) => {
    db.Events.findAll({}).then(dbEvents => {
      res.render("list", { events: dbEvents });
    });
  });
  // the route for creating an event
  // this route is authenticated by our authentication middleware
  // if a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/create", (req, res) => {
    res.render("create");
  });
  // the route for the created event
  // this route is authenticated by our authentication middleware
  // if a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/event/:id", (req, res) => {
    db.Events.findOne({ where: { id: req.params.id } }).then(dbEvent => {
      console.log(dbEvent.dataValues);
      res.render("event", {
        event: {
          name: dbEvent.dataValues.name,
          description: dbEvent.dataValues.description,
          date: dbEvent.dataValues.date,
          location: dbEvent.dataValues.location,
          items: dbEvent.dataValues.items.split(",")
        }
      });
    });
  });
};
