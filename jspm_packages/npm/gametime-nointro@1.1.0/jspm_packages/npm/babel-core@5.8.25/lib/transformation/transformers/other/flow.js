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
var FLOW_DIRECTIVE = "@flow";
var visitor = {
  Program: function Program(node, parent, scope, file) {
    var _arr = file.ast.comments;
    for (var _i = 0; _i < _arr.length; _i++) {
      var comment = _arr[_i];
      if (comment.value.indexOf(FLOW_DIRECTIVE) >= 0) {
        comment.value = comment.value.replace(FLOW_DIRECTIVE, "");
        if (!comment.value.replace(/\*/g, "").trim())
          comment._displayed = true;
      }
    }
  },
  Flow: function Flow() {
    this.dangerouslyRemove();
  },
  ClassProperty: function ClassProperty(node) {
    node.typeAnnotation = null;
    if (!node.value)
      this.dangerouslyRemove();
  },
  Class: function Class(node) {
    node["implements"] = null;
  },
  Function: function Function(node) {
    for (var i = 0; i < node.params.length; i++) {
      var param = node.params[i];
      param.optional = false;
    }
  },
  TypeCastExpression: function TypeCastExpression(node) {
    do {
      node = node.expression;
    } while (t.isTypeCastExpression(node));
    return node;
  }
};
exports.visitor = visitor;
