'use strict';
const fs = require('fs');
const sync = require('./sync');
const parse = require('filbert/filbert_loose').parse_dammit;
const glob = require('glob');
const astring = require('astring');

sync();

glob('temp/**/*.py', (err, files) => {
  for (let i = 0; i < files.length; i++) {
    console.log(astring.generate(parse(fs.readFileSync(files[i]).toString())));
  }
});