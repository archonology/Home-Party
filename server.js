const path = require('path');
const express = require('express');
const session = require('express-session');
const axios = require('axios').default;
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

// const app = express();
const app = axios();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // expiration: 60 * 60 * 1000,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

//to use handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(axios.json());
app.use(axios.urlencoded({ extended: true }));
app.use(axios.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});