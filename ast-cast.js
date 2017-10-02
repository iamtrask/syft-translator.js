module.exports = function astCast(config, json) {
  for (const fileSelector in config) {
    if (fileSelector === '*') {
      const rule = config[fileSelector];
      if (rule.type === json.type && (new RegExp(rule.match)).test(json.raw)) {
        json = castWithRule(rule, json);
      }
    }
  }
  if (json.hasOwnProperty('body')) {
    if (Array.isArray(json.body)) {
      json.body = json.body.map(bodyPart => astCast(config, bodyPart));
    } else {
      json.body = astCast(config, json.body);
    }
  }
  if (json.hasOwnProperty('expression')) {
    json.expression = astCast(config, json.expression);
  }
  /* "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {*/
  if (json.hasOwnProperty('argument')) {
    json.argument = astCast(config, json.argument);
  }
  if (json.hasOwnProperty('callee')) {
    json.callee = astCast(config, json.callee);
  }
  if (json.hasOwnProperty('object')) {
    json.object = astCast(config, json.object);
  }
  if (json.hasOwnProperty('consequent')) {
    json.consequent = astCast(config, json.consequent);
  }

  return json;
};

function castWithRule(rule, json) {
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
    }
  }
  return json;
}