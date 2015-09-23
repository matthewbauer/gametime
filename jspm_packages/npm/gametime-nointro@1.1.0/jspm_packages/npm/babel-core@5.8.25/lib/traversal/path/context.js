/* */ 
"format cjs";
"use strict";
exports.__esModule = true;
exports.call = call;
exports.isBlacklisted = isBlacklisted;
exports.visit = visit;
exports.skip = skip;
exports.skipKey = skipKey;
exports.stop = stop;
exports.setScope = setScope;
exports.setContext = setContext;
exports.resync = resync;
exports._resyncParent = _resyncParent;
exports._resyncKey = _resyncKey;
exports._resyncList = _resyncList;
exports._resyncRemoved = _resyncRemoved;
exports.shiftContext = shiftContext;
exports.unshiftContext = unshiftContext;
exports.setup = setup;
exports.setKey = setKey;
exports.queueNode = queueNode;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {"default": obj};
}
var _index = require("../index");
var _index2 = _interopRequireDefault(_index);
function call(key) {
  var node = this.node;
  if (!node)
    return;
  var opts = this.opts;
  var _arr = [opts[key], opts[node.type] && opts[node.type][key]];
  for (var _i = 0; _i < _arr.length; _i++) {
    var fns = _arr[_i];
    if (!fns)
      continue;
    var _arr2 = fns;
    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var fn = _arr2[_i2];
      if (!fn)
        continue;
      var _node = this.node;
      if (!_node)
        return;
      var previousType = this.type;
      var replacement = fn.call(this, _node, this.parent, this.scope, this.state);
      if (replacement) {
        this.replaceWith(replacement, true);
      }
      if (this.shouldStop || this.shouldSkip || this.removed)
        return;
      if (previousType !== this.type) {
        this.queueNode(this);
        return;
      }
    }
  }
}
function isBlacklisted() {
  var blacklist = this.opts.blacklist;
  return blacklist && blacklist.indexOf(this.node.type) > -1;
}
function visit() {
  if (this.isBlacklisted())
    return false;
  if (this.opts.shouldSkip && this.opts.shouldSkip(this))
    return false;
  this.call("enter");
  if (this.shouldSkip) {
    return this.shouldStop;
  }
  var node = this.node;
  var opts = this.opts;
  if (node) {
    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        _index2["default"].node(node[i], opts, this.scope, this.state, this, this.skipKeys);
      }
    } else {
      _index2["default"].node(node, opts, this.scope, this.state, this, this.skipKeys);
      this.call("exit");
    }
  }
  return this.shouldStop;
}
function skip() {
  this.shouldSkip = true;
}
function skipKey(key) {
  this.skipKeys[key] = true;
}
function stop() {
  this.shouldStop = true;
  this.shouldSkip = true;
}
function setScope() {
  if (this.opts && this.opts.noScope)
    return;
  var target = this.context || this.parentPath;
  this.scope = this.getScope(target && target.scope);
  if (this.scope)
    this.scope.init();
}
function setContext(context) {
  this.shouldSkip = false;
  this.shouldStop = false;
  this.removed = false;
  this.skipKeys = {};
  if (context) {
    this.context = context;
    this.state = context.state;
    this.opts = context.opts;
  }
  this.setScope();
  return this;
}
function resync() {
  if (this.removed)
    return;
  this._resyncParent();
  this._resyncList();
  this._resyncKey();
}
function _resyncParent() {
  if (this.parentPath) {
    this.parent = this.parentPath.node;
  }
}
function _resyncKey() {
  if (!this.container)
    return;
  if (this.node === this.container[this.key])
    return;
  if (Array.isArray(this.container)) {
    for (var i = 0; i < this.container.length; i++) {
      if (this.container[i] === this.node) {
        return this.setKey(i);
      }
    }
  } else {
    for (var key in this.container) {
      if (this.container[key] === this.node) {
        return this.setKey(key);
      }
    }
  }
  this.key = null;
}
function _resyncList() {
  var listKey = this.listKey;
  var parentPath = this.parentPath;
  if (!listKey || !parentPath)
    return;
  var newContainer = parentPath.node[listKey];
  if (this.container === newContainer)
    return;
  if (newContainer) {
    this.container = newContainer;
  } else {
    this.container = null;
  }
}
function _resyncRemoved() {
  if (this.key == null || !this.container || this.container[this.key] !== this.node) {
    this._markRemoved();
  }
}
function shiftContext() {
  this.contexts.shift();
  this.setContext(this.contexts[0]);
}
function unshiftContext(context) {
  this.contexts.unshift(context);
  this.setContext(context);
}
function setup(parentPath, container, listKey, key) {
  this.inList = !!listKey;
  this.listKey = listKey;
  this.parentKey = listKey || key;
  this.container = container;
  this.parentPath = parentPath || this.parentPath;
  this.setKey(key);
}
function setKey(key) {
  this.key = key;
  this.node = this.container[this.key];
  this.type = this.node && this.node.type;
}
function queueNode(path) {
  var _arr3 = this.contexts;
  for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
    var context = _arr3[_i3];
    if (context.queue) {
      context.queue.push(path);
    }
  }
}
