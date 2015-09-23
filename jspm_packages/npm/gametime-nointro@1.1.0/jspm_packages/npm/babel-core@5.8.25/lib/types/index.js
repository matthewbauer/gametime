/* */ 
"format cjs";
"use strict";
exports.__esModule = true;
exports.is = is;
exports.isType = isType;
exports.shallowEqual = shallowEqual;
exports.appendToMemberExpression = appendToMemberExpression;
exports.prependToMemberExpression = prependToMemberExpression;
exports.ensureBlock = ensureBlock;
exports.clone = clone;
exports.cloneDeep = cloneDeep;
exports.buildMatchMemberExpression = buildMatchMemberExpression;
exports.removeComments = removeComments;
exports.inheritsComments = inheritsComments;
exports.inheritTrailingComments = inheritTrailingComments;
exports.inheritLeadingComments = inheritLeadingComments;
exports.inheritInnerComments = inheritInnerComments;
exports.inherits = inherits;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {"default": obj};
}
var _toFastProperties = require("to-fast-properties");
var _toFastProperties2 = _interopRequireDefault(_toFastProperties);
var _lodashArrayCompact = require("lodash/array/compact");
var _lodashArrayCompact2 = _interopRequireDefault(_lodashArrayCompact);
var _lodashObjectAssign = require("lodash/object/assign");
var _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);
var _lodashCollectionEach = require("lodash/collection/each");
var _lodashCollectionEach2 = _interopRequireDefault(_lodashCollectionEach);
var _lodashArrayUniq = require("lodash/array/uniq");
var _lodashArrayUniq2 = _interopRequireDefault(_lodashArrayUniq);
require("./definitions/init");
var _definitions = require("./definitions/index");
var t = exports;
function registerType(type, skipAliasCheck) {
  var is = t["is" + type] = function(node, opts) {
    return t.is(type, node, opts, skipAliasCheck);
  };
  t["assert" + type] = function(node, opts) {
    opts = opts || {};
    if (!is(node, opts)) {
      throw new Error("Expected type " + JSON.stringify(type) + " with option " + JSON.stringify(opts));
    }
  };
}
var STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
exports.STATEMENT_OR_BLOCK_KEYS = STATEMENT_OR_BLOCK_KEYS;
var FLATTENABLE_KEYS = ["body", "expressions"];
exports.FLATTENABLE_KEYS = FLATTENABLE_KEYS;
var FOR_INIT_KEYS = ["left", "init"];
exports.FOR_INIT_KEYS = FOR_INIT_KEYS;
var COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
exports.COMMENT_KEYS = COMMENT_KEYS;
var INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["_scopeInfo", "_paths", "start", "loc", "end"]
};
exports.INHERIT_KEYS = INHERIT_KEYS;
var BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
exports.BOOLEAN_NUMBER_BINARY_OPERATORS = BOOLEAN_NUMBER_BINARY_OPERATORS;
var EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
exports.EQUALITY_BINARY_OPERATORS = EQUALITY_BINARY_OPERATORS;
var COMPARISON_BINARY_OPERATORS = EQUALITY_BINARY_OPERATORS.concat(["in", "instanceof"]);
exports.COMPARISON_BINARY_OPERATORS = COMPARISON_BINARY_OPERATORS;
var BOOLEAN_BINARY_OPERATORS = [].concat(COMPARISON_BINARY_OPERATORS, BOOLEAN_NUMBER_BINARY_OPERATORS);
exports.BOOLEAN_BINARY_OPERATORS = BOOLEAN_BINARY_OPERATORS;
var NUMBER_BINARY_OPERATORS = ["-", "/", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
exports.NUMBER_BINARY_OPERATORS = NUMBER_BINARY_OPERATORS;
var BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
exports.BOOLEAN_UNARY_OPERATORS = BOOLEAN_UNARY_OPERATORS;
var NUMBER_UNARY_OPERATORS = ["+", "-", "++", "--", "~"];
exports.NUMBER_UNARY_OPERATORS = NUMBER_UNARY_OPERATORS;
var STRING_UNARY_OPERATORS = ["typeof"];
exports.STRING_UNARY_OPERATORS = STRING_UNARY_OPERATORS;
exports.VISITOR_KEYS = _definitions.VISITOR_KEYS;
exports.BUILDER_KEYS = _definitions.BUILDER_KEYS;
exports.ALIAS_KEYS = _definitions.ALIAS_KEYS;
_lodashCollectionEach2["default"](t.VISITOR_KEYS, function(keys, type) {
  registerType(type, true);
});
t.FLIPPED_ALIAS_KEYS = {};
_lodashCollectionEach2["default"](t.ALIAS_KEYS, function(aliases, type) {
  _lodashCollectionEach2["default"](aliases, function(alias) {
    var types = t.FLIPPED_ALIAS_KEYS[alias] = t.FLIPPED_ALIAS_KEYS[alias] || [];
    types.push(type);
  });
});
_lodashCollectionEach2["default"](t.FLIPPED_ALIAS_KEYS, function(types, type) {
  t[type.toUpperCase() + "_TYPES"] = types;
  registerType(type, false);
});
var TYPES = Object.keys(t.VISITOR_KEYS).concat(Object.keys(t.FLIPPED_ALIAS_KEYS));
exports.TYPES = TYPES;
function is(type, node, opts, skipAliasCheck) {
  if (!node)
    return false;
  var matches = isType(node.type, type);
  if (!matches)
    return false;
  if (typeof opts === "undefined") {
    return true;
  } else {
    return t.shallowEqual(node, opts);
  }
}
function isType(nodeType, targetType) {
  if (nodeType === targetType)
    return true;
  var aliases = t.FLIPPED_ALIAS_KEYS[targetType];
  if (aliases) {
    if (aliases[0] === nodeType)
      return true;
    var _arr = aliases;
    for (var _i = 0; _i < _arr.length; _i++) {
      var alias = _arr[_i];
      if (nodeType === alias)
        return true;
    }
  }
  return false;
}
_lodashCollectionEach2["default"](t.VISITOR_KEYS, function(keys, type) {
  if (t.BUILDER_KEYS[type])
    return;
  var defs = {};
  _lodashCollectionEach2["default"](keys, function(key) {
    defs[key] = null;
  });
  t.BUILDER_KEYS[type] = defs;
});
_lodashCollectionEach2["default"](t.BUILDER_KEYS, function(keys, type) {
  var builder = function builder() {
    var node = {};
    node.type = type;
    var i = 0;
    for (var key in keys) {
      var arg = arguments[i++];
      if (arg === undefined)
        arg = keys[key];
      node[key] = arg;
    }
    return node;
  };
  t[type] = builder;
  t[type[0].toLowerCase() + type.slice(1)] = builder;
});
function shallowEqual(actual, expected) {
  var keys = Object.keys(expected);
  var _arr2 = keys;
  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var key = _arr2[_i2];
    if (actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
}
function appendToMemberExpression(member, append, computed) {
  member.object = t.memberExpression(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed;
  return member;
}
function prependToMemberExpression(member, prepend) {
  member.object = t.memberExpression(prepend, member.object);
  return member;
}
function ensureBlock(node) {
  var key = arguments.length <= 1 || arguments[1] === undefined ? "body" : arguments[1];
  return node[key] = t.toBlock(node[key], node);
}
function clone(node) {
  var newNode = {};
  for (var key in node) {
    if (key[0] === "_")
      continue;
    newNode[key] = node[key];
  }
  return newNode;
}
function cloneDeep(node) {
  var newNode = {};
  for (var key in node) {
    if (key[0] === "_")
      continue;
    var val = node[key];
    if (val) {
      if (val.type) {
        val = t.cloneDeep(val);
      } else if (Array.isArray(val)) {
        val = val.map(t.cloneDeep);
      }
    }
    newNode[key] = val;
  }
  return newNode;
}
function buildMatchMemberExpression(match, allowPartial) {
  var parts = match.split(".");
  return function(member) {
    if (!t.isMemberExpression(member))
      return false;
    var search = [member];
    var i = 0;
    while (search.length) {
      var node = search.shift();
      if (allowPartial && i === parts.length) {
        return true;
      }
      if (t.isIdentifier(node)) {
        if (parts[i] !== node.name)
          return false;
      } else if (t.isLiteral(node)) {
        if (parts[i] !== node.value)
          return false;
      } else if (t.isMemberExpression(node)) {
        if (node.computed && !t.isLiteral(node.property)) {
          return false;
        } else {
          search.push(node.object);
          search.push(node.property);
          continue;
        }
      } else {
        return false;
      }
      if (++i > parts.length) {
        return false;
      }
    }
    return true;
  };
}
function removeComments(node) {
  var _arr3 = COMMENT_KEYS;
  for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
    var key = _arr3[_i3];
    delete node[key];
  }
  return node;
}
function inheritsComments(child, parent) {
  inheritTrailingComments(child, parent);
  inheritLeadingComments(child, parent);
  inheritInnerComments(child, parent);
  return child;
}
function inheritTrailingComments(child, parent) {
  _inheritComments("trailingComments", child, parent);
}
function inheritLeadingComments(child, parent) {
  _inheritComments("leadingComments", child, parent);
}
function inheritInnerComments(child, parent) {
  _inheritComments("innerComments", child, parent);
}
function _inheritComments(key, child, parent) {
  if (child && parent) {
    child[key] = _lodashArrayUniq2["default"](_lodashArrayCompact2["default"]([].concat(child[key], parent[key])));
  }
}
function inherits(child, parent) {
  if (!child || !parent)
    return child;
  var _arr4 = t.INHERIT_KEYS.optional;
  for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
    var key = _arr4[_i4];
    if (child[key] == null) {
      child[key] = parent[key];
    }
  }
  var _arr5 = t.INHERIT_KEYS.force;
  for (var _i5 = 0; _i5 < _arr5.length; _i5++) {
    var key = _arr5[_i5];
    child[key] = parent[key];
  }
  t.inheritsComments(child, parent);
  return child;
}
_toFastProperties2["default"](t);
_toFastProperties2["default"](t.VISITOR_KEYS);
_lodashObjectAssign2["default"](t, require("./retrievers"));
_lodashObjectAssign2["default"](t, require("./validators"));
_lodashObjectAssign2["default"](t, require("./converters"));
_lodashObjectAssign2["default"](t, require("./flow"));
