var commonjs_webpack_config = require('./commonjs/webpack.config.js');
var angularjs_webpack_config = require('./angularjs/webpack.config.js');
var working_webpack_config = require('./WORKING/BaseballCard/webpack.config.js');
var simplified_webpack_config = require('./WORKING/SIMPLIFIED/webpack.config.js');
var simplified_doc_src = './WORKING/SIMPLIFIED/src/**/*.js';
var simplified_doc_dest = './WORKING/SIMPLIFIED/doc';

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    jsdoc : {
        dist : {
            src: [simplified_doc_src],
            options: {
                destination: simplified_doc_dest,
                template : "node_modules/ink-docstrap/template",
                configure : "node_modules/ink-docstrap/template/jsdoc.conf.json"
            }
        }
    },
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
        './WORKING/SIMPLIFIED/src/Test/**/*.js',
        './WORKING/SIMPLIFIED/src/js/**/*.js'
      ],
      tasks: [
        'webpack',
        'jsdoc'
      ]
    }
  });

  grunt.loadNpmTasks("grunt-webpack");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('default', [ 
    'webpack',
    'jsdoc',
    'watch',
  ]);

};