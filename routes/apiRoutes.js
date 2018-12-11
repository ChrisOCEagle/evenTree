var db = require("../models");
var passport = require("../config/passport.js");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Since we're doing a form POST, we can redirect that post into a GET request
    // if the login is authenticated against the database, then the response will redirect
    // the route to the members page.
    res.redirect("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely
  // thanks to how we configured our Sequelize User model. If the user is created successfully,
  // proceed to log the user in, otherwise send back an error.
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
      .then(() => {
        res.redirect("/login");
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // the route that will handle creating the events and storing them in the database
  app.post("/api/events", (req, res) => {
    db.Events.create({
      name: req.body.name,
      description: req.body.description,
      date: req.body.date,
      location: req.body.location,
      items: req.body.items
    })
      .then(() => {
        res.redirect("/events");
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
};
