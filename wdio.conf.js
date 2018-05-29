exports.config = {

    /**
     * server configurations
     */
    host: '127.0.0.1',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        './features/*.feature'
    ],
    // exclude: [
    //     'test/spec/multibrowser/**',
    //     'test/spec/mobile/**'
    // ],

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome'
    }],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'shots',
    waitforTimeout: 10000,
    framework: 'cucumber',

    reporters: ['dot', 'cucumber'],
    reporterOptions: {
        outputDir: './'
    },

    cucumberOpts: {
        require: ['./features/step-definitions.js'],

    }
};
