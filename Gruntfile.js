/*
 * marionette-boilerplate
 * https://github.com/shaekuronen/marionette-boilerplate
 *
 * Copyright (c) 2014 Shae Kuronen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  // start a node server
  connect: {
    preview: {
      options: {
        port: 9000,
        keepalive: true,
        base: './dev',
        livereload: true,
        // https://github.com/gruntjs/grunt-contrib-connect/issues/66
        middleware: function(connect, options) {
          grunt.log.debug('connect is ' + JSON.stringify(connect));
          return [function(req, res) {
            require('fs').createReadStream('dev/index.html').pipe(res);
          }]
        }
      }
    },
    optimize: {
      options: {
        port: 9001,
        keepalive: true,
        base: './production',
        // https://github.com/gruntjs/grunt-contrib-connect/issues/66
        middleware: function(connect, options) {
          return [function(req, res) {
            require('fs').createReadStream('index.html').pipe(res);
          }]
        }
      }
    }
  },

    watch: {
      dev: {
        files: 'dev/**/*',
        tasks: ['preview'],
        options: {
          debounceDelay: 250,
          livereload: true
        },
      }
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'dev/js/site/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    },

  });

  // preview task
  grunt.registerTask('preview', [], function () {

    // load plugins for the task
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // execute the task
    grunt.task.run(
      'connect:preview'
    );

  });
  // end preview task

  // task
  grunt.registerTask('optimize', [], function () {

    // load plugins for the task
    grunt.loadNpmTasks('grunt-contrib-connect');

    // execute the task
    grunt.task.run(
      ''
    );

  });
  // end task

};
