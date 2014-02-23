module.exports = function(grunt) {

    'use strict';

    /*jshint devel:true */
    /*global Backbone */
    /*global _ */
    /*global jQuery */

    var watch_files = ['Gruntfile.js','karma.conf.js'];

    grunt.initConfig({
        clean: ["../www"],
        jshint: {
            files: watch_all,
            options: {
                validthis:true,
                ignores: ['../dev/app/libs/**/*js'],
                loopfunc: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        watch: {
            project : {
                files: watch_files,
                tasks: [/*'karma', */'jshint', 'clean', 'copy'],
                options : {
                    livereload : true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('unit_test', ['jshint', /*'karma'*/, 'clean', 'copy', 'watch:unit_test']);
    grunt.registerTask('upload', ['jshint', /*'exec:upload_remote',*/ 'clean', 'copy', 'watch:upload']);

};