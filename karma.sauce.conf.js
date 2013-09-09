var sharedConfig = require('./karma.conf.js');

module.exports = function(config) {
  sharedConfig(config);

  config.set({
    // This speeds up the capturing a bit, as browsers don't even try to use websocket.
    transports: ['xhr-polling'],

    autoWatch: false,
    singleRun: true,

    reporters: ['dots'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 10000,

    sauceLabs: {
      username: 'wnr-hawker',
      accessKey: 'a5557696-e556-47d6-afad-f661d124b12a',
      startConnect: false,
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER || 13,
      testName: 'hawker'
    },

    // define SL browsers
    customLaunchers: {
      'SL_Chrome': {
        base: 'SauceLabs',
        browserName: 'chrome'
      },
      'SL_Firefox': {
        base: 'SauceLabs',
        browserName: 'firefox'
      },
      'SL_Safari': {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'Mac 10.8',
        version: '6'
      },
      'SL_Opera': {
        base: 'SauceLabs',
        browserName: 'opera',
        version: '12'
      },
      'SL_IE_8': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '8'
      },
      'SL_IE_9': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 2008',
        version: '9'
      },
      'SL_IE_10': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 2012',
        version: '10'
      },
      'SL_IPHONE': {
        base: 'SauceLabs',
        browserName: "iphone",
        platform: "Mac 10.8",
        version: "6"
      }
    },

  });
};
