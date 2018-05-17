'use strict';

const through = require('through2');
const PluginEror = require('gulp-util').PluginError;
const colors = require('gulp-util').colors;
const log = require('gulp-util').log;
const qn = require('qn');
const merge = require('merge');
const path = require('path');
const async = require('async');

module.exports = function(options) {
  return through.obj(function (file, enc, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }

    options = merge({
      prefix: ''
    }, options);

    if (!options.qiniu) {
      return callback(null, file);
    }

    const client = qn.create(options.qiniu);
    const fileName = path.basename(file.path);
    const fileKey = path.join(options.prefix, fileName);

    async.auto({
      stat: function(cb) {

      },
      upload: ['stat', function(cb, results) {
        
      }]
    })
  });
}