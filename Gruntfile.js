module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),
        jshint: {
            files: ['mousewheel.js', 'Gruntfile.js', 'karma.conf.js'],
            options: {
                expr:true,
                newcap: false,
                quotmark: 'single',
                validthis:true,
                ignores: ['libs/*js'],
                loopfunc: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        watch: {
            development : {
                files: ['mousewheel.js', 'Gruntfile.js', 'karma.conf.js'],
                tasks: ['jshint'],
                options : {
                    livereload : false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('tests', ['karma']);
    grunt.registerTask('development', ['jshint', 'watch:development']);
    grunt.registerTask('production', ['jshint', 'watch']);

};