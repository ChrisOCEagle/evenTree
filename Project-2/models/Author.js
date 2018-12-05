module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  Author.associate = function(models) {
    Author.hasMany(models.events, {
      onDelete: "CASCADE"
    });
  };
  return Author;
};
