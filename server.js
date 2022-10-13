const path = require('path');
// const express = require('express');
const axios = require('axios').default;
const exphbs = require('axios-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');

// const app = express();
const app = axios();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(axios.json());
app.use(axios.urlencoded({ extended: true }));
app.use(axios.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});