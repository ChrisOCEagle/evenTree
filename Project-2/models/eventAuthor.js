module.exports = function(sequelize, DataTypes) {
  var eventAuthor = sequelize.define("eventAuthor", {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return eventAuthor;
};
