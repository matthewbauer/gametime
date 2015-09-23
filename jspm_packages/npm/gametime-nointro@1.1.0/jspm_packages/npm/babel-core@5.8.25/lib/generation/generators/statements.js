/* */ 
"format cjs";
"use strict";
exports.__esModule = true;
exports.WithStatement = WithStatement;
exports.IfStatement = IfStatement;
exports.ForStatement = ForStatement;
exports.WhileStatement = WhileStatement;
exports.DoWhileStatement = DoWhileStatement;
exports.LabeledStatement = LabeledStatement;
exports.TryStatement = TryStatement;
exports.CatchClause = CatchClause;
exports.SwitchStatement = SwitchStatement;
exports.SwitchCase = SwitchCase;
exports.DebuggerStatement = DebuggerStatement;
exports.VariableDeclaration = VariableDeclaration;
exports.VariableDeclarator = VariableDeclarator;
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
var _repeating = require("repeating");
var _repeating2 = _interopRequireDefault(_repeating);
var _types = require("../../types/index");
var t = _interopRequireWildcard(_types);
function WithStatement(node, print) {
  this.keyword("with");
  this.push("(");
  print.plain(node.object);
  this.push(")");
  print.block(node.body);
}
function IfStatement(node, print) {
  this.keyword("if");
  this.push("(");
  print.plain(node.test);
  this.push(")");
  this.space();
  print.indentOnComments(node.consequent);
  if (node.alternate) {
    if (this.isLast("}"))
      this.space();
    this.push("else ");
    print.indentOnComments(node.alternate);
  }
}
function ForStatement(node, print) {
  this.keyword("for");
  this.push("(");
  print.plain(node.init);
  this.push(";");
  if (node.test) {
    this.space();
    print.plain(node.test);
  }
  this.push(";");
  if (node.update) {
    this.space();
    print.plain(node.update);
  }
  this.push(")");
  print.block(node.body);
}
function WhileStatement(node, print) {
  this.keyword("while");
  this.push("(");
  print.plain(node.test);
  this.push(")");
  print.block(node.body);
}
var buildForXStatement = function buildForXStatement(op) {
  return function(node, print) {
    this.keyword("for");
    this.push("(");
    print.plain(node.left);
    this.push(" " + op + " ");
    print.plain(node.right);
    this.push(")");
    print.block(node.body);
  };
};
var ForInStatement = buildForXStatement("in");
exports.ForInStatement = ForInStatement;
var ForOfStatement = buildForXStatement("of");
exports.ForOfStatement = ForOfStatement;
function DoWhileStatement(node, print) {
  this.push("do ");
  print.plain(node.body);
  this.space();
  this.keyword("while");
  this.push("(");
  print.plain(node.test);
  this.push(");");
}
var buildLabelStatement = function buildLabelStatement(prefix) {
  var key = arguments.length <= 1 || arguments[1] === undefined ? "label" : arguments[1];
  return function(node, print) {
    this.push(prefix);
    var label = node[key];
    if (label) {
      this.push(" ");
      var terminatorState = this.startTerminatorless();
      print.plain(label);
      this.endTerminatorless(terminatorState);
    }
    this.semicolon();
  };
};
var ContinueStatement = buildLabelStatement("continue");
exports.ContinueStatement = ContinueStatement;
var ReturnStatement = buildLabelStatement("return", "argument");
exports.ReturnStatement = ReturnStatement;
var BreakStatement = buildLabelStatement("break");
exports.BreakStatement = BreakStatement;
var ThrowStatement = buildLabelStatement("throw", "argument");
exports.ThrowStatement = ThrowStatement;
function LabeledStatement(node, print) {
  print.plain(node.label);
  this.push(": ");
  print.plain(node.body);
}
function TryStatement(node, print) {
  this.keyword("try");
  print.plain(node.block);
  this.space();
  if (node.handlers) {
    print.plain(node.handlers[0]);
  } else {
    print.plain(node.handler);
  }
  if (node.finalizer) {
    this.space();
    this.push("finally ");
    print.plain(node.finalizer);
  }
}
function CatchClause(node, print) {
  this.keyword("catch");
  this.push("(");
  print.plain(node.param);
  this.push(") ");
  print.plain(node.body);
}
function SwitchStatement(node, print) {
  this.keyword("switch");
  this.push("(");
  print.plain(node.discriminant);
  this.push(")");
  this.space();
  this.push("{");
  print.sequence(node.cases, {
    indent: true,
    addNewlines: function addNewlines(leading, cas) {
      if (!leading && node.cases[node.cases.length - 1] === cas)
        return -1;
    }
  });
  this.push("}");
}
function SwitchCase(node, print) {
  if (node.test) {
    this.push("case ");
    print.plain(node.test);
    this.push(":");
  } else {
    this.push("default:");
  }
  if (node.consequent.length) {
    this.newline();
    print.sequence(node.consequent, {indent: true});
  }
}
function DebuggerStatement() {
  this.push("debugger;");
}
function VariableDeclaration(node, print, parent) {
  this.push(node.kind + " ");
  var hasInits = false;
  if (!t.isFor(parent)) {
    var _arr = node.declarations;
    for (var _i = 0; _i < _arr.length; _i++) {
      var declar = _arr[_i];
      if (declar.init) {
        hasInits = true;
      }
    }
  }
  var sep;
  if (!this.format.compact && !this.format.concise && hasInits && !this.format.retainLines) {
    sep = ",\n" + _repeating2["default"](" ", node.kind.length + 1);
  }
  print.list(node.declarations, {separator: sep});
  if (t.isFor(parent)) {
    if (parent.left === node || parent.init === node)
      return;
  }
  this.semicolon();
}
function VariableDeclarator(node, print) {
  print.plain(node.id);
  print.plain(node.id.typeAnnotation);
  if (node.init) {
    this.space();
    this.push("=");
    this.space();
    print.plain(node.init);
  }
}
