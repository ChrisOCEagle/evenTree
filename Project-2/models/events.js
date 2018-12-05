module.exports = function(sequelize, DataTypes) {
  var events = sequelize.define("events", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING
    },
    items: {
      type: DataTypes.TEXT,
      allowNull: false
    }
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
