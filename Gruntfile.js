module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON( "package.json" ),
        jshint: {
            files: ['mousewheel.js', 'Gruntfile.js', 'karma.conf.js'],
            options: {
                strict:true,
                expr:true,
                newcap: true,
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
            project : {
                files: ['mousewheel.js', 'Gruntfile.js', 'karma.conf.js'],
                tasks: ['jshint', 'karma', 'uglify', 'watch'],
                options : {
                    livereload : true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'karma', 'uglify', 'watch']);

};