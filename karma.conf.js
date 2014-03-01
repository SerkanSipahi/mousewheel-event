
module.exports = function(config) {

    'use strict';

	config.set({
        files: [
            'libs/classy.js',
            'mousewheel.js',

            'yui3/build/yui/yui-min.js',

            'yui3/build/oop/oop-min.js',
            'yui3/build/event-custom-base/event-custom-base-min.js',
            'yui3/build/event-base/event-base-min.js',
            'yui3/build/dom-core/dom-core-min.js',
            'yui3/build/dom-base/dom-base-min.js',
            'yui3/build/selector-native/selector-native-min.js',
            'yui3/build/selector/selector-min.js',
            'yui3/build/node-core/node-core-min.js',
            'yui3/build/color-base/color-base-min.js',
            'yui3/build/dom-style/dom-style-min.js',
            'yui3/build/node-base/node-base-min.js',

            'yui3/build/gesture-simulate/gesture-simulate-min.js',
            'yui3/build/node-event-simulate/node-event-simulate-min.js',
            'yui3/build/event-custom-complex/event-custom-complex-min.js',
            'yui3/build/async-queue/async-queue-min.js',
            'yui3/build/dom-screen/dom-screen-min.js',
            'yui3/build/node-screen/node-screen-min.js',
            'yui3/build/gesture-simulate/gesture-simulate-min.js',
            'yui3/build/event-custom-complex/event-custom-complex-min.js',

            'yui3/build/event-simulate/event-simulate-min.js',

            'tests/HTMLFixture.js',
            'tests/*.js'
        ],
        basePath: './',
		frameworks: ['jasmine'],
		browser : ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE', 'PhantomJS'],
		exclude : [],
		reporters : ['progress'],
		junitReporter : {
			outputFile: 'test-results.xml'
		},
		port : 9876,
		runnerPort : 9100,
		colors : true,
		logLevel : config.LOG_INFO,
		autoWatch : true,
		captureTimeout : 5000,
		singleRun : false,
		reportSlowerThan : 500
	});

};