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
          console.log('console.log connect is ' + Object.keys(connect));
          return [function(req, res) {
            console.log('console.log req is ' + Object.keys(req));
            console.log('req attribute is ' + req.directory);

            // attempt to open the request path
            require('fs').openSync(req.url, 'r', function(err, fd) {

              if (typeof err !== 'undefined') {
                console.log('err is ' + err);
              } else if (typeof fd !== 'undefined') {
                console.log('fd is ' + Object.keys(fd));
              } else {
                console.log('connect middleware error');
              }

            });

            // if the request is for a file, get the file
            if (true) {


            // if the request is not for a file, redirect to index.html
            } else {



            }


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
