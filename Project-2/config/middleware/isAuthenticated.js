// This middleware is for restricting the routes that a user is not allowed to visit if they are not logged in
module.exports = function(req, res, next) {
  // if the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }
  // if the user isn't logged in, redirect them to the log-in page
  return res.redirect("/signup");
};
