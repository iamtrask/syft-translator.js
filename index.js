'use strict';
const fsExtra = require('fs-extra');
const sync = require('./sync');
const parse = require('filbert/filbert_loose').parse_dammit;
const glob = require('glob');
const astring = require('astring');
const astCast = require('./ast-cast');
const config = JSON.parse(fsExtra.readFileSync('./config.json'));
sync();

fsExtra.removeSync('./output');

glob('temp/**/*.py', (err, files) => {
  for (let i = 0; i < files.length; i++) {
    const fileName = files[i].substring(5);
    const fileSource = fsExtra.readFileSync(files[i]).toString();
    const fileAST = parse(fileSource);
    console.log(`translating ${ fileName }`);
    try {
      const translation = astring.generate(astCast(config, fileAST));
      fsExtra.outputFileSync(`output/${ fileName.substring(7, fileName.length - 2) }js`, translation);
    } catch (e) {
      console.warn(`There was a problem translating ${ fileName }`);
      console.warn(e);
    }
  }
});