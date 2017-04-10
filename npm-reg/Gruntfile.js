var webpack_config = require('./webpack.config.js');

module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        changelog: {},
        nunjucks: {},
        jsdoc: {},
        webpack: {
            build: webpack_config
        },
        watch: {},
        copy: {},
        less: {},
        run: {}
    });

    grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-nunjucks-2-html');
    grunt.loadNpmTasks('grunt-changelog');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask('default', [
        'webpack'
    ]);
    grunt.registerTask('package', [
        'webpack'
    ]);
};