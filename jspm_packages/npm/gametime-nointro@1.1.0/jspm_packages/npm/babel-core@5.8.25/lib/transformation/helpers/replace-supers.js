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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var _messages = require("../../messages");
var messages = _interopRequireWildcard(_messages);
var _types = require("../../types/index");
var t = _interopRequireWildcard(_types);
function isIllegalBareSuper(node, parent) {
  if (!t.isSuper(node))
    return false;
  if (t.isMemberExpression(parent, {computed: false}))
    return false;
  if (t.isCallExpression(parent, {callee: node}))
    return false;
  return true;
}
function isMemberExpressionSuper(node) {
  return t.isMemberExpression(node) && t.isSuper(node.object);
}
var visitor = {enter: function enter(node, parent, scope, state) {
    var topLevel = state.topLevel;
    var self = state.self;
    if (t.isFunction(node) && !t.isArrowFunctionExpression(node)) {
      self.traverseLevel(this, false);
      return this.skip();
    }
    if (t.isProperty(node, {method: true}) || t.isMethodDefinition(node)) {
      return this.skip();
    }
    var getThisReference = topLevel ? t.thisExpression : self.getThisReference.bind(self);
    var callback = self.specHandle;
    if (self.isLoose)
      callback = self.looseHandle;
    var result = callback.call(self, this, getThisReference);
    if (result)
      this.hasSuper = true;
    if (result === true)
      return;
    return result;
  }};
