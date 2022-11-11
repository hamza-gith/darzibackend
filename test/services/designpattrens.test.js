const assert = require('assert');
const app = require('../../src/app');

describe('\'designpattrens\' service', () => {
  it('registered the service', () => {
    const service = app.service('designpattrens');

    assert.ok(service, 'Registered the service');
  });
});
