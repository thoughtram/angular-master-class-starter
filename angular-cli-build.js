/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'materialize-css/bin/materialize.css',
      'materialize-css/fonts/roboto/Roboto-Regular.woff2',
      'materialize-css/fonts/roboto/Roboto-Regular.woff',
      'materialize-css/fonts/roboto/Roboto-Regular.ttf',
      'materialize-css/fonts/roboto/Roboto-Light.woff2',
      'materialize-css/fonts/roboto/Roboto-Light.woff',
      'materialize-css/fonts/roboto/Roboto-Light.ttf'
    ]
  });
};