var ReplaceSupers = (function() {
  function ReplaceSupers(opts) {
    var inClass = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    _classCallCheck(this, ReplaceSupers);
    this.topLevelThisReference = opts.topLevelThisReference;
    this.methodPath = opts.methodPath;
    this.methodNode = opts.methodNode;
    this.superRef = opts.superRef;
    this.isStatic = opts.isStatic;
    this.hasSuper = false;
    this.inClass = inClass;
    this.isLoose = opts.isLoose;
    this.scope = opts.scope;
    this.file = opts.file;
    this.opts = opts;
  }
  ReplaceSupers.prototype.getObjectRef = function getObjectRef() {
    return this.opts.objectRef || this.opts.getObjectRef();
  };
  ReplaceSupers.prototype.setSuperProperty = function setSuperProperty(property, value, isComputed, thisExpression) {
    return t.callExpression(this.file.addHelper("set"), [t.callExpression(t.memberExpression(t.identifier("Object"), t.identifier("getPrototypeOf")), [this.isStatic ? this.getObjectRef() : t.memberExpression(this.getObjectRef(), t.identifier("prototype"))]), isComputed ? property : t.literal(property.name), value, thisExpression]);
  };
  ReplaceSupers.prototype.getSuperProperty = function getSuperProperty(property, isComputed, thisExpression) {
    return t.callExpression(this.file.addHelper("get"), [t.callExpression(t.memberExpression(t.identifier("Object"), t.identifier("getPrototypeOf")), [this.isStatic ? this.getObjectRef() : t.memberExpression(this.getObjectRef(), t.identifier("prototype"))]), isComputed ? property : t.literal(property.name), thisExpression]);
  };
  ReplaceSupers.prototype.replace = function replace() {
    this.traverseLevel(this.methodPath.get("value"), true);
  };
  ReplaceSupers.prototype.traverseLevel = function traverseLevel(path, topLevel) {
    var state = {
      self: this,
      topLevel: topLevel
    };
    path.traverse(visitor, state);
  };
  ReplaceSupers.prototype.getThisReference = function getThisReference() {
    if (this.topLevelThisReference) {
      return this.topLevelThisReference;
    } else {
      var ref = this.topLevelThisReference = this.scope.generateUidIdentifier("this");
      this.methodNode.value.body.body.unshift(t.variableDeclaration("var", [t.variableDeclarator(this.topLevelThisReference, t.thisExpression())]));
      return ref;
    }
  };
  ReplaceSupers.prototype.getLooseSuperProperty = function getLooseSuperProperty(id, parent) {
    var methodNode = this.methodNode;
    var methodName = methodNode.key;
    var superRef = this.superRef || t.identifier("Function");
    if (parent.property === id) {
      return;
    } else if (t.isCallExpression(parent, {callee: id})) {
      parent.arguments.unshift(t.thisExpression());
      if (methodName.name === "constructor") {
        if (parent.arguments.length === 2 && t.isSpreadElement(parent.arguments[1]) && t.isIdentifier(parent.arguments[1].argument, {name: "arguments"})) {
          parent.arguments[1] = parent.arguments[1].argument;
          return t.memberExpression(superRef, t.identifier("apply"));
        } else {
          return t.memberExpression(superRef, t.identifier("call"));
        }
      } else {
        id = superRef;
        if (!methodNode["static"]) {
          id = t.memberExpression(id, t.identifier("prototype"));
        }
        id = t.memberExpression(id, methodName, methodNode.computed);
        return t.memberExpression(id, t.identifier("call"));
      }
    } else if (t.isMemberExpression(parent) && !methodNode["static"]) {
      return t.memberExpression(superRef, t.identifier("prototype"));
    } else {
      return superRef;
    }
  };
  ReplaceSupers.prototype.looseHandle = function looseHandle(path, getThisReference) {
    var node = path.node;
    if (path.isSuper()) {
      return this.getLooseSuperProperty(node, path.parent);
    } else if (path.isCallExpression()) {
      var callee = node.callee;
      if (!t.isMemberExpression(callee))
        return;
      if (!t.isSuper(callee.object))
        return;
      t.appendToMemberExpression(callee, t.identifier("call"));
      node.arguments.unshift(getThisReference());
      return true;
    }
  };
  ReplaceSupers.prototype.specHandleAssignmentExpression = function specHandleAssignmentExpression(ref, path, node, getThisReference) {
    if (node.operator === "=") {
      return this.setSuperProperty(node.left.property, node.right, node.left.computed, getThisReference());
    } else {
      ref = ref || path.scope.generateUidIdentifier("ref");
      return [t.variableDeclaration("var", [t.variableDeclarator(ref, node.left)]), t.expressionStatement(t.assignmentExpression("=", node.left, t.binaryExpression(node.operator[0], ref, node.right)))];
    }
  };
  ReplaceSupers.prototype.specHandle = function specHandle(path, getThisReference) {
    var methodNode = this.methodNode;
    var property;
    var computed;
    var args;
    var thisReference;
    var parent = path.parent;
    var node = path.node;
    if (isIllegalBareSuper(node, parent)) {
      throw path.errorWithNode(messages.get("classesIllegalBareSuper"));
    }
    if (t.isCallExpression(node)) {
      var callee = node.callee;
      if (t.isSuper(callee)) {
        property = methodNode.key;
        computed = methodNode.computed;
        args = node.arguments;
        if (methodNode.key.name !== "constructor" || !this.inClass) {
          var methodName = methodNode.key.name || "METHOD_NAME";
          throw this.file.errorWithNode(node, messages.get("classesIllegalSuperCall", methodName));
        }
      } else if (isMemberExpressionSuper(callee)) {
        property = callee.property;
        computed = callee.computed;
        args = node.arguments;
      }
    } else if (t.isMemberExpression(node) && t.isSuper(node.object)) {
      property = node.property;
      computed = node.computed;
    } else if (t.isUpdateExpression(node) && isMemberExpressionSuper(node.argument)) {
      var binary = t.binaryExpression(node.operator[0], node.argument, t.literal(1));
      if (node.prefix) {
        return this.specHandleAssignmentExpression(null, path, binary, getThisReference);
      } else {
        var ref = path.scope.generateUidIdentifier("ref");
        return this.specHandleAssignmentExpression(ref, path, binary, getThisReference).concat(t.expressionStatement(ref));
      }
    } else if (t.isAssignmentExpression(node) && isMemberExpressionSuper(node.left)) {
      return this.specHandleAssignmentExpression(null, path, node, getThisReference);
    }
    if (!property)
      return;
    thisReference = getThisReference();
    var superProperty = this.getSuperProperty(property, computed, thisReference);
    if (args) {
      if (args.length === 1 && t.isSpreadElement(args[0])) {
        return t.callExpression(t.memberExpression(superProperty, t.identifier("apply")), [thisReference, args[0].argument]);
      } else {
        return t.callExpression(t.memberExpression(superProperty, t.identifier("call")), [thisReference].concat(args));
      }
    } else {
      return superProperty;
    }
  };
  return ReplaceSupers;
})();
exports["default"] = ReplaceSupers;
module.exports = exports["default"];
