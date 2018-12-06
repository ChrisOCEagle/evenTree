var db = require("../models");

module.exports = function(app) {
  // Get every event for a specific author
  app.get("/api/events/:id", function(req, res) {
    console.log(req.params.id);
    db.Events.findAll({}).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  // Create a new example
  app.post("/api/events", function(req, res) {
    db.Events.create(req.body).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
