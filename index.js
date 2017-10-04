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
fsExtra.removeSync('./output-cast');

glob('temp/**/*.py', (err, files) => {
  for (let i = 0; i < files.length; i++) {
    const fileName = files[i].substring(5);
    const fileSource = fsExtra.readFileSync(files[i]).toString();
    console.log(`translating ${ fileName }`);
    if (fileName === 'PySyft/syft/tensor.py') {
      global.debug = true;
    }
    try {
      const fileAST = parse(fileSource);
      fsExtra.outputFileSync(`output-ast/${ fileName.substring(7, fileName.length - 2) }json`, JSON.stringify(fileAST, null, 2));

      const fileCastAst = astCast(config, fileAST, fileName.substring(7));
      fsExtra.outputFileSync(`output-cast-ast/${ fileName.substring(7, fileName.length - 2) }json`, JSON.stringify(fileCastAst, null, 2));

      const translation = astring.generate(fileCastAst);
      fsExtra.outputFileSync(`output/${ fileName.substring(7, fileName.length - 2) }js`, translation);
    } catch (e) {
      console.warn(`There was a problem translating ${ fileName }`);
      console.warn(e);
    }
  }
});