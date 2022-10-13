//user path
const User = require('./User');
const Home = require('./Home');
const Decor = require('./Decor');

module.exports = { User, Home, Decor };

// homes belong to users
Home.belongsTo(User, {
    foreignKey: 'user_id',
});

// a user has many homes
User.hasMany(Home, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// decor belongs to homes
Decor.belongsTo(Home, {
    foreignKey: "home_id",
  });

// a home has many decor
Home.hasMany(Decor, {
    foreignKey: 'home_id',
    onDelete: 'CASCADE'
});

// decor belongs to users
Decor.belongsTo(User, {
    foreignKey: "user_id",
  });

// a user has a lo† of decor
User.hasMany(Decor, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
