'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _inert = require('inert');

var _inert2 = _interopRequireDefault(_inert);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _vision = require('vision');

var _vision2 = _interopRequireDefault(_vision);

var _routes = require('./routes/routes.js');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var public_files = {
  connections: {
    routes: {
      files: {
        relativeTo: _path2.default.join(__dirname, 'app')
      }
    }
  }
};

var server_internals = {
  port: process.env.PORT || 8080,
  host: process.env.IP || "0.0.0.0",
  labels: ['http']
};

var server = new _hapi2.default.Server(public_files);

server.connection(server_internals);

server.register([_vision2.default, _inert2.default], function (err) {
  if (err) console.error(err);
  server.route(_routes2.default.routeContainer);
});

server.start(function (req, res) {
  console.log('server has started');
  console.log('\n\t=> ' + process.env.IP + ':' + process.env.PORT);
});