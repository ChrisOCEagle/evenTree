// require passport
var passport = require("passport");
// require the local strategy of passport
var LocalStrategy = require("passport-local").Strategy;

// require the database
var db = require("../models");

// tell passport that we want to use a local strategy
// want to have a login with a username, email, and password
passport.use(
  new LocalStrategy(
    // our user will sign in using an email
    {
      usernameField: "email"
    },
    function(email, password, done) {
      // this will run when the user tries to sign in
      db.User.findOne({
        where: {
          email: email
        }
      }).then(function(dbUser) {
        // if there is no user with the given email
        if (!dbUser.dataValues.email) {
          return done(null, false, { message: "Incorrect Email" });
        }
        // if there is a user with the given email, but the given password is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, { message: "Incorrect Password" });
        }
        // if none of the above return the User
        return done(null, dbUser.dataValues);
      });
    }
  )
);

// In order to help keep the authentication state across http requests,
// Sequelize needs to serialize and deserialize the user
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(user, cb) {
  cb(null, user);
});

// export the configured passport
module.exports = passport;
