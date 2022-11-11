// Initializes the `designpattrens` service on path `/designpattrens`
const { Designpattrens } = require('./designpattrens.class');
const createModel = require('../../models/designpattrens.model');
const hooks = require('./designpattrens.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/designpattrens', new Designpattrens(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('designpattrens');

  service.hooks(hooks);
};
