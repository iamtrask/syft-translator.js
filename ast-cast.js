module.exports = function astCast(config, json, fileName) {
  for (const fileNameSelector in config) {
    if (!config.hasOwnProperty(fileNameSelector)) continue;
    if (fileNameSelector === '*'
      || isFileNameSelected(fileNameSelector, fileName)
    ) {
      const rules = config[fileNameSelector];
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];

        if (rule.type === json.type) {
          if (rule.match) {
            const match = new RegExp(rule.match);
            if (match.test(json.raw)) {
              json = castWithRule(rule, json, match);
            }
          } else {
            json = castWithRule(rule, json);
          }
        }
      }
    }
  }

  if (json.hasOwnProperty('body')) {
    if (Array.isArray(json.body)) {
      json.body = json.body.map(bodyPart => astCast(config, bodyPart, fileName));
    } else {
      json.body = astCast(config, json.body, fileName);
    }
  }
  if (json.hasOwnProperty('argument')) {
    json.argument = astCast(config, json.argument, fileName);
  }
  if (json.hasOwnProperty('arguments')) {
    json.arguments = json.arguments.map(part => astCast(config, part, fileName));
  }
  if (json.hasOwnProperty('callee')) {
    json.callee = astCast(config, json.callee, fileName);
  }
  if (json.hasOwnProperty('consequent')) {
    json.consequent = astCast(config, json.consequent, fileName);
  }
  if (json.hasOwnProperty('declarations')) {
    json.declarations = json.declarations.map(part => astCast(config, part, fileName));
  }
  if (json.hasOwnProperty('expression')) {
    json.expression = astCast(config, json.expression, fileName);
  }
  if (json.hasOwnProperty('init')) {
    json.init = astCast(config, json.init, fileName);
  }
  if (json.hasOwnProperty('left')) {
    json.left = astCast(config, json.left, fileName);
  }
  if (json.hasOwnProperty('object')) {
    json.object = astCast(config, json.object, fileName);
  }
  if (json.hasOwnProperty('right')) {
    json.right = astCast(config, json.right, fileName);
  }
  if (json.hasOwnProperty('test')) {
    if (json.test.hasOwnProperty('left')) {
      json.test.left = astCast(config, json.test.left, fileName);
      json.test.right = astCast(config, json.test.right, fileName);
    } else {
      json.test = astCast(config, json.test, fileName);
    }
  }
  return json;
};

function castWithRule(rule, json, match) {
  const operations = rule.operations;
  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    switch (operation.name) {
      case 'substring':
        json.raw = json.raw.substring(operation.arguments[0], json.raw.length + operation.arguments[1]);
        break;
      case 'wrap':
        json.raw = operation.arguments[0] + json.raw + operation.arguments[1];
        break;
      case 'replace':
        json.raw = json.raw.replace(match, operation.arguments[0]);
        break;
      case 'unNestBody':
        json = unNestBody(json);
        break;
      default:
        throw new Error(`Unknown operation ${ operation.name }`);
    }
  }
  return json;
}

function isFileNameSelected(fileNameSelector, fileName) {
  return fileNameSelector === fileName;
}

function unNestBody(json) {
  let result = [];
  const body = json.body;
  for (let i = 0; i < body.length; i++) {
    const bodyItem = body[i];
    result = result.concat(bodyItem.body);
  }
  json.body = result;
  return json;
}