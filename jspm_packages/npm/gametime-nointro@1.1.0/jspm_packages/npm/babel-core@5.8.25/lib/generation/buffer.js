/* */ 
(function(Buffer) {
  "format cjs";
  "use strict";
  exports.__esModule = true;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _repeating = require("repeating");
  var _repeating2 = _interopRequireDefault(_repeating);
  var _trimRight = require("trim-right");
  var _trimRight2 = _interopRequireDefault(_trimRight);
  var _lodashLangIsBoolean = require("lodash/lang/isBoolean");
  var _lodashLangIsBoolean2 = _interopRequireDefault(_lodashLangIsBoolean);
  var _lodashCollectionIncludes = require("lodash/collection/includes");
  var _lodashCollectionIncludes2 = _interopRequireDefault(_lodashCollectionIncludes);
  var _lodashLangIsNumber = require("lodash/lang/isNumber");
  var _lodashLangIsNumber2 = _interopRequireDefault(_lodashLangIsNumber);
  var Buffer = (function() {
    function Buffer(position, format) {
      _classCallCheck(this, Buffer);
      this.parenPushNewlineState = null;
      this.position = position;
      this._indent = format.indent.base;
      this.format = format;
      this.buf = "";
    }
    Buffer.prototype.get = function get() {
      return _trimRight2["default"](this.buf);
    };
    Buffer.prototype.getIndent = function getIndent() {
      if (this.format.compact || this.format.concise) {
        return "";
      } else {
        return _repeating2["default"](this.format.indent.style, this._indent);
      }
    };
    Buffer.prototype.indentSize = function indentSize() {
      return this.getIndent().length;
    };
    Buffer.prototype.indent = function indent() {
      this._indent++;
    };
    Buffer.prototype.dedent = function dedent() {
      this._indent--;
    };
    Buffer.prototype.semicolon = function semicolon() {
      this.push(";");
    };
    Buffer.prototype.ensureSemicolon = function ensureSemicolon() {
      if (!this.isLast(";"))
        this.semicolon();
    };
    Buffer.prototype.rightBrace = function rightBrace() {
      this.newline(true);
      this.push("}");
    };
    Buffer.prototype.keyword = function keyword(name) {
      this.push(name);
      this.space();
    };
    Buffer.prototype.space = function space(force) {
      if (!force && this.format.compact)
        return;
      if (force || this.buf && !this.isLast(" ") && !this.isLast("\n")) {
        this.push(" ");
      }
    };
    Buffer.prototype.removeLast = function removeLast(cha) {
      if (this.format.compact)
        return;
      if (!this.isLast(cha))
        return;
      this.buf = this.buf.substr(0, this.buf.length - 1);
      this.position.unshift(cha);
    };
    Buffer.prototype.startTerminatorless = function startTerminatorless() {
      return this.parenPushNewlineState = {printed: false};
    };
    Buffer.prototype.endTerminatorless = function endTerminatorless(state) {
      if (state.printed) {
        this.dedent();
        this.newline();
        this.push(")");
      }
    };
    Buffer.prototype.newline = function newline(i, removeLast) {
      if (this.format.compact || this.format.retainLines)
        return;
      if (this.format.concise) {
        this.space();
        return;
      }
      removeLast = removeLast || false;
      if (_lodashLangIsNumber2["default"](i)) {
        i = Math.min(2, i);
        if (this.endsWith("{\n") || this.endsWith(":\n"))
          i--;
        if (i <= 0)
          return;
        while (i > 0) {
          this._newline(removeLast);
          i--;
        }
        return;
      }
      if (_lodashLangIsBoolean2["default"](i)) {
        removeLast = i;
      }
      this._newline(removeLast);
    };
    Buffer.prototype._newline = function _newline(removeLast) {
      if (this.endsWith("\n\n"))
        return;
      if (removeLast && this.isLast("\n"))
        this.removeLast("\n");
      this.removeLast(" ");
      this._removeSpacesAfterLastNewline();
      this._push("\n");
    };
    Buffer.prototype._removeSpacesAfterLastNewline = function _removeSpacesAfterLastNewline() {
      var lastNewlineIndex = this.buf.lastIndexOf("\n");
      if (lastNewlineIndex === -1) {
        return;
      }
      var index = this.buf.length - 1;
      while (index > lastNewlineIndex) {
        if (this.buf[index] !== " ") {
          break;
        }
        index--;
      }
      if (index === lastNewlineIndex) {
        this.buf = this.buf.substring(0, index + 1);
      }
    };
    Buffer.prototype.push = function push(str, noIndent) {
      if (!this.format.compact && this._indent && !noIndent && str !== "\n") {
        var indent = this.getIndent();
        str = str.replace(/\n/g, "\n" + indent);
        if (this.isLast("\n"))
          this._push(indent);
      }
      this._push(str);
    };
    Buffer.prototype._push = function _push(str) {
      var parenPushNewlineState = this.parenPushNewlineState;
      if (parenPushNewlineState) {
        for (var i = 0; i < str.length; i++) {
          var cha = str[i];
          if (cha === " ")
            continue;
          this.parenPushNewlineState = null;
          if (cha === "\n" || cha === "/") {
            this._push("(");
            this.indent();
            parenPushNewlineState.printed = true;
          }
          break;
        }
      }
      this.position.push(str);
      this.buf += str;
    };
    Buffer.prototype.endsWith = function endsWith(str) {
      var buf = arguments.length <= 1 || arguments[1] === undefined ? this.buf : arguments[1];
      if (str.length === 1) {
        return buf[buf.length - 1] === str;
      } else {
        return buf.slice(-str.length) === str;
      }
    };
    Buffer.prototype.isLast = function isLast(cha) {
      if (this.format.compact)
        return false;
      var buf = this.buf;
      var last = buf[buf.length - 1];
      if (Array.isArray(cha)) {
        return _lodashCollectionIncludes2["default"](cha, last);
      } else {
        return cha === last;
      }
    };
    return Buffer;
  })();
  exports["default"] = Buffer;
  module.exports = exports["default"];
})(require("buffer").Buffer);
