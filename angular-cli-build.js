/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: [
      'materialize-css/bin/materialize.css',
      'materialize-css/font/roboto/Roboto-Regular.woff2',
      'materialize-css/font/roboto/Roboto-Regular.woff',
      'materialize-css/font/roboto/Roboto-Regular.ttf'
    ]
  });
  return app.toTree();
};
