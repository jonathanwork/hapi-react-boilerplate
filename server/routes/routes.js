'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route_container = [];

//simple function appends obj into an array
function route_appender(obj, arr) {
  arr.push(obj);
  return arr;
}

var vendor_page = {
  method: 'GET',
  path: '/bower_components/{bower_files*}',
  config: {
    handler: {
      directory: {
        path: _path2.default.join(__dirname, '../../app/bower_components'),
        index: false
      }

    }
  }
};
route_appender(vendor_page, route_container);

var default_page = {
  method: 'GET',
  path: '/{html*}',
  config: {
    handler: {
      directory: {
        path: _path2.default.join(__dirname, '../../app'),
        index: false

      }
    }
  }
};
route_appender(default_page, route_container);

var default_redirect = {
  method: 'GET',
  path: '/',
  config: {
    handler: function handler(req, reply) {
      reply.redirect('/index.html');
    }
  }
};

route_appender(default_redirect, route_container);

exports.routeContainer = route_container;