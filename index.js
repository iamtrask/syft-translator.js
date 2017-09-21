'use strict';
const fs = require('fs');
const sync = require('./sync');
const parse = require('filbert').parse_dammit;
const glob = require('glob');

sync();

glob('temp/**/*.py', (err, files) => {
  for (let i = 0; i < files.length; i++) {
    console.log(JSON.stringify(parse(fs.readFileSync(files[i]).toString())));
  }
});