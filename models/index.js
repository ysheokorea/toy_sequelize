const Sequelize = require('sequelize');
const Urls = require('./urls');
const Users = require('./');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};

// sequelize 객체
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Urls = Urls;
db.Users = Users;

Urls.init(sequelize);
Users.init(sequelize);

Urls.associate(db);
Users.associate(db);

module.exports = db;
