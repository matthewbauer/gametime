/* */ 
"format cjs";
"use strict";
exports.__esModule = true;
exports.matchesPattern = matchesPattern;
exports.has = has;
exports.isnt = isnt;
exports.equals = equals;
exports.isNodeType = isNodeType;
exports.canHaveVariableDeclarationOrExpression = canHaveVariableDeclarationOrExpression;
exports.isCompletionRecord = isCompletionRecord;
exports.isStatementOrBlock = isStatementOrBlock;
exports.referencesImport = referencesImport;
exports.getSource = getSource;
exports.willIMaybeExecuteBefore = willIMaybeExecuteBefore;
exports._guessExecutionStatusRelativeTo = _guessExecutionStatusRelativeTo;
exports.resolve = resolve;
exports._resolve = _resolve;
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
var _lodashCollectionIncludes = require("lodash/collection/includes");
var _lodashCollectionIncludes2 = _interopRequireDefault(_lodashCollectionIncludes);
var _types = require("../../types/index");
var t = _interopRequireWildcard(_types);
function matchesPattern(pattern, allowPartial) {
  if (!this.isMemberExpression())
    return false;
  var parts = pattern.split(".");
  var search = [this.node];
  var i = 0;
  function matches(name) {
    var part = parts[i];
    return part === "*" || name === part;
  }
  while (search.length) {
    var node = search.shift();
    if (allowPartial && i === parts.length) {
      return true;
    }
    if (t.isIdentifier(node)) {
      if (!matches(node.name))
        return false;
    } else if (t.isLiteral(node)) {
      if (!matches(node.value))
        return false;
    } else if (t.isMemberExpression(node)) {
      if (node.computed && !t.isLiteral(node.property)) {
        return false;
      } else {
        search.unshift(node.property);
        search.unshift(node.object);
        continue;
      }
    } else if (t.isThisExpression(node)) {
      if (!matches("this"))
        return false;
    } else {
      return false;
    }
    if (++i > parts.length) {
      return false;
    }
  }
  return i === parts.length;
}
function has(key) {
  var val = this.node[key];
  if (val && Array.isArray(val)) {
    return !!val.length;
  } else {
    return !!val;
  }
}
var is = has;
exports.is = is;
function isnt(key) {
  return !this.has(key);
}
function equals(key, value) {
  return this.node[key] === value;
}
function isNodeType(type) {
  return t.isType(this.type, type);
}
function canHaveVariableDeclarationOrExpression() {
  return (this.key === "init" || this.key === "left") && this.parentPath.isFor();
}
function isCompletionRecord(allowInsideFunction) {
  var path = this;
  var first = true;
  do {
    var container = path.container;
    if (path.isFunction() && !first) {
      return !!allowInsideFunction;
    }
    first = false;
    if (Array.isArray(container) && path.key !== container.length - 1) {
      return false;
    }
  } while ((path = path.parentPath) && !path.isProgram());
  return true;
}
function isStatementOrBlock() {
  if (this.parentPath.isLabeledStatement() || t.isBlockStatement(this.container)) {
    return false;
  } else {
    return _lodashCollectionIncludes2["default"](t.STATEMENT_OR_BLOCK_KEYS, this.key);
  }
}
function referencesImport(moduleSource, importName) {
  if (!this.isReferencedIdentifier())
    return false;
  var binding = this.scope.getBinding(this.node.name);
  if (!binding || binding.kind !== "module")
    return false;
  var path = binding.path;
  var parent = path.parentPath;
  if (!parent.isImportDeclaration())
    return false;
  if (parent.node.source.value === moduleSource) {
    if (!importName)
      return true;
  } else {
    return false;
  }
  if (path.isImportDefaultSpecifier() && importName === "default") {
    return true;
  }
  if (path.isImportNamespaceSpecifier() && importName === "*") {
    return true;
  }
  if (path.isImportSpecifier() && path.node.imported.name === importName) {
    return true;
  }
  return false;
}
function getSource() {
  var node = this.node;
  if (node.end) {
    return this.hub.file.code.slice(node.start, node.end);
  } else {
    return "";
  }
}
function willIMaybeExecuteBefore(target) {
  return this._guessExecutionStatusRelativeTo(target) !== "after";
}
function _guessExecutionStatusRelativeTo(target) {
  var targetFuncParent = target.scope.getFunctionParent();
  var selfFuncParent = this.scope.getFunctionParent();
  if (targetFuncParent !== selfFuncParent) {
    return "function";
  }
  var targetPaths = target.getAncestry();
  var selfPaths = this.getAncestry();
  var commonPath;
  var targetIndex;
  var selfIndex;
  for (selfIndex = 0; selfIndex < selfPaths.length; selfIndex++) {
    var selfPath = selfPaths[selfIndex];
    targetIndex = targetPaths.indexOf(selfPath);
    if (targetIndex >= 0) {
      commonPath = selfPath;
      break;
    }
  }
  if (!commonPath) {
    return "before";
  }
  var targetRelationship = targetPaths[targetIndex - 1];
  var selfRelationship = selfPaths[selfIndex - 1];
  if (!targetRelationship || !selfRelationship) {
    return "before";
  }
  if (targetRelationship.listKey && targetRelationship.container === selfRelationship.container) {
    return targetRelationship.key > selfRelationship.key ? "before" : "after";
  }
  var targetKeyPosition = t.VISITOR_KEYS[targetRelationship.type].indexOf(targetRelationship.key);
  var selfKeyPosition = t.VISITOR_KEYS[selfRelationship.type].indexOf(selfRelationship.key);
  return targetKeyPosition > selfKeyPosition ? "before" : "after";
}
function resolve(dangerous, resolved) {
  return this._resolve(dangerous, resolved) || this;
}
function _resolve(dangerous, resolved) {
  if (resolved && resolved.indexOf(this) >= 0)
    return;
  resolved = resolved || [];
  resolved.push(this);
  if (this.isVariableDeclarator()) {
    if (this.get("id").isIdentifier()) {
      return this.get("init").resolve(dangerous, resolved);
    } else {}
  } else if (this.isReferencedIdentifier()) {
    var binding = this.scope.getBinding(this.node.name);
    if (!binding)
      return;
    if (!binding.constant)
      return;
    if (binding.kind === "module")
      return;
    if (binding.path !== this) {
      return binding.path.resolve(dangerous, resolved);
    }
  } else if (this.isTypeCastExpression()) {
    return this.get("expression").resolve(dangerous, resolved);
  } else if (dangerous && this.isMemberExpression()) {
    var targetKey = this.toComputedKey();
    if (!t.isLiteral(targetKey))
      return;
    var targetName = targetKey.value;
    var target = this.get("object").resolve(dangerous, resolved);
    if (target.isObjectExpression()) {
      var props = target.get("properties");
      var _arr = props;
      for (var _i = 0; _i < _arr.length; _i++) {
        var prop = _arr[_i];
        if (!prop.isProperty())
          continue;
        var key = prop.get("key");
        var match = prop.isnt("computed") && key.isIdentifier({name: targetName});
        match = match || key.isLiteral({value: targetName});
        if (match)
          return prop.get("value").resolve(dangerous, resolved);
      }
    } else if (target.isArrayExpression() && !isNaN(+targetName)) {
      var elems = target.get("elements");
      var elem = elems[targetName];
      if (elem)
        return elem.resolve(dangerous, resolved);
    }
  }
}
