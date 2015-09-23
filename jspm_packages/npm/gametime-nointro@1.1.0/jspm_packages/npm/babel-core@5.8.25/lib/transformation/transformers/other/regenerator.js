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
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {"default": obj};
}
var _regenerator = require("regenerator");
var _regenerator2 = _interopRequireDefault(_regenerator);
var _types = require("../../../types/index");
var t = _interopRequireWildcard(_types);
var NodePath = _regenerator2["default"].types.NodePath;
var metadata = {group: "builtin-advanced"};
exports.metadata = metadata;
var visitor = {Function: {exit: function exit(node) {
      if (node.async || node.generator) {
        _regenerator2["default"].transform(convertNodePath(this));
      }
    }}};
exports.visitor = visitor;
function convertNodePath(path) {
  var programNode;
  var keysAlongPath = [];
  while (path) {
    var pp = path.parentPath;
    var parentNode = pp && pp.node;
    if (parentNode) {
      keysAlongPath.push(path.key);
      if (parentNode !== path.container) {
        var found = Object.keys(parentNode).some(function(listKey) {
          if (parentNode[listKey] === path.container) {
            keysAlongPath.push(listKey);
            return true;
          }
        });
        if (!found) {
          throw new Error("Failed to find container object in parent node");
        }
      }
      if (t.isProgram(parentNode)) {
        programNode = parentNode;
        break;
      }
    }
    path = pp;
  }
  if (!programNode) {
    throw new Error("Failed to find root Program node");
  }
  var nodePath = new NodePath(programNode);
  while (keysAlongPath.length > 0) {
    nodePath = nodePath.get(keysAlongPath.pop());
  }
  return nodePath;
}
