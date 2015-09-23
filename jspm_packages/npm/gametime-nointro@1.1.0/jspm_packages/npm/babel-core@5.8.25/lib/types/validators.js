/* */ 
"format cjs";
"use strict";
exports.__esModule = true;
exports.isBinding = isBinding;
exports.isReferenced = isReferenced;
exports.isValidIdentifier = isValidIdentifier;
exports.isLet = isLet;
exports.isBlockScoped = isBlockScoped;
exports.isVar = isVar;
exports.isSpecifierDefault = isSpecifierDefault;
exports.isScope = isScope;
exports.isImmutable = isImmutable;
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
var _retrievers = require("./retrievers");
var _esutils = require("esutils");
var _esutils2 = _interopRequireDefault(_esutils);
var _index = require("./index");
var t = _interopRequireWildcard(_index);
function isBinding(node, parent) {
  var bindingKey = _retrievers.getBindingIdentifiers.keys[parent.type];
  if (bindingKey) {
    return parent[bindingKey] === node;
  } else {
    return false;
  }
}
function isReferenced(node, parent) {
  switch (parent.type) {
    case "MemberExpression":
    case "JSXMemberExpression":
      if (parent.property === node && parent.computed) {
        return true;
      } else if (parent.object === node) {
        return true;
      } else {
        return false;
      }
    case "MetaProperty":
      return false;
    case "Property":
      if (parent.key === node) {
        return parent.computed;
      }
    case "VariableDeclarator":
      return parent.id !== node;
    case "ArrowFunctionExpression":
    case "FunctionDeclaration":
    case "FunctionExpression":
      var _arr = parent.params;
      for (var _i = 0; _i < _arr.length; _i++) {
        var param = _arr[_i];
        if (param === node)
          return false;
      }
      return parent.id !== node;
    case "ExportSpecifier":
      if (parent.source) {
        return false;
      } else {
        return parent.local === node;
      }
    case "JSXAttribute":
      return parent.name !== node;
    case "ClassProperty":
      return parent.value === node;
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
      return false;
    case "ClassDeclaration":
    case "ClassExpression":
      return parent.id !== node;
    case "MethodDefinition":
      return parent.key === node && parent.computed;
    case "LabeledStatement":
      return false;
    case "CatchClause":
      return parent.param !== node;
    case "RestElement":
      return false;
    case "AssignmentExpression":
      return parent.right === node;
    case "AssignmentPattern":
      return parent.right === node;
    case "ObjectPattern":
    case "ArrayPattern":
      return false;
  }
  return true;
}
function isValidIdentifier(name) {
  if (typeof name !== "string" || _esutils2["default"].keyword.isReservedWordES6(name, true)) {
    return false;
  } else {
    return _esutils2["default"].keyword.isIdentifierNameES6(name);
  }
}
function isLet(node) {
  return t.isVariableDeclaration(node) && (node.kind !== "var" || node._let);
}
function isBlockScoped(node) {
  return t.isFunctionDeclaration(node) || t.isClassDeclaration(node) || t.isLet(node);
}
function isVar(node) {
  return t.isVariableDeclaration(node, {kind: "var"}) && !node._let;
}
function isSpecifierDefault(specifier) {
  return t.isImportDefaultSpecifier(specifier) || t.isIdentifier(specifier.imported || specifier.exported, {name: "default"});
}
function isScope(node, parent) {
  if (t.isBlockStatement(node) && t.isFunction(parent, {body: node})) {
    return false;
  }
  return t.isScopable(node);
}
function isImmutable(node) {
  if (t.isType(node.type, "Immutable"))
    return true;
  if (t.isLiteral(node)) {
    if (node.regex) {
      return false;
    } else {
      return true;
    }
  } else if (t.isIdentifier(node)) {
    if (node.name === "undefined") {
      return true;
    } else {
      return false;
    }
  }
  return false;
}
