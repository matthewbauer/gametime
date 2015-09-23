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
var _helpersReact = require("../../helpers/react");
var react = _interopRequireWildcard(_helpersReact);
var _types = require("../../../types/index");
var t = _interopRequireWildcard(_types);
var metadata = {optional: true};
exports.metadata = metadata;
function hasRefOrSpread(attrs) {
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (t.isJSXSpreadAttribute(attr))
      return true;
    if (isJSXAttributeOfName(attr, "ref"))
      return true;
  }
  return false;
}
function isJSXAttributeOfName(attr, name) {
  return t.isJSXAttribute(attr) && t.isJSXIdentifier(attr.name, {name: name});
}
var visitor = {JSXElement: function JSXElement(node, parent, scope, file) {
    var open = node.openingElement;
    if (hasRefOrSpread(open.attributes))
      return;
    var isComponent = true;
    var props = t.objectExpression([]);
    var obj = t.objectExpression([]);
    var key = t.literal(null);
    var type = open.name;
    if (t.isJSXIdentifier(type) && react.isCompatTag(type.name)) {
      type = t.literal(type.name);
      isComponent = false;
    }
    function pushElemProp(key, value) {
      pushProp(obj.properties, t.identifier(key), value);
    }
    function pushProp(objProps, key, value) {
      objProps.push(t.property("init", key, value));
    }
    if (node.children.length) {
      var children = react.buildChildren(node);
      children = children.length === 1 ? children[0] : t.arrayExpression(children);
      pushProp(props.properties, t.identifier("children"), children);
    }
    for (var i = 0; i < open.attributes.length; i++) {
      var attr = open.attributes[i];
      if (isJSXAttributeOfName(attr, "key")) {
        key = attr.value;
      } else {
        pushProp(props.properties, attr.name, attr.value || t.identifier("true"));
      }
    }
    if (isComponent) {
      props = t.callExpression(file.addHelper("default-props"), [t.memberExpression(type, t.identifier("defaultProps")), props]);
    }
    pushElemProp("$$typeof", file.addHelper("typeof-react-element"));
    pushElemProp("type", type);
    pushElemProp("key", key);
    pushElemProp("ref", t.literal(null));
    pushElemProp("props", props);
    pushElemProp("_owner", t.literal(null));
    return obj;
  }};
exports.visitor = visitor;
