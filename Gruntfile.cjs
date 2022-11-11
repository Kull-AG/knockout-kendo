module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        header: grunt.file.read('header.js'),
        includes: {
            files: {
                options: {
                    includeRegexp: /^\/\/\s*import\s+['"]?([^'"]+)['"]?\s*$/,
                    banner: '<%= header %>\n'
                },
                src: 'src/knockout-kendo.js',
                dest: 'build/knockout-kendo.js',
                flatten: true,
                cwd: '.'
            }
        },
        watch: {
            scripts: {
                files: 'src/*.*',
                tasks: 'default',
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-includes');

    // Default task(s).
    grunt.registerTask('default', [ 'includes']);

};