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
var pre = [function(self) {
  if (self.key === "body" && (self.isBlockStatement() || self.isClassBody())) {
    self.node.body = [];
    return true;
  }
}, function(self, parent) {
  var replace = false;
  replace = replace || self.key === "body" && parent.isArrowFunctionExpression();
  replace = replace || self.key === "argument" && parent.isThrowStatement();
  if (replace) {
    self.replaceWith(t.identifier("undefined"));
    return true;
  }
}];
exports.pre = pre;
var post = [function(self, parent) {
  var removeParent = false;
  removeParent = removeParent || self.key === "test" && (parent.isWhile() || parent.isSwitchCase());
  removeParent = removeParent || self.key === "declaration" && parent.isExportDeclaration();
  removeParent = removeParent || self.key === "body" && parent.isLabeledStatement();
  removeParent = removeParent || self.listKey === "declarations" && parent.isVariableDeclaration() && parent.node.declarations.length === 0;
  removeParent = removeParent || self.key === "expression" && parent.isExpressionStatement();
  removeParent = removeParent || self.key === "test" && parent.isIfStatement();
  if (removeParent) {
    parent.dangerouslyRemove();
    return true;
  }
}, function(self, parent) {
  if (parent.isSequenceExpression() && parent.node.expressions.length === 1) {
    parent.replaceWith(parent.node.expressions[0]);
    return true;
  }
}, function(self, parent) {
  if (parent.isBinary()) {
    if (self.key === "left") {
      parent.replaceWith(parent.node.right);
    } else {
      parent.replaceWith(parent.node.left);
    }
    return true;
  }
}];
exports.post = post;
