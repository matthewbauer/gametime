/* */ 
"format cjs";
"use strict";
exports.__esModule = true;
exports.explode = explode;
exports.verify = verify;
exports.merge = merge;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {"default": obj};
}
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
var _pathLibVirtualTypes = require("./path/lib/virtual-types");
var virtualTypes = _interopRequireWildcard(_pathLibVirtualTypes);
var _messages = require("../messages");
var messages = _interopRequireWildcard(_messages);
var _types = require("../types/index");
var t = _interopRequireWildcard(_types);
var _lodashLangClone = require("lodash/lang/clone");
var _lodashLangClone2 = _interopRequireDefault(_lodashLangClone);
function explode(visitor) {
  if (visitor._exploded)
    return visitor;
  visitor._exploded = true;
  for (var nodeType in visitor) {
    if (shouldIgnoreKey(nodeType))
      continue;
    var parts = nodeType.split("|");
    if (parts.length === 1)
      continue;
    var fns = visitor[nodeType];
    delete visitor[nodeType];
    var _arr = parts;
    for (var _i = 0; _i < _arr.length; _i++) {
      var part = _arr[_i];
      visitor[part] = fns;
    }
  }
  verify(visitor);
  delete visitor.__esModule;
  ensureEntranceObjects(visitor);
  ensureCallbackArrays(visitor);
  var _arr2 = Object.keys(visitor);
  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var nodeType = _arr2[_i2];
    if (shouldIgnoreKey(nodeType))
      continue;
    var wrapper = virtualTypes[nodeType];
    if (!wrapper)
      continue;
    var fns = visitor[nodeType];
    for (var type in fns) {
      fns[type] = wrapCheck(wrapper, fns[type]);
    }
    delete visitor[nodeType];
    if (wrapper.types) {
      var _arr4 = wrapper.types;
      for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
        var type = _arr4[_i4];
        if (visitor[type]) {
          mergePair(visitor[type], fns);
        } else {
          visitor[type] = fns;
        }
      }
    } else {
      mergePair(visitor, fns);
    }
  }
  for (var nodeType in visitor) {
    if (shouldIgnoreKey(nodeType))
      continue;
    var fns = visitor[nodeType];
    var aliases = t.FLIPPED_ALIAS_KEYS[nodeType];
    if (!aliases)
      continue;
    delete visitor[nodeType];
    var _arr3 = aliases;
    for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
      var alias = _arr3[_i3];
      var existing = visitor[alias];
      if (existing) {
        mergePair(existing, fns);
      } else {
        visitor[alias] = _lodashLangClone2["default"](fns);
      }
    }
  }
  for (var nodeType in visitor) {
    if (shouldIgnoreKey(nodeType))
      continue;
    ensureCallbackArrays(visitor[nodeType]);
  }
  return visitor;
}
function verify(visitor) {
  if (visitor._verified)
    return;
  if (typeof visitor === "function") {
    throw new Error(messages.get("traverseVerifyRootFunction"));
  }
  for (var nodeType in visitor) {
    if (shouldIgnoreKey(nodeType))
      continue;
    if (t.TYPES.indexOf(nodeType) < 0) {
      throw new Error(messages.get("traverseVerifyNodeType", nodeType));
    }
    var visitors = visitor[nodeType];
    if (typeof visitors === "object") {
      for (var visitorKey in visitors) {
        if (visitorKey === "enter" || visitorKey === "exit")
          continue;
        throw new Error(messages.get("traverseVerifyVisitorProperty", nodeType, visitorKey));
      }
    }
  }
  visitor._verified = true;
}
function merge(visitors) {
  var rootVisitor = {};
  var _arr5 = visitors;
  for (var _i5 = 0; _i5 < _arr5.length; _i5++) {
    var visitor = _arr5[_i5];
    explode(visitor);
    for (var type in visitor) {
      var nodeVisitor = rootVisitor[type] = rootVisitor[type] || {};
      mergePair(nodeVisitor, visitor[type]);
    }
  }
  return rootVisitor;
}
function ensureEntranceObjects(obj) {
  for (var key in obj) {
    if (shouldIgnoreKey(key))
      continue;
    var fns = obj[key];
    if (typeof fns === "function") {
      obj[key] = {enter: fns};
    }
  }
}
function ensureCallbackArrays(obj) {
  if (obj.enter && !Array.isArray(obj.enter))
    obj.enter = [obj.enter];
  if (obj.exit && !Array.isArray(obj.exit))
    obj.exit = [obj.exit];
}
function wrapCheck(wrapper, fn) {
  return function() {
    if (wrapper.checkPath(this)) {
      return fn.apply(this, arguments);
    }
  };
}
function shouldIgnoreKey(key) {
  if (key[0] === "_")
    return true;
  if (key === "enter" || key === "exit" || key === "shouldSkip")
    return true;
  if (key === "blacklist" || key === "noScope" || key === "skipKeys")
    return true;
  return false;
}
function mergePair(dest, src) {
  for (var key in src) {
    dest[key] = [].concat(dest[key] || [], src[key]);
  }
}
