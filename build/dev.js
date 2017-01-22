require('shelljs/global');

rm('-rf', './login');

let path = require('path');
let ora = require('ora');
let opn = require('opn');
let spinner = ora('Start ...');

spinner.start();

let webpack = require('webpack');
let webpackConfig = require('../config/webpack.dev.conf.js');

webpack(webpackConfig, (err, stats) => {
  let uri = path.join(__dirname, '../demo/index.html');
  opn(uri);
  spinner.stop();
});