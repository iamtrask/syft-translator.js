'use strict';
const fs = require('fs');
const execSync = require('child_process').execSync;

module.exports = function sync() {
  if (!fs.existsSync('./temp')) {
    fs.mkdirSync('./temp');
  }

  if (!fs.existsSync('./temp/PySyft')) {
    execSync('git clone https://github.com/OpenMined/PySyft.git temp/PySyft');
  } else {
    execSync([
      'cd temp/PySyft',
      'git checkout master',
      'git pull'
    ].join(' && '));
  }
};