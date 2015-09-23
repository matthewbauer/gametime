/* */ 
"format cjs";
"use strict";
exports.__esModule = true;
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
var _types = require("../../../types/index");
var t = _interopRequireWildcard(_types);
var metadata = {group: "builtin-trailing"};
exports.metadata = metadata;
function shouldShadow(path, shadowPath) {
  if (path.is("_forceShadow")) {
    return true;
  } else {
    return shadowPath && !shadowPath.isArrowFunctionExpression();
  }
}
function remap(path, key, create) {
  var shadowPath = path.inShadow(key);
  if (!shouldShadow(path, shadowPath))
    return;
  var shadowFunction = path.node._shadowedFunctionLiteral;
  var currentFunction;
  var fnPath = path.findParent(function(path) {
    if (path.isProgram() || path.isFunction()) {
      currentFunction = currentFunction || path;
    }
    if (path.isProgram()) {
      return true;
    } else if (path.isFunction()) {
      if (shadowFunction) {
        return path === shadowFunction || path.node === shadowFunction.node;
      } else {
        return !path.is("shadow");
      }
    }
    return false;
  });
  if (fnPath === currentFunction)
    return;
  var cached = fnPath.getData(key);
  if (cached)
    return cached;
  var init = create();
  var id = path.scope.generateUidIdentifier(key);
  fnPath.setData(key, id);
  fnPath.scope.push({
    id: id,
    init: init
  });
  return id;
}
var visitor = {
  ThisExpression: function ThisExpression() {
    return remap(this, "this", function() {
      return t.thisExpression();
    });
  },
  ReferencedIdentifier: function ReferencedIdentifier(node) {
    if (node.name === "arguments") {
      return remap(this, "arguments", function() {
        return t.identifier("arguments");
      });
    }
  }
};
exports.visitor = visitor;
