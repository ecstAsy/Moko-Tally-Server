/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1678346796141_1370';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  config.mongoose = {
    url: 'mongodb://127.0.0.1/moko_tally',
    options: {},
    // mongoose global plugins, expected a function or an array of function and options
    plugins: [],
  };



  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
