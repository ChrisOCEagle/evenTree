module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    username: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: {
          args: [8]
        }
      }
    }
  });
  Author.associate = function(models) {
    Author.hasMany(models.events, {
      onDelete: "CASCADE"
    });
  };
  return Author;
};
