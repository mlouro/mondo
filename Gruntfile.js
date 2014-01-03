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
            js: {
                files: [
                    'app.js'
                ],
                tasks: ['develop'],
                options: {nospawn: true}
            }
        }
    });

    // grunt-develop to start node server
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-develop');

    // Default task(s).
    grunt.registerTask('default', ['develop', 'watch']);

};
