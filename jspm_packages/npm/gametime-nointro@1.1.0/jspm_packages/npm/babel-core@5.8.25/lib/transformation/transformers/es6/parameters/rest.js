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
var _util = require("../../../../util");
var util = _interopRequireWildcard(_util);
var _types = require("../../../../types/index");
var t = _interopRequireWildcard(_types);
var memberExpressionOptimisationVisitor = {
  Scope: function Scope(node, parent, scope, state) {
    if (!scope.bindingIdentifierEquals(state.name, state.outerBinding)) {
      this.skip();
    }
  },
  Flow: function Flow() {
    this.skip();
  },
  Function: function Function(node, parent, scope, state) {
    var oldNoOptimise = state.noOptimise;
    state.noOptimise = true;
    this.traverse(memberExpressionOptimisationVisitor, state);
    state.noOptimise = oldNoOptimise;
    this.skip();
  },
  ReferencedIdentifier: function ReferencedIdentifier(node, parent, scope, state) {
    if (node.name === "arguments") {
      state.deopted = true;
    }
    if (node.name !== state.name)
      return;
    if (state.noOptimise) {
      state.deopted = true;
    } else {
      if (this.parentPath.isMemberExpression({
        computed: true,
        object: node
      })) {
        var prop = this.parentPath.get("property");
        if (prop.isBaseType("number")) {
          state.candidates.push(this);
          return;
        }
      }
      if (this.parentPath.isSpreadElement() && state.offset === 0) {
        var call = this.parentPath.parentPath;
        if (call.isCallExpression() && call.node.arguments.length === 1) {
          state.candidates.push(this);
          return;
        }
      }
      state.references.push(this);
    }
  },
  BindingIdentifier: function BindingIdentifier(node, parent, scope, state) {
    if (node.name === state.name) {
      state.deopted = true;
    }
  }
};
function optimiseMemberExpression(parent, offset) {
  if (offset === 0)
    return;
  var newExpr;
  var prop = parent.property;
  if (t.isLiteral(prop)) {
    prop.value += offset;
    prop.raw = String(prop.value);
  } else {
    newExpr = t.binaryExpression("+", prop, t.literal(offset));
    parent.property = newExpr;
  }
}
function hasRest(node) {
  return t.isRestElement(node.params[node.params.length - 1]);
}
var visitor = {Function: function Function(node, parent, scope) {
    if (!hasRest(node))
      return;
    var restParam = node.params.pop();
    var rest = restParam.argument;
    var argsId = t.identifier("arguments");
    argsId._shadowedFunctionLiteral = this;
    if (t.isPattern(rest)) {
      var pattern = rest;
      rest = scope.generateUidIdentifier("ref");
      var declar = t.variableDeclaration("let", pattern.elements.map(function(elem, index) {
        var accessExpr = t.memberExpression(rest, t.literal(index), true);
        return t.variableDeclarator(elem, accessExpr);
      }));
      node.body.body.unshift(declar);
    }
    var state = {
      references: [],
      offset: node.params.length,
      argumentsNode: argsId,
      outerBinding: scope.getBindingIdentifier(rest.name),
      candidates: [],
      name: rest.name,
      deopted: false
    };
    this.traverse(memberExpressionOptimisationVisitor, state);
    if (!state.deopted && !state.references.length) {
      if (state.candidates.length) {
        var _arr = state.candidates;
        for (var _i = 0; _i < _arr.length; _i++) {
          var candidate = _arr[_i];
          candidate.replaceWith(argsId);
          if (candidate.parentPath.isMemberExpression()) {
            optimiseMemberExpression(candidate.parent, state.offset);
          }
        }
      }
      return;
    } else {
      state.references = state.references.concat(state.candidates);
    }
    state.deopted = state.deopted || !!node.shadow;
    var start = t.literal(node.params.length);
    var key = scope.generateUidIdentifier("key");
    var len = scope.generateUidIdentifier("len");
    var arrKey = key;
    var arrLen = len;
    if (node.params.length) {
      arrKey = t.binaryExpression("-", key, start);
      arrLen = t.conditionalExpression(t.binaryExpression(">", len, start), t.binaryExpression("-", len, start), t.literal(0));
    }
    var loop = util.template("rest", {
      ARRAY_TYPE: restParam.typeAnnotation,
      ARGUMENTS: argsId,
      ARRAY_KEY: arrKey,
      ARRAY_LEN: arrLen,
      START: start,
      ARRAY: rest,
      KEY: key,
      LEN: len
    });
    if (state.deopted) {
      loop._blockHoist = node.params.length + 1;
      node.body.body.unshift(loop);
    } else {
      loop._blockHoist = 1;
      var target = this.getEarliestCommonAncestorFrom(state.references).getStatementParent();
      var highestLoop;
      target.findParent(function(path) {
        if (path.isLoop()) {
          highestLoop = path;
        } else if (path.isFunction()) {
          return true;
        }
      });
      if (highestLoop)
        target = highestLoop;
      target.insertBefore(loop);
    }
  }};
exports.visitor = visitor;
