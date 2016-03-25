module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai', 'sinon'],


		// list of files / patterns to load in the browser
		files: [
			'../../core/vendor/underscore/underscore.js',
			'js/vendor/angular/angular.js',
			'js/vendor/angular-route/angular-route.js',
			'js/vendor/angular-uuid4/angular-uuid4.js',
			'js/vendor/angular-cache/dist/angular-cache.js',
			'js/vendor/angular-sanitize/angular-sanitize.js',
			'js/vendor/ui-select/dist/select.js',

			'js/dav/dav.js',
			'js/vendor/vcard/src/vcard.js',

			'js/vendor/angular-mocks/angular-mocks.js',

			'js/public/script.js',

			'js/vendor/angular-bootstrap/ui-bootstrap.min.js',

			'js/tests/**/*.js'
		],


		// list of files to exclude
		exclude: [
		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'js/public/script.js': 'coverage'
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha', 'coverage'],


		// Configure code coverage reporter
		coverageReporter: {
			reporters: [
				{type: 'text'},
				// generates ./coverage/lcov.info
				{type:'lcovonly', subdir: '.'},
				// generates ./coverage/coverage-final.json
				{type:'json', subdir: '.'},
			]
		},

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: process.env.TRAVIS ? ['Chrome_travis_ci'] : ['Chrome'],

		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		},

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	})
};
