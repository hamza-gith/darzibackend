const users = require('./users/users.service.js');
const categories = require('./categories/categories.service.js');
const subcategories = require('./subcategories/subcategories.service.js');
const designpattrens = require('./designpattrens/designpattrens.service.js');
const images = require('./images/images.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(categories);
  app.configure(subcategories);
  app.configure(designpattrens);
  app.configure(images);
};
