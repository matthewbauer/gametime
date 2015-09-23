/* */ 
"format cjs";
"use strict";
exports.__esModule = true;
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var _libMetadata = require("./lib/metadata");
var metadataVisitor = _interopRequireWildcard(_libMetadata);
var _messages = require("../../messages");
var messages = _interopRequireWildcard(_messages);
var _libRemaps = require("./lib/remaps");
var _libRemaps2 = _interopRequireDefault(_libRemaps);
var _helpersObject = require("../../helpers/object");
var _helpersObject2 = _interopRequireDefault(_helpersObject);
var _util = require("../../util");
var util = _interopRequireWildcard(_util);
var _types = require("../../types/index");
var t = _interopRequireWildcard(_types);
var DefaultFormatter = (function() {
  function DefaultFormatter(file) {
    _classCallCheck(this, DefaultFormatter);
    this.sourceScopes = _helpersObject2["default"]();
    this.defaultIds = _helpersObject2["default"]();
    this.ids = _helpersObject2["default"]();
    this.remaps = new _libRemaps2["default"](file, this);
    this.scope = file.scope;
    this.file = file;
    this.hasNonDefaultExports = false;
    this.hasLocalExports = false;
    this.hasLocalImports = false;
    this.localExports = _helpersObject2["default"]();
    this.localImports = _helpersObject2["default"]();
    this.metadata = file.metadata.modules;
    this.getMetadata();
  }
  DefaultFormatter.prototype.addScope = function addScope(path) {
    var source = path.node.source && path.node.source.value;
    if (!source)
      return;
    var existingScope = this.sourceScopes[source];
    if (existingScope && existingScope !== path.scope) {
      throw path.errorWithNode(messages.get("modulesDuplicateDeclarations"));
    }
    this.sourceScopes[source] = path.scope;
  };
  DefaultFormatter.prototype.isModuleType = function isModuleType(node, type) {
    var modules = this.file.dynamicImportTypes[type];
    return modules && modules.indexOf(node) >= 0;
  };
  DefaultFormatter.prototype.transform = function transform() {
    this.remapAssignments();
  };
  DefaultFormatter.prototype.doDefaultExportInterop = function doDefaultExportInterop(node) {
    return (t.isExportDefaultDeclaration(node) || t.isSpecifierDefault(node)) && !this.noInteropRequireExport && !this.hasNonDefaultExports;
  };
  DefaultFormatter.prototype.getMetadata = function getMetadata() {
    var has = false;
    var _arr = this.file.ast.program.body;
    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      if (t.isModuleDeclaration(node)) {
        has = true;
        break;
      }
    }
    if (has || this.isLoose()) {
      this.file.path.traverse(metadataVisitor, this);
    }
  };
  DefaultFormatter.prototype.remapAssignments = function remapAssignments() {
    if (this.hasLocalExports || this.hasLocalImports) {
      this.remaps.run();
    }
  };
  DefaultFormatter.prototype.remapExportAssignment = function remapExportAssignment(node, exported) {
    var assign = node;
    for (var i = 0; i < exported.length; i++) {
      assign = t.assignmentExpression("=", t.memberExpression(t.identifier("exports"), exported[i]), assign);
    }
    return assign;
  };
  DefaultFormatter.prototype._addExport = function _addExport(name, exported) {
    var info = this.localExports[name] = this.localExports[name] || {
      binding: this.scope.getBindingIdentifier(name),
      exported: []
    };
    info.exported.push(exported);
  };
  DefaultFormatter.prototype.getExport = function getExport(node, scope) {
    if (!t.isIdentifier(node))
      return;
    var local = this.localExports[node.name];
    if (local && local.binding === scope.getBindingIdentifier(node.name)) {
      return local.exported;
    }
  };
  DefaultFormatter.prototype.getModuleName = function getModuleName() {
    var opts = this.file.opts;
    if (opts.moduleId != null && !opts.getModuleId) {
      return opts.moduleId;
    }
    var filenameRelative = opts.filenameRelative;
    var moduleName = "";
    if (opts.moduleRoot != null) {
      moduleName = opts.moduleRoot + "/";
    }
    if (!opts.filenameRelative) {
      return moduleName + opts.filename.replace(/^\//, "");
    }
    if (opts.sourceRoot != null) {
      var sourceRootRegEx = new RegExp("^" + opts.sourceRoot + "\/?");
      filenameRelative = filenameRelative.replace(sourceRootRegEx, "");
    }
    if (!opts.keepModuleIdExtensions) {
      filenameRelative = filenameRelative.replace(/\.(\w*?)$/, "");
    }
    moduleName += filenameRelative;
    moduleName = moduleName.replace(/\\/g, "/");
    if (opts.getModuleId) {
      return opts.getModuleId(moduleName) || moduleName;
    } else {
      return moduleName;
    }
  };
  DefaultFormatter.prototype._pushStatement = function _pushStatement(ref, nodes) {
    if (t.isClass(ref) || t.isFunction(ref)) {
      if (ref.id) {
        nodes.push(t.toStatement(ref));
        ref = ref.id;
      }
    }
    return ref;
  };
  DefaultFormatter.prototype._hoistExport = function _hoistExport(declar, assign, priority) {
    if (t.isFunctionDeclaration(declar)) {
      assign._blockHoist = priority || 2;
    }
    return assign;
  };
  DefaultFormatter.prototype.getExternalReference = function getExternalReference(node, nodes) {
    var ids = this.ids;
    var id = node.source.value;
    if (ids[id]) {
      return ids[id];
    } else {
      return this.ids[id] = this._getExternalReference(node, nodes);
    }
  };
  DefaultFormatter.prototype.checkExportIdentifier = function checkExportIdentifier(node) {
    if (t.isIdentifier(node, {name: "__esModule"})) {
      throw this.file.errorWithNode(node, messages.get("modulesIllegalExportName", node.name));
    }
  };
  DefaultFormatter.prototype.exportAllDeclaration = function exportAllDeclaration(node, nodes) {
    var ref = this.getExternalReference(node, nodes);
    nodes.push(this.buildExportsWildcard(ref, node));
  };
  DefaultFormatter.prototype.isLoose = function isLoose() {
    return this.file.isLoose("es6.modules");
  };
  DefaultFormatter.prototype.exportSpecifier = function exportSpecifier(specifier, node, nodes) {
    if (node.source) {
      var ref = this.getExternalReference(node, nodes);
      if (specifier.local.name === "default" && !this.noInteropRequireExport) {
        ref = t.callExpression(this.file.addHelper("interop-require"), [ref]);
      } else {
        ref = t.memberExpression(ref, specifier.local);
        if (!this.isLoose()) {
          nodes.push(this.buildExportsFromAssignment(specifier.exported, ref, node));
          return;
        }
      }
      nodes.push(this.buildExportsAssignment(specifier.exported, ref, node));
    } else {
      nodes.push(this.buildExportsAssignment(specifier.exported, specifier.local, node));
    }
  };
  DefaultFormatter.prototype.buildExportsWildcard = function buildExportsWildcard(objectIdentifier) {
    return t.expressionStatement(t.callExpression(this.file.addHelper("defaults"), [t.identifier("exports"), t.callExpression(this.file.addHelper("interop-export-wildcard"), [objectIdentifier, this.file.addHelper("defaults")])]));
  };
  DefaultFormatter.prototype.buildExportsFromAssignment = function buildExportsFromAssignment(id, init) {
    this.checkExportIdentifier(id);
    return util.template("exports-from-assign", {
      INIT: init,
      ID: t.literal(id.name)
    }, true);
  };
  DefaultFormatter.prototype.buildExportsAssignment = function buildExportsAssignment(id, init) {
    this.checkExportIdentifier(id);
    return util.template("exports-assign", {
      VALUE: init,
      KEY: id
    }, true);
  };
  DefaultFormatter.prototype.exportDeclaration = function exportDeclaration(node, nodes) {
    var declar = node.declaration;
    var id = declar.id;
    if (t.isExportDefaultDeclaration(node)) {
      id = t.identifier("default");
    }
    var assign;
    if (t.isVariableDeclaration(declar)) {
      for (var i = 0; i < declar.declarations.length; i++) {
        var decl = declar.declarations[i];
        decl.init = this.buildExportsAssignment(decl.id, decl.init, node).expression;
        var newDeclar = t.variableDeclaration(declar.kind, [decl]);
        if (i === 0)
          t.inherits(newDeclar, declar);
        nodes.push(newDeclar);
      }
    } else {
      var ref = declar;
      if (t.isFunctionDeclaration(declar) || t.isClassDeclaration(declar)) {
        ref = declar.id;
        nodes.push(declar);
      }
      assign = this.buildExportsAssignment(id, ref, node);
      nodes.push(assign);
      this._hoistExport(declar, assign);
    }
  };
  return DefaultFormatter;
})();
exports["default"] = DefaultFormatter;
module.exports = exports["default"];
