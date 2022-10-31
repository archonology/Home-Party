//user path
const User = require('./User');
const Home = require('./Home');
const Decor = require('./Decor');
const Subscriber = require('./Subscriber');


// homes belong to users
Home.belongsTo(User, {
    foreignKey: 'user_id',
});

// a user has many homes
User.hasMany(Home, {
    foreignKey: 'user_id',

});

// decor belongs to users
Decor.belongsTo(User, {
    foreignKey: "user_id",
  });

// a user has a lo† of decor
User.hasMany(Decor, {
    foreignKey: 'user_id',
});

// decor belongs to homes
Decor.belongsTo(Home, {
    foreignKey: "home_id",
    onDelete: 'CASCADE'
  });

// a home has many decor
Home.hasMany(Decor, {
    foreignKey: 'home_id',
    onDelete: 'CASCADE'
});

Subscriber.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Subscriber, {
    foreignKey: 'user_id',
});


module.exports = { User, Home, Decor, Subscriber };