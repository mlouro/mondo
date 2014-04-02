"use strict";
/* global console, process */
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('gulp-browserify');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var stylish = require('jshint-stylish');
var refresh = require('gulp-livereload');
var sass = require('gulp-sass');
// sass 
// bourbon is required by neat
// var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths;

// livereload
var lr = require('tiny-lr');
var server = lr();

// File sources
var sources = {
  scripts: [
    './client/app.js',
    './client/app/**/*.js',
    './client/app/**/*.jsx'
  ],
  jshint: [
    './gulpfile.js',
    './client/*.js',
  ],
  css: './client/scss/**/*.scss',
  sass: './client/scss/app.scss',
  statics: [
    './client/templates/*.html',
    './client/static/**/*',
  ],
  browserify: './client/app.js'
};

// Build destination
var buildDir = './www/';

// Tasks
// * build JavaScript (browserify)
// * copy static files
// * lint JavaScript
// * build sass
// * live-reload server
var tasks = {
  scripts: function () {
    gulp.src(sources.browserify)
      .pipe(browserify({
        debug : !gutil.env.production
      }))
      .on('error', function(error) {
        gutil.log(error);
        process.stdout.write('\x07');
      })
      .pipe(gulp.dest(buildDir))
      .pipe(refresh(server));
  },
  statics: function() {
    gulp.src(sources.statics)
      .pipe(gulp.dest(buildDir))
      .pipe(refresh(server));
  },
  lint: function() {
    gulp.src(sources.jshint)
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter(stylish));
  },
  sass: function() {
    // neat is an Array and already includes bourbon
    gulp.src(sources.sass)
      .pipe(sass({
        includePaths: neat,
        sourceComments: 'map'
      }))
      .on('error', gutil.log)
      .pipe(gulp.dest(buildDir + 'css/'))
      .pipe(refresh(server));
  },
  livereload: function() {
    server.listen(35729, function(err){
      if(err) {
        return console.log(err);
      }
    });
  }
};

// --------------------------
// Register our tasks
// --------------------------
// default
gulp.task('default', function() {
  gulp.run('copy:static', 'build:js', 'lint:js');
});
// gulp task setup
gulp.task('build:js', tasks.scripts);
gulp.task('build:sass', tasks.sass);
gulp.task('copy:static', tasks.statics);
gulp.task('lint:js', tasks.lint);
gulp.task('livereload', tasks.livereload);
// development watch & livereload
// run from terminal as "gulp dev" to get
// all the livereload goodies
gulp.task('dev', function() {
  // initial run
  gulp.run('livereload',
    'build:js',
    'build:sass',
    'copy:static',
    'lint:js');
  // watch for js changes
  gulp.watch(sources.scripts, function(event) {
    gulp.run('lint:js', 'build:js');
  });
  gulp.watch(sources.statics, function(event) {
    gulp.run('copy:static');
  });
  gulp.watch(sources.css, function(event) {
    gulp.run('build:sass');
  });
});