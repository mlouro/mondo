module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        develop: {
            server: {
                file: 'app.js'
            }
        },
        watch: {
            node: {
                files: [
                    'app.js', 
                    'src/site.js'
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
                    'src/public/scripts/**/*.js'
                ],
                tasks: ['browserify:dev', 'jshint'],
            },
            reload: {
                files: [
                    'src/index.jade',
                    'src/public/build.js'
                ],
                options: {
                    livereload: true,
                    port: 3000
                }
            }
        },
        jshint: {
            src: ['Gruntfile.js', 'src/public/scripts/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        browserify: {
            prod: {
                src: ['src/public/scripts/app.js'],
                dest: 'src/public/build.js'
            },
            dev: {
                options: {
                    debug: true
                },
                src: ['src/public/scripts/app.js'],
                dest: 'src/public/build.js'
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
