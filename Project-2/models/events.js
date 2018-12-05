module.exports = function(sequelize, DataTypes) {
  var events = sequelize.define("events", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    items: DataTypes.TEXT
  });
  events.associate = function(models) {
    events.belongsTo(models.Author, {
      foriegnKey: {
        allowNull: false
      }
    });
  };
  return events;
};
