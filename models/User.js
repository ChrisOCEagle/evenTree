// require bcrypt for password hashing
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING(12),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true
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
  // create a custom method for the User model.
  // This will check if the unhashed password entered by the user can be compared to the hashed password stored in our database.
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // before a user is created we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  User.associate = function(models) {
    User.hasMany(models.Events, {
      onDelete: "CASCADE"
    });
  };
  return User;
};
