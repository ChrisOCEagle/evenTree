var db = require("../models");
var passport = require("../config/passport.js");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a form POST, we can redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely
  // thanks to how we configured our Sequelize User model. If the user is created successfully,
  // proceed to log the user in, otherwise send back an error.
  app.post("/signup", (req, res) => {
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
};
