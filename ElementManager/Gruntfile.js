var webpack_config = require('./webpack.config.js');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      build: webpack_config
    },
    watch: {
      files: [
        './src/js/**/*.js'
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