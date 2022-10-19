const sequelize = require('../config/connection');
const { User, Home, Decor } = require('../models');

const userData = require('./userData.json');
const homeData = require('./homeData.json');
const decorData = require('./decorData.json');
// const homeTagData = require('./homeTagData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const home of homeData) {
    await Home.create({
      ...home,
    });
  }

  for (const decor of decorData) {
    await Decor.create({
      ...decor,
    });
  }

  // for (const homeTag of homeTagData) {
  //   await HomeTag.create({
  //     ...homeTag,
  //   });
  // }

  process.exit(0);
};

seedDatabase();