module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
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
  return Events;
};
