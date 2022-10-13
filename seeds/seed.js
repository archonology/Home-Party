const sequelize = require('../config/connection');
const { User, Home, Decor, DesignTag } = require('../models');

const userData = require('./userData.json');
const homeData = require('./homeData.json');
const decorData = require('./decorData.json');
const designTagData = require('./designTagData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of homeData) {
    await Home.create({
      ...blog,
    });
  }

  for (const comment of decorData) {
    await Decor.create({
      ...comment,
    });
  }

  for (const commentTag of designTagData) {
    await DesignTag.create({
      ...commentTag,
    });
  }

  process.exit(0);
};

seedDatabase();