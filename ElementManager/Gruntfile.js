var commonjs_webpack_config = require('./commonjs/webpack.config.js');
var angularjs_webpack_config = require('./angularjs/webpack.config.js');
var working_webpack_config = require('./WORKING/BaseballCard/webpack.config.js');
var simplified_webpack_config = require('./WORKING/SIMPLIFIED/webpack.config.js');

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      build_commonjs: commonjs_webpack_config,
      build_angularjs: angularjs_webpack_config,
      build_workingjs: working_webpack_config,
      build_simplified: simplified_webpack_config
    },
    watch: {
      files: [
        './commonjs/src/js/**/*.js',
        './angularjs/src/js/**/*.js',
        './WORKING/BaseballCard/src/js/**/*.js',
        './WORKING/SIMPLIFIED/src/js/**/*.js'
      ],
      tasks: [
        'webpack'
      ]
    }
  });

  grunt.loadNpmTasks("grunt-webpack");
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [ 
    'webpack',
    'watch'
  ]);

};