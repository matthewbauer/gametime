/* */ 
"format cjs";
"use strict";
exports.__esModule = true;
exports.custom = custom;
exports.property = property;
exports.bare = bare;
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj["default"] = obj;
    return newObj;
  }
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {"default": obj};
}
var _getFunctionArity = require("./get-function-arity");
var _getFunctionArity2 = _interopRequireDefault(_getFunctionArity);
var _util = require("../../util");
var util = _interopRequireWildcard(_util);
var _types = require("../../types/index");
var t = _interopRequireWildcard(_types);
function visitIdentifier(context, node, scope, state) {
  if (node.name !== state.name)
    return;
  var localDeclar = scope.getBindingIdentifier(state.name);
  if (localDeclar !== state.outerDeclar)
    return;
  state.selfReference = true;
  context.stop();
}
var visitor = {
  ReferencedIdentifier: function ReferencedIdentifier(node, parent, scope, state) {
    visitIdentifier(this, node, scope, state);
  },
  BindingIdentifier: function BindingIdentifier(node, parent, scope, state) {
    visitIdentifier(this, node, scope, state);
  }
};
var wrap = function wrap(state, method, id, scope) {
  if (state.selfReference) {
    if (scope.hasBinding(id.name) && !scope.hasGlobal(id.name)) {
      scope.rename(id.name);
    } else {
      var templateName = "property-method-assignment-wrapper";
      if (method.generator)
        templateName += "-generator";
      var template = util.template(templateName, {
        FUNCTION: method,
        FUNCTION_ID: id,
        FUNCTION_KEY: scope.generateUidIdentifier(id.name)
      });
      template.callee._skipModulesRemap = true;
      var params = template.callee.body.body[0].params;
      for (var i = 0,
          len = _getFunctionArity2["default"](method); i < len; i++) {
        params.push(scope.generateUidIdentifier("x"));
      }
      return template;
    }
  }
  method.id = id;
  scope.getProgramParent().references[id.name] = true;
};
var visit = function visit(node, name, scope) {
  var state = {
    selfAssignment: false,
    selfReference: false,
    outerDeclar: scope.getBindingIdentifier(name),
    references: [],
    name: name
  };
  var binding = scope.getOwnBinding(name);
  if (binding) {
    if (binding.kind === "param") {
      state.selfReference = true;
    } else {}
  } else if (state.outerDeclar || scope.hasGlobal(name)) {
    scope.traverse(node, visitor, state);
  }
  return state;
};
function custom(node, id, scope) {
  var state = visit(node, id.name, scope);
  return wrap(state, node, id, scope);
}
function property(node, file, scope) {
  var key = t.toComputedKey(node, node.key);
  if (!t.isLiteral(key))
    return;
  var name = t.toBindingIdentifierName(key.value);
  var id = t.identifier(name);
  var method = node.value;
  var state = visit(method, name, scope);
  node.value = wrap(state, method, id, scope) || method;
}
function bare(node, parent, scope) {
  if (node.id)
    return;
  var id;
  if (t.isProperty(parent) && parent.kind === "init" && (!parent.computed || t.isLiteral(parent.key))) {
    id = parent.key;
  } else if (t.isVariableDeclarator(parent)) {
    id = parent.id;
    if (t.isIdentifier(id)) {
      var binding = scope.parent.getBinding(id.name);
      if (binding && binding.constant && scope.getBinding(id.name) === binding) {
        node.id = id;
        return;
      }
    }
  } else {
    return;
  }
  var name;
  if (t.isLiteral(id)) {
    name = id.value;
  } else if (t.isIdentifier(id)) {
    name = id.name;
  } else {
    return;
  }
  name = t.toBindingIdentifierName(name);
  id = t.identifier(name);
  var state = visit(node, name, scope);
  return wrap(state, node, id, scope);
}
