'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    develop: {
      server: {
        file: 'src/server.js'
      }
    },
    watch: {
      node: {
        files: [
          'src/server.js',
          'index.html'
        ],
        tasks: ['develop'],
        options: {
          nospawn: true,
          livereload: true,
          port: 3000
        }
      },
      client: {
        files: [
          'src/scripts/**/*.js*'
        ],
        tasks: ['browserify:dev', 'jshint'],
      },
      reload: {
        files: [
          'src/public/js/build.js'
        ],
        options: {
          livereload: true,
          port: 3000
        }
      }
    },
    jshint: {
      src: ['Gruntfile.js', 'src/scripts/**/*.js'],
      options: {
        globalstrict: true,
        newcap: false,
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          require: true,
          document: true,
          window: true
        }
      }
    },
    browserify: {
      prod: {
        src: ['src/scripts/app.js'],
        dest: 'src/public/js/build.js'
      },
      dev: {
        options: {
          debug: true
        },
        src: ['src/scripts/app.js'],
        dest: 'src/public/js/build.js'
      }
    }
  });

  // grunt-develop to start node server
  grunt.loadNpmTasks('grunt-develop');
  // development libs
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // browserify
  grunt.loadNpmTasks('grunt-browserify');

  // Default task(s).
  grunt.registerTask('default', ['develop', 'browserify:dev', 'watch']);
  grunt.registerTask('build', ['browserify:prod']);
};
