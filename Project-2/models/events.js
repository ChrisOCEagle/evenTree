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
  Events.associate = function(models) {
    Events.belongsTo(models.Author, {
      foriegnKey: {
        allowNull: false
      }
    });
  };
  return Events;
};
