/* */ 
"format cjs";
"use strict";
exports.__esModule = true;
exports.Identifier = Identifier;
exports.RestElement = RestElement;
exports.ObjectExpression = ObjectExpression;
exports.Property = Property;
exports.ArrayExpression = ArrayExpression;
exports.Literal = Literal;
exports._Literal = _Literal;
exports._stringLiteral = _stringLiteral;
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
var _types = require("../../types/index");
var t = _interopRequireWildcard(_types);
function Identifier(node) {
  this.push(node.name);
}
function RestElement(node, print) {
  this.push("...");
  print.plain(node.argument);
}
exports.SpreadElement = RestElement;
exports.SpreadProperty = RestElement;
function ObjectExpression(node, print) {
  var props = node.properties;
  this.push("{");
  print.printInnerComments();
  if (props.length) {
    this.space();
    print.list(props, {indent: true});
    this.space();
  }
  this.push("}");
}
exports.ObjectPattern = ObjectExpression;
function Property(node, print) {
  print.list(node.decorators, {separator: ""});
  if (node.method || node.kind === "get" || node.kind === "set") {
    this._method(node, print);
  } else {
    if (node.computed) {
      this.push("[");
      print.plain(node.key);
      this.push("]");
    } else {
      if (t.isAssignmentPattern(node.value) && t.isIdentifier(node.key) && node.key.name === node.value.left.name) {
        print.plain(node.value);
        return;
      }
      print.plain(node.key);
      if (node.shorthand && (t.isIdentifier(node.key) && t.isIdentifier(node.value) && node.key.name === node.value.name)) {
        return;
      }
    }
    this.push(":");
    this.space();
    print.plain(node.value);
  }
}
function ArrayExpression(node, print) {
  var elems = node.elements;
  var len = elems.length;
  this.push("[");
  print.printInnerComments();
  for (var i = 0; i < elems.length; i++) {
    var elem = elems[i];
    if (elem) {
      if (i > 0)
        this.space();
      print.plain(elem);
      if (i < len - 1)
        this.push(",");
    } else {
      this.push(",");
    }
  }
  this.push("]");
}
exports.ArrayPattern = ArrayExpression;
function Literal(node) {
  this.push("");
  this._push(this._Literal(node));
}
function _Literal(node) {
  var val = node.value;
  if (node.regex) {
    return "/" + node.regex.pattern + "/" + node.regex.flags;
  }
  if (node.raw != null && node.rawValue != null && val === node.rawValue) {
    return node.raw;
  }
  switch (typeof val) {
    case "string":
      return this._stringLiteral(val);
    case "number":
      return val + "";
    case "boolean":
      return val ? "true" : "false";
    default:
      if (val === null) {
        return "null";
      } else {
        throw new Error("Invalid Literal type");
      }
  }
}
function _stringLiteral(val) {
  val = JSON.stringify(val);
  val = val.replace(/[\u000A\u000D\u2028\u2029]/g, function(c) {
    return "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
  });
  if (this.format.quotes === "single") {
    val = val.slice(1, -1);
    val = val.replace(/\\"/g, '"');
    val = val.replace(/'/g, "\\'");
    val = "'" + val + "'";
  }
  return val;
}
