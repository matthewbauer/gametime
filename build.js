"bundle";
System.register("games-view.css!github:systemjs/plugin-css@0.1.17", [], function() { return { setters: [], execute: function() {} } });

System.register("play.css!github:systemjs/plugin-css@0.1.17", [], function() { return { setters: [], execute: function() {} } });

System.registerDynamic("npm:openvgdb@1.0.0/db", ["npm:openvgdb@1.0.0/db.json!github:systemjs/plugin-json@0.1.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:openvgdb@1.0.0/db.json!github:systemjs/plugin-json@0.1.0");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:openvgdb@1.0.0", ["npm:openvgdb@1.0.0/db"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:openvgdb@1.0.0/db");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.cof", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iobject", ["npm:core-js@1.1.4/library/modules/$.cof"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = require("npm:core-js@1.1.4/library/modules/$.cof");
  module.exports = 0 in Object('z') ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.defined", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.to-iobject", ["npm:core-js@1.1.4/library/modules/$.iobject", "npm:core-js@1.1.4/library/modules/$.defined"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var IObject = require("npm:core-js@1.1.4/library/modules/$.iobject"),
      defined = require("npm:core-js@1.1.4/library/modules/$.defined");
  module.exports = function(it) {
    return IObject(defined(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.global", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var UNDEFINED = 'undefined';
  var global = module.exports = typeof window != UNDEFINED && window.Math == Math ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.core", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = module.exports = {};
  if (typeof __e == 'number')
    __e = core;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.def", ["npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = require("npm:core-js@1.1.4/library/modules/$.global"),
      core = require("npm:core-js@1.1.4/library/modules/$.core"),
      PROTOTYPE = 'prototype';
  var ctx = function(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  };
  var $def = function(type, name, source) {
    var key,
        own,
        out,
        exp,
        isGlobal = type & $def.G,
        isProto = type & $def.P,
        target = isGlobal ? global : type & $def.S ? global[name] : (global[name] || {})[PROTOTYPE],
        exports = isGlobal ? core : core[name] || (core[name] = {});
    if (isGlobal)
      source = name;
    for (key in source) {
      own = !(type & $def.F) && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      if (isGlobal && typeof target[key] != 'function')
        exp = source[key];
      else if (type & $def.B && own)
        exp = ctx(out, global);
      else if (type & $def.W && target[key] == out)
        !function(C) {
          exp = function(param) {
            return this instanceof C ? new C(param) : C(param);
          };
          exp[PROTOTYPE] = C[PROTOTYPE];
        }(out);
      else
        exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
      exports[key] = exp;
      if (isProto)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $def.F = 1;
  $def.G = 2;
  $def.S = 4;
  $def.P = 8;
  $def.B = 16;
  $def.W = 32;
  module.exports = $def;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.fails", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.object-sap", ["npm:core-js@1.1.4/library/modules/$.def", "npm:core-js@1.1.4/library/modules/$.core", "npm:core-js@1.1.4/library/modules/$.fails"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(KEY, exec) {
    var $def = require("npm:core-js@1.1.4/library/modules/$.def"),
        fn = (require("npm:core-js@1.1.4/library/modules/$.core").Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $def($def.S + $def.F * require("npm:core-js@1.1.4/library/modules/$.fails")(function() {
      fn(1);
    }), 'Object', exp);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.object.get-own-property-descriptor", ["npm:core-js@1.1.4/library/modules/$.to-iobject", "npm:core-js@1.1.4/library/modules/$.object-sap"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toIObject = require("npm:core-js@1.1.4/library/modules/$.to-iobject");
  require("npm:core-js@1.1.4/library/modules/$.object-sap")('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/object/get-own-property-descriptor", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/es6.object.get-own-property-descriptor"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@1.1.4/library/modules/$");
  require("npm:core-js@1.1.4/library/modules/es6.object.get-own-property-descriptor");
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.25/core-js/object/get-own-property-descriptor", ["npm:core-js@1.1.4/library/fn/object/get-own-property-descriptor"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/object/get-own-property-descriptor"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.25/helpers/get", ["npm:babel-runtime@5.8.25/core-js/object/get-own-property-descriptor"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _Object$getOwnPropertyDescriptor = require("npm:babel-runtime@5.8.25/core-js/object/get-own-property-descriptor")["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      desc = parent = getter = undefined;
      _again = false;
      if (object === null)
        object = Function.prototype;
      var desc = _Object$getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          continue _function;
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/object/create", ["npm:core-js@1.1.4/library/modules/$"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@1.1.4/library/modules/$");
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.25/core-js/object/create", ["npm:core-js@1.1.4/library/fn/object/create"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/object/create"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.is-object", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    return it !== null && (typeof it == 'object' || typeof it == 'function');
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.an-object", ["npm:core-js@1.1.4/library/modules/$.is-object"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = require("npm:core-js@1.1.4/library/modules/$.is-object");
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.a-function", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.ctx", ["npm:core-js@1.1.4/library/modules/$.a-function"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var aFunction = require("npm:core-js@1.1.4/library/modules/$.a-function");
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.set-proto", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.is-object", "npm:core-js@1.1.4/library/modules/$.an-object", "npm:core-js@1.1.4/library/modules/$.ctx"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getDesc = require("npm:core-js@1.1.4/library/modules/$").getDesc,
      isObject = require("npm:core-js@1.1.4/library/modules/$.is-object"),
      anObject = require("npm:core-js@1.1.4/library/modules/$.an-object");
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(buggy, set) {
      try {
        set = require("npm:core-js@1.1.4/library/modules/$.ctx")(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set({}, []);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }() : undefined),
    check: check
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.object.set-prototype-of", ["npm:core-js@1.1.4/library/modules/$.def", "npm:core-js@1.1.4/library/modules/$.set-proto"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $def = require("npm:core-js@1.1.4/library/modules/$.def");
  $def($def.S, 'Object', {setPrototypeOf: require("npm:core-js@1.1.4/library/modules/$.set-proto").set});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/object/set-prototype-of", ["npm:core-js@1.1.4/library/modules/es6.object.set-prototype-of", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/es6.object.set-prototype-of");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.core").Object.setPrototypeOf;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.25/core-js/object/set-prototype-of", ["npm:core-js@1.1.4/library/fn/object/set-prototype-of"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/object/set-prototype-of"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.25/helpers/inherits", ["npm:babel-runtime@5.8.25/core-js/object/create", "npm:babel-runtime@5.8.25/core-js/object/set-prototype-of"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _Object$create = require("npm:babel-runtime@5.8.25/core-js/object/create")["default"];
  var _Object$setPrototypeOf = require("npm:babel-runtime@5.8.25/core-js/object/set-prototype-of")["default"];
  exports["default"] = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/object/define-property", ["npm:core-js@1.1.4/library/modules/$"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@1.1.4/library/modules/$");
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.25/core-js/object/define-property", ["npm:core-js@1.1.4/library/fn/object/define-property"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/object/define-property"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.25/helpers/create-class", ["npm:babel-runtime@5.8.25/core-js/object/define-property"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _Object$defineProperty = require("npm:babel-runtime@5.8.25/core-js/object/define-property")["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.25/helpers/class-call-check", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:querystring@0.2.0/decode", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  module.exports = function(qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};
    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }
    var regexp = /\+/g;
    qs = qs.split(sep);
    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }
    var len = qs.length;
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }
    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
          idx = x.indexOf(eq),
          kstr,
          vstr,
          k,
          v;
      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }
      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);
      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (Array.isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }
    return obj;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:querystring@0.2.0/encode", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var stringifyPrimitive = function(v) {
    switch (typeof v) {
      case 'string':
        return v;
      case 'boolean':
        return v ? 'true' : 'false';
      case 'number':
        return isFinite(v) ? v : '';
      default:
        return '';
    }
  };
  module.exports = function(obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }
    if (typeof obj === 'object') {
      return Object.keys(obj).map(function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (Array.isArray(obj[k])) {
          return obj[k].map(function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);
    }
    if (!name)
      return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:querystring@0.2.0/index", ["npm:querystring@0.2.0/decode", "npm:querystring@0.2.0/encode"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  exports.decode = exports.parse = require("npm:querystring@0.2.0/decode");
  exports.encode = exports.stringify = require("npm:querystring@0.2.0/encode");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:querystring@0.2.0", ["npm:querystring@0.2.0/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:querystring@0.2.0/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-querystring@0.1.0/index", ["npm:querystring@0.2.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? System._nodeRequire('querystring') : require("npm:querystring@0.2.0");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-querystring@0.1.0", ["github:jspm/nodelibs-querystring@0.1.0/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-querystring@0.1.0/index");
  global.define = __define;
  return module.exports;
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
'format amd';
if (typeof define !== 'function') {
  if (typeof require === 'function') {
    var define = require('amdefine')(module);
  }
}
define(['./core'], function(Core) {
  function addHelpers() {
    this.LANGUAGE_ENGLISH = 0;
    this.LANGUAGE_JAPANESE = 1;
    this.LANGUAGE_FRENCH = 2;
    this.LANGUAGE_SPANISH = 3;
    this.LANGUAGE_GERMAN = 4;
    this.LANGUAGE_ITALIAN = 5;
    this.LANGUAGE_DUTCH = 6;
    this.LANGUAGE_PORTUGUESE = 7;
    this.LANGUAGE_RUSSIAN = 8;
    this.LANGUAGE_KOREAN = 9;
    this.LANGUAGE_CHINESE_TRADITIONAL = 10;
    this.LANGUAGE_CHINESE_SIMPLIFIED = 11;
    this.K_UNDO = 322;
    this.K_EURO = 321;
    this.K_POWER = 320;
    this.K_MENU = 319;
    this.K_BREAK = 318;
    this.K_SYSREQ = 317;
    this.K_PRINT = 316;
    this.K_HELP = 315;
    this.K_COMPOSE = 314;
    this.K_MODE = 313;
    this.K_RSUPER = 312;
    this.K_LSUPER = 311;
    this.K_LMETA = 310;
    this.K_RMETA = 309;
    this.K_LALT = 308;
    this.K_RALT = 307;
    this.K_LCTRL = 306;
    this.K_RCTRL = 305;
    this.K_LSHIFT = 304;
    this.K_RSHIFT = 303;
    this.K_SCROLLOCK = 302;
    this.K_CAPSLOCK = 301;
    this.K_NUMLOCK = 300;
    this.K_F15 = 296;
    this.K_F14 = 295;
    this.K_F13 = 294;
    this.K_F12 = 293;
    this.K_F11 = 292;
    this.K_F10 = 291;
    this.K_F9 = 290;
    this.K_F8 = 289;
    this.K_F7 = 288;
    this.K_F6 = 287;
    this.K_F5 = 286;
    this.K_F4 = 285;
    this.K_F3 = 284;
    this.K_F2 = 283;
    this.K_F1 = 282;
    this.K_PAGEDOWN = 281;
    this.K_PAGEUP = 280;
    this.K_END = 279;
    this.K_HOME = 278;
    this.K_INSERT = 277;
    this.K_LEFT = 276;
    this.K_RIGHT = 275;
    this.K_DOWN = 274;
    this.K_UP = 273;
    this.K_KP_EQUALS = 272;
    this.K_KP_ENTER = 271;
    this.K_KP_PLUS = 270;
    this.K_KP_MINUS = 269;
    this.K_KP_MULTIPLY = 268;
    this.K_KP_DIVIDE = 267;
    this.K_KP_PERIOD = 266;
    this.K_KP9 = 265;
    this.K_KP8 = 264;
    this.K_KP7 = 263;
    this.K_KP6 = 262;
    this.K_KP5 = 261;
    this.K_KP4 = 260;
    this.K_KP3 = 259;
    this.K_KP2 = 258;
    this.K_KP1 = 257;
    this.K_KP0 = 256;
    this.K_DELETE = 127;
    this.K_z = 122;
    this.K_y = 121;
    this.K_x = 120;
    this.K_w = 119;
    this.K_v = 118;
    this.K_u = 117;
    this.K_t = 116;
    this.K_s = 115;
    this.K_r = 114;
    this.K_q = 113;
    this.K_p = 112;
    this.K_o = 111;
    this.K_n = 110;
    this.K_m = 109;
    this.K_l = 108;
    this.K_k = 107;
    this.K_j = 106;
    this.K_i = 105;
    this.K_h = 104;
    this.K_g = 103;
    this.K_f = 102;
    this.K_e = 101;
    this.K_d = 100;
    this.K_c = 99;
    this.K_b = 98;
    this.K_a = 97;
    this.K_BACKQUOTE = 96;
    this.K_UNDERSCORE = 95;
    this.K_CARET = 94;
    this.K_RIGHTBRACKET = 93;
    this.K_BACKSLASH = 92;
    this.K_LEFTBRACKET = 91;
    this.K_AT = 64;
    this.K_QUESTION = 63;
    this.K_GREATER = 62;
    this.K_EQUALS = 61;
    this.K_LESS = 60;
    this.K_SEMICOLON = 59;
    this.K_COLON = 58;
    this.K_9 = 57;
    this.K_8 = 56;
    this.K_7 = 55;
    this.K_6 = 54;
    this.K_5 = 53;
    this.K_4 = 52;
    this.K_3 = 51;
    this.K_2 = 50;
    this.K_1 = 49;
    this.K_0 = 48;
    this.K_SLASH = 47;
    this.K_PERIOD = 46;
    this.K_MINUS = 45;
    this.K_COMMA = 44;
    this.K_PLUS = 43;
    this.K_ASTERISK = 42;
    this.K_RIGHTPAREN = 41;
    this.K_LEFTPAREN = 40;
    this.K_QUOTE = 39;
    this.K_AMPERSAND = 38;
    this.K_DOLLAR = 36;
    this.K_HASH = 35;
    this.K_QUOTEDBL = 34;
    this.K_EXCLAIM = 33;
    this.K_SPACE = 32;
    this.K_ESCAPE = 27;
    this.K_PAUSE = 19;
    this.K_RETURN = 13;
    this.K_CLEAR = 12;
    this.K_TAB = 9;
    this.K_BACKSPACE = 8;
    this.K_UNKNOWN = 0;
    this.K_FIRST = 0;
    this.KMOD_SCROLLOCK = 64;
    this.KMOD_CAPSLOCK = 32;
    this.KMOD_NUMLOCK = 16;
    this.KMOD_META = 8;
    this.KMOD_ALT = 4;
    this.KMOD_CTRL = 2;
    this.KMOD_SHIFT = 1;
    this.KMOD_NONE = 0;
    this.LOG_DEBUG = 0;
    this.LOG_INFO = 1;
    this.LOG_WARN = 2;
    this.LOG_ERROR = 3;
    this.SENSOR_ACCELEROMETER_ENABLE = 0;
    this.SENSOR_ACCELEROMETER_DISABLE = 1;
    this.CAMERA_BUFFER_OPENGL_TEXTURE = 0;
    this.CAMERA_BUFFER_RAW_FRAMEBUFFER = 1;
    this.RUMBLE_STRONG = 0;
    this.RUMBLE_WEAK = 1;
    this.HW_CONTEXT_OPENGLES_VERSION = 5;
    this.HW_CONTEXT_OPENGLES3 = 4;
    this.HW_CONTEXT_OPENGL_CORE = 3;
    this.HW_CONTEXT_OPENGLES2 = 2;
    this.HW_CONTEXT_OPENGL = 1;
    this.HW_CONTEXT_NONE = 0;
    this.PIXEL_FORMAT_RGB565 = 2;
    this.PIXEL_FORMAT_XRGB8888 = 1;
    this.PIXEL_FORMAT_0RGB1555 = 0;
    this.API_VERSION = 1;
    this.DEVICE_TYPE_SHIFT = 8;
    this.DEVICE_NONE = 0;
    this.DEVICE_JOYPAD = 1;
    this.DEVICE_MOUSE = 2;
    this.DEVICE_KEYBOARD = 3;
    this.DEVICE_LIGHTGUN = 4;
    this.DEVICE_ANALOG = 5;
    this.DEVICE_POINTER = 6;
    this.DEVICE_ID_JOYPAD_B = 0;
    this.DEVICE_ID_JOYPAD_Y = 1;
    this.DEVICE_ID_JOYPAD_SELECT = 2;
    this.DEVICE_ID_JOYPAD_START = 3;
    this.DEVICE_ID_JOYPAD_UP = 4;
    this.DEVICE_ID_JOYPAD_DOWN = 5;
    this.DEVICE_ID_JOYPAD_LEFT = 6;
    this.DEVICE_ID_JOYPAD_RIGHT = 7;
    this.DEVICE_ID_JOYPAD_A = 8;
    this.DEVICE_ID_JOYPAD_X = 9;
    this.DEVICE_ID_JOYPAD_L = 10;
    this.DEVICE_ID_JOYPAD_R = 11;
    this.DEVICE_ID_JOYPAD_L2 = 12;
    this.DEVICE_ID_JOYPAD_R2 = 13;
    this.DEVICE_ID_JOYPAD_L3 = 14;
    this.DEVICE_ID_JOYPAD_R3 = 15;
    this.DEVICE_INDEX_ANALOG_LEFT = 0;
    this.DEVICE_INDEX_ANALOG_RIGHT = 1;
    this.DEVICE_ID_ANALOG_X = 0;
    this.DEVICE_ID_ANALOG_Y = 1;
    this.DEVICE_ID_MOUSE_X = 0;
    this.DEVICE_ID_MOUSE_Y = 1;
    this.DEVICE_ID_MOUSE_LEFT = 2;
    this.DEVICE_ID_MOUSE_RIGHT = 3;
    this.DEVICE_ID_MOUSE_WHEELUP = 4;
    this.DEVICE_ID_MOUSE_WHEELDOWN = 5;
    this.DEVICE_ID_MOUSE_MIDDLE = 6;
    this.DEVICE_ID_MOUSE_HORIZ_WHEELUP = 7;
    this.DEVICE_ID_MOUSE_HORIZ_WHEELDOWN = 8;
    this.DEVICE_ID_LIGHTGUN_X = 0;
    this.DEVICE_ID_LIGHTGUN_Y = 1;
    this.DEVICE_ID_LIGHTGUN_TRIGGER = 2;
    this.DEVICE_ID_LIGHTGUN_CURSOR = 3;
    this.DEVICE_ID_LIGHTGUN_TURBO = 4;
    this.DEVICE_ID_LIGHTGUN_PAUSE = 5;
    this.DEVICE_ID_LIGHTGUN_START = 6;
    this.DEVICE_ID_POINTER_X = 0;
    this.DEVICE_ID_POINTER_Y = 1;
    this.DEVICE_ID_POINTER_PRESSED = 2;
    this.REGION_NTSC = 0;
    this.REGION_PAL = 1;
    this.MEMORY_SAVE_RAM = 0;
    this.MEMORY_RTC = 1;
    this.MEMORY_SYSTEM_RAM = 2;
    this.MEMORY_VIDEO_RAM = 3;
    this.ENVIRONMENT_SET_ROTATION = 1;
    this.ENVIRONMENT_GET_OVERSCAN = 2;
    this.ENVIRONMENT_GET_CAN_DUPE = 3;
    this.ENVIRONMENT_SET_MESSAGE = 6;
    this.ENVIRONMENT_SHUTDOWN = 7;
    this.ENVIRONMENT_SET_PERFORMANCE_LEVEL = 8;
    this.ENVIRONMENT_GET_SYSTEM_DIRECTORY = 9;
    this.ENVIRONMENT_SET_PIXEL_FORMAT = 10;
    this.ENVIRONMENT_SET_INPUT_DESCRIPTORS = 11;
    this.ENVIRONMENT_SET_KEYBOARD_CALLBACK = 12;
    this.ENVIRONMENT_SET_DISK_CONTROL_INTERFACE = 13;
    this.ENVIRONMENT_SET_HW_RENDER = 14;
    this.ENVIRONMENT_GET_VARIABLE = 15;
    this.ENVIRONMENT_SET_VARIABLES = 16;
    this.ENVIRONMENT_GET_VARIABLE_UPDATE = 17;
    this.ENVIRONMENT_SET_SUPPORT_NO_GAME = 18;
    this.ENVIRONMENT_GET_LIBRETRO_PATH = 19;
    this.ENVIRONMENT_SET_AUDIO_CALLBACK = 22;
    this.ENVIRONMENT_SET_FRAME_TIME_CALLBACK = 21;
    this.ENVIRONMENT_GET_RUMBLE_INTERFACE = 23;
    this.ENVIRONMENT_GET_INPUT_DEVICE_CAPABILITIES = 24;
    this.ENVIRONMENT_GET_LOG_INTERFACE = 27;
    this.ENVIRONMENT_GET_PERF_INTERFACE = 28;
    this.ENVIRONMENT_GET_LOCATION_INTERFACE = 29;
    this.ENVIRONMENT_GET_CONTENT_DIRECTORY = 30;
    this.ENVIRONMENT_GET_CORE_ASSETS_DIRECTORY = 30;
    this.ENVIRONMENT_GET_SAVE_DIRECTORY = 31;
    this.ENVIRONMENT_SET_SYSTEM_AV_INFO = 32;
    this.ENVIRONMENT_SET_PROC_ADDRESS_CALLBACK = 33;
    this.ENVIRONMENT_SET_SUBSYSTEM_INFO = 34;
    this.ENVIRONMENT_SET_CONTROLLER_INFO = 35;
    this.ENVIRONMENT_SET_GEOMETRY = 37;
    this.ENVIRONMENT_GET_USERNAME = 38;
    this.ENVIRONMENT_GET_LANGUAGE = 39;
    this.MEMDESC_CONST = 1;
    this.MEMDESC_BIGENDIAN = 2;
    this.MEMDESC_ALIGN_2 = 65536;
    this.MEMDESC_ALIGN_4 = 131072;
    this.MEMDESC_ALIGN_8 = 196608;
    this.MEMDESC_MINSIZE_2 = 16777216;
    this.MEMDESC_MINSIZE_4 = 33554432;
    this.MEMDESC_MINSIZE_8 = 50331648;
    this.SIMD_SSE = 1;
    this.SIMD_SSE2 = 2;
    this.SIMD_VMX = 4;
    this.SIMD_VMX128 = 8;
    this.SIMD_AVX = 16;
    this.SIMD_NEON = 32;
    this.SIMD_SSE3 = 64;
    this.SIMD_SSSE3 = 128;
    this.SIMD_MMX = 256;
    this.SIMD_MMXEXT = 512;
    this.SIMD_SSE4 = 1024;
    this.SIMD_SSE42 = 2048;
    this.SIMD_AVX2 = 4096;
    this.SIMD_VFPU = 8192;
    this.SIMD_PS = 16384;
    this.SIMD_AES = 32768;
    this.SIMD_VFPV3 = 65536;
    this.SIMD_VFPV4 = 131072;
    this.SENSOR_ACCELEROMETER_X = 1;
    this.SENSOR_ACCELEROMETER_Y = 1;
    this.SENSOR_ACCELEROMETER_Z = 2;
    this._ptrs = [];
    this._unstringify = function(ptr, str) {
      var _str = this._malloc(str.length + 1);
      this._ptrs.push(_str);
      this.writeStringToMemory(str, _str);
      this.setValue(ptr, _str, '*');
      return ptr;
    };
    this._stringify = function(ptr) {
      return this.Pointer_stringify(this.getValue(ptr, '*'));
    };
    this._get_variable = function(ptr) {
      return {
        key: this._stringify(ptr),
        value: this._stringify(ptr + 4)
      };
    };
    this._get_av_info = function(ptr) {
      return {
        geometry: {
          base_width: this.getValue(ptr, 'i32'),
          base_height: this.getValue(ptr + 4, 'i32'),
          max_width: this.getValue(ptr + 8, 'i32'),
          max_height: this.getValue(ptr + 12, 'i32'),
          aspect_ratio: this.getValue(ptr + 16, 'float')
        },
        timing: {
          fps: this.getValue(ptr + 24, 'double'),
          sample_rate: this.getValue(ptr + 32, 'double')
        }
      };
    };
    this._set_info = function(ptr, data) {
      var _data = this._malloc(data.length);
      this._ptrs.push(_data);
      new Uint8Array(this.HEAP8.buffer, _data, data.length).set(data);
      this.setValue(ptr + 4, _data, '*');
      this.setValue(ptr + 8, data.length, 'i32');
      var path = '/dummy.raw';
      var stream = this.FS.open(path, 'w+');
      this.FS.write(stream, data, 0, data.length, 0);
      this.FS.close(stream);
      this._unstringify(ptr, path);
    };
    this.get_system_info = function() {
      var _data = this._malloc(20);
      this._retro_get_system_info(_data);
      var obj = {
        library_name: this._stringify(_data),
        library_version: this._stringify(_data + 4),
        valid_extensions: this._stringify(_data + 8),
        need_fullpath: this.getValue(_data + 12, 'i32') > 0,
        block_extract: this.getValue(_data + 16, 'i32') > 0
      };
      this._free(_data);
      return obj;
    };
    this.get_system_av_info = function() {
      var _data = this._malloc(40);
      this._retro_get_system_av_info(_data);
      var info = this._get_av_info(_data);
      this._free(_data);
      return info;
    };
    this.serialize = function() {
      var size = this._retro_serialize_size();
      var _data = this._malloc(size);
      var data = false;
      if (this._retro_serialize(_data, size)) {
        data = new Uint8Array(this.HEAP8.buffer, _data, size);
      }
      this._free(_data);
      return data;
    };
    this.unserialize = function(data) {
      var _data = this._malloc(data.length);
      new Uint8Array(this.HEAP8.buffer, _data, data.length).set(data);
      var result = this._retro_unserialize(_data, data.length);
      this._free(_data);
      return result;
    };
    this.cheat_set = function(index, enabled, code) {
      var _code = this._malloc(code.length);
      this._ptrs.push(_code);
      this.writeStringToMemory(code, _code);
      this._retro_cheat_set(index, enabled, _code);
    };
    this.load_game = function(data) {
      var _info = this._malloc(16);
      this._ptrs.push(_info);
      this._set_info(_info, data);
      return this._retro_load_game(_info);
    };
    this.load_game_special = function(game_type, datas) {
      var _info = this._malloc(16 * datas.length);
      this._ptrs.push(_info);
      for (var data in datas) {
        this._set_info(_info + 16 * data, datas[data]);
      }
      return this._retro_load_game_special(game_type, _info, datas.length);
    };
    this.get_memory_data = function(id) {
      return new Uint8Array(this.HEAP8.buffer, this._retro_get_memory_data(id), this._retro_get_memory_size(id));
    };
    this.set_environment = function(fn) {
      this._retro_set_environment(this.Runtime.addFunction(function(fn, cmd, _data) {
        switch (cmd) {
          case this.ENVIRONMENT_SHUTDOWN:
            {
              return fn(cmd);
            }
          case this.ENVIRONMENT_SET_PERFORMANCE_LEVEL:
          case this.ENVIRONMENT_SET_PIXEL_FORMAT:
          case this.ENVIRONMENT_SET_ROTATION:
          case this.ENVIRONMENT_SET_SUPPORT_NO_GAME:
            {
              return fn(cmd, this.getValue(_data, 'i32'));
            }
          case this.ENVIRONMENT_SET_GEOMETRY:
            {
              return fn(cmd, {
                base_width: this.getValue(_data, 'i32'),
                base_height: this.getValue(_data + 4, 'i32'),
                max_width: this.getValue(_data + 8, 'i32'),
                max_height: this.getValue(_data + 12, 'i32'),
                aspect_ratio: this.getValue(_data + 16, 'float')
              });
            }
          case this.ENVIRONMENT_SET_INPUT_DESCRIPTORS:
            {
              var descriptions = [];
              for (var ptr = _data; this.getValue(ptr + 16, '*'); ptr += 20) {
                descriptions.push({
                  port: this.getValue(ptr, 'i32'),
                  device: this.getValue(ptr + 4, 'i32'),
                  index: this.getValue(ptr + 8, 'i32'),
                  id: this.getValue(ptr + 12, 'i32'),
                  description: this._stringify(ptr + 16)
                });
              }
              return fn(cmd, descriptions);
            }
          case this.ENVIRONMENT_SET_MESSAGE:
            {
              return fn(cmd, this._stringify(_data), this.getValue(_data + 4, 'i32'));
            }
          case this.ENVIRONMENT_SET_SYSTEM_AV_INFO:
            {
              return fn(cmd, this._get_av_info(_data));
            }
          case this.ENVIRONMENT_SET_VARIABLES:
            {
              var variables = [];
              for (ptr = _data; this.getValue(ptr, '*'); ptr += 8) {
                variables.push(this._get_variable(ptr));
              }
              return fn(cmd, variables);
            }
          case this.ENVIRONMENT_GET_CAN_DUPE:
          case this.ENVIRONMENT_GET_OVERSCAN:
          case this.ENVIRONMENT_GET_VARIABLE_UPDATE:
            {
              this.setValue(_data, fn(cmd), 'i16');
              return true;
            }
          case this.ENVIRONMENT_GET_LANGUAGE:
          case this.ENVIRONMENT_GET_INPUT_DEVICE_CAPABILITIES:
            {
              this.setValue(_data, fn(cmd), 'i32');
              return true;
            }
          case this.ENVIRONMENT_GET_SYSTEM_DIRECTORY:
          case this.ENVIRONMENT_GET_LIBRETRO_PATH:
          case this.ENVIRONMENT_GET_CORE_ASSETS_DIRECTORY:
          case this.ENVIRONMENT_GET_SAVE_DIRECTORY:
          case this.ENVIRONMENT_GET_USERNAME:
            {
              this._unstringify(_data, fn(cmd));
              return true;
            }
          case this.ENVIRONMENT_GET_VARIABLE:
            {
              this._unstringify(_data + 4, fn(cmd, this._get_variable(_data)));
              return true;
            }
          case this.ENVIRONMENT_GET_LOG_INTERFACE:
            {
              var func = fn(cmd);
              this.setValue(_data, this.Runtime.addFunction(function(func, level) {
                var args = [];
                var varargs = Array.prototype.slice.call(arguments, 3);
                for (var vararg in varargs) {
                  args.push(this.Pointer_stringify(varargs[vararg]));
                }
                func.apply(null, [level].concat(args));
              }.bind(this, func)), '*');
              return true;
            }
          case this.ENVIRONMENT_GET_PERF_INTERFACE:
            {
              var perf = fn(cmd);
              this.setValue(_data, this.Runtime.addFunction(perf.get_time_usec), '*');
              this.setValue(_data + 4, this.Runtime.addFunction(perf.get_cpu_features), '*');
              this.setValue(_data + 8, this.Runtime.addFunction(perf.get_perf_counter), '*');
              this.setValue(_data + 12, this.Runtime.addFunction(perf.register), '*');
              this.setValue(_data + 16, this.Runtime.addFunction(perf.start), '*');
              this.setValue(_data + 20, this.Runtime.addFunction(perf.stop), '*');
              this.setValue(_data + 24, this.Runtime.addFunction(perf.log), '*');
              return true;
            }
          case this.ENVIRONMENT_GET_RUMBLE_INTERFACE:
            {
              this.setValue(_data, this.Runtime.addFunction(fn(cmd)), '*');
              return true;
            }
          default:
            {
              return fn(cmd, _data);
            }
        }
      }.bind(this, fn)));
    };
    this.set_video_refresh = function(fn) {
      this._retro_set_video_refresh(this.Runtime.addFunction(function(fn, _data, width, height, pitch) {
        var data = new Uint16Array(this.HEAPU16.buffer, _data, height * pitch);
        fn(data, width, height, pitch);
      }.bind(this, fn)));
    };
    this.set_audio_sample_batch = function(fn) {
      this._retro_set_audio_sample_batch(this.Runtime.addFunction(function(fn, _data, frames) {
        var left = new Float32Array(frames);
        var right = new Float32Array(frames);
        var data = new Int16Array(this.HEAP16.buffer, _data, frames * 4);
        for (var i = 0; i < frames; i++) {
          left[i] = data[i * 2] / 0x8000;
          right[i] = data[i * 2 + 1] / 0x8000;
        }
        return fn(left, right, frames);
      }.bind(this, fn)));
    };
    this.set_audio_sample = function(fn) {
      this._retro_set_audio_sample(this.Runtime.addFunction(fn));
    };
    this.set_input_poll = function(fn) {
      this._retro_set_input_poll(this.Runtime.addFunction(fn));
    };
    this.set_input_state = function(fn) {
      this._retro_set_input_state(this.Runtime.addFunction(fn));
    };
    this.init = function() {
      this._retro_init();
    };
    this.deinit = function() {
      this._retro_deinit();
    };
    this.api_version = function() {
      return this._retro_api_version();
    };
    this.reset = function() {
      this._retro_reset();
    };
    this.run = function() {
      this._retro_run();
    };
    this.unload_game = function() {
      this._retro_unload_game();
    };
    this.get_region = function() {
      return this._retro_get_region();
    };
    this.cheat_reset = function() {
      this._retro_cheat_reset();
    };
    this.set_controller_port_device = function(port, device) {
      this._retro_set_controller_port_device(port, device);
    };
  }
  addHelpers.call(Core);
  return Core;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("npm:snes9x-next@0.7.0", ["npm:snes9x-next@0.7.0/retro"], function(main) {
  return main;
});

_removeDefine();
})();
System.registerDynamic("npm:core-js@1.1.4/library/modules/$.unscope", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function() {};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-step", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iterators", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.library", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.property-desc", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.support-desc", ["npm:core-js@1.1.4/library/modules/$.fails"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = !require("npm:core-js@1.1.4/library/modules/$.fails")(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.hide", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.property-desc", "npm:core-js@1.1.4/library/modules/$.support-desc"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@1.1.4/library/modules/$"),
      createDesc = require("npm:core-js@1.1.4/library/modules/$.property-desc");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.support-desc") ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.redef", ["npm:core-js@1.1.4/library/modules/$.hide"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:core-js@1.1.4/library/modules/$.hide");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.has", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.shared", ["npm:core-js@1.1.4/library/modules/$.global"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = require("npm:core-js@1.1.4/library/modules/$.global"),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.uid", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.wks", ["npm:core-js@1.1.4/library/modules/$.shared", "npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.uid"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var store = require("npm:core-js@1.1.4/library/modules/$.shared")('wks'),
      Symbol = require("npm:core-js@1.1.4/library/modules/$.global").Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || require("npm:core-js@1.1.4/library/modules/$.uid"))('Symbol.' + name));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.tag", ["npm:core-js@1.1.4/library/modules/$.has", "npm:core-js@1.1.4/library/modules/$.hide", "npm:core-js@1.1.4/library/modules/$.wks"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var has = require("npm:core-js@1.1.4/library/modules/$.has"),
      hide = require("npm:core-js@1.1.4/library/modules/$.hide"),
      TAG = require("npm:core-js@1.1.4/library/modules/$.wks")('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      hide(it, TAG, tag);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-create", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.hide", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.property-desc", "npm:core-js@1.1.4/library/modules/$.tag"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var $ = require("npm:core-js@1.1.4/library/modules/$"),
      IteratorPrototype = {};
  require("npm:core-js@1.1.4/library/modules/$.hide")(IteratorPrototype, require("npm:core-js@1.1.4/library/modules/$.wks")('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: require("npm:core-js@1.1.4/library/modules/$.property-desc")(1, next)});
    require("npm:core-js@1.1.4/library/modules/$.tag")(Constructor, NAME + ' Iterator');
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-define", ["npm:core-js@1.1.4/library/modules/$.library", "npm:core-js@1.1.4/library/modules/$.def", "npm:core-js@1.1.4/library/modules/$.redef", "npm:core-js@1.1.4/library/modules/$.hide", "npm:core-js@1.1.4/library/modules/$.has", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.iterators", "npm:core-js@1.1.4/library/modules/$.iter-create", "npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.tag"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var LIBRARY = require("npm:core-js@1.1.4/library/modules/$.library"),
      $def = require("npm:core-js@1.1.4/library/modules/$.def"),
      $redef = require("npm:core-js@1.1.4/library/modules/$.redef"),
      hide = require("npm:core-js@1.1.4/library/modules/$.hide"),
      has = require("npm:core-js@1.1.4/library/modules/$.has"),
      SYMBOL_ITERATOR = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator'),
      Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators"),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE) {
    require("npm:core-js@1.1.4/library/modules/$.iter-create")(Constructor, NAME, next);
    var createMethod = function(kind) {
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        proto = Base.prototype,
        _native = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        _default = _native || createMethod(DEFAULT),
        methods,
        key;
    if (_native) {
      var IteratorPrototype = require("npm:core-js@1.1.4/library/modules/$").getProto(_default.call(new Base));
      require("npm:core-js@1.1.4/library/modules/$.tag")(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
    }
    if (!LIBRARY || FORCE)
      hide(proto, SYMBOL_ITERATOR, _default);
    Iterators[NAME] = _default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        keys: IS_SET ? _default : createMethod(KEYS),
        values: DEFAULT == VALUES ? _default : createMethod(VALUES),
        entries: DEFAULT != VALUES ? _default : createMethod('entries')
      };
      if (FORCE)
        for (key in methods) {
          if (!(key in proto))
            $redef(proto, key, methods[key]);
        }
      else
        $def($def.P + $def.F * BUGGY, NAME, methods);
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.array.iterator", ["npm:core-js@1.1.4/library/modules/$.unscope", "npm:core-js@1.1.4/library/modules/$.iter-step", "npm:core-js@1.1.4/library/modules/$.iterators", "npm:core-js@1.1.4/library/modules/$.to-iobject", "npm:core-js@1.1.4/library/modules/$.iter-define"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var setUnscope = require("npm:core-js@1.1.4/library/modules/$.unscope"),
      step = require("npm:core-js@1.1.4/library/modules/$.iter-step"),
      Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators"),
      toIObject = require("npm:core-js@1.1.4/library/modules/$.to-iobject");
  require("npm:core-js@1.1.4/library/modules/$.iter-define")(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  setUnscope('keys');
  setUnscope('values');
  setUnscope('entries');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/web.dom.iterable", ["npm:core-js@1.1.4/library/modules/es6.array.iterator", "npm:core-js@1.1.4/library/modules/$.iterators"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/es6.array.iterator");
  var Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators");
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.to-integer", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.string-at", ["npm:core-js@1.1.4/library/modules/$.to-integer", "npm:core-js@1.1.4/library/modules/$.defined"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = require("npm:core-js@1.1.4/library/modules/$.to-integer"),
      defined = require("npm:core-js@1.1.4/library/modules/$.defined");
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.string.iterator", ["npm:core-js@1.1.4/library/modules/$.string-at", "npm:core-js@1.1.4/library/modules/$.iter-define"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var $at = require("npm:core-js@1.1.4/library/modules/$.string-at")(true);
  require("npm:core-js@1.1.4/library/modules/$.iter-define")(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.classof", ["npm:core-js@1.1.4/library/modules/$.cof", "npm:core-js@1.1.4/library/modules/$.wks"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = require("npm:core-js@1.1.4/library/modules/$.cof"),
      TAG = require("npm:core-js@1.1.4/library/modules/$.wks")('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/core.get-iterator-method", ["npm:core-js@1.1.4/library/modules/$.classof", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.iterators", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var classof = require("npm:core-js@1.1.4/library/modules/$.classof"),
      ITERATOR = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator'),
      Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.core").getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/core.get-iterator", ["npm:core-js@1.1.4/library/modules/$.an-object", "npm:core-js@1.1.4/library/modules/core.get-iterator-method", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = require("npm:core-js@1.1.4/library/modules/$.an-object"),
      get = require("npm:core-js@1.1.4/library/modules/core.get-iterator-method");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.core").getIterator = function(it) {
    var iterFn = get(it);
    if (typeof iterFn != 'function')
      throw TypeError(it + ' is not iterable!');
    return anObject(iterFn.call(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/get-iterator", ["npm:core-js@1.1.4/library/modules/web.dom.iterable", "npm:core-js@1.1.4/library/modules/es6.string.iterator", "npm:core-js@1.1.4/library/modules/core.get-iterator"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/web.dom.iterable");
  require("npm:core-js@1.1.4/library/modules/es6.string.iterator");
  module.exports = require("npm:core-js@1.1.4/library/modules/core.get-iterator");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.25/core-js/get-iterator", ["npm:core-js@1.1.4/library/fn/get-iterator"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/get-iterator"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/core.is-iterable", ["npm:core-js@1.1.4/library/modules/$.classof", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.iterators", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var classof = require("npm:core-js@1.1.4/library/modules/$.classof"),
      ITERATOR = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator'),
      Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.core").isIterable = function(it) {
    var O = Object(it);
    return ITERATOR in O || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/is-iterable", ["npm:core-js@1.1.4/library/modules/web.dom.iterable", "npm:core-js@1.1.4/library/modules/es6.string.iterator", "npm:core-js@1.1.4/library/modules/core.is-iterable"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/web.dom.iterable");
  require("npm:core-js@1.1.4/library/modules/es6.string.iterator");
  module.exports = require("npm:core-js@1.1.4/library/modules/core.is-iterable");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.25/core-js/is-iterable", ["npm:core-js@1.1.4/library/fn/is-iterable"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/is-iterable"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.25/helpers/sliced-to-array", ["npm:babel-runtime@5.8.25/core-js/get-iterator", "npm:babel-runtime@5.8.25/core-js/is-iterable"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _getIterator = require("npm:babel-runtime@5.8.25/core-js/get-iterator")["default"];
  var _isIterable = require("npm:babel-runtime@5.8.25/core-js/is-iterable")["default"];
  exports["default"] = (function() {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;
      try {
        for (var _i = _getIterator(arr),
            _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"])
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    return function(arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (_isIterable(Object(arr))) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.object.to-string", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.strict-new", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-call", ["npm:core-js@1.1.4/library/modules/$.an-object"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = require("npm:core-js@1.1.4/library/modules/$.an-object");
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.is-array-iter", ["npm:core-js@1.1.4/library/modules/$.iterators", "npm:core-js@1.1.4/library/modules/$.wks"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators"),
      ITERATOR = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator');
  module.exports = function(it) {
    return (Iterators.Array || Array.prototype[ITERATOR]) === it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.to-length", ["npm:core-js@1.1.4/library/modules/$.to-integer"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = require("npm:core-js@1.1.4/library/modules/$.to-integer"),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.for-of", ["npm:core-js@1.1.4/library/modules/$.ctx", "npm:core-js@1.1.4/library/modules/$.iter-call", "npm:core-js@1.1.4/library/modules/$.is-array-iter", "npm:core-js@1.1.4/library/modules/$.an-object", "npm:core-js@1.1.4/library/modules/$.to-length", "npm:core-js@1.1.4/library/modules/core.get-iterator-method"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = require("npm:core-js@1.1.4/library/modules/$.ctx"),
      call = require("npm:core-js@1.1.4/library/modules/$.iter-call"),
      isArrayIter = require("npm:core-js@1.1.4/library/modules/$.is-array-iter"),
      anObject = require("npm:core-js@1.1.4/library/modules/$.an-object"),
      toLength = require("npm:core-js@1.1.4/library/modules/$.to-length"),
      getIterFn = require("npm:core-js@1.1.4/library/modules/core.get-iterator-method");
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.same", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.species", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.support-desc"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var $ = require("npm:core-js@1.1.4/library/modules/$"),
      SPECIES = require("npm:core-js@1.1.4/library/modules/$.wks")('species');
  module.exports = function(C) {
    if (require("npm:core-js@1.1.4/library/modules/$.support-desc") && !(SPECIES in C))
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.invoke", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.html", ["npm:core-js@1.1.4/library/modules/$.global"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:core-js@1.1.4/library/modules/$.global").document && document.documentElement;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.dom-create", ["npm:core-js@1.1.4/library/modules/$.is-object", "npm:core-js@1.1.4/library/modules/$.global"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = require("npm:core-js@1.1.4/library/modules/$.is-object"),
      document = require("npm:core-js@1.1.4/library/modules/$.global").document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:process@0.10.1/browser", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  function drainQueue() {
    if (draining) {
      return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      var i = -1;
      while (++i < len) {
        currentQueue[i]();
      }
      len = queue.length;
    }
    draining = false;
  }
  process.nextTick = function(fun) {
    queue.push(fun);
    if (!draining) {
      setTimeout(drainQueue, 0);
    }
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:process@0.10.1", ["npm:process@0.10.1/browser"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:process@0.10.1/browser");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.1/index", ["npm:process@0.10.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? process : require("npm:process@0.10.1");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.1", ["github:jspm/nodelibs-process@0.1.1/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-process@0.1.1/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.task", ["npm:core-js@1.1.4/library/modules/$.ctx", "npm:core-js@1.1.4/library/modules/$.invoke", "npm:core-js@1.1.4/library/modules/$.html", "npm:core-js@1.1.4/library/modules/$.dom-create", "npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.cof", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ctx = require("npm:core-js@1.1.4/library/modules/$.ctx"),
        invoke = require("npm:core-js@1.1.4/library/modules/$.invoke"),
        html = require("npm:core-js@1.1.4/library/modules/$.html"),
        cel = require("npm:core-js@1.1.4/library/modules/$.dom-create"),
        global = require("npm:core-js@1.1.4/library/modules/$.global"),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if (require("npm:core-js@1.1.4/library/modules/$.cof")(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScript) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.microtask", ["npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.task", "npm:core-js@1.1.4/library/modules/$.cof", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var global = require("npm:core-js@1.1.4/library/modules/$.global"),
        macrotask = require("npm:core-js@1.1.4/library/modules/$.task").set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        isNode = require("npm:core-js@1.1.4/library/modules/$.cof")(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        if (domain)
          domain.enter();
        head.fn.call();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.mix", ["npm:core-js@1.1.4/library/modules/$.redef"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $redef = require("npm:core-js@1.1.4/library/modules/$.redef");
  module.exports = function(target, src) {
    for (var key in src)
      $redef(target, key, src[key]);
    return target;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-detect", ["npm:core-js@1.1.4/library/modules/$.wks"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var SYMBOL_ITERATOR = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][SYMBOL_ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec) {
    if (!SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[SYMBOL_ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[SYMBOL_ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.promise", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.library", "npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.ctx", "npm:core-js@1.1.4/library/modules/$.classof", "npm:core-js@1.1.4/library/modules/$.def", "npm:core-js@1.1.4/library/modules/$.is-object", "npm:core-js@1.1.4/library/modules/$.an-object", "npm:core-js@1.1.4/library/modules/$.a-function", "npm:core-js@1.1.4/library/modules/$.strict-new", "npm:core-js@1.1.4/library/modules/$.for-of", "npm:core-js@1.1.4/library/modules/$.set-proto", "npm:core-js@1.1.4/library/modules/$.same", "npm:core-js@1.1.4/library/modules/$.species", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.uid", "npm:core-js@1.1.4/library/modules/$.microtask", "npm:core-js@1.1.4/library/modules/$.support-desc", "npm:core-js@1.1.4/library/modules/$.mix", "npm:core-js@1.1.4/library/modules/$.tag", "npm:core-js@1.1.4/library/modules/$.core", "npm:core-js@1.1.4/library/modules/$.iter-detect", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var $ = require("npm:core-js@1.1.4/library/modules/$"),
        LIBRARY = require("npm:core-js@1.1.4/library/modules/$.library"),
        global = require("npm:core-js@1.1.4/library/modules/$.global"),
        ctx = require("npm:core-js@1.1.4/library/modules/$.ctx"),
        classof = require("npm:core-js@1.1.4/library/modules/$.classof"),
        $def = require("npm:core-js@1.1.4/library/modules/$.def"),
        isObject = require("npm:core-js@1.1.4/library/modules/$.is-object"),
        anObject = require("npm:core-js@1.1.4/library/modules/$.an-object"),
        aFunction = require("npm:core-js@1.1.4/library/modules/$.a-function"),
        strictNew = require("npm:core-js@1.1.4/library/modules/$.strict-new"),
        forOf = require("npm:core-js@1.1.4/library/modules/$.for-of"),
        setProto = require("npm:core-js@1.1.4/library/modules/$.set-proto").set,
        same = require("npm:core-js@1.1.4/library/modules/$.same"),
        species = require("npm:core-js@1.1.4/library/modules/$.species"),
        SPECIES = require("npm:core-js@1.1.4/library/modules/$.wks")('species'),
        RECORD = require("npm:core-js@1.1.4/library/modules/$.uid")('record'),
        asap = require("npm:core-js@1.1.4/library/modules/$.microtask"),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    };
    var useNative = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && require("npm:core-js@1.1.4/library/modules/$.support-desc")) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var isPromise = function(it) {
      return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
    };
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(react) {
          var cb = ok ? react.ok : react.fail,
              ret,
              then;
          try {
            if (cb) {
              if (!ok)
                record.h = true;
              ret = cb === true ? value : cb(value);
              if (ret === react.P) {
                react.rej(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(ret)) {
                then.call(ret, react.res, react.rej);
              } else
                react.res(ret);
            } else
              react.rej(value);
          } catch (err) {
            react.rej(err);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            if (isUnhandled(record.p)) {
              if (isNode) {
                process.emit('unhandledRejection', value, record.p);
              } else if (global.console && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise[RECORD],
          chain = record.a || record.c,
          i = 0,
          react;
      if (record.h)
        return false;
      while (chain.length > i) {
        react = chain[i++];
        if (react.fail || !isUnhandled(react.P))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!useNative) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        this[RECORD] = record;
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      require("npm:core-js@1.1.4/library/modules/$.mix")(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var S = anObject(anObject(this).constructor)[SPECIES];
          var react = {
            ok: typeof onFulfilled == 'function' ? onFulfilled : true,
            fail: typeof onRejected == 'function' ? onRejected : false
          };
          var promise = react.P = new (S != undefined ? S : P)(function(res, rej) {
            react.res = aFunction(res);
            react.rej = aFunction(rej);
          });
          var record = this[RECORD];
          record.c.push(react);
          if (record.a)
            record.a.push(react);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $def($def.G + $def.W + $def.F * !useNative, {Promise: P});
    require("npm:core-js@1.1.4/library/modules/$.tag")(P, PROMISE);
    species(P);
    species(Wrapper = require("npm:core-js@1.1.4/library/modules/$.core")[PROMISE]);
    $def($def.S + $def.F * !useNative, PROMISE, {reject: function reject(r) {
        return new this(function(res, rej) {
          rej(r);
        });
      }});
    $def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        return isPromise(x) && sameConstructor(x.constructor, this) ? x : new this(function(res) {
          res(x);
        });
      }});
    $def($def.S + $def.F * !(useNative && require("npm:core-js@1.1.4/library/modules/$.iter-detect")(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            values = [];
        return new C(function(res, rej) {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              C.resolve(promise).then(function(value) {
                results[index] = value;
                --remaining || res(results);
              }, rej);
            });
          else
            res(results);
        });
      },
      race: function race(iterable) {
        var C = getConstructor(this);
        return new C(function(res, rej) {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(res, rej);
          });
        });
      }
    });
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/promise", ["npm:core-js@1.1.4/library/modules/es6.object.to-string", "npm:core-js@1.1.4/library/modules/es6.string.iterator", "npm:core-js@1.1.4/library/modules/web.dom.iterable", "npm:core-js@1.1.4/library/modules/es6.promise", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/es6.object.to-string");
  require("npm:core-js@1.1.4/library/modules/es6.string.iterator");
  require("npm:core-js@1.1.4/library/modules/web.dom.iterable");
  require("npm:core-js@1.1.4/library/modules/es6.promise");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.core").Promise;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.25/core-js/promise", ["npm:core-js@1.1.4/library/fn/promise"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/promise"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:mohayonao/web-audio-api-shim@0.3.0/build/web-audio-api-shim", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    "format global";
    (function e(t, n, r) {
      function s(o, u) {
        if (!n[o]) {
          if (!t[o]) {
            var a = typeof require == "function" && require;
            if (!u && a)
              return a(o, !0);
            if (i)
              return i(o, !0);
            var f = new Error("Cannot find module '" + o + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var l = n[o] = {exports: {}};
          t[o][0].call(l.exports, function(e) {
            var n = t[o][1][e];
            return s(n ? n : e);
          }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
      }
      var i = typeof require == "function" && require;
      for (var o = 0; o < r.length; o++)
        s(r[o]);
      return s;
    })({
      1: [function(require, module, exports) {
        module.exports = require("./lib/install")(Infinity);
      }, {"./lib/install": 6}],
      2: [function(require, module, exports) {
        (function(global) {
          "use strict";
          Object.defineProperty(exports, "__esModule", {value: true});
          exports.install = install;
          var AnalyserNode = global.AnalyserNode;
          function installGetFloatTimeDomainData() {
            if (AnalyserNode.prototype.hasOwnProperty("getFloatTimeDomainData")) {
              return;
            }
            var uint8 = new Uint8Array(2048);
            AnalyserNode.prototype.getFloatTimeDomainData = function(array) {
              this.getByteTimeDomainData(uint8);
              for (var i = 0,
                  imax = array.length; i < imax; i++) {
                array[i] = (uint8[i] - 128) * 0.0078125;
              }
            };
          }
          function install() {
            installGetFloatTimeDomainData();
          }
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}],
      3: [function(require, module, exports) {
        (function(global) {
          "use strict";
          Object.defineProperty(exports, "__esModule", {value: true});
          exports.install = install;
          var AudioBuffer = global.AudioBuffer;
          function installCopyFromChannel() {
            if (AudioBuffer.prototype.hasOwnProperty("copyFromChannel")) {
              return;
            }
            AudioBuffer.prototype.copyFromChannel = function(destination, channelNumber, startInChannel) {
              var source = this.getChannelData(channelNumber | 0).subarray(startInChannel | 0);
              destination.set(source.subarray(0, Math.min(source.length, destination.length)));
            };
          }
          function installCopyToChannel() {
            if (AudioBuffer.prototype.hasOwnProperty("copyToChannel")) {
              return;
            }
            AudioBuffer.prototype.copyToChannel = function(source, channelNumber, startInChannel) {
              var clipped = source.subarray(0, Math.min(source.length, this.length - (startInChannel | 0)));
              this.getChannelData(channelNumber | 0).set(clipped, startInChannel | 0);
            };
          }
          function install() {
            installCopyFromChannel();
            installCopyToChannel();
          }
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}],
      4: [function(require, module, exports) {
        (function(global) {
          "use strict";
          Object.defineProperty(exports, "__esModule", {value: true});
          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();
          var _get = function get(_x, _x2, _x3) {
            var _again = true;
            _function: while (_again) {
              var object = _x,
                  property = _x2,
                  receiver = _x3;
              desc = parent = getter = undefined;
              _again = false;
              if (object === null)
                object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return undefined;
                } else {
                  _x = parent;
                  _x2 = property;
                  _x3 = receiver;
                  _again = true;
                  continue _function;
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === undefined) {
                  return undefined;
                }
                return getter.call(receiver);
              }
            }
          };
          exports.install = install;
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }});
            if (superClass)
              subClass.__proto__ = superClass;
          }
          var OriginalAudioContext = global.AudioContext;
          var OriginalOfflineAudioContext = global.OfflineAudioContext;
          var AudioNode = global.AudioNode;
          var EventTarget = global.EventTarget || global.Object.constructor;
          function nop() {}
          function inherits(ctor, superCtor) {
            ctor.prototype = Object.create(superCtor.prototype, {constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }});
          }
          function replaceAudioContext() {
            if (global.AudioContext !== OriginalAudioContext) {
              return;
            }
            function BaseAudioContext(audioContext) {
              this._ = {};
              this._.audioContext = audioContext;
              this._.destination = audioContext.destination;
              this._.state = "";
              this._.currentTime = 0;
              this._.sampleRate = audioContext.sampleRate;
              this._.onstatechange = null;
            }
            inherits(BaseAudioContext, EventTarget);
            Object.defineProperties(BaseAudioContext.prototype, {
              destination: {get: function get() {
                  return this._.destination;
                }},
              sampleRate: {get: function get() {
                  return this._.sampleRate;
                }},
              currentTime: {get: function get() {
                  return this._.currentTime || this._.audioContext.currentTime;
                }},
              listener: {get: function get() {
                  return this._.audioContext.listener;
                }},
              state: {get: function get() {
                  return this._.state;
                }},
              onstatechange: {
                set: function set(fn) {
                  if (typeof fn === "function") {
                    this._.onstatechange = fn;
                  }
                },
                get: function get() {
                  return this._.onstatechange;
                }
              }
            });
            var AudioContext = (function(_BaseAudioContext) {
              function AudioContext() {
                _classCallCheck(this, AudioContext);
                _get(Object.getPrototypeOf(AudioContext.prototype), "constructor", this).call(this, new OriginalAudioContext());
                this._.state = "running";
                if (!OriginalAudioContext.prototype.hasOwnProperty("suspend")) {
                  this._.destination = this._.audioContext.createGain();
                  this._.destination.connect(this._.audioContext.destination);
                  this._.destination.connect = function() {
                    this._.audioContext.destination.connect.apply(this._.audioContext.destination, arguments);
                  };
                  this._.destination.disconnect = function() {
                    this._.audioContext.destination.connect.apply(this._.audioContext.destination, arguments);
                  };
                  this._.destination.channelCountMode = "explicit";
                }
              }
              _inherits(AudioContext, _BaseAudioContext);
              return AudioContext;
            })(BaseAudioContext);
            AudioContext.prototype.suspend = function() {
              var _this = this;
              if (this._.state === "closed") {
                return Promise.reject(new Error("cannot suspend a closed AudioContext"));
              }
              function changeState() {
                this._.state = "suspended";
                this._.currentTime = this._.audioContext.currentTime;
              }
              var promise = undefined;
              if (typeof this._.audioContext === "function") {
                promise = this._.audioContext.suspend();
                promise.then(function() {
                  changeState.call(_this);
                });
              } else {
                AudioNode.prototype.disconnect.call(this._.destination);
                promise = Promise.resolve();
                promise.then(function() {
                  changeState.call(_this);
                  var e = new global.Event("statechange");
                  if (typeof _this._.onstatechange === "function") {
                    _this._.onstatechange(e);
                  }
                  _this.dispatchEvent(e);
                });
              }
              return promise;
            };
            AudioContext.prototype.resume = function() {
              var _this2 = this;
              if (this._.state === "closed") {
                return Promise.reject(new Error("cannot resume a closed AudioContext"));
              }
              function changeState() {
                this._.state = "running";
                this._.currentTime = 0;
              }
              var promise = undefined;
              if (typeof this._.audioContext.resume === "function") {
                promise = this._.audioContext.resume();
                promise.then(function() {
                  changeState.call(_this2);
                });
              } else {
                AudioNode.prototype.connect.call(this._.destination, this._.audioContext.destination);
                promise = Promise.resolve();
                promise.then(function() {
                  changeState.call(_this2);
                  var e = new global.Event("statechange");
                  if (typeof _this2._.onstatechange === "function") {
                    _this2._.onstatechange(e);
                  }
                  _this2.dispatchEvent(e);
                });
              }
              return promise;
            };
            AudioContext.prototype.close = function() {
              var _this3 = this;
              if (this._.state === "closed") {
                return Promise.reject(new Error("Cannot close a context that is being closed or has already been closed."));
              }
              function changeState() {
                this._.state = "closed";
                this._.currentTime = Infinity;
                this._.sampleRate = 0;
              }
              var promise = undefined;
              if (typeof this._.audioContext.close === "function") {
                promise = this._.audioContext.close();
                promise.then(function() {
                  changeState.call(_this3);
                });
              } else {
                if (typeof this._.audioContext.suspend === "function") {
                  this._.audioContext.suspend();
                } else {
                  AudioNode.prototype.disconnect.call(this._.destination);
                }
                promise = Promise.resolve();
                promise.then(function() {
                  changeState.call(_this3);
                  var e = new global.Event("statechange");
                  if (typeof _this3._.onstatechange === "function") {
                    _this3._.onstatechange(e);
                  }
                  _this3.dispatchEvent(e);
                });
              }
              return promise;
            };
            ["addEventListener", "removeEventListener", "dispatchEvent", "createBuffer"].forEach(function(methodName) {
              AudioContext.prototype[methodName] = function() {
                return this._.audioContext[methodName].apply(this._.audioContext, arguments);
              };
            });
            ["decodeAudioData", "createBufferSource", "createMediaElementSource", "createMediaStreamSource", "createMediaStreamDestination", "createAudioWorker", "createScriptProcessor", "createAnalyser", "createGain", "createDelay", "createBiquadFilter", "createWaveShaper", "createPanner", "createStereoPanner", "createConvolver", "createChannelSplitter", "createChannelMerger", "createDynamicsCompressor", "createOscillator", "createPeriodicWave"].forEach(function(methodName) {
              AudioContext.prototype[methodName] = function() {
                if (this._.state === "closed") {
                  throw new Error("Failed to execute '" + methodName + "' on 'AudioContext': AudioContext has been closed");
                }
                return this._.audioContext[methodName].apply(this._.audioContext, arguments);
              };
            });
            var OfflineAudioContext = (function(_BaseAudioContext2) {
              function OfflineAudioContext(numberOfChannels, length, sampleRate) {
                _classCallCheck(this, OfflineAudioContext);
                _get(Object.getPrototypeOf(OfflineAudioContext.prototype), "constructor", this).call(this, new OriginalOfflineAudioContext(numberOfChannels, length, sampleRate));
                this._.state = "suspended";
              }
              _inherits(OfflineAudioContext, _BaseAudioContext2);
              _createClass(OfflineAudioContext, [{
                key: "oncomplete",
                set: function set(fn) {
                  this._.audioContext.oncomplete = fn;
                },
                get: function get() {
                  return this._.audioContext.oncomplete;
                }
              }]);
              return OfflineAudioContext;
            })(BaseAudioContext);
            ["addEventListener", "removeEventListener", "dispatchEvent", "createBuffer", "decodeAudioData", "createBufferSource", "createMediaElementSource", "createMediaStreamSource", "createMediaStreamDestination", "createAudioWorker", "createScriptProcessor", "createAnalyser", "createGain", "createDelay", "createBiquadFilter", "createWaveShaper", "createPanner", "createStereoPanner", "createConvolver", "createChannelSplitter", "createChannelMerger", "createDynamicsCompressor", "createOscillator", "createPeriodicWave"].forEach(function(methodName) {
              OfflineAudioContext.prototype[methodName] = function() {
                return this._.audioContext[methodName].apply(this._.audioContext, arguments);
              };
            });
            OfflineAudioContext.prototype.startRendering = function() {
              var _this4 = this;
              if (this._.state !== "suspended") {
                return Promise.reject(new Error("cannot call startRendering more than once"));
              }
              this._.state = "running";
              var promise = this._.audioContext.startRendering();
              promise.then(function() {
                _this4._.state = "closed";
                var e = new global.Event("statechange");
                if (typeof _this4._.onstatechange === "function") {
                  _this4._.onstatechange(e);
                }
                _this4.dispatchEvent(e);
              });
              return promise;
            };
            OfflineAudioContext.prototype.suspend = function() {
              if (typeof this._.audioContext.suspend === "function") {
                return this._.audioContext.suspend();
              }
              return Promise.reject(new Error("cannot suspend an OfflineAudioContext"));
            };
            OfflineAudioContext.prototype.resume = function() {
              if (typeof this._.audioContext.resume === "function") {
                return this._.audioContext.resume();
              }
              return Promise.reject(new Error("cannot resume an OfflineAudioContext"));
            };
            OfflineAudioContext.prototype.close = function() {
              if (typeof this._.audioContext.close === "function") {
                return this._.audioContext.close();
              }
              return Promise.reject(new Error("cannot close an OfflineAudioContext"));
            };
            global.AudioContext = AudioContext;
            global.OfflineAudioContext = OfflineAudioContext;
          }
          function installCreateAudioWorker() {}
          function installCreateStereoPanner() {
            if (OriginalAudioContext.prototype.hasOwnProperty("createStereoPanner")) {
              return;
            }
            var StereoPannerNode = require("stereo-panner-node");
            OriginalAudioContext.prototype.createStereoPanner = function() {
              return new StereoPannerNode(this);
            };
          }
          function installDecodeAudioData() {
            var audioContext = new OriginalOfflineAudioContext(1, 1, 44100);
            var isPromiseBased = false;
            try {
              var audioData = new Uint32Array([1179011410, 48, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 8, 0, 0, 0, 0]).buffer;
              isPromiseBased = !!audioContext.decodeAudioData(audioData, nop);
            } catch (e) {
              nop(e);
            }
            if (isPromiseBased) {
              return;
            }
            var decodeAudioData = OriginalAudioContext.prototype.decodeAudioData;
            OriginalAudioContext.prototype.decodeAudioData = function(audioData, successCallback, errorCallback) {
              var _this5 = this;
              var promise = new Promise(function(resolve, reject) {
                return decodeAudioData.call(_this5, audioData, resolve, reject);
              });
              promise.then(successCallback, errorCallback);
              return promise;
            };
            OriginalAudioContext.prototype.decodeAudioData.original = decodeAudioData;
          }
          function installClose() {
            if (OriginalAudioContext.prototype.hasOwnProperty("close")) {
              return;
            }
            replaceAudioContext();
          }
          function installResume() {
            if (OriginalAudioContext.prototype.hasOwnProperty("resume")) {
              return;
            }
            replaceAudioContext();
          }
          function installSuspend() {
            if (OriginalAudioContext.prototype.hasOwnProperty("suspend")) {
              return;
            }
            replaceAudioContext();
          }
          function installStartRendering() {
            var audioContext = new OriginalOfflineAudioContext(1, 1, 44100);
            var isPromiseBased = false;
            try {
              isPromiseBased = !!audioContext.startRendering();
            } catch (e) {
              nop(e);
            }
            if (isPromiseBased) {
              return;
            }
            var startRendering = OriginalOfflineAudioContext.prototype.startRendering;
            OriginalOfflineAudioContext.prototype.startRendering = function() {
              var _this6 = this;
              return new Promise(function(resolve) {
                var oncomplete = _this6.oncomplete;
                _this6.oncomplete = function(e) {
                  resolve(e.renderedBuffer);
                  if (typeof oncomplete === "function") {
                    oncomplete.call(_this6, e);
                  }
                };
                startRendering.call(_this6);
              });
            };
            OriginalOfflineAudioContext.prototype.startRendering.original = startRendering;
          }
          function install(stage) {
            installCreateAudioWorker();
            installCreateStereoPanner();
            installDecodeAudioData();
            installStartRendering();
            if (stage !== 0) {
              installClose();
              installResume();
              installSuspend();
            }
          }
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {"stereo-panner-node": 9}],
      5: [function(require, module, exports) {
        (function(global) {
          "use strict";
          Object.defineProperty(exports, "__esModule", {value: true});
          exports.install = install;
          var OfflineAudioContext = global.OfflineAudioContext;
          var AudioNode = global.AudioNode;
          var connect = AudioNode.prototype.connect;
          var disconnect = AudioNode.prototype.disconnect;
          function match(args, connection) {
            for (var i = 0,
                imax = args.length; i < imax; i++) {
              if (args[i] !== connection[i]) {
                return false;
              }
            }
            return true;
          }
          function disconnectAll(node) {
            for (var ch = 0,
                chmax = node.numberOfOutputs; ch < chmax; ch++) {
              disconnect.call(node, ch);
            }
            node._shim$connections = [];
          }
          function disconnectChannel(node, channel) {
            disconnect.call(node, channel);
            node._shim$connections = node._shim$connections.filter(function(connection) {
              return connection[1] !== channel;
            });
          }
          function disconnectSelect(node, args) {
            var remain = [];
            var hasDestination = false;
            node._shim$connections.forEach(function(connection) {
              hasDestination = hasDestination || args[0] === connection[0];
              if (!match(args, connection)) {
                remain.push(connection);
              }
            });
            if (!hasDestination) {
              throw new Error("Failed to execute 'disconnect' on 'AudioNode': the given destination is not connected.");
            }
            disconnectAll(node);
            remain.forEach(function(connection) {
              connect.call(node, connection[0], connection[1], connection[2]);
            });
            node._shim$connections = remain;
          }
          function installDisconnect() {
            var audioContext = new OfflineAudioContext(1, 1, 44100);
            var isSelectiveDisconnection = false;
            try {
              audioContext.createGain().disconnect(audioContext.destination);
            } catch (e) {
              isSelectiveDisconnection = true;
            }
            if (isSelectiveDisconnection) {
              return;
            }
            AudioNode.prototype.disconnect = function() {
              this._shim$connections = this._shim$connections || [];
              for (var _len = arguments.length,
                  args = Array(_len),
                  _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              if (args.length === 0) {
                disconnectAll(this);
              } else if (args.length === 1 && typeof args[0] === "number") {
                disconnectChannel(this, args[0]);
              } else {
                disconnectSelect(this, args);
              }
            };
            AudioNode.prototype.disconnect.original = disconnect;
            AudioNode.prototype.connect = function(destination) {
              var output = arguments[1] === undefined ? 0 : arguments[1];
              var input = arguments[2] === undefined ? 0 : arguments[2];
              var _input = undefined;
              this._shim$connections = this._shim$connections || [];
              if (destination instanceof AudioNode) {
                connect.call(this, destination, output, input);
                _input = input;
              } else {
                connect.call(this, destination, output);
                _input = 0;
              }
              this._shim$connections.push([destination, output, _input]);
            };
            AudioNode.prototype.connect.original = connect;
          }
          function install(stage) {
            if (stage !== 0) {
              installDisconnect();
            }
          }
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}],
      6: [function(require, module, exports) {
        (function(global) {
          "use strict";
          Object.defineProperty(exports, "__esModule", {value: true});
          exports["default"] = install;
          function install() {
            var stage = arguments[0] === undefined ? Infinity : arguments[0];
            if (!global.hasOwnProperty("AudioContext") && global.hasOwnProperty("webkitAudioContext")) {
              global.AudioContext = global.webkitAudioContext;
            }
            if (!global.hasOwnProperty("OfflineAudioContext") && global.hasOwnProperty("webkitOfflineAudioContext")) {
              global.OfflineAudioContext = global.webkitOfflineAudioContext;
            }
            if (!global.AudioContext) {
              return;
            }
            require("./AnalyserNode").install(stage);
            require("./AudioBuffer").install(stage);
            require("./AudioNode").install(stage);
            require("./AudioContext").install(stage);
          }
          module.exports = exports["default"];
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {
        "./AnalyserNode": 2,
        "./AudioBuffer": 3,
        "./AudioContext": 4,
        "./AudioNode": 5
      }],
      7: [function(require, module, exports) {
        var WS_CURVE_SIZE = 4096;
        var curveL = new Float32Array(WS_CURVE_SIZE);
        var curveR = new Float32Array(WS_CURVE_SIZE);
        (function() {
          var i;
          for (i = 0; i < WS_CURVE_SIZE; i++) {
            curveL[i] = Math.cos((i / WS_CURVE_SIZE) * Math.PI * 0.5);
            curveR[i] = Math.sin((i / WS_CURVE_SIZE) * Math.PI * 0.5);
          }
        })();
        module.exports = {
          L: curveL,
          R: curveR
        };
      }, {}],
      8: [function(require, module, exports) {
        (function(global) {
          var curve = require("./curve");
          function StereoPannerImpl(audioContext) {
            this.audioContext = audioContext;
            this.inlet = audioContext.createChannelSplitter(2);
            this._pan = audioContext.createGain();
            this.pan = this._pan.gain;
            this._wsL = audioContext.createWaveShaper();
            this._wsR = audioContext.createWaveShaper();
            this._L = audioContext.createGain();
            this._R = audioContext.createGain();
            this.outlet = audioContext.createChannelMerger(2);
            this.inlet.channelCount = 2;
            this.inlet.channelCountMode = "explicit";
            this._pan.gain.value = 0;
            this._wsL.curve = curve.L;
            this._wsR.curve = curve.R;
            this._L.gain.value = 0;
            this._R.gain.value = 0;
            this.inlet.connect(this._L, 0);
            this.inlet.connect(this._R, 1);
            this._L.connect(this.outlet, 0, 0);
            this._R.connect(this.outlet, 0, 1);
            this._pan.connect(this._wsL);
            this._pan.connect(this._wsR);
            this._wsL.connect(this._L.gain);
            this._wsR.connect(this._R.gain);
            this._isConnected = false;
            this._dc1buffer = null;
            this._dc1 = null;
          }
          StereoPannerImpl.prototype.connect = function(destination) {
            var audioContext = this.audioContext;
            if (!this._isConnected) {
              this._isConnected = true;
              this._dc1buffer = audioContext.createBuffer(1, 2, audioContext.sampleRate);
              this._dc1buffer.getChannelData(0).set([1, 1]);
              this._dc1 = audioContext.createBufferSource();
              this._dc1.buffer = this._dc1buffer;
              this._dc1.loop = true;
              this._dc1.start(audioContext.currentTime);
              this._dc1.connect(this._pan);
            }
            global.AudioNode.prototype.connect.call(this.outlet, destination);
          };
          StereoPannerImpl.prototype.disconnect = function() {
            var audioContext = this.audioContext;
            if (this._isConnected) {
              this._isConnected = false;
              this._dc1.stop(audioContext.currentTime);
              this._dc1.disconnect();
              this._dc1 = null;
              this._dc1buffer = null;
            }
            global.AudioNode.prototype.disconnect.call(this.outlet);
          };
          module.exports = StereoPannerImpl;
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {"./curve": 7}],
      9: [function(require, module, exports) {
        (function(global) {
          var StereoPannerImpl = require("./stereo-panner-impl");
          var AudioContext = global.AudioContext || global.webkitAudioContext;
          function StereoPanner(audioContext) {
            var impl = new StereoPannerImpl(audioContext);
            Object.defineProperties(impl.inlet, {
              pan: {
                value: impl.pan,
                enumerable: true
              },
              connect: {value: function(node) {
                  return impl.connect(node);
                }},
              disconnect: {value: function() {
                  return impl.disconnect();
                }}
            });
            return impl.inlet;
          }
          StereoPanner.polyfill = function() {
            if (!AudioContext || AudioContext.prototype.hasOwnProperty("createStereoPanner")) {
              return;
            }
            AudioContext.prototype.createStereoPanner = function() {
              return new StereoPanner(this);
            };
          };
          module.exports = StereoPanner;
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {"./stereo-panner-impl": 8}]
    }, {}, [1]);
  })();
  return _retrieveGlobal();
});

System.registerDynamic("github:mohayonao/web-audio-api-shim@0.3.0", ["github:mohayonao/web-audio-api-shim@0.3.0/build/web-audio-api-shim"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:mohayonao/web-audio-api-shim@0.3.0/build/web-audio-api-shim");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:webcomponents/webcomponentsjs@0.7.12/webcomponents", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    window.WebComponents = window.WebComponents || {};
    (function(scope) {
      var flags = scope.flags || {};
      var file = "webcomponents.js";
      var script = document.querySelector('script[src*="' + file + '"]');
      if (!flags.noOpts) {
        location.search.slice(1).split("&").forEach(function(option) {
          var parts = option.split("=");
          var match;
          if (parts[0] && (match = parts[0].match(/wc-(.+)/))) {
            flags[match[1]] = parts[1] || true;
          }
        });
        if (script) {
          for (var i = 0,
              a; a = script.attributes[i]; i++) {
            if (a.name !== "src") {
              flags[a.name] = a.value || true;
            }
          }
        }
        if (flags.log && flags.log.split) {
          var parts = flags.log.split(",");
          flags.log = {};
          parts.forEach(function(f) {
            flags.log[f] = true;
          });
        } else {
          flags.log = {};
        }
      }
      flags.shadow = flags.shadow || flags.shadowdom || flags.polyfill;
      if (flags.shadow === "native") {
        flags.shadow = false;
      } else {
        flags.shadow = flags.shadow || !HTMLElement.prototype.createShadowRoot;
      }
      if (flags.register) {
        window.CustomElements = window.CustomElements || {flags: {}};
        window.CustomElements.flags.register = flags.register;
      }
      scope.flags = flags;
    })(WebComponents);
    if (WebComponents.flags.shadow) {
      if (typeof WeakMap === "undefined") {
        (function() {
          var defineProperty = Object.defineProperty;
          var counter = Date.now() % 1e9;
          var WeakMap = function() {
            this.name = "__st" + (Math.random() * 1e9 >>> 0) + (counter++ + "__");
          };
          WeakMap.prototype = {
            set: function(key, value) {
              var entry = key[this.name];
              if (entry && entry[0] === key)
                entry[1] = value;
              else
                defineProperty(key, this.name, {
                  value: [key, value],
                  writable: true
                });
              return this;
            },
            get: function(key) {
              var entry;
              return (entry = key[this.name]) && entry[0] === key ? entry[1] : undefined;
            },
            "delete": function(key) {
              var entry = key[this.name];
              if (!entry || entry[0] !== key)
                return false;
              entry[0] = entry[1] = undefined;
              return true;
            },
            has: function(key) {
              var entry = key[this.name];
              if (!entry)
                return false;
              return entry[0] === key;
            }
          };
          window.WeakMap = WeakMap;
        })();
      }
      window.ShadowDOMPolyfill = {};
      (function(scope) {
        "use strict";
        var constructorTable = new WeakMap();
        var nativePrototypeTable = new WeakMap();
        var wrappers = Object.create(null);
        function detectEval() {
          if (typeof chrome !== "undefined" && chrome.app && chrome.app.runtime) {
            return false;
          }
          if (navigator.getDeviceStorage) {
            return false;
          }
          try {
            var f = new Function("return true;");
            return f();
          } catch (ex) {
            return false;
          }
        }
        var hasEval = detectEval();
        function assert(b) {
          if (!b)
            throw new Error("Assertion failed");
        }
        var defineProperty = Object.defineProperty;
        var getOwnPropertyNames = Object.getOwnPropertyNames;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        function mixin(to, from) {
          var names = getOwnPropertyNames(from);
          for (var i = 0; i < names.length; i++) {
            var name = names[i];
            defineProperty(to, name, getOwnPropertyDescriptor(from, name));
          }
          return to;
        }
        function mixinStatics(to, from) {
          var names = getOwnPropertyNames(from);
          for (var i = 0; i < names.length; i++) {
            var name = names[i];
            switch (name) {
              case "arguments":
              case "caller":
              case "length":
              case "name":
              case "prototype":
              case "toString":
                continue;
            }
            defineProperty(to, name, getOwnPropertyDescriptor(from, name));
          }
          return to;
        }
        function oneOf(object, propertyNames) {
          for (var i = 0; i < propertyNames.length; i++) {
            if (propertyNames[i] in object)
              return propertyNames[i];
          }
        }
        var nonEnumerableDataDescriptor = {
          value: undefined,
          configurable: true,
          enumerable: false,
          writable: true
        };
        function defineNonEnumerableDataProperty(object, name, value) {
          nonEnumerableDataDescriptor.value = value;
          defineProperty(object, name, nonEnumerableDataDescriptor);
        }
        getOwnPropertyNames(window);
        function getWrapperConstructor(node, opt_instance) {
          var nativePrototype = node.__proto__ || Object.getPrototypeOf(node);
          if (isFirefox) {
            try {
              getOwnPropertyNames(nativePrototype);
            } catch (error) {
              nativePrototype = nativePrototype.__proto__;
            }
          }
          var wrapperConstructor = constructorTable.get(nativePrototype);
          if (wrapperConstructor)
            return wrapperConstructor;
          var parentWrapperConstructor = getWrapperConstructor(nativePrototype);
          var GeneratedWrapper = createWrapperConstructor(parentWrapperConstructor);
          registerInternal(nativePrototype, GeneratedWrapper, opt_instance);
          return GeneratedWrapper;
        }
        function addForwardingProperties(nativePrototype, wrapperPrototype) {
          installProperty(nativePrototype, wrapperPrototype, true);
        }
        function registerInstanceProperties(wrapperPrototype, instanceObject) {
          installProperty(instanceObject, wrapperPrototype, false);
        }
        var isFirefox = /Firefox/.test(navigator.userAgent);
        var dummyDescriptor = {
          get: function() {},
          set: function(v) {},
          configurable: true,
          enumerable: true
        };
        function isEventHandlerName(name) {
          return /^on[a-z]+$/.test(name);
        }
        function isIdentifierName(name) {
          return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(name);
        }
        function getGetter(name) {
          return hasEval && isIdentifierName(name) ? new Function("return this.__impl4cf1e782hg__." + name) : function() {
            return this.__impl4cf1e782hg__[name];
          };
        }
        function getSetter(name) {
          return hasEval && isIdentifierName(name) ? new Function("v", "this.__impl4cf1e782hg__." + name + " = v") : function(v) {
            this.__impl4cf1e782hg__[name] = v;
          };
        }
        function getMethod(name) {
          return hasEval && isIdentifierName(name) ? new Function("return this.__impl4cf1e782hg__." + name + ".apply(this.__impl4cf1e782hg__, arguments)") : function() {
            return this.__impl4cf1e782hg__[name].apply(this.__impl4cf1e782hg__, arguments);
          };
        }
        function getDescriptor(source, name) {
          try {
            return Object.getOwnPropertyDescriptor(source, name);
          } catch (ex) {
            return dummyDescriptor;
          }
        }
        var isBrokenSafari = function() {
          var descr = Object.getOwnPropertyDescriptor(Node.prototype, "nodeType");
          return descr && !descr.get && !descr.set;
        }();
        function installProperty(source, target, allowMethod, opt_blacklist) {
          var names = getOwnPropertyNames(source);
          for (var i = 0; i < names.length; i++) {
            var name = names[i];
            if (name === "polymerBlackList_")
              continue;
            if (name in target)
              continue;
            if (source.polymerBlackList_ && source.polymerBlackList_[name])
              continue;
            if (isFirefox) {
              source.__lookupGetter__(name);
            }
            var descriptor = getDescriptor(source, name);
            var getter,
                setter;
            if (typeof descriptor.value === "function") {
              if (allowMethod) {
                target[name] = getMethod(name);
              }
              continue;
            }
            var isEvent = isEventHandlerName(name);
            if (isEvent)
              getter = scope.getEventHandlerGetter(name);
            else
              getter = getGetter(name);
            if (descriptor.writable || descriptor.set || isBrokenSafari) {
              if (isEvent)
                setter = scope.getEventHandlerSetter(name);
              else
                setter = getSetter(name);
            }
            var configurable = isBrokenSafari || descriptor.configurable;
            defineProperty(target, name, {
              get: getter,
              set: setter,
              configurable: configurable,
              enumerable: descriptor.enumerable
            });
          }
        }
        function register(nativeConstructor, wrapperConstructor, opt_instance) {
          if (nativeConstructor == null) {
            return;
          }
          var nativePrototype = nativeConstructor.prototype;
          registerInternal(nativePrototype, wrapperConstructor, opt_instance);
          mixinStatics(wrapperConstructor, nativeConstructor);
        }
        function registerInternal(nativePrototype, wrapperConstructor, opt_instance) {
          var wrapperPrototype = wrapperConstructor.prototype;
          assert(constructorTable.get(nativePrototype) === undefined);
          constructorTable.set(nativePrototype, wrapperConstructor);
          nativePrototypeTable.set(wrapperPrototype, nativePrototype);
          addForwardingProperties(nativePrototype, wrapperPrototype);
          if (opt_instance)
            registerInstanceProperties(wrapperPrototype, opt_instance);
          defineNonEnumerableDataProperty(wrapperPrototype, "constructor", wrapperConstructor);
          wrapperConstructor.prototype = wrapperPrototype;
        }
        function isWrapperFor(wrapperConstructor, nativeConstructor) {
          return constructorTable.get(nativeConstructor.prototype) === wrapperConstructor;
        }
        function registerObject(object) {
          var nativePrototype = Object.getPrototypeOf(object);
          var superWrapperConstructor = getWrapperConstructor(nativePrototype);
          var GeneratedWrapper = createWrapperConstructor(superWrapperConstructor);
          registerInternal(nativePrototype, GeneratedWrapper, object);
          return GeneratedWrapper;
        }
        function createWrapperConstructor(superWrapperConstructor) {
          function GeneratedWrapper(node) {
            superWrapperConstructor.call(this, node);
          }
          var p = Object.create(superWrapperConstructor.prototype);
          p.constructor = GeneratedWrapper;
          GeneratedWrapper.prototype = p;
          return GeneratedWrapper;
        }
        function isWrapper(object) {
          return object && object.__impl4cf1e782hg__;
        }
        function isNative(object) {
          return !isWrapper(object);
        }
        function wrap(impl) {
          if (impl === null)
            return null;
          assert(isNative(impl));
          var wrapper = impl.__wrapper8e3dd93a60__;
          if (wrapper != null) {
            return wrapper;
          }
          return impl.__wrapper8e3dd93a60__ = new (getWrapperConstructor(impl, impl))(impl);
        }
        function unwrap(wrapper) {
          if (wrapper === null)
            return null;
          assert(isWrapper(wrapper));
          return wrapper.__impl4cf1e782hg__;
        }
        function unsafeUnwrap(wrapper) {
          return wrapper.__impl4cf1e782hg__;
        }
        function setWrapper(impl, wrapper) {
          wrapper.__impl4cf1e782hg__ = impl;
          impl.__wrapper8e3dd93a60__ = wrapper;
        }
        function unwrapIfNeeded(object) {
          return object && isWrapper(object) ? unwrap(object) : object;
        }
        function wrapIfNeeded(object) {
          return object && !isWrapper(object) ? wrap(object) : object;
        }
        function rewrap(node, wrapper) {
          if (wrapper === null)
            return;
          assert(isNative(node));
          assert(wrapper === undefined || isWrapper(wrapper));
          node.__wrapper8e3dd93a60__ = wrapper;
        }
        var getterDescriptor = {
          get: undefined,
          configurable: true,
          enumerable: true
        };
        function defineGetter(constructor, name, getter) {
          getterDescriptor.get = getter;
          defineProperty(constructor.prototype, name, getterDescriptor);
        }
        function defineWrapGetter(constructor, name) {
          defineGetter(constructor, name, function() {
            return wrap(this.__impl4cf1e782hg__[name]);
          });
        }
        function forwardMethodsToWrapper(constructors, names) {
          constructors.forEach(function(constructor) {
            names.forEach(function(name) {
              constructor.prototype[name] = function() {
                var w = wrapIfNeeded(this);
                return w[name].apply(w, arguments);
              };
            });
          });
        }
        scope.assert = assert;
        scope.constructorTable = constructorTable;
        scope.defineGetter = defineGetter;
        scope.defineWrapGetter = defineWrapGetter;
        scope.forwardMethodsToWrapper = forwardMethodsToWrapper;
        scope.isIdentifierName = isIdentifierName;
        scope.isWrapper = isWrapper;
        scope.isWrapperFor = isWrapperFor;
        scope.mixin = mixin;
        scope.nativePrototypeTable = nativePrototypeTable;
        scope.oneOf = oneOf;
        scope.registerObject = registerObject;
        scope.registerWrapper = register;
        scope.rewrap = rewrap;
        scope.setWrapper = setWrapper;
        scope.unsafeUnwrap = unsafeUnwrap;
        scope.unwrap = unwrap;
        scope.unwrapIfNeeded = unwrapIfNeeded;
        scope.wrap = wrap;
        scope.wrapIfNeeded = wrapIfNeeded;
        scope.wrappers = wrappers;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        function newSplice(index, removed, addedCount) {
          return {
            index: index,
            removed: removed,
            addedCount: addedCount
          };
        }
        var EDIT_LEAVE = 0;
        var EDIT_UPDATE = 1;
        var EDIT_ADD = 2;
        var EDIT_DELETE = 3;
        function ArraySplice() {}
        ArraySplice.prototype = {
          calcEditDistances: function(current, currentStart, currentEnd, old, oldStart, oldEnd) {
            var rowCount = oldEnd - oldStart + 1;
            var columnCount = currentEnd - currentStart + 1;
            var distances = new Array(rowCount);
            for (var i = 0; i < rowCount; i++) {
              distances[i] = new Array(columnCount);
              distances[i][0] = i;
            }
            for (var j = 0; j < columnCount; j++)
              distances[0][j] = j;
            for (var i = 1; i < rowCount; i++) {
              for (var j = 1; j < columnCount; j++) {
                if (this.equals(current[currentStart + j - 1], old[oldStart + i - 1]))
                  distances[i][j] = distances[i - 1][j - 1];
                else {
                  var north = distances[i - 1][j] + 1;
                  var west = distances[i][j - 1] + 1;
                  distances[i][j] = north < west ? north : west;
                }
              }
            }
            return distances;
          },
          spliceOperationsFromEditDistances: function(distances) {
            var i = distances.length - 1;
            var j = distances[0].length - 1;
            var current = distances[i][j];
            var edits = [];
            while (i > 0 || j > 0) {
              if (i == 0) {
                edits.push(EDIT_ADD);
                j--;
                continue;
              }
              if (j == 0) {
                edits.push(EDIT_DELETE);
                i--;
                continue;
              }
              var northWest = distances[i - 1][j - 1];
              var west = distances[i - 1][j];
              var north = distances[i][j - 1];
              var min;
              if (west < north)
                min = west < northWest ? west : northWest;
              else
                min = north < northWest ? north : northWest;
              if (min == northWest) {
                if (northWest == current) {
                  edits.push(EDIT_LEAVE);
                } else {
                  edits.push(EDIT_UPDATE);
                  current = northWest;
                }
                i--;
                j--;
              } else if (min == west) {
                edits.push(EDIT_DELETE);
                i--;
                current = west;
              } else {
                edits.push(EDIT_ADD);
                j--;
                current = north;
              }
            }
            edits.reverse();
            return edits;
          },
          calcSplices: function(current, currentStart, currentEnd, old, oldStart, oldEnd) {
            var prefixCount = 0;
            var suffixCount = 0;
            var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
            if (currentStart == 0 && oldStart == 0)
              prefixCount = this.sharedPrefix(current, old, minLength);
            if (currentEnd == current.length && oldEnd == old.length)
              suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
            currentStart += prefixCount;
            oldStart += prefixCount;
            currentEnd -= suffixCount;
            oldEnd -= suffixCount;
            if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0)
              return [];
            if (currentStart == currentEnd) {
              var splice = newSplice(currentStart, [], 0);
              while (oldStart < oldEnd)
                splice.removed.push(old[oldStart++]);
              return [splice];
            } else if (oldStart == oldEnd)
              return [newSplice(currentStart, [], currentEnd - currentStart)];
            var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
            var splice = undefined;
            var splices = [];
            var index = currentStart;
            var oldIndex = oldStart;
            for (var i = 0; i < ops.length; i++) {
              switch (ops[i]) {
                case EDIT_LEAVE:
                  if (splice) {
                    splices.push(splice);
                    splice = undefined;
                  }
                  index++;
                  oldIndex++;
                  break;
                case EDIT_UPDATE:
                  if (!splice)
                    splice = newSplice(index, [], 0);
                  splice.addedCount++;
                  index++;
                  splice.removed.push(old[oldIndex]);
                  oldIndex++;
                  break;
                case EDIT_ADD:
                  if (!splice)
                    splice = newSplice(index, [], 0);
                  splice.addedCount++;
                  index++;
                  break;
                case EDIT_DELETE:
                  if (!splice)
                    splice = newSplice(index, [], 0);
                  splice.removed.push(old[oldIndex]);
                  oldIndex++;
                  break;
              }
            }
            if (splice) {
              splices.push(splice);
            }
            return splices;
          },
          sharedPrefix: function(current, old, searchLength) {
            for (var i = 0; i < searchLength; i++)
              if (!this.equals(current[i], old[i]))
                return i;
            return searchLength;
          },
          sharedSuffix: function(current, old, searchLength) {
            var index1 = current.length;
            var index2 = old.length;
            var count = 0;
            while (count < searchLength && this.equals(current[--index1], old[--index2]))
              count++;
            return count;
          },
          calculateSplices: function(current, previous) {
            return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
          },
          equals: function(currentValue, previousValue) {
            return currentValue === previousValue;
          }
        };
        scope.ArraySplice = ArraySplice;
      })(window.ShadowDOMPolyfill);
      (function(context) {
        "use strict";
        var OriginalMutationObserver = window.MutationObserver;
        var callbacks = [];
        var pending = false;
        var timerFunc;
        function handle() {
          pending = false;
          var copies = callbacks.slice(0);
          callbacks = [];
          for (var i = 0; i < copies.length; i++) {
            (0, copies[i])();
          }
        }
        if (OriginalMutationObserver) {
          var counter = 1;
          var observer = new OriginalMutationObserver(handle);
          var textNode = document.createTextNode(counter);
          observer.observe(textNode, {characterData: true});
          timerFunc = function() {
            counter = (counter + 1) % 2;
            textNode.data = counter;
          };
        } else {
          timerFunc = window.setTimeout;
        }
        function setEndOfMicrotask(func) {
          callbacks.push(func);
          if (pending)
            return;
          pending = true;
          timerFunc(handle, 0);
        }
        context.setEndOfMicrotask = setEndOfMicrotask;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var setEndOfMicrotask = scope.setEndOfMicrotask;
        var wrapIfNeeded = scope.wrapIfNeeded;
        var wrappers = scope.wrappers;
        var registrationsTable = new WeakMap();
        var globalMutationObservers = [];
        var isScheduled = false;
        function scheduleCallback(observer) {
          if (observer.scheduled_)
            return;
          observer.scheduled_ = true;
          globalMutationObservers.push(observer);
          if (isScheduled)
            return;
          setEndOfMicrotask(notifyObservers);
          isScheduled = true;
        }
        function notifyObservers() {
          isScheduled = false;
          while (globalMutationObservers.length) {
            var notifyList = globalMutationObservers;
            globalMutationObservers = [];
            notifyList.sort(function(x, y) {
              return x.uid_ - y.uid_;
            });
            for (var i = 0; i < notifyList.length; i++) {
              var mo = notifyList[i];
              mo.scheduled_ = false;
              var queue = mo.takeRecords();
              removeTransientObserversFor(mo);
              if (queue.length) {
                mo.callback_(queue, mo);
              }
            }
          }
        }
        function MutationRecord(type, target) {
          this.type = type;
          this.target = target;
          this.addedNodes = new wrappers.NodeList();
          this.removedNodes = new wrappers.NodeList();
          this.previousSibling = null;
          this.nextSibling = null;
          this.attributeName = null;
          this.attributeNamespace = null;
          this.oldValue = null;
        }
        function registerTransientObservers(ancestor, node) {
          for (; ancestor; ancestor = ancestor.parentNode) {
            var registrations = registrationsTable.get(ancestor);
            if (!registrations)
              continue;
            for (var i = 0; i < registrations.length; i++) {
              var registration = registrations[i];
              if (registration.options.subtree)
                registration.addTransientObserver(node);
            }
          }
        }
        function removeTransientObserversFor(observer) {
          for (var i = 0; i < observer.nodes_.length; i++) {
            var node = observer.nodes_[i];
            var registrations = registrationsTable.get(node);
            if (!registrations)
              return;
            for (var j = 0; j < registrations.length; j++) {
              var registration = registrations[j];
              if (registration.observer === observer)
                registration.removeTransientObservers();
            }
          }
        }
        function enqueueMutation(target, type, data) {
          var interestedObservers = Object.create(null);
          var associatedStrings = Object.create(null);
          for (var node = target; node; node = node.parentNode) {
            var registrations = registrationsTable.get(node);
            if (!registrations)
              continue;
            for (var j = 0; j < registrations.length; j++) {
              var registration = registrations[j];
              var options = registration.options;
              if (node !== target && !options.subtree)
                continue;
              if (type === "attributes" && !options.attributes)
                continue;
              if (type === "attributes" && options.attributeFilter && (data.namespace !== null || options.attributeFilter.indexOf(data.name) === -1)) {
                continue;
              }
              if (type === "characterData" && !options.characterData)
                continue;
              if (type === "childList" && !options.childList)
                continue;
              var observer = registration.observer;
              interestedObservers[observer.uid_] = observer;
              if (type === "attributes" && options.attributeOldValue || type === "characterData" && options.characterDataOldValue) {
                associatedStrings[observer.uid_] = data.oldValue;
              }
            }
          }
          for (var uid in interestedObservers) {
            var observer = interestedObservers[uid];
            var record = new MutationRecord(type, target);
            if ("name" in data && "namespace" in data) {
              record.attributeName = data.name;
              record.attributeNamespace = data.namespace;
            }
            if (data.addedNodes)
              record.addedNodes = data.addedNodes;
            if (data.removedNodes)
              record.removedNodes = data.removedNodes;
            if (data.previousSibling)
              record.previousSibling = data.previousSibling;
            if (data.nextSibling)
              record.nextSibling = data.nextSibling;
            if (associatedStrings[uid] !== undefined)
              record.oldValue = associatedStrings[uid];
            scheduleCallback(observer);
            observer.records_.push(record);
          }
        }
        var slice = Array.prototype.slice;
        function MutationObserverOptions(options) {
          this.childList = !!options.childList;
          this.subtree = !!options.subtree;
          if (!("attributes" in options) && ("attributeOldValue" in options || "attributeFilter" in options)) {
            this.attributes = true;
          } else {
            this.attributes = !!options.attributes;
          }
          if ("characterDataOldValue" in options && !("characterData" in options))
            this.characterData = true;
          else
            this.characterData = !!options.characterData;
          if (!this.attributes && (options.attributeOldValue || "attributeFilter" in options) || !this.characterData && options.characterDataOldValue) {
            throw new TypeError();
          }
          this.characterData = !!options.characterData;
          this.attributeOldValue = !!options.attributeOldValue;
          this.characterDataOldValue = !!options.characterDataOldValue;
          if ("attributeFilter" in options) {
            if (options.attributeFilter == null || typeof options.attributeFilter !== "object") {
              throw new TypeError();
            }
            this.attributeFilter = slice.call(options.attributeFilter);
          } else {
            this.attributeFilter = null;
          }
        }
        var uidCounter = 0;
        function MutationObserver(callback) {
          this.callback_ = callback;
          this.nodes_ = [];
          this.records_ = [];
          this.uid_ = ++uidCounter;
          this.scheduled_ = false;
        }
        MutationObserver.prototype = {
          constructor: MutationObserver,
          observe: function(target, options) {
            target = wrapIfNeeded(target);
            var newOptions = new MutationObserverOptions(options);
            var registration;
            var registrations = registrationsTable.get(target);
            if (!registrations)
              registrationsTable.set(target, registrations = []);
            for (var i = 0; i < registrations.length; i++) {
              if (registrations[i].observer === this) {
                registration = registrations[i];
                registration.removeTransientObservers();
                registration.options = newOptions;
              }
            }
            if (!registration) {
              registration = new Registration(this, target, newOptions);
              registrations.push(registration);
              this.nodes_.push(target);
            }
          },
          disconnect: function() {
            this.nodes_.forEach(function(node) {
              var registrations = registrationsTable.get(node);
              for (var i = 0; i < registrations.length; i++) {
                var registration = registrations[i];
                if (registration.observer === this) {
                  registrations.splice(i, 1);
                  break;
                }
              }
            }, this);
            this.records_ = [];
          },
          takeRecords: function() {
            var copyOfRecords = this.records_;
            this.records_ = [];
            return copyOfRecords;
          }
        };
        function Registration(observer, target, options) {
          this.observer = observer;
          this.target = target;
          this.options = options;
          this.transientObservedNodes = [];
        }
        Registration.prototype = {
          addTransientObserver: function(node) {
            if (node === this.target)
              return;
            scheduleCallback(this.observer);
            this.transientObservedNodes.push(node);
            var registrations = registrationsTable.get(node);
            if (!registrations)
              registrationsTable.set(node, registrations = []);
            registrations.push(this);
          },
          removeTransientObservers: function() {
            var transientObservedNodes = this.transientObservedNodes;
            this.transientObservedNodes = [];
            for (var i = 0; i < transientObservedNodes.length; i++) {
              var node = transientObservedNodes[i];
              var registrations = registrationsTable.get(node);
              for (var j = 0; j < registrations.length; j++) {
                if (registrations[j] === this) {
                  registrations.splice(j, 1);
                  break;
                }
              }
            }
          }
        };
        scope.enqueueMutation = enqueueMutation;
        scope.registerTransientObservers = registerTransientObservers;
        scope.wrappers.MutationObserver = MutationObserver;
        scope.wrappers.MutationRecord = MutationRecord;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        function TreeScope(root, parent) {
          this.root = root;
          this.parent = parent;
        }
        TreeScope.prototype = {
          get renderer() {
            if (this.root instanceof scope.wrappers.ShadowRoot) {
              return scope.getRendererForHost(this.root.host);
            }
            return null;
          },
          contains: function(treeScope) {
            for (; treeScope; treeScope = treeScope.parent) {
              if (treeScope === this)
                return true;
            }
            return false;
          }
        };
        function setTreeScope(node, treeScope) {
          if (node.treeScope_ !== treeScope) {
            node.treeScope_ = treeScope;
            for (var sr = node.shadowRoot; sr; sr = sr.olderShadowRoot) {
              sr.treeScope_.parent = treeScope;
            }
            for (var child = node.firstChild; child; child = child.nextSibling) {
              setTreeScope(child, treeScope);
            }
          }
        }
        function getTreeScope(node) {
          if (node instanceof scope.wrappers.Window) {
            debugger;
          }
          if (node.treeScope_)
            return node.treeScope_;
          var parent = node.parentNode;
          var treeScope;
          if (parent)
            treeScope = getTreeScope(parent);
          else
            treeScope = new TreeScope(node, null);
          return node.treeScope_ = treeScope;
        }
        scope.TreeScope = TreeScope;
        scope.getTreeScope = getTreeScope;
        scope.setTreeScope = setTreeScope;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var forwardMethodsToWrapper = scope.forwardMethodsToWrapper;
        var getTreeScope = scope.getTreeScope;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var setWrapper = scope.setWrapper;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var unwrap = scope.unwrap;
        var wrap = scope.wrap;
        var wrappers = scope.wrappers;
        var wrappedFuns = new WeakMap();
        var listenersTable = new WeakMap();
        var handledEventsTable = new WeakMap();
        var currentlyDispatchingEvents = new WeakMap();
        var targetTable = new WeakMap();
        var currentTargetTable = new WeakMap();
        var relatedTargetTable = new WeakMap();
        var eventPhaseTable = new WeakMap();
        var stopPropagationTable = new WeakMap();
        var stopImmediatePropagationTable = new WeakMap();
        var eventHandlersTable = new WeakMap();
        var eventPathTable = new WeakMap();
        function isShadowRoot(node) {
          return node instanceof wrappers.ShadowRoot;
        }
        function rootOfNode(node) {
          return getTreeScope(node).root;
        }
        function getEventPath(node, event) {
          var path = [];
          var current = node;
          path.push(current);
          while (current) {
            var destinationInsertionPoints = getDestinationInsertionPoints(current);
            if (destinationInsertionPoints && destinationInsertionPoints.length > 0) {
              for (var i = 0; i < destinationInsertionPoints.length; i++) {
                var insertionPoint = destinationInsertionPoints[i];
                if (isShadowInsertionPoint(insertionPoint)) {
                  var shadowRoot = rootOfNode(insertionPoint);
                  var olderShadowRoot = shadowRoot.olderShadowRoot;
                  if (olderShadowRoot)
                    path.push(olderShadowRoot);
                }
                path.push(insertionPoint);
              }
              current = destinationInsertionPoints[destinationInsertionPoints.length - 1];
            } else {
              if (isShadowRoot(current)) {
                if (inSameTree(node, current) && eventMustBeStopped(event)) {
                  break;
                }
                current = current.host;
                path.push(current);
              } else {
                current = current.parentNode;
                if (current)
                  path.push(current);
              }
            }
          }
          return path;
        }
        function eventMustBeStopped(event) {
          if (!event)
            return false;
          switch (event.type) {
            case "abort":
            case "error":
            case "select":
            case "change":
            case "load":
            case "reset":
            case "resize":
            case "scroll":
            case "selectstart":
              return true;
          }
          return false;
        }
        function isShadowInsertionPoint(node) {
          return node instanceof HTMLShadowElement;
        }
        function getDestinationInsertionPoints(node) {
          return scope.getDestinationInsertionPoints(node);
        }
        function eventRetargetting(path, currentTarget) {
          if (path.length === 0)
            return currentTarget;
          if (currentTarget instanceof wrappers.Window)
            currentTarget = currentTarget.document;
          var currentTargetTree = getTreeScope(currentTarget);
          var originalTarget = path[0];
          var originalTargetTree = getTreeScope(originalTarget);
          var relativeTargetTree = lowestCommonInclusiveAncestor(currentTargetTree, originalTargetTree);
          for (var i = 0; i < path.length; i++) {
            var node = path[i];
            if (getTreeScope(node) === relativeTargetTree)
              return node;
          }
          return path[path.length - 1];
        }
        function getTreeScopeAncestors(treeScope) {
          var ancestors = [];
          for (; treeScope; treeScope = treeScope.parent) {
            ancestors.push(treeScope);
          }
          return ancestors;
        }
        function lowestCommonInclusiveAncestor(tsA, tsB) {
          var ancestorsA = getTreeScopeAncestors(tsA);
          var ancestorsB = getTreeScopeAncestors(tsB);
          var result = null;
          while (ancestorsA.length > 0 && ancestorsB.length > 0) {
            var a = ancestorsA.pop();
            var b = ancestorsB.pop();
            if (a === b)
              result = a;
            else
              break;
          }
          return result;
        }
        function getTreeScopeRoot(ts) {
          if (!ts.parent)
            return ts;
          return getTreeScopeRoot(ts.parent);
        }
        function relatedTargetResolution(event, currentTarget, relatedTarget) {
          if (currentTarget instanceof wrappers.Window)
            currentTarget = currentTarget.document;
          var currentTargetTree = getTreeScope(currentTarget);
          var relatedTargetTree = getTreeScope(relatedTarget);
          var relatedTargetEventPath = getEventPath(relatedTarget, event);
          var lowestCommonAncestorTree;
          var lowestCommonAncestorTree = lowestCommonInclusiveAncestor(currentTargetTree, relatedTargetTree);
          if (!lowestCommonAncestorTree)
            lowestCommonAncestorTree = relatedTargetTree.root;
          for (var commonAncestorTree = lowestCommonAncestorTree; commonAncestorTree; commonAncestorTree = commonAncestorTree.parent) {
            var adjustedRelatedTarget;
            for (var i = 0; i < relatedTargetEventPath.length; i++) {
              var node = relatedTargetEventPath[i];
              if (getTreeScope(node) === commonAncestorTree)
                return node;
            }
          }
          return null;
        }
        function inSameTree(a, b) {
          return getTreeScope(a) === getTreeScope(b);
        }
        var NONE = 0;
        var CAPTURING_PHASE = 1;
        var AT_TARGET = 2;
        var BUBBLING_PHASE = 3;
        var pendingError;
        function dispatchOriginalEvent(originalEvent) {
          if (handledEventsTable.get(originalEvent))
            return;
          handledEventsTable.set(originalEvent, true);
          dispatchEvent(wrap(originalEvent), wrap(originalEvent.target));
          if (pendingError) {
            var err = pendingError;
            pendingError = null;
            throw err;
          }
        }
        function isLoadLikeEvent(event) {
          switch (event.type) {
            case "load":
            case "beforeunload":
            case "unload":
              return true;
          }
          return false;
        }
        function dispatchEvent(event, originalWrapperTarget) {
          if (currentlyDispatchingEvents.get(event))
            throw new Error("InvalidStateError");
          currentlyDispatchingEvents.set(event, true);
          scope.renderAllPending();
          var eventPath;
          var overrideTarget;
          var win;
          if (isLoadLikeEvent(event) && !event.bubbles) {
            var doc = originalWrapperTarget;
            if (doc instanceof wrappers.Document && (win = doc.defaultView)) {
              overrideTarget = doc;
              eventPath = [];
            }
          }
          if (!eventPath) {
            if (originalWrapperTarget instanceof wrappers.Window) {
              win = originalWrapperTarget;
              eventPath = [];
            } else {
              eventPath = getEventPath(originalWrapperTarget, event);
              if (!isLoadLikeEvent(event)) {
                var doc = eventPath[eventPath.length - 1];
                if (doc instanceof wrappers.Document)
                  win = doc.defaultView;
              }
            }
          }
          eventPathTable.set(event, eventPath);
          if (dispatchCapturing(event, eventPath, win, overrideTarget)) {
            if (dispatchAtTarget(event, eventPath, win, overrideTarget)) {
              dispatchBubbling(event, eventPath, win, overrideTarget);
            }
          }
          eventPhaseTable.set(event, NONE);
          currentTargetTable.delete(event, null);
          currentlyDispatchingEvents.delete(event);
          return event.defaultPrevented;
        }
        function dispatchCapturing(event, eventPath, win, overrideTarget) {
          var phase = CAPTURING_PHASE;
          if (win) {
            if (!invoke(win, event, phase, eventPath, overrideTarget))
              return false;
          }
          for (var i = eventPath.length - 1; i > 0; i--) {
            if (!invoke(eventPath[i], event, phase, eventPath, overrideTarget))
              return false;
          }
          return true;
        }
        function dispatchAtTarget(event, eventPath, win, overrideTarget) {
          var phase = AT_TARGET;
          var currentTarget = eventPath[0] || win;
          return invoke(currentTarget, event, phase, eventPath, overrideTarget);
        }
        function dispatchBubbling(event, eventPath, win, overrideTarget) {
          var phase = BUBBLING_PHASE;
          for (var i = 1; i < eventPath.length; i++) {
            if (!invoke(eventPath[i], event, phase, eventPath, overrideTarget))
              return;
          }
          if (win && eventPath.length > 0) {
            invoke(win, event, phase, eventPath, overrideTarget);
          }
        }
        function invoke(currentTarget, event, phase, eventPath, overrideTarget) {
          var listeners = listenersTable.get(currentTarget);
          if (!listeners)
            return true;
          var target = overrideTarget || eventRetargetting(eventPath, currentTarget);
          if (target === currentTarget) {
            if (phase === CAPTURING_PHASE)
              return true;
            if (phase === BUBBLING_PHASE)
              phase = AT_TARGET;
          } else if (phase === BUBBLING_PHASE && !event.bubbles) {
            return true;
          }
          if ("relatedTarget" in event) {
            var originalEvent = unwrap(event);
            var unwrappedRelatedTarget = originalEvent.relatedTarget;
            if (unwrappedRelatedTarget) {
              if (unwrappedRelatedTarget instanceof Object && unwrappedRelatedTarget.addEventListener) {
                var relatedTarget = wrap(unwrappedRelatedTarget);
                var adjusted = relatedTargetResolution(event, currentTarget, relatedTarget);
                if (adjusted === target)
                  return true;
              } else {
                adjusted = null;
              }
              relatedTargetTable.set(event, adjusted);
            }
          }
          eventPhaseTable.set(event, phase);
          var type = event.type;
          var anyRemoved = false;
          targetTable.set(event, target);
          currentTargetTable.set(event, currentTarget);
          listeners.depth++;
          for (var i = 0,
              len = listeners.length; i < len; i++) {
            var listener = listeners[i];
            if (listener.removed) {
              anyRemoved = true;
              continue;
            }
            if (listener.type !== type || !listener.capture && phase === CAPTURING_PHASE || listener.capture && phase === BUBBLING_PHASE) {
              continue;
            }
            try {
              if (typeof listener.handler === "function")
                listener.handler.call(currentTarget, event);
              else
                listener.handler.handleEvent(event);
              if (stopImmediatePropagationTable.get(event))
                return false;
            } catch (ex) {
              if (!pendingError)
                pendingError = ex;
            }
          }
          listeners.depth--;
          if (anyRemoved && listeners.depth === 0) {
            var copy = listeners.slice();
            listeners.length = 0;
            for (var i = 0; i < copy.length; i++) {
              if (!copy[i].removed)
                listeners.push(copy[i]);
            }
          }
          return !stopPropagationTable.get(event);
        }
        function Listener(type, handler, capture) {
          this.type = type;
          this.handler = handler;
          this.capture = Boolean(capture);
        }
        Listener.prototype = {
          equals: function(that) {
            return this.handler === that.handler && this.type === that.type && this.capture === that.capture;
          },
          get removed() {
            return this.handler === null;
          },
          remove: function() {
            this.handler = null;
          }
        };
        var OriginalEvent = window.Event;
        OriginalEvent.prototype.polymerBlackList_ = {
          returnValue: true,
          keyLocation: true
        };
        function Event(type, options) {
          if (type instanceof OriginalEvent) {
            var impl = type;
            if (!OriginalBeforeUnloadEvent && impl.type === "beforeunload" && !(this instanceof BeforeUnloadEvent)) {
              return new BeforeUnloadEvent(impl);
            }
            setWrapper(impl, this);
          } else {
            return wrap(constructEvent(OriginalEvent, "Event", type, options));
          }
        }
        Event.prototype = {
          get target() {
            return targetTable.get(this);
          },
          get currentTarget() {
            return currentTargetTable.get(this);
          },
          get eventPhase() {
            return eventPhaseTable.get(this);
          },
          get path() {
            var eventPath = eventPathTable.get(this);
            if (!eventPath)
              return [];
            return eventPath.slice();
          },
          stopPropagation: function() {
            stopPropagationTable.set(this, true);
          },
          stopImmediatePropagation: function() {
            stopPropagationTable.set(this, true);
            stopImmediatePropagationTable.set(this, true);
          }
        };
        registerWrapper(OriginalEvent, Event, document.createEvent("Event"));
        function unwrapOptions(options) {
          if (!options || !options.relatedTarget)
            return options;
          return Object.create(options, {relatedTarget: {value: unwrap(options.relatedTarget)}});
        }
        function registerGenericEvent(name, SuperEvent, prototype) {
          var OriginalEvent = window[name];
          var GenericEvent = function(type, options) {
            if (type instanceof OriginalEvent)
              setWrapper(type, this);
            else
              return wrap(constructEvent(OriginalEvent, name, type, options));
          };
          GenericEvent.prototype = Object.create(SuperEvent.prototype);
          if (prototype)
            mixin(GenericEvent.prototype, prototype);
          if (OriginalEvent) {
            try {
              registerWrapper(OriginalEvent, GenericEvent, new OriginalEvent("temp"));
            } catch (ex) {
              registerWrapper(OriginalEvent, GenericEvent, document.createEvent(name));
            }
          }
          return GenericEvent;
        }
        var UIEvent = registerGenericEvent("UIEvent", Event);
        var CustomEvent = registerGenericEvent("CustomEvent", Event);
        var relatedTargetProto = {get relatedTarget() {
            var relatedTarget = relatedTargetTable.get(this);
            if (relatedTarget !== undefined)
              return relatedTarget;
            return wrap(unwrap(this).relatedTarget);
          }};
        function getInitFunction(name, relatedTargetIndex) {
          return function() {
            arguments[relatedTargetIndex] = unwrap(arguments[relatedTargetIndex]);
            var impl = unwrap(this);
            impl[name].apply(impl, arguments);
          };
        }
        var mouseEventProto = mixin({initMouseEvent: getInitFunction("initMouseEvent", 14)}, relatedTargetProto);
        var focusEventProto = mixin({initFocusEvent: getInitFunction("initFocusEvent", 5)}, relatedTargetProto);
        var MouseEvent = registerGenericEvent("MouseEvent", UIEvent, mouseEventProto);
        var FocusEvent = registerGenericEvent("FocusEvent", UIEvent, focusEventProto);
        var defaultInitDicts = Object.create(null);
        var supportsEventConstructors = function() {
          try {
            new window.FocusEvent("focus");
          } catch (ex) {
            return false;
          }
          return true;
        }();
        function constructEvent(OriginalEvent, name, type, options) {
          if (supportsEventConstructors)
            return new OriginalEvent(type, unwrapOptions(options));
          var event = unwrap(document.createEvent(name));
          var defaultDict = defaultInitDicts[name];
          var args = [type];
          Object.keys(defaultDict).forEach(function(key) {
            var v = options != null && key in options ? options[key] : defaultDict[key];
            if (key === "relatedTarget")
              v = unwrap(v);
            args.push(v);
          });
          event["init" + name].apply(event, args);
          return event;
        }
        if (!supportsEventConstructors) {
          var configureEventConstructor = function(name, initDict, superName) {
            if (superName) {
              var superDict = defaultInitDicts[superName];
              initDict = mixin(mixin({}, superDict), initDict);
            }
            defaultInitDicts[name] = initDict;
          };
          configureEventConstructor("Event", {
            bubbles: false,
            cancelable: false
          });
          configureEventConstructor("CustomEvent", {detail: null}, "Event");
          configureEventConstructor("UIEvent", {
            view: null,
            detail: 0
          }, "Event");
          configureEventConstructor("MouseEvent", {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            button: 0,
            relatedTarget: null
          }, "UIEvent");
          configureEventConstructor("FocusEvent", {relatedTarget: null}, "UIEvent");
        }
        var OriginalBeforeUnloadEvent = window.BeforeUnloadEvent;
        function BeforeUnloadEvent(impl) {
          Event.call(this, impl);
        }
        BeforeUnloadEvent.prototype = Object.create(Event.prototype);
        mixin(BeforeUnloadEvent.prototype, {
          get returnValue() {
            return unsafeUnwrap(this).returnValue;
          },
          set returnValue(v) {
            unsafeUnwrap(this).returnValue = v;
          }
        });
        if (OriginalBeforeUnloadEvent)
          registerWrapper(OriginalBeforeUnloadEvent, BeforeUnloadEvent);
        function isValidListener(fun) {
          if (typeof fun === "function")
            return true;
          return fun && fun.handleEvent;
        }
        function isMutationEvent(type) {
          switch (type) {
            case "DOMAttrModified":
            case "DOMAttributeNameChanged":
            case "DOMCharacterDataModified":
            case "DOMElementNameChanged":
            case "DOMNodeInserted":
            case "DOMNodeInsertedIntoDocument":
            case "DOMNodeRemoved":
            case "DOMNodeRemovedFromDocument":
            case "DOMSubtreeModified":
              return true;
          }
          return false;
        }
        var OriginalEventTarget = window.EventTarget;
        function EventTarget(impl) {
          setWrapper(impl, this);
        }
        var methodNames = ["addEventListener", "removeEventListener", "dispatchEvent"];
        [Node, Window].forEach(function(constructor) {
          var p = constructor.prototype;
          methodNames.forEach(function(name) {
            Object.defineProperty(p, name + "_", {value: p[name]});
          });
        });
        function getTargetToListenAt(wrapper) {
          if (wrapper instanceof wrappers.ShadowRoot)
            wrapper = wrapper.host;
          return unwrap(wrapper);
        }
        EventTarget.prototype = {
          addEventListener: function(type, fun, capture) {
            if (!isValidListener(fun) || isMutationEvent(type))
              return;
            var listener = new Listener(type, fun, capture);
            var listeners = listenersTable.get(this);
            if (!listeners) {
              listeners = [];
              listeners.depth = 0;
              listenersTable.set(this, listeners);
            } else {
              for (var i = 0; i < listeners.length; i++) {
                if (listener.equals(listeners[i]))
                  return;
              }
            }
            listeners.push(listener);
            var target = getTargetToListenAt(this);
            target.addEventListener_(type, dispatchOriginalEvent, true);
          },
          removeEventListener: function(type, fun, capture) {
            capture = Boolean(capture);
            var listeners = listenersTable.get(this);
            if (!listeners)
              return;
            var count = 0,
                found = false;
            for (var i = 0; i < listeners.length; i++) {
              if (listeners[i].type === type && listeners[i].capture === capture) {
                count++;
                if (listeners[i].handler === fun) {
                  found = true;
                  listeners[i].remove();
                }
              }
            }
            if (found && count === 1) {
              var target = getTargetToListenAt(this);
              target.removeEventListener_(type, dispatchOriginalEvent, true);
            }
          },
          dispatchEvent: function(event) {
            var nativeEvent = unwrap(event);
            var eventType = nativeEvent.type;
            handledEventsTable.set(nativeEvent, false);
            scope.renderAllPending();
            var tempListener;
            if (!hasListenerInAncestors(this, eventType)) {
              tempListener = function() {};
              this.addEventListener(eventType, tempListener, true);
            }
            try {
              return unwrap(this).dispatchEvent_(nativeEvent);
            } finally {
              if (tempListener)
                this.removeEventListener(eventType, tempListener, true);
            }
          }
        };
        function hasListener(node, type) {
          var listeners = listenersTable.get(node);
          if (listeners) {
            for (var i = 0; i < listeners.length; i++) {
              if (!listeners[i].removed && listeners[i].type === type)
                return true;
            }
          }
          return false;
        }
        function hasListenerInAncestors(target, type) {
          for (var node = unwrap(target); node; node = node.parentNode) {
            if (hasListener(wrap(node), type))
              return true;
          }
          return false;
        }
        if (OriginalEventTarget)
          registerWrapper(OriginalEventTarget, EventTarget);
        function wrapEventTargetMethods(constructors) {
          forwardMethodsToWrapper(constructors, methodNames);
        }
        var originalElementFromPoint = document.elementFromPoint;
        function elementFromPoint(self, document, x, y) {
          scope.renderAllPending();
          var element = wrap(originalElementFromPoint.call(unsafeUnwrap(document), x, y));
          if (!element)
            return null;
          var path = getEventPath(element, null);
          var idx = path.lastIndexOf(self);
          if (idx == -1)
            return null;
          else
            path = path.slice(0, idx);
          return eventRetargetting(path, self);
        }
        function getEventHandlerGetter(name) {
          return function() {
            var inlineEventHandlers = eventHandlersTable.get(this);
            return inlineEventHandlers && inlineEventHandlers[name] && inlineEventHandlers[name].value || null;
          };
        }
        function getEventHandlerSetter(name) {
          var eventType = name.slice(2);
          return function(value) {
            var inlineEventHandlers = eventHandlersTable.get(this);
            if (!inlineEventHandlers) {
              inlineEventHandlers = Object.create(null);
              eventHandlersTable.set(this, inlineEventHandlers);
            }
            var old = inlineEventHandlers[name];
            if (old)
              this.removeEventListener(eventType, old.wrapped, false);
            if (typeof value === "function") {
              var wrapped = function(e) {
                var rv = value.call(this, e);
                if (rv === false)
                  e.preventDefault();
                else if (name === "onbeforeunload" && typeof rv === "string")
                  e.returnValue = rv;
              };
              this.addEventListener(eventType, wrapped, false);
              inlineEventHandlers[name] = {
                value: value,
                wrapped: wrapped
              };
            }
          };
        }
        scope.elementFromPoint = elementFromPoint;
        scope.getEventHandlerGetter = getEventHandlerGetter;
        scope.getEventHandlerSetter = getEventHandlerSetter;
        scope.wrapEventTargetMethods = wrapEventTargetMethods;
        scope.wrappers.BeforeUnloadEvent = BeforeUnloadEvent;
        scope.wrappers.CustomEvent = CustomEvent;
        scope.wrappers.Event = Event;
        scope.wrappers.EventTarget = EventTarget;
        scope.wrappers.FocusEvent = FocusEvent;
        scope.wrappers.MouseEvent = MouseEvent;
        scope.wrappers.UIEvent = UIEvent;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var UIEvent = scope.wrappers.UIEvent;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var setWrapper = scope.setWrapper;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var wrap = scope.wrap;
        var OriginalTouchEvent = window.TouchEvent;
        if (!OriginalTouchEvent)
          return;
        var nativeEvent;
        try {
          nativeEvent = document.createEvent("TouchEvent");
        } catch (ex) {
          return;
        }
        var nonEnumDescriptor = {enumerable: false};
        function nonEnum(obj, prop) {
          Object.defineProperty(obj, prop, nonEnumDescriptor);
        }
        function Touch(impl) {
          setWrapper(impl, this);
        }
        Touch.prototype = {get target() {
            return wrap(unsafeUnwrap(this).target);
          }};
        var descr = {
          configurable: true,
          enumerable: true,
          get: null
        };
        ["clientX", "clientY", "screenX", "screenY", "pageX", "pageY", "identifier", "webkitRadiusX", "webkitRadiusY", "webkitRotationAngle", "webkitForce"].forEach(function(name) {
          descr.get = function() {
            return unsafeUnwrap(this)[name];
          };
          Object.defineProperty(Touch.prototype, name, descr);
        });
        function TouchList() {
          this.length = 0;
          nonEnum(this, "length");
        }
        TouchList.prototype = {item: function(index) {
            return this[index];
          }};
        function wrapTouchList(nativeTouchList) {
          var list = new TouchList();
          for (var i = 0; i < nativeTouchList.length; i++) {
            list[i] = new Touch(nativeTouchList[i]);
          }
          list.length = i;
          return list;
        }
        function TouchEvent(impl) {
          UIEvent.call(this, impl);
        }
        TouchEvent.prototype = Object.create(UIEvent.prototype);
        mixin(TouchEvent.prototype, {
          get touches() {
            return wrapTouchList(unsafeUnwrap(this).touches);
          },
          get targetTouches() {
            return wrapTouchList(unsafeUnwrap(this).targetTouches);
          },
          get changedTouches() {
            return wrapTouchList(unsafeUnwrap(this).changedTouches);
          },
          initTouchEvent: function() {
            throw new Error("Not implemented");
          }
        });
        registerWrapper(OriginalTouchEvent, TouchEvent, nativeEvent);
        scope.wrappers.Touch = Touch;
        scope.wrappers.TouchEvent = TouchEvent;
        scope.wrappers.TouchList = TouchList;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var unsafeUnwrap = scope.unsafeUnwrap;
        var wrap = scope.wrap;
        var nonEnumDescriptor = {enumerable: false};
        function nonEnum(obj, prop) {
          Object.defineProperty(obj, prop, nonEnumDescriptor);
        }
        function NodeList() {
          this.length = 0;
          nonEnum(this, "length");
        }
        NodeList.prototype = {item: function(index) {
            return this[index];
          }};
        nonEnum(NodeList.prototype, "item");
        function wrapNodeList(list) {
          if (list == null)
            return list;
          var wrapperList = new NodeList();
          for (var i = 0,
              length = list.length; i < length; i++) {
            wrapperList[i] = wrap(list[i]);
          }
          wrapperList.length = length;
          return wrapperList;
        }
        function addWrapNodeListMethod(wrapperConstructor, name) {
          wrapperConstructor.prototype[name] = function() {
            return wrapNodeList(unsafeUnwrap(this)[name].apply(unsafeUnwrap(this), arguments));
          };
        }
        scope.wrappers.NodeList = NodeList;
        scope.addWrapNodeListMethod = addWrapNodeListMethod;
        scope.wrapNodeList = wrapNodeList;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        scope.wrapHTMLCollection = scope.wrapNodeList;
        scope.wrappers.HTMLCollection = scope.wrappers.NodeList;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var EventTarget = scope.wrappers.EventTarget;
        var NodeList = scope.wrappers.NodeList;
        var TreeScope = scope.TreeScope;
        var assert = scope.assert;
        var defineWrapGetter = scope.defineWrapGetter;
        var enqueueMutation = scope.enqueueMutation;
        var getTreeScope = scope.getTreeScope;
        var isWrapper = scope.isWrapper;
        var mixin = scope.mixin;
        var registerTransientObservers = scope.registerTransientObservers;
        var registerWrapper = scope.registerWrapper;
        var setTreeScope = scope.setTreeScope;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var unwrap = scope.unwrap;
        var unwrapIfNeeded = scope.unwrapIfNeeded;
        var wrap = scope.wrap;
        var wrapIfNeeded = scope.wrapIfNeeded;
        var wrappers = scope.wrappers;
        function assertIsNodeWrapper(node) {
          assert(node instanceof Node);
        }
        function createOneElementNodeList(node) {
          var nodes = new NodeList();
          nodes[0] = node;
          nodes.length = 1;
          return nodes;
        }
        var surpressMutations = false;
        function enqueueRemovalForInsertedNodes(node, parent, nodes) {
          enqueueMutation(parent, "childList", {
            removedNodes: nodes,
            previousSibling: node.previousSibling,
            nextSibling: node.nextSibling
          });
        }
        function enqueueRemovalForInsertedDocumentFragment(df, nodes) {
          enqueueMutation(df, "childList", {removedNodes: nodes});
        }
        function collectNodes(node, parentNode, previousNode, nextNode) {
          if (node instanceof DocumentFragment) {
            var nodes = collectNodesForDocumentFragment(node);
            surpressMutations = true;
            for (var i = nodes.length - 1; i >= 0; i--) {
              node.removeChild(nodes[i]);
              nodes[i].parentNode_ = parentNode;
            }
            surpressMutations = false;
            for (var i = 0; i < nodes.length; i++) {
              nodes[i].previousSibling_ = nodes[i - 1] || previousNode;
              nodes[i].nextSibling_ = nodes[i + 1] || nextNode;
            }
            if (previousNode)
              previousNode.nextSibling_ = nodes[0];
            if (nextNode)
              nextNode.previousSibling_ = nodes[nodes.length - 1];
            return nodes;
          }
          var nodes = createOneElementNodeList(node);
          var oldParent = node.parentNode;
          if (oldParent) {
            oldParent.removeChild(node);
          }
          node.parentNode_ = parentNode;
          node.previousSibling_ = previousNode;
          node.nextSibling_ = nextNode;
          if (previousNode)
            previousNode.nextSibling_ = node;
          if (nextNode)
            nextNode.previousSibling_ = node;
          return nodes;
        }
        function collectNodesNative(node) {
          if (node instanceof DocumentFragment)
            return collectNodesForDocumentFragment(node);
          var nodes = createOneElementNodeList(node);
          var oldParent = node.parentNode;
          if (oldParent)
            enqueueRemovalForInsertedNodes(node, oldParent, nodes);
          return nodes;
        }
        function collectNodesForDocumentFragment(node) {
          var nodes = new NodeList();
          var i = 0;
          for (var child = node.firstChild; child; child = child.nextSibling) {
            nodes[i++] = child;
          }
          nodes.length = i;
          enqueueRemovalForInsertedDocumentFragment(node, nodes);
          return nodes;
        }
        function snapshotNodeList(nodeList) {
          return nodeList;
        }
        function nodeWasAdded(node, treeScope) {
          setTreeScope(node, treeScope);
          node.nodeIsInserted_();
        }
        function nodesWereAdded(nodes, parent) {
          var treeScope = getTreeScope(parent);
          for (var i = 0; i < nodes.length; i++) {
            nodeWasAdded(nodes[i], treeScope);
          }
        }
        function nodeWasRemoved(node) {
          setTreeScope(node, new TreeScope(node, null));
        }
        function nodesWereRemoved(nodes) {
          for (var i = 0; i < nodes.length; i++) {
            nodeWasRemoved(nodes[i]);
          }
        }
        function ensureSameOwnerDocument(parent, child) {
          var ownerDoc = parent.nodeType === Node.DOCUMENT_NODE ? parent : parent.ownerDocument;
          if (ownerDoc !== child.ownerDocument)
            ownerDoc.adoptNode(child);
        }
        function adoptNodesIfNeeded(owner, nodes) {
          if (!nodes.length)
            return;
          var ownerDoc = owner.ownerDocument;
          if (ownerDoc === nodes[0].ownerDocument)
            return;
          for (var i = 0; i < nodes.length; i++) {
            scope.adoptNodeNoRemove(nodes[i], ownerDoc);
          }
        }
        function unwrapNodesForInsertion(owner, nodes) {
          adoptNodesIfNeeded(owner, nodes);
          var length = nodes.length;
          if (length === 1)
            return unwrap(nodes[0]);
          var df = unwrap(owner.ownerDocument.createDocumentFragment());
          for (var i = 0; i < length; i++) {
            df.appendChild(unwrap(nodes[i]));
          }
          return df;
        }
        function clearChildNodes(wrapper) {
          if (wrapper.firstChild_ !== undefined) {
            var child = wrapper.firstChild_;
            while (child) {
              var tmp = child;
              child = child.nextSibling_;
              tmp.parentNode_ = tmp.previousSibling_ = tmp.nextSibling_ = undefined;
            }
          }
          wrapper.firstChild_ = wrapper.lastChild_ = undefined;
        }
        function removeAllChildNodes(wrapper) {
          if (wrapper.invalidateShadowRenderer()) {
            var childWrapper = wrapper.firstChild;
            while (childWrapper) {
              assert(childWrapper.parentNode === wrapper);
              var nextSibling = childWrapper.nextSibling;
              var childNode = unwrap(childWrapper);
              var parentNode = childNode.parentNode;
              if (parentNode)
                originalRemoveChild.call(parentNode, childNode);
              childWrapper.previousSibling_ = childWrapper.nextSibling_ = childWrapper.parentNode_ = null;
              childWrapper = nextSibling;
            }
            wrapper.firstChild_ = wrapper.lastChild_ = null;
          } else {
            var node = unwrap(wrapper);
            var child = node.firstChild;
            var nextSibling;
            while (child) {
              nextSibling = child.nextSibling;
              originalRemoveChild.call(node, child);
              child = nextSibling;
            }
          }
        }
        function invalidateParent(node) {
          var p = node.parentNode;
          return p && p.invalidateShadowRenderer();
        }
        function cleanupNodes(nodes) {
          for (var i = 0,
              n; i < nodes.length; i++) {
            n = nodes[i];
            n.parentNode.removeChild(n);
          }
        }
        var originalImportNode = document.importNode;
        var originalCloneNode = window.Node.prototype.cloneNode;
        function cloneNode(node, deep, opt_doc) {
          var clone;
          if (opt_doc)
            clone = wrap(originalImportNode.call(opt_doc, unsafeUnwrap(node), false));
          else
            clone = wrap(originalCloneNode.call(unsafeUnwrap(node), false));
          if (deep) {
            for (var child = node.firstChild; child; child = child.nextSibling) {
              clone.appendChild(cloneNode(child, true, opt_doc));
            }
            if (node instanceof wrappers.HTMLTemplateElement) {
              var cloneContent = clone.content;
              for (var child = node.content.firstChild; child; child = child.nextSibling) {
                cloneContent.appendChild(cloneNode(child, true, opt_doc));
              }
            }
          }
          return clone;
        }
        function contains(self, child) {
          if (!child || getTreeScope(self) !== getTreeScope(child))
            return false;
          for (var node = child; node; node = node.parentNode) {
            if (node === self)
              return true;
          }
          return false;
        }
        var OriginalNode = window.Node;
        function Node(original) {
          assert(original instanceof OriginalNode);
          EventTarget.call(this, original);
          this.parentNode_ = undefined;
          this.firstChild_ = undefined;
          this.lastChild_ = undefined;
          this.nextSibling_ = undefined;
          this.previousSibling_ = undefined;
          this.treeScope_ = undefined;
        }
        var OriginalDocumentFragment = window.DocumentFragment;
        var originalAppendChild = OriginalNode.prototype.appendChild;
        var originalCompareDocumentPosition = OriginalNode.prototype.compareDocumentPosition;
        var originalIsEqualNode = OriginalNode.prototype.isEqualNode;
        var originalInsertBefore = OriginalNode.prototype.insertBefore;
        var originalRemoveChild = OriginalNode.prototype.removeChild;
        var originalReplaceChild = OriginalNode.prototype.replaceChild;
        var isIEOrEdge = /Trident|Edge/.test(navigator.userAgent);
        var removeChildOriginalHelper = isIEOrEdge ? function(parent, child) {
          try {
            originalRemoveChild.call(parent, child);
          } catch (ex) {
            if (!(parent instanceof OriginalDocumentFragment))
              throw ex;
          }
        } : function(parent, child) {
          originalRemoveChild.call(parent, child);
        };
        Node.prototype = Object.create(EventTarget.prototype);
        mixin(Node.prototype, {
          appendChild: function(childWrapper) {
            return this.insertBefore(childWrapper, null);
          },
          insertBefore: function(childWrapper, refWrapper) {
            assertIsNodeWrapper(childWrapper);
            var refNode;
            if (refWrapper) {
              if (isWrapper(refWrapper)) {
                refNode = unwrap(refWrapper);
              } else {
                refNode = refWrapper;
                refWrapper = wrap(refNode);
              }
            } else {
              refWrapper = null;
              refNode = null;
            }
            refWrapper && assert(refWrapper.parentNode === this);
            var nodes;
            var previousNode = refWrapper ? refWrapper.previousSibling : this.lastChild;
            var useNative = !this.invalidateShadowRenderer() && !invalidateParent(childWrapper);
            if (useNative)
              nodes = collectNodesNative(childWrapper);
            else
              nodes = collectNodes(childWrapper, this, previousNode, refWrapper);
            if (useNative) {
              ensureSameOwnerDocument(this, childWrapper);
              clearChildNodes(this);
              originalInsertBefore.call(unsafeUnwrap(this), unwrap(childWrapper), refNode);
            } else {
              if (!previousNode)
                this.firstChild_ = nodes[0];
              if (!refWrapper) {
                this.lastChild_ = nodes[nodes.length - 1];
                if (this.firstChild_ === undefined)
                  this.firstChild_ = this.firstChild;
              }
              var parentNode = refNode ? refNode.parentNode : unsafeUnwrap(this);
              if (parentNode) {
                originalInsertBefore.call(parentNode, unwrapNodesForInsertion(this, nodes), refNode);
              } else {
                adoptNodesIfNeeded(this, nodes);
              }
            }
            enqueueMutation(this, "childList", {
              addedNodes: nodes,
              nextSibling: refWrapper,
              previousSibling: previousNode
            });
            nodesWereAdded(nodes, this);
            return childWrapper;
          },
          removeChild: function(childWrapper) {
            assertIsNodeWrapper(childWrapper);
            if (childWrapper.parentNode !== this) {
              var found = false;
              var childNodes = this.childNodes;
              for (var ieChild = this.firstChild; ieChild; ieChild = ieChild.nextSibling) {
                if (ieChild === childWrapper) {
                  found = true;
                  break;
                }
              }
              if (!found) {
                throw new Error("NotFoundError");
              }
            }
            var childNode = unwrap(childWrapper);
            var childWrapperNextSibling = childWrapper.nextSibling;
            var childWrapperPreviousSibling = childWrapper.previousSibling;
            if (this.invalidateShadowRenderer()) {
              var thisFirstChild = this.firstChild;
              var thisLastChild = this.lastChild;
              var parentNode = childNode.parentNode;
              if (parentNode)
                removeChildOriginalHelper(parentNode, childNode);
              if (thisFirstChild === childWrapper)
                this.firstChild_ = childWrapperNextSibling;
              if (thisLastChild === childWrapper)
                this.lastChild_ = childWrapperPreviousSibling;
              if (childWrapperPreviousSibling)
                childWrapperPreviousSibling.nextSibling_ = childWrapperNextSibling;
              if (childWrapperNextSibling) {
                childWrapperNextSibling.previousSibling_ = childWrapperPreviousSibling;
              }
              childWrapper.previousSibling_ = childWrapper.nextSibling_ = childWrapper.parentNode_ = undefined;
            } else {
              clearChildNodes(this);
              removeChildOriginalHelper(unsafeUnwrap(this), childNode);
            }
            if (!surpressMutations) {
              enqueueMutation(this, "childList", {
                removedNodes: createOneElementNodeList(childWrapper),
                nextSibling: childWrapperNextSibling,
                previousSibling: childWrapperPreviousSibling
              });
            }
            registerTransientObservers(this, childWrapper);
            return childWrapper;
          },
          replaceChild: function(newChildWrapper, oldChildWrapper) {
            assertIsNodeWrapper(newChildWrapper);
            var oldChildNode;
            if (isWrapper(oldChildWrapper)) {
              oldChildNode = unwrap(oldChildWrapper);
            } else {
              oldChildNode = oldChildWrapper;
              oldChildWrapper = wrap(oldChildNode);
            }
            if (oldChildWrapper.parentNode !== this) {
              throw new Error("NotFoundError");
            }
            var nextNode = oldChildWrapper.nextSibling;
            var previousNode = oldChildWrapper.previousSibling;
            var nodes;
            var useNative = !this.invalidateShadowRenderer() && !invalidateParent(newChildWrapper);
            if (useNative) {
              nodes = collectNodesNative(newChildWrapper);
            } else {
              if (nextNode === newChildWrapper)
                nextNode = newChildWrapper.nextSibling;
              nodes = collectNodes(newChildWrapper, this, previousNode, nextNode);
            }
            if (!useNative) {
              if (this.firstChild === oldChildWrapper)
                this.firstChild_ = nodes[0];
              if (this.lastChild === oldChildWrapper)
                this.lastChild_ = nodes[nodes.length - 1];
              oldChildWrapper.previousSibling_ = oldChildWrapper.nextSibling_ = oldChildWrapper.parentNode_ = undefined;
              if (oldChildNode.parentNode) {
                originalReplaceChild.call(oldChildNode.parentNode, unwrapNodesForInsertion(this, nodes), oldChildNode);
              }
            } else {
              ensureSameOwnerDocument(this, newChildWrapper);
              clearChildNodes(this);
              originalReplaceChild.call(unsafeUnwrap(this), unwrap(newChildWrapper), oldChildNode);
            }
            enqueueMutation(this, "childList", {
              addedNodes: nodes,
              removedNodes: createOneElementNodeList(oldChildWrapper),
              nextSibling: nextNode,
              previousSibling: previousNode
            });
            nodeWasRemoved(oldChildWrapper);
            nodesWereAdded(nodes, this);
            return oldChildWrapper;
          },
          nodeIsInserted_: function() {
            for (var child = this.firstChild; child; child = child.nextSibling) {
              child.nodeIsInserted_();
            }
          },
          hasChildNodes: function() {
            return this.firstChild !== null;
          },
          get parentNode() {
            return this.parentNode_ !== undefined ? this.parentNode_ : wrap(unsafeUnwrap(this).parentNode);
          },
          get firstChild() {
            return this.firstChild_ !== undefined ? this.firstChild_ : wrap(unsafeUnwrap(this).firstChild);
          },
          get lastChild() {
            return this.lastChild_ !== undefined ? this.lastChild_ : wrap(unsafeUnwrap(this).lastChild);
          },
          get nextSibling() {
            return this.nextSibling_ !== undefined ? this.nextSibling_ : wrap(unsafeUnwrap(this).nextSibling);
          },
          get previousSibling() {
            return this.previousSibling_ !== undefined ? this.previousSibling_ : wrap(unsafeUnwrap(this).previousSibling);
          },
          get parentElement() {
            var p = this.parentNode;
            while (p && p.nodeType !== Node.ELEMENT_NODE) {
              p = p.parentNode;
            }
            return p;
          },
          get textContent() {
            var s = "";
            for (var child = this.firstChild; child; child = child.nextSibling) {
              if (child.nodeType != Node.COMMENT_NODE) {
                s += child.textContent;
              }
            }
            return s;
          },
          set textContent(textContent) {
            if (textContent == null)
              textContent = "";
            var removedNodes = snapshotNodeList(this.childNodes);
            if (this.invalidateShadowRenderer()) {
              removeAllChildNodes(this);
              if (textContent !== "") {
                var textNode = unsafeUnwrap(this).ownerDocument.createTextNode(textContent);
                this.appendChild(textNode);
              }
            } else {
              clearChildNodes(this);
              unsafeUnwrap(this).textContent = textContent;
            }
            var addedNodes = snapshotNodeList(this.childNodes);
            enqueueMutation(this, "childList", {
              addedNodes: addedNodes,
              removedNodes: removedNodes
            });
            nodesWereRemoved(removedNodes);
            nodesWereAdded(addedNodes, this);
          },
          get childNodes() {
            var wrapperList = new NodeList();
            var i = 0;
            for (var child = this.firstChild; child; child = child.nextSibling) {
              wrapperList[i++] = child;
            }
            wrapperList.length = i;
            return wrapperList;
          },
          cloneNode: function(deep) {
            return cloneNode(this, deep);
          },
          contains: function(child) {
            return contains(this, wrapIfNeeded(child));
          },
          compareDocumentPosition: function(otherNode) {
            return originalCompareDocumentPosition.call(unsafeUnwrap(this), unwrapIfNeeded(otherNode));
          },
          isEqualNode: function(otherNode) {
            return originalIsEqualNode.call(unsafeUnwrap(this), unwrapIfNeeded(otherNode));
          },
          normalize: function() {
            var nodes = snapshotNodeList(this.childNodes);
            var remNodes = [];
            var s = "";
            var modNode;
            for (var i = 0,
                n; i < nodes.length; i++) {
              n = nodes[i];
              if (n.nodeType === Node.TEXT_NODE) {
                if (!modNode && !n.data.length)
                  this.removeChild(n);
                else if (!modNode)
                  modNode = n;
                else {
                  s += n.data;
                  remNodes.push(n);
                }
              } else {
                if (modNode && remNodes.length) {
                  modNode.data += s;
                  cleanupNodes(remNodes);
                }
                remNodes = [];
                s = "";
                modNode = null;
                if (n.childNodes.length)
                  n.normalize();
              }
            }
            if (modNode && remNodes.length) {
              modNode.data += s;
              cleanupNodes(remNodes);
            }
          }
        });
        defineWrapGetter(Node, "ownerDocument");
        registerWrapper(OriginalNode, Node, document.createDocumentFragment());
        delete Node.prototype.querySelector;
        delete Node.prototype.querySelectorAll;
        Node.prototype = mixin(Object.create(EventTarget.prototype), Node.prototype);
        scope.cloneNode = cloneNode;
        scope.nodeWasAdded = nodeWasAdded;
        scope.nodeWasRemoved = nodeWasRemoved;
        scope.nodesWereAdded = nodesWereAdded;
        scope.nodesWereRemoved = nodesWereRemoved;
        scope.originalInsertBefore = originalInsertBefore;
        scope.originalRemoveChild = originalRemoveChild;
        scope.snapshotNodeList = snapshotNodeList;
        scope.wrappers.Node = Node;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLCollection = scope.wrappers.HTMLCollection;
        var NodeList = scope.wrappers.NodeList;
        var getTreeScope = scope.getTreeScope;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var wrap = scope.wrap;
        var originalDocumentQuerySelector = document.querySelector;
        var originalElementQuerySelector = document.documentElement.querySelector;
        var originalDocumentQuerySelectorAll = document.querySelectorAll;
        var originalElementQuerySelectorAll = document.documentElement.querySelectorAll;
        var originalDocumentGetElementsByTagName = document.getElementsByTagName;
        var originalElementGetElementsByTagName = document.documentElement.getElementsByTagName;
        var originalDocumentGetElementsByTagNameNS = document.getElementsByTagNameNS;
        var originalElementGetElementsByTagNameNS = document.documentElement.getElementsByTagNameNS;
        var OriginalElement = window.Element;
        var OriginalDocument = window.HTMLDocument || window.Document;
        function filterNodeList(list, index, result, deep) {
          var wrappedItem = null;
          var root = null;
          for (var i = 0,
              length = list.length; i < length; i++) {
            wrappedItem = wrap(list[i]);
            if (!deep && (root = getTreeScope(wrappedItem).root)) {
              if (root instanceof scope.wrappers.ShadowRoot) {
                continue;
              }
            }
            result[index++] = wrappedItem;
          }
          return index;
        }
        function shimSelector(selector) {
          return String(selector).replace(/\/deep\/|::shadow|>>>/g, " ");
        }
        function shimMatchesSelector(selector) {
          return String(selector).replace(/:host\(([^\s]+)\)/g, "$1").replace(/([^\s]):host/g, "$1").replace(":host", "*").replace(/\^|\/shadow\/|\/shadow-deep\/|::shadow|\/deep\/|::content|>>>/g, " ");
        }
        function findOne(node, selector) {
          var m,
              el = node.firstElementChild;
          while (el) {
            if (el.matches(selector))
              return el;
            m = findOne(el, selector);
            if (m)
              return m;
            el = el.nextElementSibling;
          }
          return null;
        }
        function matchesSelector(el, selector) {
          return el.matches(selector);
        }
        var XHTML_NS = "http://www.w3.org/1999/xhtml";
        function matchesTagName(el, localName, localNameLowerCase) {
          var ln = el.localName;
          return ln === localName || ln === localNameLowerCase && el.namespaceURI === XHTML_NS;
        }
        function matchesEveryThing() {
          return true;
        }
        function matchesLocalNameOnly(el, ns, localName) {
          return el.localName === localName;
        }
        function matchesNameSpace(el, ns) {
          return el.namespaceURI === ns;
        }
        function matchesLocalNameNS(el, ns, localName) {
          return el.namespaceURI === ns && el.localName === localName;
        }
        function findElements(node, index, result, p, arg0, arg1) {
          var el = node.firstElementChild;
          while (el) {
            if (p(el, arg0, arg1))
              result[index++] = el;
            index = findElements(el, index, result, p, arg0, arg1);
            el = el.nextElementSibling;
          }
          return index;
        }
        function querySelectorAllFiltered(p, index, result, selector, deep) {
          var target = unsafeUnwrap(this);
          var list;
          var root = getTreeScope(this).root;
          if (root instanceof scope.wrappers.ShadowRoot) {
            return findElements(this, index, result, p, selector, null);
          } else if (target instanceof OriginalElement) {
            list = originalElementQuerySelectorAll.call(target, selector);
          } else if (target instanceof OriginalDocument) {
            list = originalDocumentQuerySelectorAll.call(target, selector);
          } else {
            return findElements(this, index, result, p, selector, null);
          }
          return filterNodeList(list, index, result, deep);
        }
        var SelectorsInterface = {
          querySelector: function(selector) {
            var shimmed = shimSelector(selector);
            var deep = shimmed !== selector;
            selector = shimmed;
            var target = unsafeUnwrap(this);
            var wrappedItem;
            var root = getTreeScope(this).root;
            if (root instanceof scope.wrappers.ShadowRoot) {
              return findOne(this, selector);
            } else if (target instanceof OriginalElement) {
              wrappedItem = wrap(originalElementQuerySelector.call(target, selector));
            } else if (target instanceof OriginalDocument) {
              wrappedItem = wrap(originalDocumentQuerySelector.call(target, selector));
            } else {
              return findOne(this, selector);
            }
            if (!wrappedItem) {
              return wrappedItem;
            } else if (!deep && (root = getTreeScope(wrappedItem).root)) {
              if (root instanceof scope.wrappers.ShadowRoot) {
                return findOne(this, selector);
              }
            }
            return wrappedItem;
          },
          querySelectorAll: function(selector) {
            var shimmed = shimSelector(selector);
            var deep = shimmed !== selector;
            selector = shimmed;
            var result = new NodeList();
            result.length = querySelectorAllFiltered.call(this, matchesSelector, 0, result, selector, deep);
            return result;
          }
        };
        var MatchesInterface = {matches: function(selector) {
            selector = shimMatchesSelector(selector);
            return scope.originalMatches.call(unsafeUnwrap(this), selector);
          }};
        function getElementsByTagNameFiltered(p, index, result, localName, lowercase) {
          var target = unsafeUnwrap(this);
          var list;
          var root = getTreeScope(this).root;
          if (root instanceof scope.wrappers.ShadowRoot) {
            return findElements(this, index, result, p, localName, lowercase);
          } else if (target instanceof OriginalElement) {
            list = originalElementGetElementsByTagName.call(target, localName, lowercase);
          } else if (target instanceof OriginalDocument) {
            list = originalDocumentGetElementsByTagName.call(target, localName, lowercase);
          } else {
            return findElements(this, index, result, p, localName, lowercase);
          }
          return filterNodeList(list, index, result, false);
        }
        function getElementsByTagNameNSFiltered(p, index, result, ns, localName) {
          var target = unsafeUnwrap(this);
          var list;
          var root = getTreeScope(this).root;
          if (root instanceof scope.wrappers.ShadowRoot) {
            return findElements(this, index, result, p, ns, localName);
          } else if (target instanceof OriginalElement) {
            list = originalElementGetElementsByTagNameNS.call(target, ns, localName);
          } else if (target instanceof OriginalDocument) {
            list = originalDocumentGetElementsByTagNameNS.call(target, ns, localName);
          } else {
            return findElements(this, index, result, p, ns, localName);
          }
          return filterNodeList(list, index, result, false);
        }
        var GetElementsByInterface = {
          getElementsByTagName: function(localName) {
            var result = new HTMLCollection();
            var match = localName === "*" ? matchesEveryThing : matchesTagName;
            result.length = getElementsByTagNameFiltered.call(this, match, 0, result, localName, localName.toLowerCase());
            return result;
          },
          getElementsByClassName: function(className) {
            return this.querySelectorAll("." + className);
          },
          getElementsByTagNameNS: function(ns, localName) {
            var result = new HTMLCollection();
            var match = null;
            if (ns === "*") {
              match = localName === "*" ? matchesEveryThing : matchesLocalNameOnly;
            } else {
              match = localName === "*" ? matchesNameSpace : matchesLocalNameNS;
            }
            result.length = getElementsByTagNameNSFiltered.call(this, match, 0, result, ns || null, localName);
            return result;
          }
        };
        scope.GetElementsByInterface = GetElementsByInterface;
        scope.SelectorsInterface = SelectorsInterface;
        scope.MatchesInterface = MatchesInterface;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var NodeList = scope.wrappers.NodeList;
        function forwardElement(node) {
          while (node && node.nodeType !== Node.ELEMENT_NODE) {
            node = node.nextSibling;
          }
          return node;
        }
        function backwardsElement(node) {
          while (node && node.nodeType !== Node.ELEMENT_NODE) {
            node = node.previousSibling;
          }
          return node;
        }
        var ParentNodeInterface = {
          get firstElementChild() {
            return forwardElement(this.firstChild);
          },
          get lastElementChild() {
            return backwardsElement(this.lastChild);
          },
          get childElementCount() {
            var count = 0;
            for (var child = this.firstElementChild; child; child = child.nextElementSibling) {
              count++;
            }
            return count;
          },
          get children() {
            var wrapperList = new NodeList();
            var i = 0;
            for (var child = this.firstElementChild; child; child = child.nextElementSibling) {
              wrapperList[i++] = child;
            }
            wrapperList.length = i;
            return wrapperList;
          },
          remove: function() {
            var p = this.parentNode;
            if (p)
              p.removeChild(this);
          }
        };
        var ChildNodeInterface = {
          get nextElementSibling() {
            return forwardElement(this.nextSibling);
          },
          get previousElementSibling() {
            return backwardsElement(this.previousSibling);
          }
        };
        var NonElementParentNodeInterface = {getElementById: function(id) {
            if (/[ \t\n\r\f]/.test(id))
              return null;
            return this.querySelector('[id="' + id + '"]');
          }};
        scope.ChildNodeInterface = ChildNodeInterface;
        scope.NonElementParentNodeInterface = NonElementParentNodeInterface;
        scope.ParentNodeInterface = ParentNodeInterface;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var ChildNodeInterface = scope.ChildNodeInterface;
        var Node = scope.wrappers.Node;
        var enqueueMutation = scope.enqueueMutation;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var OriginalCharacterData = window.CharacterData;
        function CharacterData(node) {
          Node.call(this, node);
        }
        CharacterData.prototype = Object.create(Node.prototype);
        mixin(CharacterData.prototype, {
          get nodeValue() {
            return this.data;
          },
          set nodeValue(data) {
            this.data = data;
          },
          get textContent() {
            return this.data;
          },
          set textContent(value) {
            this.data = value;
          },
          get data() {
            return unsafeUnwrap(this).data;
          },
          set data(value) {
            var oldValue = unsafeUnwrap(this).data;
            enqueueMutation(this, "characterData", {oldValue: oldValue});
            unsafeUnwrap(this).data = value;
          }
        });
        mixin(CharacterData.prototype, ChildNodeInterface);
        registerWrapper(OriginalCharacterData, CharacterData, document.createTextNode(""));
        scope.wrappers.CharacterData = CharacterData;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var CharacterData = scope.wrappers.CharacterData;
        var enqueueMutation = scope.enqueueMutation;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        function toUInt32(x) {
          return x >>> 0;
        }
        var OriginalText = window.Text;
        function Text(node) {
          CharacterData.call(this, node);
        }
        Text.prototype = Object.create(CharacterData.prototype);
        mixin(Text.prototype, {splitText: function(offset) {
            offset = toUInt32(offset);
            var s = this.data;
            if (offset > s.length)
              throw new Error("IndexSizeError");
            var head = s.slice(0, offset);
            var tail = s.slice(offset);
            this.data = head;
            var newTextNode = this.ownerDocument.createTextNode(tail);
            if (this.parentNode)
              this.parentNode.insertBefore(newTextNode, this.nextSibling);
            return newTextNode;
          }});
        registerWrapper(OriginalText, Text, document.createTextNode(""));
        scope.wrappers.Text = Text;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        if (!window.DOMTokenList) {
          console.warn("Missing DOMTokenList prototype, please include a " + "compatible classList polyfill such as http://goo.gl/uTcepH.");
          return;
        }
        var unsafeUnwrap = scope.unsafeUnwrap;
        var enqueueMutation = scope.enqueueMutation;
        function getClass(el) {
          return unsafeUnwrap(el).getAttribute("class");
        }
        function enqueueClassAttributeChange(el, oldValue) {
          enqueueMutation(el, "attributes", {
            name: "class",
            namespace: null,
            oldValue: oldValue
          });
        }
        function invalidateClass(el) {
          scope.invalidateRendererBasedOnAttribute(el, "class");
        }
        function changeClass(tokenList, method, args) {
          var ownerElement = tokenList.ownerElement_;
          if (ownerElement == null) {
            return method.apply(tokenList, args);
          }
          var oldValue = getClass(ownerElement);
          var retv = method.apply(tokenList, args);
          if (getClass(ownerElement) !== oldValue) {
            enqueueClassAttributeChange(ownerElement, oldValue);
            invalidateClass(ownerElement);
          }
          return retv;
        }
        var oldAdd = DOMTokenList.prototype.add;
        DOMTokenList.prototype.add = function() {
          changeClass(this, oldAdd, arguments);
        };
        var oldRemove = DOMTokenList.prototype.remove;
        DOMTokenList.prototype.remove = function() {
          changeClass(this, oldRemove, arguments);
        };
        var oldToggle = DOMTokenList.prototype.toggle;
        DOMTokenList.prototype.toggle = function() {
          return changeClass(this, oldToggle, arguments);
        };
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var ChildNodeInterface = scope.ChildNodeInterface;
        var GetElementsByInterface = scope.GetElementsByInterface;
        var Node = scope.wrappers.Node;
        var ParentNodeInterface = scope.ParentNodeInterface;
        var SelectorsInterface = scope.SelectorsInterface;
        var MatchesInterface = scope.MatchesInterface;
        var addWrapNodeListMethod = scope.addWrapNodeListMethod;
        var enqueueMutation = scope.enqueueMutation;
        var mixin = scope.mixin;
        var oneOf = scope.oneOf;
        var registerWrapper = scope.registerWrapper;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var wrappers = scope.wrappers;
        var OriginalElement = window.Element;
        var matchesNames = ["matches", "mozMatchesSelector", "msMatchesSelector", "webkitMatchesSelector"].filter(function(name) {
          return OriginalElement.prototype[name];
        });
        var matchesName = matchesNames[0];
        var originalMatches = OriginalElement.prototype[matchesName];
        function invalidateRendererBasedOnAttribute(element, name) {
          var p = element.parentNode;
          if (!p || !p.shadowRoot)
            return;
          var renderer = scope.getRendererForHost(p);
          if (renderer.dependsOnAttribute(name))
            renderer.invalidate();
        }
        function enqueAttributeChange(element, name, oldValue) {
          enqueueMutation(element, "attributes", {
            name: name,
            namespace: null,
            oldValue: oldValue
          });
        }
        var classListTable = new WeakMap();
        function Element(node) {
          Node.call(this, node);
        }
        Element.prototype = Object.create(Node.prototype);
        mixin(Element.prototype, {
          createShadowRoot: function() {
            var newShadowRoot = new wrappers.ShadowRoot(this);
            unsafeUnwrap(this).polymerShadowRoot_ = newShadowRoot;
            var renderer = scope.getRendererForHost(this);
            renderer.invalidate();
            return newShadowRoot;
          },
          get shadowRoot() {
            return unsafeUnwrap(this).polymerShadowRoot_ || null;
          },
          setAttribute: function(name, value) {
            var oldValue = unsafeUnwrap(this).getAttribute(name);
            unsafeUnwrap(this).setAttribute(name, value);
            enqueAttributeChange(this, name, oldValue);
            invalidateRendererBasedOnAttribute(this, name);
          },
          removeAttribute: function(name) {
            var oldValue = unsafeUnwrap(this).getAttribute(name);
            unsafeUnwrap(this).removeAttribute(name);
            enqueAttributeChange(this, name, oldValue);
            invalidateRendererBasedOnAttribute(this, name);
          },
          get classList() {
            var list = classListTable.get(this);
            if (!list) {
              list = unsafeUnwrap(this).classList;
              if (!list)
                return;
              list.ownerElement_ = this;
              classListTable.set(this, list);
            }
            return list;
          },
          get className() {
            return unsafeUnwrap(this).className;
          },
          set className(v) {
            this.setAttribute("class", v);
          },
          get id() {
            return unsafeUnwrap(this).id;
          },
          set id(v) {
            this.setAttribute("id", v);
          }
        });
        matchesNames.forEach(function(name) {
          if (name !== "matches") {
            Element.prototype[name] = function(selector) {
              return this.matches(selector);
            };
          }
        });
        if (OriginalElement.prototype.webkitCreateShadowRoot) {
          Element.prototype.webkitCreateShadowRoot = Element.prototype.createShadowRoot;
        }
        mixin(Element.prototype, ChildNodeInterface);
        mixin(Element.prototype, GetElementsByInterface);
        mixin(Element.prototype, ParentNodeInterface);
        mixin(Element.prototype, SelectorsInterface);
        mixin(Element.prototype, MatchesInterface);
        registerWrapper(OriginalElement, Element, document.createElementNS(null, "x"));
        scope.invalidateRendererBasedOnAttribute = invalidateRendererBasedOnAttribute;
        scope.matchesNames = matchesNames;
        scope.originalMatches = originalMatches;
        scope.wrappers.Element = Element;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var Element = scope.wrappers.Element;
        var defineGetter = scope.defineGetter;
        var enqueueMutation = scope.enqueueMutation;
        var mixin = scope.mixin;
        var nodesWereAdded = scope.nodesWereAdded;
        var nodesWereRemoved = scope.nodesWereRemoved;
        var registerWrapper = scope.registerWrapper;
        var snapshotNodeList = scope.snapshotNodeList;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var unwrap = scope.unwrap;
        var wrap = scope.wrap;
        var wrappers = scope.wrappers;
        var escapeAttrRegExp = /[&\u00A0"]/g;
        var escapeDataRegExp = /[&\u00A0<>]/g;
        function escapeReplace(c) {
          switch (c) {
            case "&":
              return "&amp;";
            case "<":
              return "&lt;";
            case ">":
              return "&gt;";
            case '"':
              return "&quot;";
            case " ":
              return "&nbsp;";
          }
        }
        function escapeAttr(s) {
          return s.replace(escapeAttrRegExp, escapeReplace);
        }
        function escapeData(s) {
          return s.replace(escapeDataRegExp, escapeReplace);
        }
        function makeSet(arr) {
          var set = {};
          for (var i = 0; i < arr.length; i++) {
            set[arr[i]] = true;
          }
          return set;
        }
        var voidElements = makeSet(["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
        var plaintextParents = makeSet(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
        var XHTML_NS = "http://www.w3.org/1999/xhtml";
        function needsSelfClosingSlash(node) {
          if (node.namespaceURI !== XHTML_NS)
            return true;
          var doctype = node.ownerDocument.doctype;
          return doctype && doctype.publicId && doctype.systemId;
        }
        function getOuterHTML(node, parentNode) {
          switch (node.nodeType) {
            case Node.ELEMENT_NODE:
              var tagName = node.tagName.toLowerCase();
              var s = "<" + tagName;
              var attrs = node.attributes;
              for (var i = 0,
                  attr; attr = attrs[i]; i++) {
                s += " " + attr.name + '="' + escapeAttr(attr.value) + '"';
              }
              if (voidElements[tagName]) {
                if (needsSelfClosingSlash(node))
                  s += "/";
                return s + ">";
              }
              return s + ">" + getInnerHTML(node) + "</" + tagName + ">";
            case Node.TEXT_NODE:
              var data = node.data;
              if (parentNode && plaintextParents[parentNode.localName])
                return data;
              return escapeData(data);
            case Node.COMMENT_NODE:
              return "<!--" + node.data + "-->";
            default:
              console.error(node);
              throw new Error("not implemented");
          }
        }
        function getInnerHTML(node) {
          if (node instanceof wrappers.HTMLTemplateElement)
            node = node.content;
          var s = "";
          for (var child = node.firstChild; child; child = child.nextSibling) {
            s += getOuterHTML(child, node);
          }
          return s;
        }
        function setInnerHTML(node, value, opt_tagName) {
          var tagName = opt_tagName || "div";
          node.textContent = "";
          var tempElement = unwrap(node.ownerDocument.createElement(tagName));
          tempElement.innerHTML = value;
          var firstChild;
          while (firstChild = tempElement.firstChild) {
            node.appendChild(wrap(firstChild));
          }
        }
        var oldIe = /MSIE/.test(navigator.userAgent);
        var OriginalHTMLElement = window.HTMLElement;
        var OriginalHTMLTemplateElement = window.HTMLTemplateElement;
        function HTMLElement(node) {
          Element.call(this, node);
        }
        HTMLElement.prototype = Object.create(Element.prototype);
        mixin(HTMLElement.prototype, {
          get innerHTML() {
            return getInnerHTML(this);
          },
          set innerHTML(value) {
            if (oldIe && plaintextParents[this.localName]) {
              this.textContent = value;
              return;
            }
            var removedNodes = snapshotNodeList(this.childNodes);
            if (this.invalidateShadowRenderer()) {
              if (this instanceof wrappers.HTMLTemplateElement)
                setInnerHTML(this.content, value);
              else
                setInnerHTML(this, value, this.tagName);
            } else if (!OriginalHTMLTemplateElement && this instanceof wrappers.HTMLTemplateElement) {
              setInnerHTML(this.content, value);
            } else {
              unsafeUnwrap(this).innerHTML = value;
            }
            var addedNodes = snapshotNodeList(this.childNodes);
            enqueueMutation(this, "childList", {
              addedNodes: addedNodes,
              removedNodes: removedNodes
            });
            nodesWereRemoved(removedNodes);
            nodesWereAdded(addedNodes, this);
          },
          get outerHTML() {
            return getOuterHTML(this, this.parentNode);
          },
          set outerHTML(value) {
            var p = this.parentNode;
            if (p) {
              p.invalidateShadowRenderer();
              var df = frag(p, value);
              p.replaceChild(df, this);
            }
          },
          insertAdjacentHTML: function(position, text) {
            var contextElement,
                refNode;
            switch (String(position).toLowerCase()) {
              case "beforebegin":
                contextElement = this.parentNode;
                refNode = this;
                break;
              case "afterend":
                contextElement = this.parentNode;
                refNode = this.nextSibling;
                break;
              case "afterbegin":
                contextElement = this;
                refNode = this.firstChild;
                break;
              case "beforeend":
                contextElement = this;
                refNode = null;
                break;
              default:
                return;
            }
            var df = frag(contextElement, text);
            contextElement.insertBefore(df, refNode);
          },
          get hidden() {
            return this.hasAttribute("hidden");
          },
          set hidden(v) {
            if (v) {
              this.setAttribute("hidden", "");
            } else {
              this.removeAttribute("hidden");
            }
          }
        });
        function frag(contextElement, html) {
          var p = unwrap(contextElement.cloneNode(false));
          p.innerHTML = html;
          var df = unwrap(document.createDocumentFragment());
          var c;
          while (c = p.firstChild) {
            df.appendChild(c);
          }
          return wrap(df);
        }
        function getter(name) {
          return function() {
            scope.renderAllPending();
            return unsafeUnwrap(this)[name];
          };
        }
        function getterRequiresRendering(name) {
          defineGetter(HTMLElement, name, getter(name));
        }
        ["clientHeight", "clientLeft", "clientTop", "clientWidth", "offsetHeight", "offsetLeft", "offsetTop", "offsetWidth", "scrollHeight", "scrollWidth"].forEach(getterRequiresRendering);
        function getterAndSetterRequiresRendering(name) {
          Object.defineProperty(HTMLElement.prototype, name, {
            get: getter(name),
            set: function(v) {
              scope.renderAllPending();
              unsafeUnwrap(this)[name] = v;
            },
            configurable: true,
            enumerable: true
          });
        }
        ["scrollLeft", "scrollTop"].forEach(getterAndSetterRequiresRendering);
        function methodRequiresRendering(name) {
          Object.defineProperty(HTMLElement.prototype, name, {
            value: function() {
              scope.renderAllPending();
              return unsafeUnwrap(this)[name].apply(unsafeUnwrap(this), arguments);
            },
            configurable: true,
            enumerable: true
          });
        }
        ["getBoundingClientRect", "getClientRects", "scrollIntoView"].forEach(methodRequiresRendering);
        registerWrapper(OriginalHTMLElement, HTMLElement, document.createElement("b"));
        scope.wrappers.HTMLElement = HTMLElement;
        scope.getInnerHTML = getInnerHTML;
        scope.setInnerHTML = setInnerHTML;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLElement = scope.wrappers.HTMLElement;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var wrap = scope.wrap;
        var OriginalHTMLCanvasElement = window.HTMLCanvasElement;
        function HTMLCanvasElement(node) {
          HTMLElement.call(this, node);
        }
        HTMLCanvasElement.prototype = Object.create(HTMLElement.prototype);
        mixin(HTMLCanvasElement.prototype, {getContext: function() {
            var context = unsafeUnwrap(this).getContext.apply(unsafeUnwrap(this), arguments);
            return context && wrap(context);
          }});
        registerWrapper(OriginalHTMLCanvasElement, HTMLCanvasElement, document.createElement("canvas"));
        scope.wrappers.HTMLCanvasElement = HTMLCanvasElement;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLElement = scope.wrappers.HTMLElement;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var OriginalHTMLContentElement = window.HTMLContentElement;
        function HTMLContentElement(node) {
          HTMLElement.call(this, node);
        }
        HTMLContentElement.prototype = Object.create(HTMLElement.prototype);
        mixin(HTMLContentElement.prototype, {
          constructor: HTMLContentElement,
          get select() {
            return this.getAttribute("select");
          },
          set select(value) {
            this.setAttribute("select", value);
          },
          setAttribute: function(n, v) {
            HTMLElement.prototype.setAttribute.call(this, n, v);
            if (String(n).toLowerCase() === "select")
              this.invalidateShadowRenderer(true);
          }
        });
        if (OriginalHTMLContentElement)
          registerWrapper(OriginalHTMLContentElement, HTMLContentElement);
        scope.wrappers.HTMLContentElement = HTMLContentElement;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLElement = scope.wrappers.HTMLElement;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var wrapHTMLCollection = scope.wrapHTMLCollection;
        var unwrap = scope.unwrap;
        var OriginalHTMLFormElement = window.HTMLFormElement;
        function HTMLFormElement(node) {
          HTMLElement.call(this, node);
        }
        HTMLFormElement.prototype = Object.create(HTMLElement.prototype);
        mixin(HTMLFormElement.prototype, {get elements() {
            return wrapHTMLCollection(unwrap(this).elements);
          }});
        registerWrapper(OriginalHTMLFormElement, HTMLFormElement, document.createElement("form"));
        scope.wrappers.HTMLFormElement = HTMLFormElement;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLElement = scope.wrappers.HTMLElement;
        var registerWrapper = scope.registerWrapper;
        var unwrap = scope.unwrap;
        var rewrap = scope.rewrap;
        var OriginalHTMLImageElement = window.HTMLImageElement;
        function HTMLImageElement(node) {
          HTMLElement.call(this, node);
        }
        HTMLImageElement.prototype = Object.create(HTMLElement.prototype);
        registerWrapper(OriginalHTMLImageElement, HTMLImageElement, document.createElement("img"));
        function Image(width, height) {
          if (!(this instanceof Image)) {
            throw new TypeError("DOM object constructor cannot be called as a function.");
          }
          var node = unwrap(document.createElement("img"));
          HTMLElement.call(this, node);
          rewrap(node, this);
          if (width !== undefined)
            node.width = width;
          if (height !== undefined)
            node.height = height;
        }
        Image.prototype = HTMLImageElement.prototype;
        scope.wrappers.HTMLImageElement = HTMLImageElement;
        scope.wrappers.Image = Image;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLElement = scope.wrappers.HTMLElement;
        var mixin = scope.mixin;
        var NodeList = scope.wrappers.NodeList;
        var registerWrapper = scope.registerWrapper;
        var OriginalHTMLShadowElement = window.HTMLShadowElement;
        function HTMLShadowElement(node) {
          HTMLElement.call(this, node);
        }
        HTMLShadowElement.prototype = Object.create(HTMLElement.prototype);
        HTMLShadowElement.prototype.constructor = HTMLShadowElement;
        if (OriginalHTMLShadowElement)
          registerWrapper(OriginalHTMLShadowElement, HTMLShadowElement);
        scope.wrappers.HTMLShadowElement = HTMLShadowElement;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLElement = scope.wrappers.HTMLElement;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var unwrap = scope.unwrap;
        var wrap = scope.wrap;
        var contentTable = new WeakMap();
        var templateContentsOwnerTable = new WeakMap();
        function getTemplateContentsOwner(doc) {
          if (!doc.defaultView)
            return doc;
          var d = templateContentsOwnerTable.get(doc);
          if (!d) {
            d = doc.implementation.createHTMLDocument("");
            while (d.lastChild) {
              d.removeChild(d.lastChild);
            }
            templateContentsOwnerTable.set(doc, d);
          }
          return d;
        }
        function extractContent(templateElement) {
          var doc = getTemplateContentsOwner(templateElement.ownerDocument);
          var df = unwrap(doc.createDocumentFragment());
          var child;
          while (child = templateElement.firstChild) {
            df.appendChild(child);
          }
          return df;
        }
        var OriginalHTMLTemplateElement = window.HTMLTemplateElement;
        function HTMLTemplateElement(node) {
          HTMLElement.call(this, node);
          if (!OriginalHTMLTemplateElement) {
            var content = extractContent(node);
            contentTable.set(this, wrap(content));
          }
        }
        HTMLTemplateElement.prototype = Object.create(HTMLElement.prototype);
        mixin(HTMLTemplateElement.prototype, {
          constructor: HTMLTemplateElement,
          get content() {
            if (OriginalHTMLTemplateElement)
              return wrap(unsafeUnwrap(this).content);
            return contentTable.get(this);
          }
        });
        if (OriginalHTMLTemplateElement)
          registerWrapper(OriginalHTMLTemplateElement, HTMLTemplateElement);
        scope.wrappers.HTMLTemplateElement = HTMLTemplateElement;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLElement = scope.wrappers.HTMLElement;
        var registerWrapper = scope.registerWrapper;
        var OriginalHTMLMediaElement = window.HTMLMediaElement;
        if (!OriginalHTMLMediaElement)
          return;
        function HTMLMediaElement(node) {
          HTMLElement.call(this, node);
        }
        HTMLMediaElement.prototype = Object.create(HTMLElement.prototype);
        registerWrapper(OriginalHTMLMediaElement, HTMLMediaElement, document.createElement("audio"));
        scope.wrappers.HTMLMediaElement = HTMLMediaElement;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLMediaElement = scope.wrappers.HTMLMediaElement;
        var registerWrapper = scope.registerWrapper;
        var unwrap = scope.unwrap;
        var rewrap = scope.rewrap;
        var OriginalHTMLAudioElement = window.HTMLAudioElement;
        if (!OriginalHTMLAudioElement)
          return;
        function HTMLAudioElement(node) {
          HTMLMediaElement.call(this, node);
        }
        HTMLAudioElement.prototype = Object.create(HTMLMediaElement.prototype);
        registerWrapper(OriginalHTMLAudioElement, HTMLAudioElement, document.createElement("audio"));
        function Audio(src) {
          if (!(this instanceof Audio)) {
            throw new TypeError("DOM object constructor cannot be called as a function.");
          }
          var node = unwrap(document.createElement("audio"));
          HTMLMediaElement.call(this, node);
          rewrap(node, this);
          node.setAttribute("preload", "auto");
          if (src !== undefined)
            node.setAttribute("src", src);
        }
        Audio.prototype = HTMLAudioElement.prototype;
        scope.wrappers.HTMLAudioElement = HTMLAudioElement;
        scope.wrappers.Audio = Audio;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLElement = scope.wrappers.HTMLElement;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var rewrap = scope.rewrap;
        var unwrap = scope.unwrap;
        var wrap = scope.wrap;
        var OriginalHTMLOptionElement = window.HTMLOptionElement;
        function trimText(s) {
          return s.replace(/\s+/g, " ").trim();
        }
        function HTMLOptionElement(node) {
          HTMLElement.call(this, node);
        }
        HTMLOptionElement.prototype = Object.create(HTMLElement.prototype);
        mixin(HTMLOptionElement.prototype, {
          get text() {
            return trimText(this.textContent);
          },
          set text(value) {
            this.textContent = trimText(String(value));
          },
          get form() {
            return wrap(unwrap(this).form);
          }
        });
        registerWrapper(OriginalHTMLOptionElement, HTMLOptionElement, document.createElement("option"));
        function Option(text, value, defaultSelected, selected) {
          if (!(this instanceof Option)) {
            throw new TypeError("DOM object constructor cannot be called as a function.");
          }
          var node = unwrap(document.createElement("option"));
          HTMLElement.call(this, node);
          rewrap(node, this);
          if (text !== undefined)
            node.text = text;
          if (value !== undefined)
            node.setAttribute("value", value);
          if (defaultSelected === true)
            node.setAttribute("selected", "");
          node.selected = selected === true;
        }
        Option.prototype = HTMLOptionElement.prototype;
        scope.wrappers.HTMLOptionElement = HTMLOptionElement;
        scope.wrappers.Option = Option;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLElement = scope.wrappers.HTMLElement;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var unwrap = scope.unwrap;
        var wrap = scope.wrap;
        var OriginalHTMLSelectElement = window.HTMLSelectElement;
        function HTMLSelectElement(node) {
          HTMLElement.call(this, node);
        }
        HTMLSelectElement.prototype = Object.create(HTMLElement.prototype);
        mixin(HTMLSelectElement.prototype, {
          add: function(element, before) {
            if (typeof before === "object")
              before = unwrap(before);
            unwrap(this).add(unwrap(element), before);
          },
          remove: function(indexOrNode) {
            if (indexOrNode === undefined) {
              HTMLElement.prototype.remove.call(this);
              return;
            }
            if (typeof indexOrNode === "object")
              indexOrNode = unwrap(indexOrNode);
            unwrap(this).remove(indexOrNode);
          },
          get form() {
            return wrap(unwrap(this).form);
          }
        });
        registerWrapper(OriginalHTMLSelectElement, HTMLSelectElement, document.createElement("select"));
        scope.wrappers.HTMLSelectElement = HTMLSelectElement;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLElement = scope.wrappers.HTMLElement;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var unwrap = scope.unwrap;
        var wrap = scope.wrap;
        var wrapHTMLCollection = scope.wrapHTMLCollection;
        var OriginalHTMLTableElement = window.HTMLTableElement;
        function HTMLTableElement(node) {
          HTMLElement.call(this, node);
        }
        HTMLTableElement.prototype = Object.create(HTMLElement.prototype);
        mixin(HTMLTableElement.prototype, {
          get caption() {
            return wrap(unwrap(this).caption);
          },
          createCaption: function() {
            return wrap(unwrap(this).createCaption());
          },
          get tHead() {
            return wrap(unwrap(this).tHead);
          },
          createTHead: function() {
            return wrap(unwrap(this).createTHead());
          },
          createTFoot: function() {
            return wrap(unwrap(this).createTFoot());
          },
          get tFoot() {
            return wrap(unwrap(this).tFoot);
          },
          get tBodies() {
            return wrapHTMLCollection(unwrap(this).tBodies);
          },
          createTBody: function() {
            return wrap(unwrap(this).createTBody());
          },
          get rows() {
            return wrapHTMLCollection(unwrap(this).rows);
          },
          insertRow: function(index) {
            return wrap(unwrap(this).insertRow(index));
          }
        });
        registerWrapper(OriginalHTMLTableElement, HTMLTableElement, document.createElement("table"));
        scope.wrappers.HTMLTableElement = HTMLTableElement;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLElement = scope.wrappers.HTMLElement;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var wrapHTMLCollection = scope.wrapHTMLCollection;
        var unwrap = scope.unwrap;
        var wrap = scope.wrap;
        var OriginalHTMLTableSectionElement = window.HTMLTableSectionElement;
        function HTMLTableSectionElement(node) {
          HTMLElement.call(this, node);
        }
        HTMLTableSectionElement.prototype = Object.create(HTMLElement.prototype);
        mixin(HTMLTableSectionElement.prototype, {
          constructor: HTMLTableSectionElement,
          get rows() {
            return wrapHTMLCollection(unwrap(this).rows);
          },
          insertRow: function(index) {
            return wrap(unwrap(this).insertRow(index));
          }
        });
        registerWrapper(OriginalHTMLTableSectionElement, HTMLTableSectionElement, document.createElement("thead"));
        scope.wrappers.HTMLTableSectionElement = HTMLTableSectionElement;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLElement = scope.wrappers.HTMLElement;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var wrapHTMLCollection = scope.wrapHTMLCollection;
        var unwrap = scope.unwrap;
        var wrap = scope.wrap;
        var OriginalHTMLTableRowElement = window.HTMLTableRowElement;
        function HTMLTableRowElement(node) {
          HTMLElement.call(this, node);
        }
        HTMLTableRowElement.prototype = Object.create(HTMLElement.prototype);
        mixin(HTMLTableRowElement.prototype, {
          get cells() {
            return wrapHTMLCollection(unwrap(this).cells);
          },
          insertCell: function(index) {
            return wrap(unwrap(this).insertCell(index));
          }
        });
        registerWrapper(OriginalHTMLTableRowElement, HTMLTableRowElement, document.createElement("tr"));
        scope.wrappers.HTMLTableRowElement = HTMLTableRowElement;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLContentElement = scope.wrappers.HTMLContentElement;
        var HTMLElement = scope.wrappers.HTMLElement;
        var HTMLShadowElement = scope.wrappers.HTMLShadowElement;
        var HTMLTemplateElement = scope.wrappers.HTMLTemplateElement;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var OriginalHTMLUnknownElement = window.HTMLUnknownElement;
        function HTMLUnknownElement(node) {
          switch (node.localName) {
            case "content":
              return new HTMLContentElement(node);
            case "shadow":
              return new HTMLShadowElement(node);
            case "template":
              return new HTMLTemplateElement(node);
          }
          HTMLElement.call(this, node);
        }
        HTMLUnknownElement.prototype = Object.create(HTMLElement.prototype);
        registerWrapper(OriginalHTMLUnknownElement, HTMLUnknownElement);
        scope.wrappers.HTMLUnknownElement = HTMLUnknownElement;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var Element = scope.wrappers.Element;
        var HTMLElement = scope.wrappers.HTMLElement;
        var registerObject = scope.registerObject;
        var defineWrapGetter = scope.defineWrapGetter;
        var SVG_NS = "http://www.w3.org/2000/svg";
        var svgTitleElement = document.createElementNS(SVG_NS, "title");
        var SVGTitleElement = registerObject(svgTitleElement);
        var SVGElement = Object.getPrototypeOf(SVGTitleElement.prototype).constructor;
        if (!("classList" in svgTitleElement)) {
          var descr = Object.getOwnPropertyDescriptor(Element.prototype, "classList");
          Object.defineProperty(HTMLElement.prototype, "classList", descr);
          delete Element.prototype.classList;
        }
        defineWrapGetter(SVGElement, "ownerSVGElement");
        scope.wrappers.SVGElement = SVGElement;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var unwrap = scope.unwrap;
        var wrap = scope.wrap;
        var OriginalSVGUseElement = window.SVGUseElement;
        var SVG_NS = "http://www.w3.org/2000/svg";
        var gWrapper = wrap(document.createElementNS(SVG_NS, "g"));
        var useElement = document.createElementNS(SVG_NS, "use");
        var SVGGElement = gWrapper.constructor;
        var parentInterfacePrototype = Object.getPrototypeOf(SVGGElement.prototype);
        var parentInterface = parentInterfacePrototype.constructor;
        function SVGUseElement(impl) {
          parentInterface.call(this, impl);
        }
        SVGUseElement.prototype = Object.create(parentInterfacePrototype);
        if ("instanceRoot" in useElement) {
          mixin(SVGUseElement.prototype, {
            get instanceRoot() {
              return wrap(unwrap(this).instanceRoot);
            },
            get animatedInstanceRoot() {
              return wrap(unwrap(this).animatedInstanceRoot);
            }
          });
        }
        registerWrapper(OriginalSVGUseElement, SVGUseElement, useElement);
        scope.wrappers.SVGUseElement = SVGUseElement;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var EventTarget = scope.wrappers.EventTarget;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var wrap = scope.wrap;
        var OriginalSVGElementInstance = window.SVGElementInstance;
        if (!OriginalSVGElementInstance)
          return;
        function SVGElementInstance(impl) {
          EventTarget.call(this, impl);
        }
        SVGElementInstance.prototype = Object.create(EventTarget.prototype);
        mixin(SVGElementInstance.prototype, {
          get correspondingElement() {
            return wrap(unsafeUnwrap(this).correspondingElement);
          },
          get correspondingUseElement() {
            return wrap(unsafeUnwrap(this).correspondingUseElement);
          },
          get parentNode() {
            return wrap(unsafeUnwrap(this).parentNode);
          },
          get childNodes() {
            throw new Error("Not implemented");
          },
          get firstChild() {
            return wrap(unsafeUnwrap(this).firstChild);
          },
          get lastChild() {
            return wrap(unsafeUnwrap(this).lastChild);
          },
          get previousSibling() {
            return wrap(unsafeUnwrap(this).previousSibling);
          },
          get nextSibling() {
            return wrap(unsafeUnwrap(this).nextSibling);
          }
        });
        registerWrapper(OriginalSVGElementInstance, SVGElementInstance);
        scope.wrappers.SVGElementInstance = SVGElementInstance;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var setWrapper = scope.setWrapper;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var unwrap = scope.unwrap;
        var unwrapIfNeeded = scope.unwrapIfNeeded;
        var wrap = scope.wrap;
        var OriginalCanvasRenderingContext2D = window.CanvasRenderingContext2D;
        function CanvasRenderingContext2D(impl) {
          setWrapper(impl, this);
        }
        mixin(CanvasRenderingContext2D.prototype, {
          get canvas() {
            return wrap(unsafeUnwrap(this).canvas);
          },
          drawImage: function() {
            arguments[0] = unwrapIfNeeded(arguments[0]);
            unsafeUnwrap(this).drawImage.apply(unsafeUnwrap(this), arguments);
          },
          createPattern: function() {
            arguments[0] = unwrap(arguments[0]);
            return unsafeUnwrap(this).createPattern.apply(unsafeUnwrap(this), arguments);
          }
        });
        registerWrapper(OriginalCanvasRenderingContext2D, CanvasRenderingContext2D, document.createElement("canvas").getContext("2d"));
        scope.wrappers.CanvasRenderingContext2D = CanvasRenderingContext2D;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var setWrapper = scope.setWrapper;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var unwrapIfNeeded = scope.unwrapIfNeeded;
        var wrap = scope.wrap;
        var OriginalWebGLRenderingContext = window.WebGLRenderingContext;
        if (!OriginalWebGLRenderingContext)
          return;
        function WebGLRenderingContext(impl) {
          setWrapper(impl, this);
        }
        mixin(WebGLRenderingContext.prototype, {
          get canvas() {
            return wrap(unsafeUnwrap(this).canvas);
          },
          texImage2D: function() {
            arguments[5] = unwrapIfNeeded(arguments[5]);
            unsafeUnwrap(this).texImage2D.apply(unsafeUnwrap(this), arguments);
          },
          texSubImage2D: function() {
            arguments[6] = unwrapIfNeeded(arguments[6]);
            unsafeUnwrap(this).texSubImage2D.apply(unsafeUnwrap(this), arguments);
          }
        });
        var instanceProperties = /WebKit/.test(navigator.userAgent) ? {
          drawingBufferHeight: null,
          drawingBufferWidth: null
        } : {};
        registerWrapper(OriginalWebGLRenderingContext, WebGLRenderingContext, instanceProperties);
        scope.wrappers.WebGLRenderingContext = WebGLRenderingContext;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var GetElementsByInterface = scope.GetElementsByInterface;
        var NonElementParentNodeInterface = scope.NonElementParentNodeInterface;
        var ParentNodeInterface = scope.ParentNodeInterface;
        var SelectorsInterface = scope.SelectorsInterface;
        var mixin = scope.mixin;
        var registerObject = scope.registerObject;
        var DocumentFragment = registerObject(document.createDocumentFragment());
        mixin(DocumentFragment.prototype, ParentNodeInterface);
        mixin(DocumentFragment.prototype, SelectorsInterface);
        mixin(DocumentFragment.prototype, GetElementsByInterface);
        mixin(DocumentFragment.prototype, NonElementParentNodeInterface);
        var Comment = registerObject(document.createComment(""));
        scope.wrappers.Comment = Comment;
        scope.wrappers.DocumentFragment = DocumentFragment;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var DocumentFragment = scope.wrappers.DocumentFragment;
        var TreeScope = scope.TreeScope;
        var elementFromPoint = scope.elementFromPoint;
        var getInnerHTML = scope.getInnerHTML;
        var getTreeScope = scope.getTreeScope;
        var mixin = scope.mixin;
        var rewrap = scope.rewrap;
        var setInnerHTML = scope.setInnerHTML;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var unwrap = scope.unwrap;
        var shadowHostTable = new WeakMap();
        var nextOlderShadowTreeTable = new WeakMap();
        function ShadowRoot(hostWrapper) {
          var node = unwrap(unsafeUnwrap(hostWrapper).ownerDocument.createDocumentFragment());
          DocumentFragment.call(this, node);
          rewrap(node, this);
          var oldShadowRoot = hostWrapper.shadowRoot;
          nextOlderShadowTreeTable.set(this, oldShadowRoot);
          this.treeScope_ = new TreeScope(this, getTreeScope(oldShadowRoot || hostWrapper));
          shadowHostTable.set(this, hostWrapper);
        }
        ShadowRoot.prototype = Object.create(DocumentFragment.prototype);
        mixin(ShadowRoot.prototype, {
          constructor: ShadowRoot,
          get innerHTML() {
            return getInnerHTML(this);
          },
          set innerHTML(value) {
            setInnerHTML(this, value);
            this.invalidateShadowRenderer();
          },
          get olderShadowRoot() {
            return nextOlderShadowTreeTable.get(this) || null;
          },
          get host() {
            return shadowHostTable.get(this) || null;
          },
          invalidateShadowRenderer: function() {
            return shadowHostTable.get(this).invalidateShadowRenderer();
          },
          elementFromPoint: function(x, y) {
            return elementFromPoint(this, this.ownerDocument, x, y);
          }
        });
        scope.wrappers.ShadowRoot = ShadowRoot;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var registerWrapper = scope.registerWrapper;
        var setWrapper = scope.setWrapper;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var unwrap = scope.unwrap;
        var unwrapIfNeeded = scope.unwrapIfNeeded;
        var wrap = scope.wrap;
        var getTreeScope = scope.getTreeScope;
        var OriginalRange = window.Range;
        var ShadowRoot = scope.wrappers.ShadowRoot;
        function getHost(node) {
          var root = getTreeScope(node).root;
          if (root instanceof ShadowRoot) {
            return root.host;
          }
          return null;
        }
        function hostNodeToShadowNode(refNode, offset) {
          if (refNode.shadowRoot) {
            offset = Math.min(refNode.childNodes.length - 1, offset);
            var child = refNode.childNodes[offset];
            if (child) {
              var insertionPoint = scope.getDestinationInsertionPoints(child);
              if (insertionPoint.length > 0) {
                var parentNode = insertionPoint[0].parentNode;
                if (parentNode.nodeType == Node.ELEMENT_NODE) {
                  refNode = parentNode;
                }
              }
            }
          }
          return refNode;
        }
        function shadowNodeToHostNode(node) {
          node = wrap(node);
          return getHost(node) || node;
        }
        function Range(impl) {
          setWrapper(impl, this);
        }
        Range.prototype = {
          get startContainer() {
            return shadowNodeToHostNode(unsafeUnwrap(this).startContainer);
          },
          get endContainer() {
            return shadowNodeToHostNode(unsafeUnwrap(this).endContainer);
          },
          get commonAncestorContainer() {
            return shadowNodeToHostNode(unsafeUnwrap(this).commonAncestorContainer);
          },
          setStart: function(refNode, offset) {
            refNode = hostNodeToShadowNode(refNode, offset);
            unsafeUnwrap(this).setStart(unwrapIfNeeded(refNode), offset);
          },
          setEnd: function(refNode, offset) {
            refNode = hostNodeToShadowNode(refNode, offset);
            unsafeUnwrap(this).setEnd(unwrapIfNeeded(refNode), offset);
          },
          setStartBefore: function(refNode) {
            unsafeUnwrap(this).setStartBefore(unwrapIfNeeded(refNode));
          },
          setStartAfter: function(refNode) {
            unsafeUnwrap(this).setStartAfter(unwrapIfNeeded(refNode));
          },
          setEndBefore: function(refNode) {
            unsafeUnwrap(this).setEndBefore(unwrapIfNeeded(refNode));
          },
          setEndAfter: function(refNode) {
            unsafeUnwrap(this).setEndAfter(unwrapIfNeeded(refNode));
          },
          selectNode: function(refNode) {
            unsafeUnwrap(this).selectNode(unwrapIfNeeded(refNode));
          },
          selectNodeContents: function(refNode) {
            unsafeUnwrap(this).selectNodeContents(unwrapIfNeeded(refNode));
          },
          compareBoundaryPoints: function(how, sourceRange) {
            return unsafeUnwrap(this).compareBoundaryPoints(how, unwrap(sourceRange));
          },
          extractContents: function() {
            return wrap(unsafeUnwrap(this).extractContents());
          },
          cloneContents: function() {
            return wrap(unsafeUnwrap(this).cloneContents());
          },
          insertNode: function(node) {
            unsafeUnwrap(this).insertNode(unwrapIfNeeded(node));
          },
          surroundContents: function(newParent) {
            unsafeUnwrap(this).surroundContents(unwrapIfNeeded(newParent));
          },
          cloneRange: function() {
            return wrap(unsafeUnwrap(this).cloneRange());
          },
          isPointInRange: function(node, offset) {
            return unsafeUnwrap(this).isPointInRange(unwrapIfNeeded(node), offset);
          },
          comparePoint: function(node, offset) {
            return unsafeUnwrap(this).comparePoint(unwrapIfNeeded(node), offset);
          },
          intersectsNode: function(node) {
            return unsafeUnwrap(this).intersectsNode(unwrapIfNeeded(node));
          },
          toString: function() {
            return unsafeUnwrap(this).toString();
          }
        };
        if (OriginalRange.prototype.createContextualFragment) {
          Range.prototype.createContextualFragment = function(html) {
            return wrap(unsafeUnwrap(this).createContextualFragment(html));
          };
        }
        registerWrapper(window.Range, Range, document.createRange());
        scope.wrappers.Range = Range;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var Element = scope.wrappers.Element;
        var HTMLContentElement = scope.wrappers.HTMLContentElement;
        var HTMLShadowElement = scope.wrappers.HTMLShadowElement;
        var Node = scope.wrappers.Node;
        var ShadowRoot = scope.wrappers.ShadowRoot;
        var assert = scope.assert;
        var getTreeScope = scope.getTreeScope;
        var mixin = scope.mixin;
        var oneOf = scope.oneOf;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var unwrap = scope.unwrap;
        var wrap = scope.wrap;
        var ArraySplice = scope.ArraySplice;
        function updateWrapperUpAndSideways(wrapper) {
          wrapper.previousSibling_ = wrapper.previousSibling;
          wrapper.nextSibling_ = wrapper.nextSibling;
          wrapper.parentNode_ = wrapper.parentNode;
        }
        function updateWrapperDown(wrapper) {
          wrapper.firstChild_ = wrapper.firstChild;
          wrapper.lastChild_ = wrapper.lastChild;
        }
        function updateAllChildNodes(parentNodeWrapper) {
          assert(parentNodeWrapper instanceof Node);
          for (var childWrapper = parentNodeWrapper.firstChild; childWrapper; childWrapper = childWrapper.nextSibling) {
            updateWrapperUpAndSideways(childWrapper);
          }
          updateWrapperDown(parentNodeWrapper);
        }
        function insertBefore(parentNodeWrapper, newChildWrapper, refChildWrapper) {
          var parentNode = unwrap(parentNodeWrapper);
          var newChild = unwrap(newChildWrapper);
          var refChild = refChildWrapper ? unwrap(refChildWrapper) : null;
          remove(newChildWrapper);
          updateWrapperUpAndSideways(newChildWrapper);
          if (!refChildWrapper) {
            parentNodeWrapper.lastChild_ = parentNodeWrapper.lastChild;
            if (parentNodeWrapper.lastChild === parentNodeWrapper.firstChild)
              parentNodeWrapper.firstChild_ = parentNodeWrapper.firstChild;
            var lastChildWrapper = wrap(parentNode.lastChild);
            if (lastChildWrapper)
              lastChildWrapper.nextSibling_ = lastChildWrapper.nextSibling;
          } else {
            if (parentNodeWrapper.firstChild === refChildWrapper)
              parentNodeWrapper.firstChild_ = refChildWrapper;
            refChildWrapper.previousSibling_ = refChildWrapper.previousSibling;
          }
          scope.originalInsertBefore.call(parentNode, newChild, refChild);
        }
        function remove(nodeWrapper) {
          var node = unwrap(nodeWrapper);
          var parentNode = node.parentNode;
          if (!parentNode)
            return;
          var parentNodeWrapper = wrap(parentNode);
          updateWrapperUpAndSideways(nodeWrapper);
          if (nodeWrapper.previousSibling)
            nodeWrapper.previousSibling.nextSibling_ = nodeWrapper;
          if (nodeWrapper.nextSibling)
            nodeWrapper.nextSibling.previousSibling_ = nodeWrapper;
          if (parentNodeWrapper.lastChild === nodeWrapper)
            parentNodeWrapper.lastChild_ = nodeWrapper;
          if (parentNodeWrapper.firstChild === nodeWrapper)
            parentNodeWrapper.firstChild_ = nodeWrapper;
          scope.originalRemoveChild.call(parentNode, node);
        }
        var distributedNodesTable = new WeakMap();
        var destinationInsertionPointsTable = new WeakMap();
        var rendererForHostTable = new WeakMap();
        function resetDistributedNodes(insertionPoint) {
          distributedNodesTable.set(insertionPoint, []);
        }
        function getDistributedNodes(insertionPoint) {
          var rv = distributedNodesTable.get(insertionPoint);
          if (!rv)
            distributedNodesTable.set(insertionPoint, rv = []);
          return rv;
        }
        function getChildNodesSnapshot(node) {
          var result = [],
              i = 0;
          for (var child = node.firstChild; child; child = child.nextSibling) {
            result[i++] = child;
          }
          return result;
        }
        var request = oneOf(window, ["requestAnimationFrame", "mozRequestAnimationFrame", "webkitRequestAnimationFrame", "setTimeout"]);
        var pendingDirtyRenderers = [];
        var renderTimer;
        function renderAllPending() {
          for (var i = 0; i < pendingDirtyRenderers.length; i++) {
            var renderer = pendingDirtyRenderers[i];
            var parentRenderer = renderer.parentRenderer;
            if (parentRenderer && parentRenderer.dirty)
              continue;
            renderer.render();
          }
          pendingDirtyRenderers = [];
        }
        function handleRequestAnimationFrame() {
          renderTimer = null;
          renderAllPending();
        }
        function getRendererForHost(host) {
          var renderer = rendererForHostTable.get(host);
          if (!renderer) {
            renderer = new ShadowRenderer(host);
            rendererForHostTable.set(host, renderer);
          }
          return renderer;
        }
        function getShadowRootAncestor(node) {
          var root = getTreeScope(node).root;
          if (root instanceof ShadowRoot)
            return root;
          return null;
        }
        function getRendererForShadowRoot(shadowRoot) {
          return getRendererForHost(shadowRoot.host);
        }
        var spliceDiff = new ArraySplice();
        spliceDiff.equals = function(renderNode, rawNode) {
          return unwrap(renderNode.node) === rawNode;
        };
        function RenderNode(node) {
          this.skip = false;
          this.node = node;
          this.childNodes = [];
        }
        RenderNode.prototype = {
          append: function(node) {
            var rv = new RenderNode(node);
            this.childNodes.push(rv);
            return rv;
          },
          sync: function(opt_added) {
            if (this.skip)
              return;
            var nodeWrapper = this.node;
            var newChildren = this.childNodes;
            var oldChildren = getChildNodesSnapshot(unwrap(nodeWrapper));
            var added = opt_added || new WeakMap();
            var splices = spliceDiff.calculateSplices(newChildren, oldChildren);
            var newIndex = 0,
                oldIndex = 0;
            var lastIndex = 0;
            for (var i = 0; i < splices.length; i++) {
              var splice = splices[i];
              for (; lastIndex < splice.index; lastIndex++) {
                oldIndex++;
                newChildren[newIndex++].sync(added);
              }
              var removedCount = splice.removed.length;
              for (var j = 0; j < removedCount; j++) {
                var wrapper = wrap(oldChildren[oldIndex++]);
                if (!added.get(wrapper))
                  remove(wrapper);
              }
              var addedCount = splice.addedCount;
              var refNode = oldChildren[oldIndex] && wrap(oldChildren[oldIndex]);
              for (var j = 0; j < addedCount; j++) {
                var newChildRenderNode = newChildren[newIndex++];
                var newChildWrapper = newChildRenderNode.node;
                insertBefore(nodeWrapper, newChildWrapper, refNode);
                added.set(newChildWrapper, true);
                newChildRenderNode.sync(added);
              }
              lastIndex += addedCount;
            }
            for (var i = lastIndex; i < newChildren.length; i++) {
              newChildren[i].sync(added);
            }
          }
        };
        function ShadowRenderer(host) {
          this.host = host;
          this.dirty = false;
          this.invalidateAttributes();
          this.associateNode(host);
        }
        ShadowRenderer.prototype = {
          render: function(opt_renderNode) {
            if (!this.dirty)
              return;
            this.invalidateAttributes();
            var host = this.host;
            this.distribution(host);
            var renderNode = opt_renderNode || new RenderNode(host);
            this.buildRenderTree(renderNode, host);
            var topMostRenderer = !opt_renderNode;
            if (topMostRenderer)
              renderNode.sync();
            this.dirty = false;
          },
          get parentRenderer() {
            return getTreeScope(this.host).renderer;
          },
          invalidate: function() {
            if (!this.dirty) {
              this.dirty = true;
              var parentRenderer = this.parentRenderer;
              if (parentRenderer)
                parentRenderer.invalidate();
              pendingDirtyRenderers.push(this);
              if (renderTimer)
                return;
              renderTimer = window[request](handleRequestAnimationFrame, 0);
            }
          },
          distribution: function(root) {
            this.resetAllSubtrees(root);
            this.distributionResolution(root);
          },
          resetAll: function(node) {
            if (isInsertionPoint(node))
              resetDistributedNodes(node);
            else
              resetDestinationInsertionPoints(node);
            this.resetAllSubtrees(node);
          },
          resetAllSubtrees: function(node) {
            for (var child = node.firstChild; child; child = child.nextSibling) {
              this.resetAll(child);
            }
            if (node.shadowRoot)
              this.resetAll(node.shadowRoot);
            if (node.olderShadowRoot)
              this.resetAll(node.olderShadowRoot);
          },
          distributionResolution: function(node) {
            if (isShadowHost(node)) {
              var shadowHost = node;
              var pool = poolPopulation(shadowHost);
              var shadowTrees = getShadowTrees(shadowHost);
              for (var i = 0; i < shadowTrees.length; i++) {
                this.poolDistribution(shadowTrees[i], pool);
              }
              for (var i = shadowTrees.length - 1; i >= 0; i--) {
                var shadowTree = shadowTrees[i];
                var shadow = getShadowInsertionPoint(shadowTree);
                if (shadow) {
                  var olderShadowRoot = shadowTree.olderShadowRoot;
                  if (olderShadowRoot) {
                    pool = poolPopulation(olderShadowRoot);
                  }
                  for (var j = 0; j < pool.length; j++) {
                    destributeNodeInto(pool[j], shadow);
                  }
                }
                this.distributionResolution(shadowTree);
              }
            }
            for (var child = node.firstChild; child; child = child.nextSibling) {
              this.distributionResolution(child);
            }
          },
          poolDistribution: function(node, pool) {
            if (node instanceof HTMLShadowElement)
              return;
            if (node instanceof HTMLContentElement) {
              var content = node;
              this.updateDependentAttributes(content.getAttribute("select"));
              var anyDistributed = false;
              for (var i = 0; i < pool.length; i++) {
                var node = pool[i];
                if (!node)
                  continue;
                if (matches(node, content)) {
                  destributeNodeInto(node, content);
                  pool[i] = undefined;
                  anyDistributed = true;
                }
              }
              if (!anyDistributed) {
                for (var child = content.firstChild; child; child = child.nextSibling) {
                  destributeNodeInto(child, content);
                }
              }
              return;
            }
            for (var child = node.firstChild; child; child = child.nextSibling) {
              this.poolDistribution(child, pool);
            }
          },
          buildRenderTree: function(renderNode, node) {
            var children = this.compose(node);
            for (var i = 0; i < children.length; i++) {
              var child = children[i];
              var childRenderNode = renderNode.append(child);
              this.buildRenderTree(childRenderNode, child);
            }
            if (isShadowHost(node)) {
              var renderer = getRendererForHost(node);
              renderer.dirty = false;
            }
          },
          compose: function(node) {
            var children = [];
            var p = node.shadowRoot || node;
            for (var child = p.firstChild; child; child = child.nextSibling) {
              if (isInsertionPoint(child)) {
                this.associateNode(p);
                var distributedNodes = getDistributedNodes(child);
                for (var j = 0; j < distributedNodes.length; j++) {
                  var distributedNode = distributedNodes[j];
                  if (isFinalDestination(child, distributedNode))
                    children.push(distributedNode);
                }
              } else {
                children.push(child);
              }
            }
            return children;
          },
          invalidateAttributes: function() {
            this.attributes = Object.create(null);
          },
          updateDependentAttributes: function(selector) {
            if (!selector)
              return;
            var attributes = this.attributes;
            if (/\.\w+/.test(selector))
              attributes["class"] = true;
            if (/#\w+/.test(selector))
              attributes["id"] = true;
            selector.replace(/\[\s*([^\s=\|~\]]+)/g, function(_, name) {
              attributes[name] = true;
            });
          },
          dependsOnAttribute: function(name) {
            return this.attributes[name];
          },
          associateNode: function(node) {
            unsafeUnwrap(node).polymerShadowRenderer_ = this;
          }
        };
        function poolPopulation(node) {
          var pool = [];
          for (var child = node.firstChild; child; child = child.nextSibling) {
            if (isInsertionPoint(child)) {
              pool.push.apply(pool, getDistributedNodes(child));
            } else {
              pool.push(child);
            }
          }
          return pool;
        }
        function getShadowInsertionPoint(node) {
          if (node instanceof HTMLShadowElement)
            return node;
          if (node instanceof HTMLContentElement)
            return null;
          for (var child = node.firstChild; child; child = child.nextSibling) {
            var res = getShadowInsertionPoint(child);
            if (res)
              return res;
          }
          return null;
        }
        function destributeNodeInto(child, insertionPoint) {
          getDistributedNodes(insertionPoint).push(child);
          var points = destinationInsertionPointsTable.get(child);
          if (!points)
            destinationInsertionPointsTable.set(child, [insertionPoint]);
          else
            points.push(insertionPoint);
        }
        function getDestinationInsertionPoints(node) {
          return destinationInsertionPointsTable.get(node);
        }
        function resetDestinationInsertionPoints(node) {
          destinationInsertionPointsTable.set(node, undefined);
        }
        var selectorStartCharRe = /^(:not\()?[*.#[a-zA-Z_|]/;
        function matches(node, contentElement) {
          var select = contentElement.getAttribute("select");
          if (!select)
            return true;
          select = select.trim();
          if (!select)
            return true;
          if (!(node instanceof Element))
            return false;
          if (!selectorStartCharRe.test(select))
            return false;
          try {
            return node.matches(select);
          } catch (ex) {
            return false;
          }
        }
        function isFinalDestination(insertionPoint, node) {
          var points = getDestinationInsertionPoints(node);
          return points && points[points.length - 1] === insertionPoint;
        }
        function isInsertionPoint(node) {
          return node instanceof HTMLContentElement || node instanceof HTMLShadowElement;
        }
        function isShadowHost(shadowHost) {
          return shadowHost.shadowRoot;
        }
        function getShadowTrees(host) {
          var trees = [];
          for (var tree = host.shadowRoot; tree; tree = tree.olderShadowRoot) {
            trees.push(tree);
          }
          return trees;
        }
        function render(host) {
          new ShadowRenderer(host).render();
        }
        Node.prototype.invalidateShadowRenderer = function(force) {
          var renderer = unsafeUnwrap(this).polymerShadowRenderer_;
          if (renderer) {
            renderer.invalidate();
            return true;
          }
          return false;
        };
        HTMLContentElement.prototype.getDistributedNodes = HTMLShadowElement.prototype.getDistributedNodes = function() {
          renderAllPending();
          return getDistributedNodes(this);
        };
        Element.prototype.getDestinationInsertionPoints = function() {
          renderAllPending();
          return getDestinationInsertionPoints(this) || [];
        };
        HTMLContentElement.prototype.nodeIsInserted_ = HTMLShadowElement.prototype.nodeIsInserted_ = function() {
          this.invalidateShadowRenderer();
          var shadowRoot = getShadowRootAncestor(this);
          var renderer;
          if (shadowRoot)
            renderer = getRendererForShadowRoot(shadowRoot);
          unsafeUnwrap(this).polymerShadowRenderer_ = renderer;
          if (renderer)
            renderer.invalidate();
        };
        scope.getRendererForHost = getRendererForHost;
        scope.getShadowTrees = getShadowTrees;
        scope.renderAllPending = renderAllPending;
        scope.getDestinationInsertionPoints = getDestinationInsertionPoints;
        scope.visual = {
          insertBefore: insertBefore,
          remove: remove
        };
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var HTMLElement = scope.wrappers.HTMLElement;
        var assert = scope.assert;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var unwrap = scope.unwrap;
        var wrap = scope.wrap;
        var elementsWithFormProperty = ["HTMLButtonElement", "HTMLFieldSetElement", "HTMLInputElement", "HTMLKeygenElement", "HTMLLabelElement", "HTMLLegendElement", "HTMLObjectElement", "HTMLOutputElement", "HTMLTextAreaElement"];
        function createWrapperConstructor(name) {
          if (!window[name])
            return;
          assert(!scope.wrappers[name]);
          var GeneratedWrapper = function(node) {
            HTMLElement.call(this, node);
          };
          GeneratedWrapper.prototype = Object.create(HTMLElement.prototype);
          mixin(GeneratedWrapper.prototype, {get form() {
              return wrap(unwrap(this).form);
            }});
          registerWrapper(window[name], GeneratedWrapper, document.createElement(name.slice(4, -7)));
          scope.wrappers[name] = GeneratedWrapper;
        }
        elementsWithFormProperty.forEach(createWrapperConstructor);
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var registerWrapper = scope.registerWrapper;
        var setWrapper = scope.setWrapper;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var unwrap = scope.unwrap;
        var unwrapIfNeeded = scope.unwrapIfNeeded;
        var wrap = scope.wrap;
        var OriginalSelection = window.Selection;
        function Selection(impl) {
          setWrapper(impl, this);
        }
        Selection.prototype = {
          get anchorNode() {
            return wrap(unsafeUnwrap(this).anchorNode);
          },
          get focusNode() {
            return wrap(unsafeUnwrap(this).focusNode);
          },
          addRange: function(range) {
            unsafeUnwrap(this).addRange(unwrapIfNeeded(range));
          },
          collapse: function(node, index) {
            unsafeUnwrap(this).collapse(unwrapIfNeeded(node), index);
          },
          containsNode: function(node, allowPartial) {
            return unsafeUnwrap(this).containsNode(unwrapIfNeeded(node), allowPartial);
          },
          getRangeAt: function(index) {
            return wrap(unsafeUnwrap(this).getRangeAt(index));
          },
          removeRange: function(range) {
            unsafeUnwrap(this).removeRange(unwrap(range));
          },
          selectAllChildren: function(node) {
            unsafeUnwrap(this).selectAllChildren(unwrapIfNeeded(node));
          },
          toString: function() {
            return unsafeUnwrap(this).toString();
          }
        };
        if (OriginalSelection.prototype.extend) {
          Selection.prototype.extend = function(node, offset) {
            unsafeUnwrap(this).extend(unwrapIfNeeded(node), offset);
          };
        }
        registerWrapper(window.Selection, Selection, window.getSelection());
        scope.wrappers.Selection = Selection;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var registerWrapper = scope.registerWrapper;
        var setWrapper = scope.setWrapper;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var unwrapIfNeeded = scope.unwrapIfNeeded;
        var wrap = scope.wrap;
        var OriginalTreeWalker = window.TreeWalker;
        function TreeWalker(impl) {
          setWrapper(impl, this);
        }
        TreeWalker.prototype = {
          get root() {
            return wrap(unsafeUnwrap(this).root);
          },
          get currentNode() {
            return wrap(unsafeUnwrap(this).currentNode);
          },
          set currentNode(node) {
            unsafeUnwrap(this).currentNode = unwrapIfNeeded(node);
          },
          get filter() {
            return unsafeUnwrap(this).filter;
          },
          parentNode: function() {
            return wrap(unsafeUnwrap(this).parentNode());
          },
          firstChild: function() {
            return wrap(unsafeUnwrap(this).firstChild());
          },
          lastChild: function() {
            return wrap(unsafeUnwrap(this).lastChild());
          },
          previousSibling: function() {
            return wrap(unsafeUnwrap(this).previousSibling());
          },
          previousNode: function() {
            return wrap(unsafeUnwrap(this).previousNode());
          },
          nextNode: function() {
            return wrap(unsafeUnwrap(this).nextNode());
          }
        };
        registerWrapper(OriginalTreeWalker, TreeWalker);
        scope.wrappers.TreeWalker = TreeWalker;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var GetElementsByInterface = scope.GetElementsByInterface;
        var Node = scope.wrappers.Node;
        var ParentNodeInterface = scope.ParentNodeInterface;
        var NonElementParentNodeInterface = scope.NonElementParentNodeInterface;
        var Selection = scope.wrappers.Selection;
        var SelectorsInterface = scope.SelectorsInterface;
        var ShadowRoot = scope.wrappers.ShadowRoot;
        var TreeScope = scope.TreeScope;
        var cloneNode = scope.cloneNode;
        var defineWrapGetter = scope.defineWrapGetter;
        var elementFromPoint = scope.elementFromPoint;
        var forwardMethodsToWrapper = scope.forwardMethodsToWrapper;
        var matchesNames = scope.matchesNames;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var renderAllPending = scope.renderAllPending;
        var rewrap = scope.rewrap;
        var setWrapper = scope.setWrapper;
        var unsafeUnwrap = scope.unsafeUnwrap;
        var unwrap = scope.unwrap;
        var wrap = scope.wrap;
        var wrapEventTargetMethods = scope.wrapEventTargetMethods;
        var wrapNodeList = scope.wrapNodeList;
        var implementationTable = new WeakMap();
        function Document(node) {
          Node.call(this, node);
          this.treeScope_ = new TreeScope(this, null);
        }
        Document.prototype = Object.create(Node.prototype);
        defineWrapGetter(Document, "documentElement");
        defineWrapGetter(Document, "body");
        defineWrapGetter(Document, "head");
        function wrapMethod(name) {
          var original = document[name];
          Document.prototype[name] = function() {
            return wrap(original.apply(unsafeUnwrap(this), arguments));
          };
        }
        ["createComment", "createDocumentFragment", "createElement", "createElementNS", "createEvent", "createEventNS", "createRange", "createTextNode"].forEach(wrapMethod);
        var originalAdoptNode = document.adoptNode;
        function adoptNodeNoRemove(node, doc) {
          originalAdoptNode.call(unsafeUnwrap(doc), unwrap(node));
          adoptSubtree(node, doc);
        }
        function adoptSubtree(node, doc) {
          if (node.shadowRoot)
            doc.adoptNode(node.shadowRoot);
          if (node instanceof ShadowRoot)
            adoptOlderShadowRoots(node, doc);
          for (var child = node.firstChild; child; child = child.nextSibling) {
            adoptSubtree(child, doc);
          }
        }
        function adoptOlderShadowRoots(shadowRoot, doc) {
          var oldShadowRoot = shadowRoot.olderShadowRoot;
          if (oldShadowRoot)
            doc.adoptNode(oldShadowRoot);
        }
        var originalGetSelection = document.getSelection;
        mixin(Document.prototype, {
          adoptNode: function(node) {
            if (node.parentNode)
              node.parentNode.removeChild(node);
            adoptNodeNoRemove(node, this);
            return node;
          },
          elementFromPoint: function(x, y) {
            return elementFromPoint(this, this, x, y);
          },
          importNode: function(node, deep) {
            return cloneNode(node, deep, unsafeUnwrap(this));
          },
          getSelection: function() {
            renderAllPending();
            return new Selection(originalGetSelection.call(unwrap(this)));
          },
          getElementsByName: function(name) {
            return SelectorsInterface.querySelectorAll.call(this, "[name=" + JSON.stringify(String(name)) + "]");
          }
        });
        var originalCreateTreeWalker = document.createTreeWalker;
        var TreeWalkerWrapper = scope.wrappers.TreeWalker;
        Document.prototype.createTreeWalker = function(root, whatToShow, filter, expandEntityReferences) {
          var newFilter = null;
          if (filter) {
            if (filter.acceptNode && typeof filter.acceptNode === "function") {
              newFilter = {acceptNode: function(node) {
                  return filter.acceptNode(wrap(node));
                }};
            } else if (typeof filter === "function") {
              newFilter = function(node) {
                return filter(wrap(node));
              };
            }
          }
          return new TreeWalkerWrapper(originalCreateTreeWalker.call(unwrap(this), unwrap(root), whatToShow, newFilter, expandEntityReferences));
        };
        if (document.registerElement) {
          var originalRegisterElement = document.registerElement;
          Document.prototype.registerElement = function(tagName, object) {
            var prototype,
                extendsOption;
            if (object !== undefined) {
              prototype = object.prototype;
              extendsOption = object.extends;
            }
            if (!prototype)
              prototype = Object.create(HTMLElement.prototype);
            if (scope.nativePrototypeTable.get(prototype)) {
              throw new Error("NotSupportedError");
            }
            var proto = Object.getPrototypeOf(prototype);
            var nativePrototype;
            var prototypes = [];
            while (proto) {
              nativePrototype = scope.nativePrototypeTable.get(proto);
              if (nativePrototype)
                break;
              prototypes.push(proto);
              proto = Object.getPrototypeOf(proto);
            }
            if (!nativePrototype) {
              throw new Error("NotSupportedError");
            }
            var newPrototype = Object.create(nativePrototype);
            for (var i = prototypes.length - 1; i >= 0; i--) {
              newPrototype = Object.create(newPrototype);
            }
            ["createdCallback", "attachedCallback", "detachedCallback", "attributeChangedCallback"].forEach(function(name) {
              var f = prototype[name];
              if (!f)
                return;
              newPrototype[name] = function() {
                if (!(wrap(this) instanceof CustomElementConstructor)) {
                  rewrap(this);
                }
                f.apply(wrap(this), arguments);
              };
            });
            var p = {prototype: newPrototype};
            if (extendsOption)
              p.extends = extendsOption;
            function CustomElementConstructor(node) {
              if (!node) {
                if (extendsOption) {
                  return document.createElement(extendsOption, tagName);
                } else {
                  return document.createElement(tagName);
                }
              }
              setWrapper(node, this);
            }
            CustomElementConstructor.prototype = prototype;
            CustomElementConstructor.prototype.constructor = CustomElementConstructor;
            scope.constructorTable.set(newPrototype, CustomElementConstructor);
            scope.nativePrototypeTable.set(prototype, newPrototype);
            var nativeConstructor = originalRegisterElement.call(unwrap(this), tagName, p);
            return CustomElementConstructor;
          };
          forwardMethodsToWrapper([window.HTMLDocument || window.Document], ["registerElement"]);
        }
        forwardMethodsToWrapper([window.HTMLBodyElement, window.HTMLDocument || window.Document, window.HTMLHeadElement, window.HTMLHtmlElement], ["appendChild", "compareDocumentPosition", "contains", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "insertBefore", "querySelector", "querySelectorAll", "removeChild", "replaceChild"]);
        forwardMethodsToWrapper([window.HTMLBodyElement, window.HTMLHeadElement, window.HTMLHtmlElement], matchesNames);
        forwardMethodsToWrapper([window.HTMLDocument || window.Document], ["adoptNode", "importNode", "contains", "createComment", "createDocumentFragment", "createElement", "createElementNS", "createEvent", "createEventNS", "createRange", "createTextNode", "createTreeWalker", "elementFromPoint", "getElementById", "getElementsByName", "getSelection"]);
        mixin(Document.prototype, GetElementsByInterface);
        mixin(Document.prototype, ParentNodeInterface);
        mixin(Document.prototype, SelectorsInterface);
        mixin(Document.prototype, NonElementParentNodeInterface);
        mixin(Document.prototype, {
          get implementation() {
            var implementation = implementationTable.get(this);
            if (implementation)
              return implementation;
            implementation = new DOMImplementation(unwrap(this).implementation);
            implementationTable.set(this, implementation);
            return implementation;
          },
          get defaultView() {
            return wrap(unwrap(this).defaultView);
          }
        });
        registerWrapper(window.Document, Document, document.implementation.createHTMLDocument(""));
        if (window.HTMLDocument)
          registerWrapper(window.HTMLDocument, Document);
        wrapEventTargetMethods([window.HTMLBodyElement, window.HTMLDocument || window.Document, window.HTMLHeadElement]);
        function DOMImplementation(impl) {
          setWrapper(impl, this);
        }
        var originalCreateDocument = document.implementation.createDocument;
        DOMImplementation.prototype.createDocument = function() {
          arguments[2] = unwrap(arguments[2]);
          return wrap(originalCreateDocument.apply(unsafeUnwrap(this), arguments));
        };
        function wrapImplMethod(constructor, name) {
          var original = document.implementation[name];
          constructor.prototype[name] = function() {
            return wrap(original.apply(unsafeUnwrap(this), arguments));
          };
        }
        function forwardImplMethod(constructor, name) {
          var original = document.implementation[name];
          constructor.prototype[name] = function() {
            return original.apply(unsafeUnwrap(this), arguments);
          };
        }
        wrapImplMethod(DOMImplementation, "createDocumentType");
        wrapImplMethod(DOMImplementation, "createHTMLDocument");
        forwardImplMethod(DOMImplementation, "hasFeature");
        registerWrapper(window.DOMImplementation, DOMImplementation);
        forwardMethodsToWrapper([window.DOMImplementation], ["createDocument", "createDocumentType", "createHTMLDocument", "hasFeature"]);
        scope.adoptNodeNoRemove = adoptNodeNoRemove;
        scope.wrappers.DOMImplementation = DOMImplementation;
        scope.wrappers.Document = Document;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var EventTarget = scope.wrappers.EventTarget;
        var Selection = scope.wrappers.Selection;
        var mixin = scope.mixin;
        var registerWrapper = scope.registerWrapper;
        var renderAllPending = scope.renderAllPending;
        var unwrap = scope.unwrap;
        var unwrapIfNeeded = scope.unwrapIfNeeded;
        var wrap = scope.wrap;
        var OriginalWindow = window.Window;
        var originalGetComputedStyle = window.getComputedStyle;
        var originalGetDefaultComputedStyle = window.getDefaultComputedStyle;
        var originalGetSelection = window.getSelection;
        function Window(impl) {
          EventTarget.call(this, impl);
        }
        Window.prototype = Object.create(EventTarget.prototype);
        OriginalWindow.prototype.getComputedStyle = function(el, pseudo) {
          return wrap(this || window).getComputedStyle(unwrapIfNeeded(el), pseudo);
        };
        if (originalGetDefaultComputedStyle) {
          OriginalWindow.prototype.getDefaultComputedStyle = function(el, pseudo) {
            return wrap(this || window).getDefaultComputedStyle(unwrapIfNeeded(el), pseudo);
          };
        }
        OriginalWindow.prototype.getSelection = function() {
          return wrap(this || window).getSelection();
        };
        delete window.getComputedStyle;
        delete window.getDefaultComputedStyle;
        delete window.getSelection;
        ["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function(name) {
          OriginalWindow.prototype[name] = function() {
            var w = wrap(this || window);
            return w[name].apply(w, arguments);
          };
          delete window[name];
        });
        mixin(Window.prototype, {
          getComputedStyle: function(el, pseudo) {
            renderAllPending();
            return originalGetComputedStyle.call(unwrap(this), unwrapIfNeeded(el), pseudo);
          },
          getSelection: function() {
            renderAllPending();
            return new Selection(originalGetSelection.call(unwrap(this)));
          },
          get document() {
            return wrap(unwrap(this).document);
          }
        });
        if (originalGetDefaultComputedStyle) {
          Window.prototype.getDefaultComputedStyle = function(el, pseudo) {
            renderAllPending();
            return originalGetDefaultComputedStyle.call(unwrap(this), unwrapIfNeeded(el), pseudo);
          };
        }
        registerWrapper(OriginalWindow, Window, window);
        scope.wrappers.Window = Window;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var unwrap = scope.unwrap;
        var OriginalDataTransfer = window.DataTransfer || window.Clipboard;
        var OriginalDataTransferSetDragImage = OriginalDataTransfer.prototype.setDragImage;
        if (OriginalDataTransferSetDragImage) {
          OriginalDataTransfer.prototype.setDragImage = function(image, x, y) {
            OriginalDataTransferSetDragImage.call(this, unwrap(image), x, y);
          };
        }
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var registerWrapper = scope.registerWrapper;
        var setWrapper = scope.setWrapper;
        var unwrap = scope.unwrap;
        var OriginalFormData = window.FormData;
        if (!OriginalFormData)
          return;
        function FormData(formElement) {
          var impl;
          if (formElement instanceof OriginalFormData) {
            impl = formElement;
          } else {
            impl = new OriginalFormData(formElement && unwrap(formElement));
          }
          setWrapper(impl, this);
        }
        registerWrapper(OriginalFormData, FormData, new OriginalFormData());
        scope.wrappers.FormData = FormData;
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var unwrapIfNeeded = scope.unwrapIfNeeded;
        var originalSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function(obj) {
          return originalSend.call(this, unwrapIfNeeded(obj));
        };
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        "use strict";
        var isWrapperFor = scope.isWrapperFor;
        var elements = {
          a: "HTMLAnchorElement",
          area: "HTMLAreaElement",
          audio: "HTMLAudioElement",
          base: "HTMLBaseElement",
          body: "HTMLBodyElement",
          br: "HTMLBRElement",
          button: "HTMLButtonElement",
          canvas: "HTMLCanvasElement",
          caption: "HTMLTableCaptionElement",
          col: "HTMLTableColElement",
          content: "HTMLContentElement",
          data: "HTMLDataElement",
          datalist: "HTMLDataListElement",
          del: "HTMLModElement",
          dir: "HTMLDirectoryElement",
          div: "HTMLDivElement",
          dl: "HTMLDListElement",
          embed: "HTMLEmbedElement",
          fieldset: "HTMLFieldSetElement",
          font: "HTMLFontElement",
          form: "HTMLFormElement",
          frame: "HTMLFrameElement",
          frameset: "HTMLFrameSetElement",
          h1: "HTMLHeadingElement",
          head: "HTMLHeadElement",
          hr: "HTMLHRElement",
          html: "HTMLHtmlElement",
          iframe: "HTMLIFrameElement",
          img: "HTMLImageElement",
          input: "HTMLInputElement",
          keygen: "HTMLKeygenElement",
          label: "HTMLLabelElement",
          legend: "HTMLLegendElement",
          li: "HTMLLIElement",
          link: "HTMLLinkElement",
          map: "HTMLMapElement",
          marquee: "HTMLMarqueeElement",
          menu: "HTMLMenuElement",
          menuitem: "HTMLMenuItemElement",
          meta: "HTMLMetaElement",
          meter: "HTMLMeterElement",
          object: "HTMLObjectElement",
          ol: "HTMLOListElement",
          optgroup: "HTMLOptGroupElement",
          option: "HTMLOptionElement",
          output: "HTMLOutputElement",
          p: "HTMLParagraphElement",
          param: "HTMLParamElement",
          pre: "HTMLPreElement",
          progress: "HTMLProgressElement",
          q: "HTMLQuoteElement",
          script: "HTMLScriptElement",
          select: "HTMLSelectElement",
          shadow: "HTMLShadowElement",
          source: "HTMLSourceElement",
          span: "HTMLSpanElement",
          style: "HTMLStyleElement",
          table: "HTMLTableElement",
          tbody: "HTMLTableSectionElement",
          template: "HTMLTemplateElement",
          textarea: "HTMLTextAreaElement",
          thead: "HTMLTableSectionElement",
          time: "HTMLTimeElement",
          title: "HTMLTitleElement",
          tr: "HTMLTableRowElement",
          track: "HTMLTrackElement",
          ul: "HTMLUListElement",
          video: "HTMLVideoElement"
        };
        function overrideConstructor(tagName) {
          var nativeConstructorName = elements[tagName];
          var nativeConstructor = window[nativeConstructorName];
          if (!nativeConstructor)
            return;
          var element = document.createElement(tagName);
          var wrapperConstructor = element.constructor;
          window[nativeConstructorName] = wrapperConstructor;
        }
        Object.keys(elements).forEach(overrideConstructor);
        Object.getOwnPropertyNames(scope.wrappers).forEach(function(name) {
          window[name] = scope.wrappers[name];
        });
      })(window.ShadowDOMPolyfill);
      (function(scope) {
        var ShadowCSS = {
          strictStyling: false,
          registry: {},
          shimStyling: function(root, name, extendsName) {
            var scopeStyles = this.prepareRoot(root, name, extendsName);
            var typeExtension = this.isTypeExtension(extendsName);
            var scopeSelector = this.makeScopeSelector(name, typeExtension);
            var cssText = stylesToCssText(scopeStyles, true);
            cssText = this.scopeCssText(cssText, scopeSelector);
            if (root) {
              root.shimmedStyle = cssText;
            }
            this.addCssToDocument(cssText, name);
          },
          shimStyle: function(style, selector) {
            return this.shimCssText(style.textContent, selector);
          },
          shimCssText: function(cssText, selector) {
            cssText = this.insertDirectives(cssText);
            return this.scopeCssText(cssText, selector);
          },
          makeScopeSelector: function(name, typeExtension) {
            if (name) {
              return typeExtension ? "[is=" + name + "]" : name;
            }
            return "";
          },
          isTypeExtension: function(extendsName) {
            return extendsName && extendsName.indexOf("-") < 0;
          },
          prepareRoot: function(root, name, extendsName) {
            var def = this.registerRoot(root, name, extendsName);
            this.replaceTextInStyles(def.rootStyles, this.insertDirectives);
            this.removeStyles(root, def.rootStyles);
            if (this.strictStyling) {
              this.applyScopeToContent(root, name);
            }
            return def.scopeStyles;
          },
          removeStyles: function(root, styles) {
            for (var i = 0,
                l = styles.length,
                s; i < l && (s = styles[i]); i++) {
              s.parentNode.removeChild(s);
            }
          },
          registerRoot: function(root, name, extendsName) {
            var def = this.registry[name] = {
              root: root,
              name: name,
              extendsName: extendsName
            };
            var styles = this.findStyles(root);
            def.rootStyles = styles;
            def.scopeStyles = def.rootStyles;
            var extendee = this.registry[def.extendsName];
            if (extendee) {
              def.scopeStyles = extendee.scopeStyles.concat(def.scopeStyles);
            }
            return def;
          },
          findStyles: function(root) {
            if (!root) {
              return [];
            }
            var styles = root.querySelectorAll("style");
            return Array.prototype.filter.call(styles, function(s) {
              return !s.hasAttribute(NO_SHIM_ATTRIBUTE);
            });
          },
          applyScopeToContent: function(root, name) {
            if (root) {
              Array.prototype.forEach.call(root.querySelectorAll("*"), function(node) {
                node.setAttribute(name, "");
              });
              Array.prototype.forEach.call(root.querySelectorAll("template"), function(template) {
                this.applyScopeToContent(template.content, name);
              }, this);
            }
          },
          insertDirectives: function(cssText) {
            cssText = this.insertPolyfillDirectivesInCssText(cssText);
            return this.insertPolyfillRulesInCssText(cssText);
          },
          insertPolyfillDirectivesInCssText: function(cssText) {
            cssText = cssText.replace(cssCommentNextSelectorRe, function(match, p1) {
              return p1.slice(0, -2) + "{";
            });
            return cssText.replace(cssContentNextSelectorRe, function(match, p1) {
              return p1 + " {";
            });
          },
          insertPolyfillRulesInCssText: function(cssText) {
            cssText = cssText.replace(cssCommentRuleRe, function(match, p1) {
              return p1.slice(0, -1);
            });
            return cssText.replace(cssContentRuleRe, function(match, p1, p2, p3) {
              var rule = match.replace(p1, "").replace(p2, "");
              return p3 + rule;
            });
          },
          scopeCssText: function(cssText, scopeSelector) {
            var unscoped = this.extractUnscopedRulesFromCssText(cssText);
            cssText = this.insertPolyfillHostInCssText(cssText);
            cssText = this.convertColonHost(cssText);
            cssText = this.convertColonHostContext(cssText);
            cssText = this.convertShadowDOMSelectors(cssText);
            if (scopeSelector) {
              var self = this,
                  cssText;
              withCssRules(cssText, function(rules) {
                cssText = self.scopeRules(rules, scopeSelector);
              });
            }
            cssText = cssText + "\n" + unscoped;
            return cssText.trim();
          },
          extractUnscopedRulesFromCssText: function(cssText) {
            var r = "",
                m;
            while (m = cssCommentUnscopedRuleRe.exec(cssText)) {
              r += m[1].slice(0, -1) + "\n\n";
            }
            while (m = cssContentUnscopedRuleRe.exec(cssText)) {
              r += m[0].replace(m[2], "").replace(m[1], m[3]) + "\n\n";
            }
            return r;
          },
          convertColonHost: function(cssText) {
            return this.convertColonRule(cssText, cssColonHostRe, this.colonHostPartReplacer);
          },
          convertColonHostContext: function(cssText) {
            return this.convertColonRule(cssText, cssColonHostContextRe, this.colonHostContextPartReplacer);
          },
          convertColonRule: function(cssText, regExp, partReplacer) {
            return cssText.replace(regExp, function(m, p1, p2, p3) {
              p1 = polyfillHostNoCombinator;
              if (p2) {
                var parts = p2.split(","),
                    r = [];
                for (var i = 0,
                    l = parts.length,
                    p; i < l && (p = parts[i]); i++) {
                  p = p.trim();
                  r.push(partReplacer(p1, p, p3));
                }
                return r.join(",");
              } else {
                return p1 + p3;
              }
            });
          },
          colonHostContextPartReplacer: function(host, part, suffix) {
            if (part.match(polyfillHost)) {
              return this.colonHostPartReplacer(host, part, suffix);
            } else {
              return host + part + suffix + ", " + part + " " + host + suffix;
            }
          },
          colonHostPartReplacer: function(host, part, suffix) {
            return host + part.replace(polyfillHost, "") + suffix;
          },
          convertShadowDOMSelectors: function(cssText) {
            for (var i = 0; i < shadowDOMSelectorsRe.length; i++) {
              cssText = cssText.replace(shadowDOMSelectorsRe[i], " ");
            }
            return cssText;
          },
          scopeRules: function(cssRules, scopeSelector) {
            var cssText = "";
            if (cssRules) {
              Array.prototype.forEach.call(cssRules, function(rule) {
                if (rule.selectorText && (rule.style && rule.style.cssText !== undefined)) {
                  cssText += this.scopeSelector(rule.selectorText, scopeSelector, this.strictStyling) + " {\n	";
                  cssText += this.propertiesFromRule(rule) + "\n}\n\n";
                } else if (rule.type === CSSRule.MEDIA_RULE) {
                  cssText += "@media " + rule.media.mediaText + " {\n";
                  cssText += this.scopeRules(rule.cssRules, scopeSelector);
                  cssText += "\n}\n\n";
                } else {
                  try {
                    if (rule.cssText) {
                      cssText += rule.cssText + "\n\n";
                    }
                  } catch (x) {
                    if (rule.type === CSSRule.KEYFRAMES_RULE && rule.cssRules) {
                      cssText += this.ieSafeCssTextFromKeyFrameRule(rule);
                    }
                  }
                }
              }, this);
            }
            return cssText;
          },
          ieSafeCssTextFromKeyFrameRule: function(rule) {
            var cssText = "@keyframes " + rule.name + " {";
            Array.prototype.forEach.call(rule.cssRules, function(rule) {
              cssText += " " + rule.keyText + " {" + rule.style.cssText + "}";
            });
            cssText += " }";
            return cssText;
          },
          scopeSelector: function(selector, scopeSelector, strict) {
            var r = [],
                parts = selector.split(",");
            parts.forEach(function(p) {
              p = p.trim();
              if (this.selectorNeedsScoping(p, scopeSelector)) {
                p = strict && !p.match(polyfillHostNoCombinator) ? this.applyStrictSelectorScope(p, scopeSelector) : this.applySelectorScope(p, scopeSelector);
              }
              r.push(p);
            }, this);
            return r.join(", ");
          },
          selectorNeedsScoping: function(selector, scopeSelector) {
            if (Array.isArray(scopeSelector)) {
              return true;
            }
            var re = this.makeScopeMatcher(scopeSelector);
            return !selector.match(re);
          },
          makeScopeMatcher: function(scopeSelector) {
            scopeSelector = scopeSelector.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
            return new RegExp("^(" + scopeSelector + ")" + selectorReSuffix, "m");
          },
          applySelectorScope: function(selector, selectorScope) {
            return Array.isArray(selectorScope) ? this.applySelectorScopeList(selector, selectorScope) : this.applySimpleSelectorScope(selector, selectorScope);
          },
          applySelectorScopeList: function(selector, scopeSelectorList) {
            var r = [];
            for (var i = 0,
                s; s = scopeSelectorList[i]; i++) {
              r.push(this.applySimpleSelectorScope(selector, s));
            }
            return r.join(", ");
          },
          applySimpleSelectorScope: function(selector, scopeSelector) {
            if (selector.match(polyfillHostRe)) {
              selector = selector.replace(polyfillHostNoCombinator, scopeSelector);
              return selector.replace(polyfillHostRe, scopeSelector + " ");
            } else {
              return scopeSelector + " " + selector;
            }
          },
          applyStrictSelectorScope: function(selector, scopeSelector) {
            scopeSelector = scopeSelector.replace(/\[is=([^\]]*)\]/g, "$1");
            var splits = [" ", ">", "+", "~"],
                scoped = selector,
                attrName = "[" + scopeSelector + "]";
            splits.forEach(function(sep) {
              var parts = scoped.split(sep);
              scoped = parts.map(function(p) {
                var t = p.trim().replace(polyfillHostRe, "");
                if (t && splits.indexOf(t) < 0 && t.indexOf(attrName) < 0) {
                  p = t.replace(/([^:]*)(:*)(.*)/, "$1" + attrName + "$2$3");
                }
                return p;
              }).join(sep);
            });
            return scoped;
          },
          insertPolyfillHostInCssText: function(selector) {
            return selector.replace(colonHostContextRe, polyfillHostContext).replace(colonHostRe, polyfillHost);
          },
          propertiesFromRule: function(rule) {
            var cssText = rule.style.cssText;
            if (rule.style.content && !rule.style.content.match(/['"]+|attr/)) {
              cssText = cssText.replace(/content:[^;]*;/g, "content: '" + rule.style.content + "';");
            }
            var style = rule.style;
            for (var i in style) {
              if (style[i] === "initial") {
                cssText += i + ": initial; ";
              }
            }
            return cssText;
          },
          replaceTextInStyles: function(styles, action) {
            if (styles && action) {
              if (!(styles instanceof Array)) {
                styles = [styles];
              }
              Array.prototype.forEach.call(styles, function(s) {
                s.textContent = action.call(this, s.textContent);
              }, this);
            }
          },
          addCssToDocument: function(cssText, name) {
            if (cssText.match("@import")) {
              addOwnSheet(cssText, name);
            } else {
              addCssToDocument(cssText);
            }
          }
        };
        var selectorRe = /([^{]*)({[\s\S]*?})/gim,
            cssCommentRe = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
            cssCommentNextSelectorRe = /\/\*\s*@polyfill ([^*]*\*+([^/*][^*]*\*+)*\/)([^{]*?){/gim,
            cssContentNextSelectorRe = /polyfill-next-selector[^}]*content\:[\s]*?['"](.*?)['"][;\s]*}([^{]*?){/gim,
            cssCommentRuleRe = /\/\*\s@polyfill-rule([^*]*\*+([^/*][^*]*\*+)*)\//gim,
            cssContentRuleRe = /(polyfill-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim,
            cssCommentUnscopedRuleRe = /\/\*\s@polyfill-unscoped-rule([^*]*\*+([^/*][^*]*\*+)*)\//gim,
            cssContentUnscopedRuleRe = /(polyfill-unscoped-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim,
            cssPseudoRe = /::(x-[^\s{,(]*)/gim,
            cssPartRe = /::part\(([^)]*)\)/gim,
            polyfillHost = "-shadowcsshost",
            polyfillHostContext = "-shadowcsscontext",
            parenSuffix = ")(?:\\((" + "(?:\\([^)(]*\\)|[^)(]*)+?" + ")\\))?([^,{]*)";
        var cssColonHostRe = new RegExp("(" + polyfillHost + parenSuffix, "gim"),
            cssColonHostContextRe = new RegExp("(" + polyfillHostContext + parenSuffix, "gim"),
            selectorReSuffix = "([>\\s~+[.,{:][\\s\\S]*)?$",
            colonHostRe = /\:host/gim,
            colonHostContextRe = /\:host-context/gim,
            polyfillHostNoCombinator = polyfillHost + "-no-combinator",
            polyfillHostRe = new RegExp(polyfillHost, "gim"),
            polyfillHostContextRe = new RegExp(polyfillHostContext, "gim"),
            shadowDOMSelectorsRe = [/>>>/g, /::shadow/g, /::content/g, /\/deep\//g, /\/shadow\//g, /\/shadow-deep\//g, /\^\^/g, /\^/g];
        function stylesToCssText(styles, preserveComments) {
          var cssText = "";
          Array.prototype.forEach.call(styles, function(s) {
            cssText += s.textContent + "\n\n";
          });
          if (!preserveComments) {
            cssText = cssText.replace(cssCommentRe, "");
          }
          return cssText;
        }
        function cssTextToStyle(cssText) {
          var style = document.createElement("style");
          style.textContent = cssText;
          return style;
        }
        function cssToRules(cssText) {
          var style = cssTextToStyle(cssText);
          document.head.appendChild(style);
          var rules = [];
          if (style.sheet) {
            try {
              rules = style.sheet.cssRules;
            } catch (e) {}
          } else {
            console.warn("sheet not found", style);
          }
          style.parentNode.removeChild(style);
          return rules;
        }
        var frame = document.createElement("iframe");
        frame.style.display = "none";
        function initFrame() {
          frame.initialized = true;
          document.body.appendChild(frame);
          var doc = frame.contentDocument;
          var base = doc.createElement("base");
          base.href = document.baseURI;
          doc.head.appendChild(base);
        }
        function inFrame(fn) {
          if (!frame.initialized) {
            initFrame();
          }
          document.body.appendChild(frame);
          fn(frame.contentDocument);
          document.body.removeChild(frame);
        }
        var isChrome = navigator.userAgent.match("Chrome");
        function withCssRules(cssText, callback) {
          if (!callback) {
            return;
          }
          var rules;
          if (cssText.match("@import") && isChrome) {
            var style = cssTextToStyle(cssText);
            inFrame(function(doc) {
              doc.head.appendChild(style.impl);
              rules = Array.prototype.slice.call(style.sheet.cssRules, 0);
              callback(rules);
            });
          } else {
            rules = cssToRules(cssText);
            callback(rules);
          }
        }
        function rulesToCss(cssRules) {
          for (var i = 0,
              css = []; i < cssRules.length; i++) {
            css.push(cssRules[i].cssText);
          }
          return css.join("\n\n");
        }
        function addCssToDocument(cssText) {
          if (cssText) {
            getSheet().appendChild(document.createTextNode(cssText));
          }
        }
        function addOwnSheet(cssText, name) {
          var style = cssTextToStyle(cssText);
          style.setAttribute(name, "");
          style.setAttribute(SHIMMED_ATTRIBUTE, "");
          document.head.appendChild(style);
        }
        var SHIM_ATTRIBUTE = "shim-shadowdom";
        var SHIMMED_ATTRIBUTE = "shim-shadowdom-css";
        var NO_SHIM_ATTRIBUTE = "no-shim";
        var sheet;
        function getSheet() {
          if (!sheet) {
            sheet = document.createElement("style");
            sheet.setAttribute(SHIMMED_ATTRIBUTE, "");
            sheet[SHIMMED_ATTRIBUTE] = true;
          }
          return sheet;
        }
        if (window.ShadowDOMPolyfill) {
          addCssToDocument("style { display: none !important; }\n");
          var doc = ShadowDOMPolyfill.wrap(document);
          var head = doc.querySelector("head");
          head.insertBefore(getSheet(), head.childNodes[0]);
          document.addEventListener("DOMContentLoaded", function() {
            var urlResolver = scope.urlResolver;
            if (window.HTMLImports && !HTMLImports.useNative) {
              var SHIM_SHEET_SELECTOR = "link[rel=stylesheet]" + "[" + SHIM_ATTRIBUTE + "]";
              var SHIM_STYLE_SELECTOR = "style[" + SHIM_ATTRIBUTE + "]";
              HTMLImports.importer.documentPreloadSelectors += "," + SHIM_SHEET_SELECTOR;
              HTMLImports.importer.importsPreloadSelectors += "," + SHIM_SHEET_SELECTOR;
              HTMLImports.parser.documentSelectors = [HTMLImports.parser.documentSelectors, SHIM_SHEET_SELECTOR, SHIM_STYLE_SELECTOR].join(",");
              var originalParseGeneric = HTMLImports.parser.parseGeneric;
              HTMLImports.parser.parseGeneric = function(elt) {
                if (elt[SHIMMED_ATTRIBUTE]) {
                  return;
                }
                var style = elt.__importElement || elt;
                if (!style.hasAttribute(SHIM_ATTRIBUTE)) {
                  originalParseGeneric.call(this, elt);
                  return;
                }
                if (elt.__resource) {
                  style = elt.ownerDocument.createElement("style");
                  style.textContent = elt.__resource;
                }
                HTMLImports.path.resolveUrlsInStyle(style, elt.href);
                style.textContent = ShadowCSS.shimStyle(style);
                style.removeAttribute(SHIM_ATTRIBUTE, "");
                style.setAttribute(SHIMMED_ATTRIBUTE, "");
                style[SHIMMED_ATTRIBUTE] = true;
                if (style.parentNode !== head) {
                  if (elt.parentNode === head) {
                    head.replaceChild(style, elt);
                  } else {
                    this.addElementToDocument(style);
                  }
                }
                style.__importParsed = true;
                this.markParsingComplete(elt);
                this.parseNext();
              };
              var hasResource = HTMLImports.parser.hasResource;
              HTMLImports.parser.hasResource = function(node) {
                if (node.localName === "link" && node.rel === "stylesheet" && node.hasAttribute(SHIM_ATTRIBUTE)) {
                  return node.__resource;
                } else {
                  return hasResource.call(this, node);
                }
              };
            }
          });
        }
        scope.ShadowCSS = ShadowCSS;
      })(window.WebComponents);
    }
    (function(scope) {
      if (window.ShadowDOMPolyfill) {
        window.wrap = ShadowDOMPolyfill.wrapIfNeeded;
        window.unwrap = ShadowDOMPolyfill.unwrapIfNeeded;
      } else {
        window.wrap = window.unwrap = function(n) {
          return n;
        };
      }
    })(window.WebComponents);
    (function(scope) {
      "use strict";
      var hasWorkingUrl = false;
      if (!scope.forceJURL) {
        try {
          var u = new URL("b", "http://a");
          u.pathname = "c%20d";
          hasWorkingUrl = u.href === "http://a/c%20d";
        } catch (e) {}
      }
      if (hasWorkingUrl)
        return;
      var relative = Object.create(null);
      relative["ftp"] = 21;
      relative["file"] = 0;
      relative["gopher"] = 70;
      relative["http"] = 80;
      relative["https"] = 443;
      relative["ws"] = 80;
      relative["wss"] = 443;
      var relativePathDotMapping = Object.create(null);
      relativePathDotMapping["%2e"] = ".";
      relativePathDotMapping[".%2e"] = "..";
      relativePathDotMapping["%2e."] = "..";
      relativePathDotMapping["%2e%2e"] = "..";
      function isRelativeScheme(scheme) {
        return relative[scheme] !== undefined;
      }
      function invalid() {
        clear.call(this);
        this._isInvalid = true;
      }
      function IDNAToASCII(h) {
        if ("" == h) {
          invalid.call(this);
        }
        return h.toLowerCase();
      }
      function percentEscape(c) {
        var unicode = c.charCodeAt(0);
        if (unicode > 32 && unicode < 127 && [34, 35, 60, 62, 63, 96].indexOf(unicode) == -1) {
          return c;
        }
        return encodeURIComponent(c);
      }
      function percentEscapeQuery(c) {
        var unicode = c.charCodeAt(0);
        if (unicode > 32 && unicode < 127 && [34, 35, 60, 62, 96].indexOf(unicode) == -1) {
          return c;
        }
        return encodeURIComponent(c);
      }
      var EOF = undefined,
          ALPHA = /[a-zA-Z]/,
          ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;
      function parse(input, stateOverride, base) {
        function err(message) {
          errors.push(message);
        }
        var state = stateOverride || "scheme start",
            cursor = 0,
            buffer = "",
            seenAt = false,
            seenBracket = false,
            errors = [];
        loop: while ((input[cursor - 1] != EOF || cursor == 0) && !this._isInvalid) {
          var c = input[cursor];
          switch (state) {
            case "scheme start":
              if (c && ALPHA.test(c)) {
                buffer += c.toLowerCase();
                state = "scheme";
              } else if (!stateOverride) {
                buffer = "";
                state = "no scheme";
                continue;
              } else {
                err("Invalid scheme.");
                break loop;
              }
              break;
            case "scheme":
              if (c && ALPHANUMERIC.test(c)) {
                buffer += c.toLowerCase();
              } else if (":" == c) {
                this._scheme = buffer;
                buffer = "";
                if (stateOverride) {
                  break loop;
                }
                if (isRelativeScheme(this._scheme)) {
                  this._isRelative = true;
                }
                if ("file" == this._scheme) {
                  state = "relative";
                } else if (this._isRelative && base && base._scheme == this._scheme) {
                  state = "relative or authority";
                } else if (this._isRelative) {
                  state = "authority first slash";
                } else {
                  state = "scheme data";
                }
              } else if (!stateOverride) {
                buffer = "";
                cursor = 0;
                state = "no scheme";
                continue;
              } else if (EOF == c) {
                break loop;
              } else {
                err("Code point not allowed in scheme: " + c);
                break loop;
              }
              break;
            case "scheme data":
              if ("?" == c) {
                this._query = "?";
                state = "query";
              } else if ("#" == c) {
                this._fragment = "#";
                state = "fragment";
              } else {
                if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
                  this._schemeData += percentEscape(c);
                }
              }
              break;
            case "no scheme":
              if (!base || !isRelativeScheme(base._scheme)) {
                err("Missing scheme.");
                invalid.call(this);
              } else {
                state = "relative";
                continue;
              }
              break;
            case "relative or authority":
              if ("/" == c && "/" == input[cursor + 1]) {
                state = "authority ignore slashes";
              } else {
                err("Expected /, got: " + c);
                state = "relative";
                continue;
              }
              break;
            case "relative":
              this._isRelative = true;
              if ("file" != this._scheme)
                this._scheme = base._scheme;
              if (EOF == c) {
                this._host = base._host;
                this._port = base._port;
                this._path = base._path.slice();
                this._query = base._query;
                this._username = base._username;
                this._password = base._password;
                break loop;
              } else if ("/" == c || "\\" == c) {
                if ("\\" == c)
                  err("\\ is an invalid code point.");
                state = "relative slash";
              } else if ("?" == c) {
                this._host = base._host;
                this._port = base._port;
                this._path = base._path.slice();
                this._query = "?";
                this._username = base._username;
                this._password = base._password;
                state = "query";
              } else if ("#" == c) {
                this._host = base._host;
                this._port = base._port;
                this._path = base._path.slice();
                this._query = base._query;
                this._fragment = "#";
                this._username = base._username;
                this._password = base._password;
                state = "fragment";
              } else {
                var nextC = input[cursor + 1];
                var nextNextC = input[cursor + 2];
                if ("file" != this._scheme || !ALPHA.test(c) || nextC != ":" && nextC != "|" || EOF != nextNextC && "/" != nextNextC && "\\" != nextNextC && "?" != nextNextC && "#" != nextNextC) {
                  this._host = base._host;
                  this._port = base._port;
                  this._username = base._username;
                  this._password = base._password;
                  this._path = base._path.slice();
                  this._path.pop();
                }
                state = "relative path";
                continue;
              }
              break;
            case "relative slash":
              if ("/" == c || "\\" == c) {
                if ("\\" == c) {
                  err("\\ is an invalid code point.");
                }
                if ("file" == this._scheme) {
                  state = "file host";
                } else {
                  state = "authority ignore slashes";
                }
              } else {
                if ("file" != this._scheme) {
                  this._host = base._host;
                  this._port = base._port;
                  this._username = base._username;
                  this._password = base._password;
                }
                state = "relative path";
                continue;
              }
              break;
            case "authority first slash":
              if ("/" == c) {
                state = "authority second slash";
              } else {
                err("Expected '/', got: " + c);
                state = "authority ignore slashes";
                continue;
              }
              break;
            case "authority second slash":
              state = "authority ignore slashes";
              if ("/" != c) {
                err("Expected '/', got: " + c);
                continue;
              }
              break;
            case "authority ignore slashes":
              if ("/" != c && "\\" != c) {
                state = "authority";
                continue;
              } else {
                err("Expected authority, got: " + c);
              }
              break;
            case "authority":
              if ("@" == c) {
                if (seenAt) {
                  err("@ already seen.");
                  buffer += "%40";
                }
                seenAt = true;
                for (var i = 0; i < buffer.length; i++) {
                  var cp = buffer[i];
                  if ("	" == cp || "\n" == cp || "\r" == cp) {
                    err("Invalid whitespace in authority.");
                    continue;
                  }
                  if (":" == cp && null === this._password) {
                    this._password = "";
                    continue;
                  }
                  var tempC = percentEscape(cp);
                  null !== this._password ? this._password += tempC : this._username += tempC;
                }
                buffer = "";
              } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
                cursor -= buffer.length;
                buffer = "";
                state = "host";
                continue;
              } else {
                buffer += c;
              }
              break;
            case "file host":
              if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
                if (buffer.length == 2 && ALPHA.test(buffer[0]) && (buffer[1] == ":" || buffer[1] == "|")) {
                  state = "relative path";
                } else if (buffer.length == 0) {
                  state = "relative path start";
                } else {
                  this._host = IDNAToASCII.call(this, buffer);
                  buffer = "";
                  state = "relative path start";
                }
                continue;
              } else if ("	" == c || "\n" == c || "\r" == c) {
                err("Invalid whitespace in file host.");
              } else {
                buffer += c;
              }
              break;
            case "host":
            case "hostname":
              if (":" == c && !seenBracket) {
                this._host = IDNAToASCII.call(this, buffer);
                buffer = "";
                state = "port";
                if ("hostname" == stateOverride) {
                  break loop;
                }
              } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
                this._host = IDNAToASCII.call(this, buffer);
                buffer = "";
                state = "relative path start";
                if (stateOverride) {
                  break loop;
                }
                continue;
              } else if ("	" != c && "\n" != c && "\r" != c) {
                if ("[" == c) {
                  seenBracket = true;
                } else if ("]" == c) {
                  seenBracket = false;
                }
                buffer += c;
              } else {
                err("Invalid code point in host/hostname: " + c);
              }
              break;
            case "port":
              if (/[0-9]/.test(c)) {
                buffer += c;
              } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c || stateOverride) {
                if ("" != buffer) {
                  var temp = parseInt(buffer, 10);
                  if (temp != relative[this._scheme]) {
                    this._port = temp + "";
                  }
                  buffer = "";
                }
                if (stateOverride) {
                  break loop;
                }
                state = "relative path start";
                continue;
              } else if ("	" == c || "\n" == c || "\r" == c) {
                err("Invalid code point in port: " + c);
              } else {
                invalid.call(this);
              }
              break;
            case "relative path start":
              if ("\\" == c)
                err("'\\' not allowed in path.");
              state = "relative path";
              if ("/" != c && "\\" != c) {
                continue;
              }
              break;
            case "relative path":
              if (EOF == c || "/" == c || "\\" == c || !stateOverride && ("?" == c || "#" == c)) {
                if ("\\" == c) {
                  err("\\ not allowed in relative path.");
                }
                var tmp;
                if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
                  buffer = tmp;
                }
                if (".." == buffer) {
                  this._path.pop();
                  if ("/" != c && "\\" != c) {
                    this._path.push("");
                  }
                } else if ("." == buffer && "/" != c && "\\" != c) {
                  this._path.push("");
                } else if ("." != buffer) {
                  if ("file" == this._scheme && this._path.length == 0 && buffer.length == 2 && ALPHA.test(buffer[0]) && buffer[1] == "|") {
                    buffer = buffer[0] + ":";
                  }
                  this._path.push(buffer);
                }
                buffer = "";
                if ("?" == c) {
                  this._query = "?";
                  state = "query";
                } else if ("#" == c) {
                  this._fragment = "#";
                  state = "fragment";
                }
              } else if ("	" != c && "\n" != c && "\r" != c) {
                buffer += percentEscape(c);
              }
              break;
            case "query":
              if (!stateOverride && "#" == c) {
                this._fragment = "#";
                state = "fragment";
              } else if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
                this._query += percentEscapeQuery(c);
              }
              break;
            case "fragment":
              if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
                this._fragment += c;
              }
              break;
          }
          cursor++;
        }
      }
      function clear() {
        this._scheme = "";
        this._schemeData = "";
        this._username = "";
        this._password = null;
        this._host = "";
        this._port = "";
        this._path = [];
        this._query = "";
        this._fragment = "";
        this._isInvalid = false;
        this._isRelative = false;
      }
      function jURL(url, base) {
        if (base !== undefined && !(base instanceof jURL))
          base = new jURL(String(base));
        this._url = url;
        clear.call(this);
        var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
        parse.call(this, input, null, base);
      }
      jURL.prototype = {
        toString: function() {
          return this.href;
        },
        get href() {
          if (this._isInvalid)
            return this._url;
          var authority = "";
          if ("" != this._username || null != this._password) {
            authority = this._username + (null != this._password ? ":" + this._password : "") + "@";
          }
          return this.protocol + (this._isRelative ? "//" + authority + this.host : "") + this.pathname + this._query + this._fragment;
        },
        set href(href) {
          clear.call(this);
          parse.call(this, href);
        },
        get protocol() {
          return this._scheme + ":";
        },
        set protocol(protocol) {
          if (this._isInvalid)
            return;
          parse.call(this, protocol + ":", "scheme start");
        },
        get host() {
          return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host;
        },
        set host(host) {
          if (this._isInvalid || !this._isRelative)
            return;
          parse.call(this, host, "host");
        },
        get hostname() {
          return this._host;
        },
        set hostname(hostname) {
          if (this._isInvalid || !this._isRelative)
            return;
          parse.call(this, hostname, "hostname");
        },
        get port() {
          return this._port;
        },
        set port(port) {
          if (this._isInvalid || !this._isRelative)
            return;
          parse.call(this, port, "port");
        },
        get pathname() {
          return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData;
        },
        set pathname(pathname) {
          if (this._isInvalid || !this._isRelative)
            return;
          this._path = [];
          parse.call(this, pathname, "relative path start");
        },
        get search() {
          return this._isInvalid || !this._query || "?" == this._query ? "" : this._query;
        },
        set search(search) {
          if (this._isInvalid || !this._isRelative)
            return;
          this._query = "?";
          if ("?" == search[0])
            search = search.slice(1);
          parse.call(this, search, "query");
        },
        get hash() {
          return this._isInvalid || !this._fragment || "#" == this._fragment ? "" : this._fragment;
        },
        set hash(hash) {
          if (this._isInvalid)
            return;
          this._fragment = "#";
          if ("#" == hash[0])
            hash = hash.slice(1);
          parse.call(this, hash, "fragment");
        },
        get origin() {
          var host;
          if (this._isInvalid || !this._scheme) {
            return "";
          }
          switch (this._scheme) {
            case "data":
            case "file":
            case "javascript":
            case "mailto":
              return "null";
          }
          host = this.host;
          if (!host) {
            return "";
          }
          return this._scheme + "://" + host;
        }
      };
      var OriginalURL = scope.URL;
      if (OriginalURL) {
        jURL.createObjectURL = function(blob) {
          return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
        };
        jURL.revokeObjectURL = function(url) {
          OriginalURL.revokeObjectURL(url);
        };
      }
      scope.URL = jURL;
    })(this);
    (function(global) {
      var registrationsTable = new WeakMap();
      var setImmediate;
      if (/Trident|Edge/.test(navigator.userAgent)) {
        setImmediate = setTimeout;
      } else if (window.setImmediate) {
        setImmediate = window.setImmediate;
      } else {
        var setImmediateQueue = [];
        var sentinel = String(Math.random());
        window.addEventListener("message", function(e) {
          if (e.data === sentinel) {
            var queue = setImmediateQueue;
            setImmediateQueue = [];
            queue.forEach(function(func) {
              func();
            });
          }
        });
        setImmediate = function(func) {
          setImmediateQueue.push(func);
          window.postMessage(sentinel, "*");
        };
      }
      var isScheduled = false;
      var scheduledObservers = [];
      function scheduleCallback(observer) {
        scheduledObservers.push(observer);
        if (!isScheduled) {
          isScheduled = true;
          setImmediate(dispatchCallbacks);
        }
      }
      function wrapIfNeeded(node) {
        return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(node) || node;
      }
      function dispatchCallbacks() {
        isScheduled = false;
        var observers = scheduledObservers;
        scheduledObservers = [];
        observers.sort(function(o1, o2) {
          return o1.uid_ - o2.uid_;
        });
        var anyNonEmpty = false;
        observers.forEach(function(observer) {
          var queue = observer.takeRecords();
          removeTransientObserversFor(observer);
          if (queue.length) {
            observer.callback_(queue, observer);
            anyNonEmpty = true;
          }
        });
        if (anyNonEmpty)
          dispatchCallbacks();
      }
      function removeTransientObserversFor(observer) {
        observer.nodes_.forEach(function(node) {
          var registrations = registrationsTable.get(node);
          if (!registrations)
            return;
          registrations.forEach(function(registration) {
            if (registration.observer === observer)
              registration.removeTransientObservers();
          });
        });
      }
      function forEachAncestorAndObserverEnqueueRecord(target, callback) {
        for (var node = target; node; node = node.parentNode) {
          var registrations = registrationsTable.get(node);
          if (registrations) {
            for (var j = 0; j < registrations.length; j++) {
              var registration = registrations[j];
              var options = registration.options;
              if (node !== target && !options.subtree)
                continue;
              var record = callback(options);
              if (record)
                registration.enqueue(record);
            }
          }
        }
      }
      var uidCounter = 0;
      function JsMutationObserver(callback) {
        this.callback_ = callback;
        this.nodes_ = [];
        this.records_ = [];
        this.uid_ = ++uidCounter;
      }
      JsMutationObserver.prototype = {
        observe: function(target, options) {
          target = wrapIfNeeded(target);
          if (!options.childList && !options.attributes && !options.characterData || options.attributeOldValue && !options.attributes || options.attributeFilter && options.attributeFilter.length && !options.attributes || options.characterDataOldValue && !options.characterData) {
            throw new SyntaxError();
          }
          var registrations = registrationsTable.get(target);
          if (!registrations)
            registrationsTable.set(target, registrations = []);
          var registration;
          for (var i = 0; i < registrations.length; i++) {
            if (registrations[i].observer === this) {
              registration = registrations[i];
              registration.removeListeners();
              registration.options = options;
              break;
            }
          }
          if (!registration) {
            registration = new Registration(this, target, options);
            registrations.push(registration);
            this.nodes_.push(target);
          }
          registration.addListeners();
        },
        disconnect: function() {
          this.nodes_.forEach(function(node) {
            var registrations = registrationsTable.get(node);
            for (var i = 0; i < registrations.length; i++) {
              var registration = registrations[i];
              if (registration.observer === this) {
                registration.removeListeners();
                registrations.splice(i, 1);
                break;
              }
            }
          }, this);
          this.records_ = [];
        },
        takeRecords: function() {
          var copyOfRecords = this.records_;
          this.records_ = [];
          return copyOfRecords;
        }
      };
      function MutationRecord(type, target) {
        this.type = type;
        this.target = target;
        this.addedNodes = [];
        this.removedNodes = [];
        this.previousSibling = null;
        this.nextSibling = null;
        this.attributeName = null;
        this.attributeNamespace = null;
        this.oldValue = null;
      }
      function copyMutationRecord(original) {
        var record = new MutationRecord(original.type, original.target);
        record.addedNodes = original.addedNodes.slice();
        record.removedNodes = original.removedNodes.slice();
        record.previousSibling = original.previousSibling;
        record.nextSibling = original.nextSibling;
        record.attributeName = original.attributeName;
        record.attributeNamespace = original.attributeNamespace;
        record.oldValue = original.oldValue;
        return record;
      }
      var currentRecord,
          recordWithOldValue;
      function getRecord(type, target) {
        return currentRecord = new MutationRecord(type, target);
      }
      function getRecordWithOldValue(oldValue) {
        if (recordWithOldValue)
          return recordWithOldValue;
        recordWithOldValue = copyMutationRecord(currentRecord);
        recordWithOldValue.oldValue = oldValue;
        return recordWithOldValue;
      }
      function clearRecords() {
        currentRecord = recordWithOldValue = undefined;
      }
      function recordRepresentsCurrentMutation(record) {
        return record === recordWithOldValue || record === currentRecord;
      }
      function selectRecord(lastRecord, newRecord) {
        if (lastRecord === newRecord)
          return lastRecord;
        if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord))
          return recordWithOldValue;
        return null;
      }
      function Registration(observer, target, options) {
        this.observer = observer;
        this.target = target;
        this.options = options;
        this.transientObservedNodes = [];
      }
      Registration.prototype = {
        enqueue: function(record) {
          var records = this.observer.records_;
          var length = records.length;
          if (records.length > 0) {
            var lastRecord = records[length - 1];
            var recordToReplaceLast = selectRecord(lastRecord, record);
            if (recordToReplaceLast) {
              records[length - 1] = recordToReplaceLast;
              return;
            }
          } else {
            scheduleCallback(this.observer);
          }
          records[length] = record;
        },
        addListeners: function() {
          this.addListeners_(this.target);
        },
        addListeners_: function(node) {
          var options = this.options;
          if (options.attributes)
            node.addEventListener("DOMAttrModified", this, true);
          if (options.characterData)
            node.addEventListener("DOMCharacterDataModified", this, true);
          if (options.childList)
            node.addEventListener("DOMNodeInserted", this, true);
          if (options.childList || options.subtree)
            node.addEventListener("DOMNodeRemoved", this, true);
        },
        removeListeners: function() {
          this.removeListeners_(this.target);
        },
        removeListeners_: function(node) {
          var options = this.options;
          if (options.attributes)
            node.removeEventListener("DOMAttrModified", this, true);
          if (options.characterData)
            node.removeEventListener("DOMCharacterDataModified", this, true);
          if (options.childList)
            node.removeEventListener("DOMNodeInserted", this, true);
          if (options.childList || options.subtree)
            node.removeEventListener("DOMNodeRemoved", this, true);
        },
        addTransientObserver: function(node) {
          if (node === this.target)
            return;
          this.addListeners_(node);
          this.transientObservedNodes.push(node);
          var registrations = registrationsTable.get(node);
          if (!registrations)
            registrationsTable.set(node, registrations = []);
          registrations.push(this);
        },
        removeTransientObservers: function() {
          var transientObservedNodes = this.transientObservedNodes;
          this.transientObservedNodes = [];
          transientObservedNodes.forEach(function(node) {
            this.removeListeners_(node);
            var registrations = registrationsTable.get(node);
            for (var i = 0; i < registrations.length; i++) {
              if (registrations[i] === this) {
                registrations.splice(i, 1);
                break;
              }
            }
          }, this);
        },
        handleEvent: function(e) {
          e.stopImmediatePropagation();
          switch (e.type) {
            case "DOMAttrModified":
              var name = e.attrName;
              var namespace = e.relatedNode.namespaceURI;
              var target = e.target;
              var record = new getRecord("attributes", target);
              record.attributeName = name;
              record.attributeNamespace = namespace;
              var oldValue = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
              forEachAncestorAndObserverEnqueueRecord(target, function(options) {
                if (!options.attributes)
                  return;
                if (options.attributeFilter && options.attributeFilter.length && options.attributeFilter.indexOf(name) === -1 && options.attributeFilter.indexOf(namespace) === -1) {
                  return;
                }
                if (options.attributeOldValue)
                  return getRecordWithOldValue(oldValue);
                return record;
              });
              break;
            case "DOMCharacterDataModified":
              var target = e.target;
              var record = getRecord("characterData", target);
              var oldValue = e.prevValue;
              forEachAncestorAndObserverEnqueueRecord(target, function(options) {
                if (!options.characterData)
                  return;
                if (options.characterDataOldValue)
                  return getRecordWithOldValue(oldValue);
                return record;
              });
              break;
            case "DOMNodeRemoved":
              this.addTransientObserver(e.target);
            case "DOMNodeInserted":
              var changedNode = e.target;
              var addedNodes,
                  removedNodes;
              if (e.type === "DOMNodeInserted") {
                addedNodes = [changedNode];
                removedNodes = [];
              } else {
                addedNodes = [];
                removedNodes = [changedNode];
              }
              var previousSibling = changedNode.previousSibling;
              var nextSibling = changedNode.nextSibling;
              var record = getRecord("childList", e.target.parentNode);
              record.addedNodes = addedNodes;
              record.removedNodes = removedNodes;
              record.previousSibling = previousSibling;
              record.nextSibling = nextSibling;
              forEachAncestorAndObserverEnqueueRecord(e.relatedNode, function(options) {
                if (!options.childList)
                  return;
                return record;
              });
          }
          clearRecords();
        }
      };
      global.JsMutationObserver = JsMutationObserver;
      if (!global.MutationObserver)
        global.MutationObserver = JsMutationObserver;
    })(window);
    window.HTMLImports = window.HTMLImports || {flags: {}};
    (function(scope) {
      var IMPORT_LINK_TYPE = "import";
      var useNative = Boolean(IMPORT_LINK_TYPE in document.createElement("link"));
      var hasShadowDOMPolyfill = Boolean(window.ShadowDOMPolyfill);
      var wrap = function(node) {
        return hasShadowDOMPolyfill ? window.ShadowDOMPolyfill.wrapIfNeeded(node) : node;
      };
      var rootDocument = wrap(document);
      var currentScriptDescriptor = {
        get: function() {
          var script = window.HTMLImports.currentScript || document.currentScript || (document.readyState !== "complete" ? document.scripts[document.scripts.length - 1] : null);
          return wrap(script);
        },
        configurable: true
      };
      Object.defineProperty(document, "_currentScript", currentScriptDescriptor);
      Object.defineProperty(rootDocument, "_currentScript", currentScriptDescriptor);
      var isIE = /Trident/.test(navigator.userAgent);
      function whenReady(callback, doc) {
        doc = doc || rootDocument;
        whenDocumentReady(function() {
          watchImportsLoad(callback, doc);
        }, doc);
      }
      var requiredReadyState = isIE ? "complete" : "interactive";
      var READY_EVENT = "readystatechange";
      function isDocumentReady(doc) {
        return doc.readyState === "complete" || doc.readyState === requiredReadyState;
      }
      function whenDocumentReady(callback, doc) {
        if (!isDocumentReady(doc)) {
          var checkReady = function() {
            if (doc.readyState === "complete" || doc.readyState === requiredReadyState) {
              doc.removeEventListener(READY_EVENT, checkReady);
              whenDocumentReady(callback, doc);
            }
          };
          doc.addEventListener(READY_EVENT, checkReady);
        } else if (callback) {
          callback();
        }
      }
      function markTargetLoaded(event) {
        event.target.__loaded = true;
      }
      function watchImportsLoad(callback, doc) {
        var imports = doc.querySelectorAll("link[rel=import]");
        var parsedCount = 0,
            importCount = imports.length,
            newImports = [],
            errorImports = [];
        function checkDone() {
          if (parsedCount == importCount && callback) {
            callback({
              allImports: imports,
              loadedImports: newImports,
              errorImports: errorImports
            });
          }
        }
        function loadedImport(e) {
          markTargetLoaded(e);
          newImports.push(this);
          parsedCount++;
          checkDone();
        }
        function errorLoadingImport(e) {
          errorImports.push(this);
          parsedCount++;
          checkDone();
        }
        if (importCount) {
          for (var i = 0,
              imp; i < importCount && (imp = imports[i]); i++) {
            if (isImportLoaded(imp)) {
              parsedCount++;
              checkDone();
            } else {
              imp.addEventListener("load", loadedImport);
              imp.addEventListener("error", errorLoadingImport);
            }
          }
        } else {
          checkDone();
        }
      }
      function isImportLoaded(link) {
        return useNative ? link.__loaded || link.import && link.import.readyState !== "loading" : link.__importParsed;
      }
      if (useNative) {
        new MutationObserver(function(mxns) {
          for (var i = 0,
              l = mxns.length,
              m; i < l && (m = mxns[i]); i++) {
            if (m.addedNodes) {
              handleImports(m.addedNodes);
            }
          }
        }).observe(document.head, {childList: true});
        function handleImports(nodes) {
          for (var i = 0,
              l = nodes.length,
              n; i < l && (n = nodes[i]); i++) {
            if (isImport(n)) {
              handleImport(n);
            }
          }
        }
        function isImport(element) {
          return element.localName === "link" && element.rel === "import";
        }
        function handleImport(element) {
          var loaded = element.import;
          if (loaded) {
            markTargetLoaded({target: element});
          } else {
            element.addEventListener("load", markTargetLoaded);
            element.addEventListener("error", markTargetLoaded);
          }
        }
        (function() {
          if (document.readyState === "loading") {
            var imports = document.querySelectorAll("link[rel=import]");
            for (var i = 0,
                l = imports.length,
                imp; i < l && (imp = imports[i]); i++) {
              handleImport(imp);
            }
          }
        })();
      }
      whenReady(function(detail) {
        window.HTMLImports.ready = true;
        window.HTMLImports.readyTime = new Date().getTime();
        var evt = rootDocument.createEvent("CustomEvent");
        evt.initCustomEvent("HTMLImportsLoaded", true, true, detail);
        rootDocument.dispatchEvent(evt);
      });
      scope.IMPORT_LINK_TYPE = IMPORT_LINK_TYPE;
      scope.useNative = useNative;
      scope.rootDocument = rootDocument;
      scope.whenReady = whenReady;
      scope.isIE = isIE;
    })(window.HTMLImports);
    (function(scope) {
      var modules = [];
      var addModule = function(module) {
        modules.push(module);
      };
      var initializeModules = function() {
        modules.forEach(function(module) {
          module(scope);
        });
      };
      scope.addModule = addModule;
      scope.initializeModules = initializeModules;
    })(window.HTMLImports);
    window.HTMLImports.addModule(function(scope) {
      var CSS_URL_REGEXP = /(url\()([^)]*)(\))/g;
      var CSS_IMPORT_REGEXP = /(@import[\s]+(?!url\())([^;]*)(;)/g;
      var path = {
        resolveUrlsInStyle: function(style, linkUrl) {
          var doc = style.ownerDocument;
          var resolver = doc.createElement("a");
          style.textContent = this.resolveUrlsInCssText(style.textContent, linkUrl, resolver);
          return style;
        },
        resolveUrlsInCssText: function(cssText, linkUrl, urlObj) {
          var r = this.replaceUrls(cssText, urlObj, linkUrl, CSS_URL_REGEXP);
          r = this.replaceUrls(r, urlObj, linkUrl, CSS_IMPORT_REGEXP);
          return r;
        },
        replaceUrls: function(text, urlObj, linkUrl, regexp) {
          return text.replace(regexp, function(m, pre, url, post) {
            var urlPath = url.replace(/["']/g, "");
            if (linkUrl) {
              urlPath = new URL(urlPath, linkUrl).href;
            }
            urlObj.href = urlPath;
            urlPath = urlObj.href;
            return pre + "'" + urlPath + "'" + post;
          });
        }
      };
      scope.path = path;
    });
    window.HTMLImports.addModule(function(scope) {
      var xhr = {
        async: true,
        ok: function(request) {
          return request.status >= 200 && request.status < 300 || request.status === 304 || request.status === 0;
        },
        load: function(url, next, nextContext) {
          var request = new XMLHttpRequest();
          if (scope.flags.debug || scope.flags.bust) {
            url += "?" + Math.random();
          }
          request.open("GET", url, xhr.async);
          request.addEventListener("readystatechange", function(e) {
            if (request.readyState === 4) {
              var locationHeader = request.getResponseHeader("Location");
              var redirectedUrl = null;
              if (locationHeader) {
                var redirectedUrl = locationHeader.substr(0, 1) === "/" ? location.origin + locationHeader : locationHeader;
              }
              next.call(nextContext, !xhr.ok(request) && request, request.response || request.responseText, redirectedUrl);
            }
          });
          request.send();
          return request;
        },
        loadDocument: function(url, next, nextContext) {
          this.load(url, next, nextContext).responseType = "document";
        }
      };
      scope.xhr = xhr;
    });
    window.HTMLImports.addModule(function(scope) {
      var xhr = scope.xhr;
      var flags = scope.flags;
      var Loader = function(onLoad, onComplete) {
        this.cache = {};
        this.onload = onLoad;
        this.oncomplete = onComplete;
        this.inflight = 0;
        this.pending = {};
      };
      Loader.prototype = {
        addNodes: function(nodes) {
          this.inflight += nodes.length;
          for (var i = 0,
              l = nodes.length,
              n; i < l && (n = nodes[i]); i++) {
            this.require(n);
          }
          this.checkDone();
        },
        addNode: function(node) {
          this.inflight++;
          this.require(node);
          this.checkDone();
        },
        require: function(elt) {
          var url = elt.src || elt.href;
          elt.__nodeUrl = url;
          if (!this.dedupe(url, elt)) {
            this.fetch(url, elt);
          }
        },
        dedupe: function(url, elt) {
          if (this.pending[url]) {
            this.pending[url].push(elt);
            return true;
          }
          var resource;
          if (this.cache[url]) {
            this.onload(url, elt, this.cache[url]);
            this.tail();
            return true;
          }
          this.pending[url] = [elt];
          return false;
        },
        fetch: function(url, elt) {
          flags.load && console.log("fetch", url, elt);
          if (!url) {
            setTimeout(function() {
              this.receive(url, elt, {error: "href must be specified"}, null);
            }.bind(this), 0);
          } else if (url.match(/^data:/)) {
            var pieces = url.split(",");
            var header = pieces[0];
            var body = pieces[1];
            if (header.indexOf(";base64") > -1) {
              body = atob(body);
            } else {
              body = decodeURIComponent(body);
            }
            setTimeout(function() {
              this.receive(url, elt, null, body);
            }.bind(this), 0);
          } else {
            var receiveXhr = function(err, resource, redirectedUrl) {
              this.receive(url, elt, err, resource, redirectedUrl);
            }.bind(this);
            xhr.load(url, receiveXhr);
          }
        },
        receive: function(url, elt, err, resource, redirectedUrl) {
          this.cache[url] = resource;
          var $p = this.pending[url];
          for (var i = 0,
              l = $p.length,
              p; i < l && (p = $p[i]); i++) {
            this.onload(url, p, resource, err, redirectedUrl);
            this.tail();
          }
          this.pending[url] = null;
        },
        tail: function() {
          --this.inflight;
          this.checkDone();
        },
        checkDone: function() {
          if (!this.inflight) {
            this.oncomplete();
          }
        }
      };
      scope.Loader = Loader;
    });
    window.HTMLImports.addModule(function(scope) {
      var Observer = function(addCallback) {
        this.addCallback = addCallback;
        this.mo = new MutationObserver(this.handler.bind(this));
      };
      Observer.prototype = {
        handler: function(mutations) {
          for (var i = 0,
              l = mutations.length,
              m; i < l && (m = mutations[i]); i++) {
            if (m.type === "childList" && m.addedNodes.length) {
              this.addedNodes(m.addedNodes);
            }
          }
        },
        addedNodes: function(nodes) {
          if (this.addCallback) {
            this.addCallback(nodes);
          }
          for (var i = 0,
              l = nodes.length,
              n,
              loading; i < l && (n = nodes[i]); i++) {
            if (n.children && n.children.length) {
              this.addedNodes(n.children);
            }
          }
        },
        observe: function(root) {
          this.mo.observe(root, {
            childList: true,
            subtree: true
          });
        }
      };
      scope.Observer = Observer;
    });
    window.HTMLImports.addModule(function(scope) {
      var path = scope.path;
      var rootDocument = scope.rootDocument;
      var flags = scope.flags;
      var isIE = scope.isIE;
      var IMPORT_LINK_TYPE = scope.IMPORT_LINK_TYPE;
      var IMPORT_SELECTOR = "link[rel=" + IMPORT_LINK_TYPE + "]";
      var importParser = {
        documentSelectors: IMPORT_SELECTOR,
        importsSelectors: [IMPORT_SELECTOR, "link[rel=stylesheet]:not([type])", "style:not([type])", "script:not([type])", 'script[type="application/javascript"]', 'script[type="text/javascript"]'].join(","),
        map: {
          link: "parseLink",
          script: "parseScript",
          style: "parseStyle"
        },
        dynamicElements: [],
        parseNext: function() {
          var next = this.nextToParse();
          if (next) {
            this.parse(next);
          }
        },
        parse: function(elt) {
          if (this.isParsed(elt)) {
            flags.parse && console.log("[%s] is already parsed", elt.localName);
            return;
          }
          var fn = this[this.map[elt.localName]];
          if (fn) {
            this.markParsing(elt);
            fn.call(this, elt);
          }
        },
        parseDynamic: function(elt, quiet) {
          this.dynamicElements.push(elt);
          if (!quiet) {
            this.parseNext();
          }
        },
        markParsing: function(elt) {
          flags.parse && console.log("parsing", elt);
          this.parsingElement = elt;
        },
        markParsingComplete: function(elt) {
          elt.__importParsed = true;
          this.markDynamicParsingComplete(elt);
          if (elt.__importElement) {
            elt.__importElement.__importParsed = true;
            this.markDynamicParsingComplete(elt.__importElement);
          }
          this.parsingElement = null;
          flags.parse && console.log("completed", elt);
        },
        markDynamicParsingComplete: function(elt) {
          var i = this.dynamicElements.indexOf(elt);
          if (i >= 0) {
            this.dynamicElements.splice(i, 1);
          }
        },
        parseImport: function(elt) {
          elt.import = elt.__doc;
          if (window.HTMLImports.__importsParsingHook) {
            window.HTMLImports.__importsParsingHook(elt);
          }
          if (elt.import) {
            elt.import.__importParsed = true;
          }
          this.markParsingComplete(elt);
          if (elt.__resource && !elt.__error) {
            elt.dispatchEvent(new CustomEvent("load", {bubbles: false}));
          } else {
            elt.dispatchEvent(new CustomEvent("error", {bubbles: false}));
          }
          if (elt.__pending) {
            var fn;
            while (elt.__pending.length) {
              fn = elt.__pending.shift();
              if (fn) {
                fn({target: elt});
              }
            }
          }
          this.parseNext();
        },
        parseLink: function(linkElt) {
          if (nodeIsImport(linkElt)) {
            this.parseImport(linkElt);
          } else {
            linkElt.href = linkElt.href;
            this.parseGeneric(linkElt);
          }
        },
        parseStyle: function(elt) {
          var src = elt;
          elt = cloneStyle(elt);
          src.__appliedElement = elt;
          elt.__importElement = src;
          this.parseGeneric(elt);
        },
        parseGeneric: function(elt) {
          this.trackElement(elt);
          this.addElementToDocument(elt);
        },
        rootImportForElement: function(elt) {
          var n = elt;
          while (n.ownerDocument.__importLink) {
            n = n.ownerDocument.__importLink;
          }
          return n;
        },
        addElementToDocument: function(elt) {
          var port = this.rootImportForElement(elt.__importElement || elt);
          port.parentNode.insertBefore(elt, port);
        },
        trackElement: function(elt, callback) {
          var self = this;
          var done = function(e) {
            elt.removeEventListener("load", done);
            elt.removeEventListener("error", done);
            if (callback) {
              callback(e);
            }
            self.markParsingComplete(elt);
            self.parseNext();
          };
          elt.addEventListener("load", done);
          elt.addEventListener("error", done);
          if (isIE && elt.localName === "style") {
            var fakeLoad = false;
            if (elt.textContent.indexOf("@import") == -1) {
              fakeLoad = true;
            } else if (elt.sheet) {
              fakeLoad = true;
              var csr = elt.sheet.cssRules;
              var len = csr ? csr.length : 0;
              for (var i = 0,
                  r; i < len && (r = csr[i]); i++) {
                if (r.type === CSSRule.IMPORT_RULE) {
                  fakeLoad = fakeLoad && Boolean(r.styleSheet);
                }
              }
            }
            if (fakeLoad) {
              setTimeout(function() {
                elt.dispatchEvent(new CustomEvent("load", {bubbles: false}));
              });
            }
          }
        },
        parseScript: function(scriptElt) {
          var script = document.createElement("script");
          script.__importElement = scriptElt;
          script.src = scriptElt.src ? scriptElt.src : generateScriptDataUrl(scriptElt);
          scope.currentScript = scriptElt;
          this.trackElement(script, function(e) {
            if (script.parentNode) {
              script.parentNode.removeChild(script);
            }
            scope.currentScript = null;
          });
          this.addElementToDocument(script);
        },
        nextToParse: function() {
          this._mayParse = [];
          return !this.parsingElement && (this.nextToParseInDoc(rootDocument) || this.nextToParseDynamic());
        },
        nextToParseInDoc: function(doc, link) {
          if (doc && this._mayParse.indexOf(doc) < 0) {
            this._mayParse.push(doc);
            var nodes = doc.querySelectorAll(this.parseSelectorsForNode(doc));
            for (var i = 0,
                l = nodes.length,
                p = 0,
                n; i < l && (n = nodes[i]); i++) {
              if (!this.isParsed(n)) {
                if (this.hasResource(n)) {
                  return nodeIsImport(n) ? this.nextToParseInDoc(n.__doc, n) : n;
                } else {
                  return;
                }
              }
            }
          }
          return link;
        },
        nextToParseDynamic: function() {
          return this.dynamicElements[0];
        },
        parseSelectorsForNode: function(node) {
          var doc = node.ownerDocument || node;
          return doc === rootDocument ? this.documentSelectors : this.importsSelectors;
        },
        isParsed: function(node) {
          return node.__importParsed;
        },
        needsDynamicParsing: function(elt) {
          return this.dynamicElements.indexOf(elt) >= 0;
        },
        hasResource: function(node) {
          if (nodeIsImport(node) && node.__doc === undefined) {
            return false;
          }
          return true;
        }
      };
      function nodeIsImport(elt) {
        return elt.localName === "link" && elt.rel === IMPORT_LINK_TYPE;
      }
      function generateScriptDataUrl(script) {
        var scriptContent = generateScriptContent(script);
        return "data:text/javascript;charset=utf-8," + encodeURIComponent(scriptContent);
      }
      function generateScriptContent(script) {
        return script.textContent + generateSourceMapHint(script);
      }
      function generateSourceMapHint(script) {
        var owner = script.ownerDocument;
        owner.__importedScripts = owner.__importedScripts || 0;
        var moniker = script.ownerDocument.baseURI;
        var num = owner.__importedScripts ? "-" + owner.__importedScripts : "";
        owner.__importedScripts++;
        return "\n//# sourceURL=" + moniker + num + ".js\n";
      }
      function cloneStyle(style) {
        var clone = style.ownerDocument.createElement("style");
        clone.textContent = style.textContent;
        path.resolveUrlsInStyle(clone);
        return clone;
      }
      scope.parser = importParser;
      scope.IMPORT_SELECTOR = IMPORT_SELECTOR;
    });
    window.HTMLImports.addModule(function(scope) {
      var flags = scope.flags;
      var IMPORT_LINK_TYPE = scope.IMPORT_LINK_TYPE;
      var IMPORT_SELECTOR = scope.IMPORT_SELECTOR;
      var rootDocument = scope.rootDocument;
      var Loader = scope.Loader;
      var Observer = scope.Observer;
      var parser = scope.parser;
      var importer = {
        documents: {},
        documentPreloadSelectors: IMPORT_SELECTOR,
        importsPreloadSelectors: [IMPORT_SELECTOR].join(","),
        loadNode: function(node) {
          importLoader.addNode(node);
        },
        loadSubtree: function(parent) {
          var nodes = this.marshalNodes(parent);
          importLoader.addNodes(nodes);
        },
        marshalNodes: function(parent) {
          return parent.querySelectorAll(this.loadSelectorsForNode(parent));
        },
        loadSelectorsForNode: function(node) {
          var doc = node.ownerDocument || node;
          return doc === rootDocument ? this.documentPreloadSelectors : this.importsPreloadSelectors;
        },
        loaded: function(url, elt, resource, err, redirectedUrl) {
          flags.load && console.log("loaded", url, elt);
          elt.__resource = resource;
          elt.__error = err;
          if (isImportLink(elt)) {
            var doc = this.documents[url];
            if (doc === undefined) {
              doc = err ? null : makeDocument(resource, redirectedUrl || url);
              if (doc) {
                doc.__importLink = elt;
                this.bootDocument(doc);
              }
              this.documents[url] = doc;
            }
            elt.__doc = doc;
          }
          parser.parseNext();
        },
        bootDocument: function(doc) {
          this.loadSubtree(doc);
          this.observer.observe(doc);
          parser.parseNext();
        },
        loadedAll: function() {
          parser.parseNext();
        }
      };
      var importLoader = new Loader(importer.loaded.bind(importer), importer.loadedAll.bind(importer));
      importer.observer = new Observer();
      function isImportLink(elt) {
        return isLinkRel(elt, IMPORT_LINK_TYPE);
      }
      function isLinkRel(elt, rel) {
        return elt.localName === "link" && elt.getAttribute("rel") === rel;
      }
      function hasBaseURIAccessor(doc) {
        return !!Object.getOwnPropertyDescriptor(doc, "baseURI");
      }
      function makeDocument(resource, url) {
        var doc = document.implementation.createHTMLDocument(IMPORT_LINK_TYPE);
        doc._URL = url;
        var base = doc.createElement("base");
        base.setAttribute("href", url);
        if (!doc.baseURI && !hasBaseURIAccessor(doc)) {
          Object.defineProperty(doc, "baseURI", {value: url});
        }
        var meta = doc.createElement("meta");
        meta.setAttribute("charset", "utf-8");
        doc.head.appendChild(meta);
        doc.head.appendChild(base);
        doc.body.innerHTML = resource;
        if (window.HTMLTemplateElement && HTMLTemplateElement.bootstrap) {
          HTMLTemplateElement.bootstrap(doc);
        }
        return doc;
      }
      if (!document.baseURI) {
        var baseURIDescriptor = {
          get: function() {
            var base = document.querySelector("base");
            return base ? base.href : window.location.href;
          },
          configurable: true
        };
        Object.defineProperty(document, "baseURI", baseURIDescriptor);
        Object.defineProperty(rootDocument, "baseURI", baseURIDescriptor);
      }
      scope.importer = importer;
      scope.importLoader = importLoader;
    });
    window.HTMLImports.addModule(function(scope) {
      var parser = scope.parser;
      var importer = scope.importer;
      var dynamic = {
        added: function(nodes) {
          var owner,
              parsed,
              loading;
          for (var i = 0,
              l = nodes.length,
              n; i < l && (n = nodes[i]); i++) {
            if (!owner) {
              owner = n.ownerDocument;
              parsed = parser.isParsed(owner);
            }
            loading = this.shouldLoadNode(n);
            if (loading) {
              importer.loadNode(n);
            }
            if (this.shouldParseNode(n) && parsed) {
              parser.parseDynamic(n, loading);
            }
          }
        },
        shouldLoadNode: function(node) {
          return node.nodeType === 1 && matches.call(node, importer.loadSelectorsForNode(node));
        },
        shouldParseNode: function(node) {
          return node.nodeType === 1 && matches.call(node, parser.parseSelectorsForNode(node));
        }
      };
      importer.observer.addCallback = dynamic.added.bind(dynamic);
      var matches = HTMLElement.prototype.matches || HTMLElement.prototype.matchesSelector || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;
    });
    (function(scope) {
      var initializeModules = scope.initializeModules;
      var isIE = scope.isIE;
      if (scope.useNative) {
        return;
      }
      if (isIE && typeof window.CustomEvent !== "function") {
        window.CustomEvent = function(inType, params) {
          params = params || {};
          var e = document.createEvent("CustomEvent");
          e.initCustomEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable), params.detail);
          e.preventDefault = function() {
            Object.defineProperty(this, "defaultPrevented", {get: function() {
                return true;
              }});
          };
          return e;
        };
        window.CustomEvent.prototype = window.Event.prototype;
      }
      initializeModules();
      var rootDocument = scope.rootDocument;
      function bootstrap() {
        window.HTMLImports.importer.bootDocument(rootDocument);
      }
      if (document.readyState === "complete" || document.readyState === "interactive" && !window.attachEvent) {
        bootstrap();
      } else {
        document.addEventListener("DOMContentLoaded", bootstrap);
      }
    })(window.HTMLImports);
    window.CustomElements = window.CustomElements || {flags: {}};
    (function(scope) {
      var flags = scope.flags;
      var modules = [];
      var addModule = function(module) {
        modules.push(module);
      };
      var initializeModules = function() {
        modules.forEach(function(module) {
          module(scope);
        });
      };
      scope.addModule = addModule;
      scope.initializeModules = initializeModules;
      scope.hasNative = Boolean(document.registerElement);
      scope.isIE = /Trident/.test(navigator.userAgent);
      scope.useNative = !flags.register && scope.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || window.HTMLImports.useNative);
    })(window.CustomElements);
    window.CustomElements.addModule(function(scope) {
      var IMPORT_LINK_TYPE = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : "none";
      function forSubtree(node, cb) {
        findAllElements(node, function(e) {
          if (cb(e)) {
            return true;
          }
          forRoots(e, cb);
        });
        forRoots(node, cb);
      }
      function findAllElements(node, find, data) {
        var e = node.firstElementChild;
        if (!e) {
          e = node.firstChild;
          while (e && e.nodeType !== Node.ELEMENT_NODE) {
            e = e.nextSibling;
          }
        }
        while (e) {
          if (find(e, data) !== true) {
            findAllElements(e, find, data);
          }
          e = e.nextElementSibling;
        }
        return null;
      }
      function forRoots(node, cb) {
        var root = node.shadowRoot;
        while (root) {
          forSubtree(root, cb);
          root = root.olderShadowRoot;
        }
      }
      function forDocumentTree(doc, cb) {
        _forDocumentTree(doc, cb, []);
      }
      function _forDocumentTree(doc, cb, processingDocuments) {
        doc = window.wrap(doc);
        if (processingDocuments.indexOf(doc) >= 0) {
          return;
        }
        processingDocuments.push(doc);
        var imports = doc.querySelectorAll("link[rel=" + IMPORT_LINK_TYPE + "]");
        for (var i = 0,
            l = imports.length,
            n; i < l && (n = imports[i]); i++) {
          if (n.import) {
            _forDocumentTree(n.import, cb, processingDocuments);
          }
        }
        cb(doc);
      }
      scope.forDocumentTree = forDocumentTree;
      scope.forSubtree = forSubtree;
    });
    window.CustomElements.addModule(function(scope) {
      var flags = scope.flags;
      var forSubtree = scope.forSubtree;
      var forDocumentTree = scope.forDocumentTree;
      function addedNode(node, isAttached) {
        return added(node, isAttached) || addedSubtree(node, isAttached);
      }
      function added(node, isAttached) {
        if (scope.upgrade(node, isAttached)) {
          return true;
        }
        if (isAttached) {
          attached(node);
        }
      }
      function addedSubtree(node, isAttached) {
        forSubtree(node, function(e) {
          if (added(e, isAttached)) {
            return true;
          }
        });
      }
      var hasPolyfillMutations = !window.MutationObserver || window.MutationObserver === window.JsMutationObserver;
      scope.hasPolyfillMutations = hasPolyfillMutations;
      var isPendingMutations = false;
      var pendingMutations = [];
      function deferMutation(fn) {
        pendingMutations.push(fn);
        if (!isPendingMutations) {
          isPendingMutations = true;
          setTimeout(takeMutations);
        }
      }
      function takeMutations() {
        isPendingMutations = false;
        var $p = pendingMutations;
        for (var i = 0,
            l = $p.length,
            p; i < l && (p = $p[i]); i++) {
          p();
        }
        pendingMutations = [];
      }
      function attached(element) {
        if (hasPolyfillMutations) {
          deferMutation(function() {
            _attached(element);
          });
        } else {
          _attached(element);
        }
      }
      function _attached(element) {
        if (element.__upgraded__ && !element.__attached) {
          element.__attached = true;
          if (element.attachedCallback) {
            element.attachedCallback();
          }
        }
      }
      function detachedNode(node) {
        detached(node);
        forSubtree(node, function(e) {
          detached(e);
        });
      }
      function detached(element) {
        if (hasPolyfillMutations) {
          deferMutation(function() {
            _detached(element);
          });
        } else {
          _detached(element);
        }
      }
      function _detached(element) {
        if (element.__upgraded__ && element.__attached) {
          element.__attached = false;
          if (element.detachedCallback) {
            element.detachedCallback();
          }
        }
      }
      function inDocument(element) {
        var p = element;
        var doc = window.wrap(document);
        while (p) {
          if (p == doc) {
            return true;
          }
          p = p.parentNode || p.nodeType === Node.DOCUMENT_FRAGMENT_NODE && p.host;
        }
      }
      function watchShadow(node) {
        if (node.shadowRoot && !node.shadowRoot.__watched) {
          flags.dom && console.log("watching shadow-root for: ", node.localName);
          var root = node.shadowRoot;
          while (root) {
            observe(root);
            root = root.olderShadowRoot;
          }
        }
      }
      function handler(root, mutations) {
        if (flags.dom) {
          var mx = mutations[0];
          if (mx && mx.type === "childList" && mx.addedNodes) {
            if (mx.addedNodes) {
              var d = mx.addedNodes[0];
              while (d && d !== document && !d.host) {
                d = d.parentNode;
              }
              var u = d && (d.URL || d._URL || d.host && d.host.localName) || "";
              u = u.split("/?").shift().split("/").pop();
            }
          }
          console.group("mutations (%d) [%s]", mutations.length, u || "");
        }
        var isAttached = inDocument(root);
        mutations.forEach(function(mx) {
          if (mx.type === "childList") {
            forEach(mx.addedNodes, function(n) {
              if (!n.localName) {
                return;
              }
              addedNode(n, isAttached);
            });
            forEach(mx.removedNodes, function(n) {
              if (!n.localName) {
                return;
              }
              detachedNode(n);
            });
          }
        });
        flags.dom && console.groupEnd();
      }
      function takeRecords(node) {
        node = window.wrap(node);
        if (!node) {
          node = window.wrap(document);
        }
        while (node.parentNode) {
          node = node.parentNode;
        }
        var observer = node.__observer;
        if (observer) {
          handler(node, observer.takeRecords());
          takeMutations();
        }
      }
      var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
      function observe(inRoot) {
        if (inRoot.__observer) {
          return;
        }
        var observer = new MutationObserver(handler.bind(this, inRoot));
        observer.observe(inRoot, {
          childList: true,
          subtree: true
        });
        inRoot.__observer = observer;
      }
      function upgradeDocument(doc) {
        doc = window.wrap(doc);
        flags.dom && console.group("upgradeDocument: ", doc.baseURI.split("/").pop());
        var isMainDocument = doc === window.wrap(document);
        addedNode(doc, isMainDocument);
        observe(doc);
        flags.dom && console.groupEnd();
      }
      function upgradeDocumentTree(doc) {
        forDocumentTree(doc, upgradeDocument);
      }
      var originalCreateShadowRoot = Element.prototype.createShadowRoot;
      if (originalCreateShadowRoot) {
        Element.prototype.createShadowRoot = function() {
          var root = originalCreateShadowRoot.call(this);
          window.CustomElements.watchShadow(this);
          return root;
        };
      }
      scope.watchShadow = watchShadow;
      scope.upgradeDocumentTree = upgradeDocumentTree;
      scope.upgradeDocument = upgradeDocument;
      scope.upgradeSubtree = addedSubtree;
      scope.upgradeAll = addedNode;
      scope.attached = attached;
      scope.takeRecords = takeRecords;
    });
    window.CustomElements.addModule(function(scope) {
      var flags = scope.flags;
      function upgrade(node, isAttached) {
        if (!node.__upgraded__ && node.nodeType === Node.ELEMENT_NODE) {
          var is = node.getAttribute("is");
          var definition = scope.getRegisteredDefinition(node.localName) || scope.getRegisteredDefinition(is);
          if (definition) {
            if (is && definition.tag == node.localName || !is && !definition.extends) {
              return upgradeWithDefinition(node, definition, isAttached);
            }
          }
        }
      }
      function upgradeWithDefinition(element, definition, isAttached) {
        flags.upgrade && console.group("upgrade:", element.localName);
        if (definition.is) {
          element.setAttribute("is", definition.is);
        }
        implementPrototype(element, definition);
        element.__upgraded__ = true;
        created(element);
        if (isAttached) {
          scope.attached(element);
        }
        scope.upgradeSubtree(element, isAttached);
        flags.upgrade && console.groupEnd();
        return element;
      }
      function implementPrototype(element, definition) {
        if (Object.__proto__) {
          element.__proto__ = definition.prototype;
        } else {
          customMixin(element, definition.prototype, definition.native);
          element.__proto__ = definition.prototype;
        }
      }
      function customMixin(inTarget, inSrc, inNative) {
        var used = {};
        var p = inSrc;
        while (p !== inNative && p !== HTMLElement.prototype) {
          var keys = Object.getOwnPropertyNames(p);
          for (var i = 0,
              k; k = keys[i]; i++) {
            if (!used[k]) {
              Object.defineProperty(inTarget, k, Object.getOwnPropertyDescriptor(p, k));
              used[k] = 1;
            }
          }
          p = Object.getPrototypeOf(p);
        }
      }
      function created(element) {
        if (element.createdCallback) {
          element.createdCallback();
        }
      }
      scope.upgrade = upgrade;
      scope.upgradeWithDefinition = upgradeWithDefinition;
      scope.implementPrototype = implementPrototype;
    });
    window.CustomElements.addModule(function(scope) {
      var isIE = scope.isIE;
      var upgradeDocumentTree = scope.upgradeDocumentTree;
      var upgradeAll = scope.upgradeAll;
      var upgradeWithDefinition = scope.upgradeWithDefinition;
      var implementPrototype = scope.implementPrototype;
      var useNative = scope.useNative;
      function register(name, options) {
        var definition = options || {};
        if (!name) {
          throw new Error("document.registerElement: first argument `name` must not be empty");
        }
        if (name.indexOf("-") < 0) {
          throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(name) + "'.");
        }
        if (isReservedTag(name)) {
          throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(name) + "'. The type name is invalid.");
        }
        if (getRegisteredDefinition(name)) {
          throw new Error("DuplicateDefinitionError: a type with name '" + String(name) + "' is already registered");
        }
        if (!definition.prototype) {
          definition.prototype = Object.create(HTMLElement.prototype);
        }
        definition.__name = name.toLowerCase();
        definition.lifecycle = definition.lifecycle || {};
        definition.ancestry = ancestry(definition.extends);
        resolveTagName(definition);
        resolvePrototypeChain(definition);
        overrideAttributeApi(definition.prototype);
        registerDefinition(definition.__name, definition);
        definition.ctor = generateConstructor(definition);
        definition.ctor.prototype = definition.prototype;
        definition.prototype.constructor = definition.ctor;
        if (scope.ready) {
          upgradeDocumentTree(document);
        }
        return definition.ctor;
      }
      function overrideAttributeApi(prototype) {
        if (prototype.setAttribute._polyfilled) {
          return;
        }
        var setAttribute = prototype.setAttribute;
        prototype.setAttribute = function(name, value) {
          changeAttribute.call(this, name, value, setAttribute);
        };
        var removeAttribute = prototype.removeAttribute;
        prototype.removeAttribute = function(name) {
          changeAttribute.call(this, name, null, removeAttribute);
        };
        prototype.setAttribute._polyfilled = true;
      }
      function changeAttribute(name, value, operation) {
        name = name.toLowerCase();
        var oldValue = this.getAttribute(name);
        operation.apply(this, arguments);
        var newValue = this.getAttribute(name);
        if (this.attributeChangedCallback && newValue !== oldValue) {
          this.attributeChangedCallback(name, oldValue, newValue);
        }
      }
      function isReservedTag(name) {
        for (var i = 0; i < reservedTagList.length; i++) {
          if (name === reservedTagList[i]) {
            return true;
          }
        }
      }
      var reservedTagList = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"];
      function ancestry(extnds) {
        var extendee = getRegisteredDefinition(extnds);
        if (extendee) {
          return ancestry(extendee.extends).concat([extendee]);
        }
        return [];
      }
      function resolveTagName(definition) {
        var baseTag = definition.extends;
        for (var i = 0,
            a; a = definition.ancestry[i]; i++) {
          baseTag = a.is && a.tag;
        }
        definition.tag = baseTag || definition.__name;
        if (baseTag) {
          definition.is = definition.__name;
        }
      }
      function resolvePrototypeChain(definition) {
        if (!Object.__proto__) {
          var nativePrototype = HTMLElement.prototype;
          if (definition.is) {
            var inst = document.createElement(definition.tag);
            nativePrototype = Object.getPrototypeOf(inst);
          }
          var proto = definition.prototype,
              ancestor;
          var foundPrototype = false;
          while (proto) {
            if (proto == nativePrototype) {
              foundPrototype = true;
            }
            ancestor = Object.getPrototypeOf(proto);
            if (ancestor) {
              proto.__proto__ = ancestor;
            }
            proto = ancestor;
          }
          if (!foundPrototype) {
            console.warn(definition.tag + " prototype not found in prototype chain for " + definition.is);
          }
          definition.native = nativePrototype;
        }
      }
      function instantiate(definition) {
        return upgradeWithDefinition(domCreateElement(definition.tag), definition);
      }
      var registry = {};
      function getRegisteredDefinition(name) {
        if (name) {
          return registry[name.toLowerCase()];
        }
      }
      function registerDefinition(name, definition) {
        registry[name] = definition;
      }
      function generateConstructor(definition) {
        return function() {
          return instantiate(definition);
        };
      }
      var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
      function createElementNS(namespace, tag, typeExtension) {
        if (namespace === HTML_NAMESPACE) {
          return createElement(tag, typeExtension);
        } else {
          return domCreateElementNS(namespace, tag);
        }
      }
      function createElement(tag, typeExtension) {
        if (tag) {
          tag = tag.toLowerCase();
        }
        if (typeExtension) {
          typeExtension = typeExtension.toLowerCase();
        }
        var definition = getRegisteredDefinition(typeExtension || tag);
        if (definition) {
          if (tag == definition.tag && typeExtension == definition.is) {
            return new definition.ctor();
          }
          if (!typeExtension && !definition.is) {
            return new definition.ctor();
          }
        }
        var element;
        if (typeExtension) {
          element = createElement(tag);
          element.setAttribute("is", typeExtension);
          return element;
        }
        element = domCreateElement(tag);
        if (tag.indexOf("-") >= 0) {
          implementPrototype(element, HTMLElement);
        }
        return element;
      }
      var domCreateElement = document.createElement.bind(document);
      var domCreateElementNS = document.createElementNS.bind(document);
      var isInstance;
      if (!Object.__proto__ && !useNative) {
        isInstance = function(obj, ctor) {
          if (obj instanceof ctor) {
            return true;
          }
          var p = obj;
          while (p) {
            if (p === ctor.prototype) {
              return true;
            }
            p = p.__proto__;
          }
          return false;
        };
      } else {
        isInstance = function(obj, base) {
          return obj instanceof base;
        };
      }
      function wrapDomMethodToForceUpgrade(obj, methodName) {
        var orig = obj[methodName];
        obj[methodName] = function() {
          var n = orig.apply(this, arguments);
          upgradeAll(n);
          return n;
        };
      }
      wrapDomMethodToForceUpgrade(Node.prototype, "cloneNode");
      wrapDomMethodToForceUpgrade(document, "importNode");
      if (isIE) {
        (function() {
          var importNode = document.importNode;
          document.importNode = function() {
            var n = importNode.apply(document, arguments);
            if (n.nodeType == n.DOCUMENT_FRAGMENT_NODE) {
              var f = document.createDocumentFragment();
              f.appendChild(n);
              return f;
            } else {
              return n;
            }
          };
        })();
      }
      document.registerElement = register;
      document.createElement = createElement;
      document.createElementNS = createElementNS;
      scope.registry = registry;
      scope.instanceof = isInstance;
      scope.reservedTagList = reservedTagList;
      scope.getRegisteredDefinition = getRegisteredDefinition;
      document.register = document.registerElement;
    });
    (function(scope) {
      var useNative = scope.useNative;
      var initializeModules = scope.initializeModules;
      var isIE = scope.isIE;
      if (useNative) {
        var nop = function() {};
        scope.watchShadow = nop;
        scope.upgrade = nop;
        scope.upgradeAll = nop;
        scope.upgradeDocumentTree = nop;
        scope.upgradeSubtree = nop;
        scope.takeRecords = nop;
        scope.instanceof = function(obj, base) {
          return obj instanceof base;
        };
      } else {
        initializeModules();
      }
      var upgradeDocumentTree = scope.upgradeDocumentTree;
      var upgradeDocument = scope.upgradeDocument;
      if (!window.wrap) {
        if (window.ShadowDOMPolyfill) {
          window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded;
          window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded;
        } else {
          window.wrap = window.unwrap = function(node) {
            return node;
          };
        }
      }
      if (window.HTMLImports) {
        window.HTMLImports.__importsParsingHook = function(elt) {
          if (elt.import) {
            upgradeDocument(wrap(elt.import));
          }
        };
      }
      function bootstrap() {
        upgradeDocumentTree(window.wrap(document));
        window.CustomElements.ready = true;
        var requestAnimationFrame = window.requestAnimationFrame || function(f) {
          setTimeout(f, 16);
        };
        requestAnimationFrame(function() {
          setTimeout(function() {
            window.CustomElements.readyTime = Date.now();
            if (window.HTMLImports) {
              window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime;
            }
            document.dispatchEvent(new CustomEvent("WebComponentsReady", {bubbles: true}));
          });
        });
      }
      if (isIE && typeof window.CustomEvent !== "function") {
        window.CustomEvent = function(inType, params) {
          params = params || {};
          var e = document.createEvent("CustomEvent");
          e.initCustomEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable), params.detail);
          e.preventDefault = function() {
            Object.defineProperty(this, "defaultPrevented", {get: function() {
                return true;
              }});
          };
          return e;
        };
        window.CustomEvent.prototype = window.Event.prototype;
      }
      if (document.readyState === "complete" || scope.flags.eager) {
        bootstrap();
      } else if (document.readyState === "interactive" && !window.attachEvent && (!window.HTMLImports || window.HTMLImports.ready)) {
        bootstrap();
      } else {
        var loadEvent = window.HTMLImports && !window.HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";
        window.addEventListener(loadEvent, bootstrap);
      }
    })(window.CustomElements);
    (function(scope) {
      if (!Function.prototype.bind) {
        Function.prototype.bind = function(scope) {
          var self = this;
          var args = Array.prototype.slice.call(arguments, 1);
          return function() {
            var args2 = args.slice();
            args2.push.apply(args2, arguments);
            return self.apply(scope, args2);
          };
        };
      }
    })(window.WebComponents);
    (function(scope) {
      "use strict";
      if (!window.performance) {
        var start = Date.now();
        window.performance = {now: function() {
            return Date.now() - start;
          }};
      }
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function() {
          var nativeRaf = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
          return nativeRaf ? function(callback) {
            return nativeRaf(function() {
              callback(performance.now());
            });
          } : function(callback) {
            return window.setTimeout(callback, 1e3 / 60);
          };
        }();
      }
      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function() {
          return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(id) {
            clearTimeout(id);
          };
        }();
      }
    })(window.WebComponents);
    (function(scope) {
      var style = document.createElement("style");
      style.textContent = "" + "body {" + "transition: opacity ease-in 0.2s;" + " } \n" + "body[unresolved] {" + "opacity: 0; display: block; overflow: hidden; position: relative;" + " } \n";
      var head = document.querySelector("head");
      head.insertBefore(style, head.firstChild);
    })(window.WebComponents);
    (function(scope) {
      window.Platform = scope;
    })(window.WebComponents);
  })();
  return _retrieveGlobal();
});

System.registerDynamic("github:webcomponents/webcomponentsjs@0.7.12", ["github:webcomponents/webcomponentsjs@0.7.12/webcomponents"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:webcomponents/webcomponentsjs@0.7.12/webcomponents");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:matthewbauer/x-retro@master/player.coffee!github:forresto/system-coffee@0.1.2", ["github:matthewbauer/window@0.0.3"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Player,
      cancelAnimationFrame,
      requestAnimationFrame,
      bind = function(fn, me) {
        return function() {
          return fn.apply(me, arguments);
        };
      };
  requestAnimationFrame = require("github:matthewbauer/window@0.0.3").requestAnimationFrame;
  cancelAnimationFrame = require("github:matthewbauer/window@0.0.3").cancelAnimationFrame;
  module.exports = Player = (function() {
    Player.prototype.update = false;
    Player.prototype.overscan = false;
    Player.prototype.can_dupe = true;
    Player.prototype.latency = 90;
    Player.prototype.bufferSize = 248;
    function Player(gl, audio, inputs, core, game, save) {
      var i;
      this.gl = gl;
      this.audio = audio;
      this.inputs = inputs;
      this.core = core;
      this.game = game;
      this.save = save;
      this.frame = bind(this.frame, this);
      this.environment = bind(this.environment, this);
      this.audio_sample_batch = bind(this.audio_sample_batch, this);
      this.video_refresh = bind(this.video_refresh, this);
      this.input_state = bind(this.input_state, this);
      this.initGL();
      this.pixelFormat = this.core.PIXEL_FORMAT_0RGB1555;
      this.core.print = function(args) {
        return console.log(args);
      };
      this.core.printErr = function(args) {
        return console.error(args);
      };
      this.core.set_environment(this.environment);
      this.core.set_video_refresh(this.video_refresh);
      this.core.set_audio_sample(this.audio_sample);
      this.core.set_audio_sample_batch(this.audio_sample_batch);
      this.core.set_input_state(this.input_state);
      this.core.set_input_poll(this.input_poll);
      this.core.init();
      this.av_info = this.core.get_system_av_info();
      this.then = 0;
      this.sampleRate = this.av_info.timing.sample_rate;
      this.numBuffers = Math.floor(this.latency * this.sampleRate / (1000 * this.bufferSize));
      if (this.numBuffers < 2) {
        this.numBuffers = 2;
      }
      i = 0;
      this.buffers = [];
      while (i < this.numBuffers) {
        this.buffers[i] = this.audio.createBuffer(2, this.bufferSize, this.sampleRate);
        i++;
      }
      this.bufOffset = 0;
      this.bufIndex = 0;
      if (this.game != null) {
        this.core.load_game(this.game);
      }
      if (this.save != null) {
        this.core.unserialize(this.save);
      }
    }
    Player.prototype.initGL = function() {
      var buffer,
          fragmentShader,
          positionLocation,
          program,
          texCoordBuffer,
          texCoordLocation,
          vertexShader;
      fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
      this.gl.shaderSource(fragmentShader, 'precision mediump float; uniform sampler2D u_image; varying vec2 v_texCoord; void main() { gl_FragColor = texture2D(u_image, v_texCoord); }');
      this.gl.compileShader(fragmentShader);
      vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER);
      this.gl.shaderSource(vertexShader, 'attribute vec2 a_texCoord; attribute vec2 a_position; varying vec2 v_texCoord; void main() { gl_Position = vec4(a_position, 0, 1); v_texCoord = a_texCoord; }');
      this.gl.compileShader(vertexShader);
      program = this.gl.createProgram();
      this.gl.attachShader(program, vertexShader);
      this.gl.attachShader(program, fragmentShader);
      this.gl.linkProgram(program);
      this.gl.useProgram(program);
      positionLocation = this.gl.getAttribLocation(program, 'a_position');
      buffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), this.gl.STATIC_DRAW);
      this.gl.enableVertexAttribArray(positionLocation);
      this.gl.vertexAttribPointer(positionLocation, 2, this.gl.FLOAT, false, 0, 0);
      texCoordLocation = this.gl.getAttribLocation(program, 'a_texCoord');
      texCoordBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, texCoordBuffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), this.gl.STATIC_DRAW);
      this.gl.enableVertexAttribArray(texCoordLocation);
      this.gl.vertexAttribPointer(texCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
      this.texture = this.gl.createTexture();
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
      return this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);
    };
    Player.prototype.input_state = function(port, device, index, id) {
      var ref,
          ref1;
      return (ref = this.inputs[port]) != null ? (ref1 = ref.buttons[{
        0: 0,
        1: 2,
        2: 8,
        3: 9,
        4: 12,
        5: 13,
        6: 14,
        7: 15,
        8: 1,
        9: 3,
        10: 4,
        11: 5,
        12: 6,
        13: 7,
        14: 10,
        15: 11
      }[id]]) != null ? ref1.pressed : void 0 : void 0;
    };
    Player.prototype.audio_sample = function() {};
    Player.prototype.input_poll = function() {};
    Player.prototype.video_refresh = function(data, width, height, pitch) {
      var color,
          format,
          index,
          type;
      this.width = width;
      this.height = height;
      this.gl.canvas.width = this.width;
      this.gl.canvas.height = this.height;
      switch (this.pixelFormat) {
        case this.core.PIXEL_FORMAT_XRGB8888:
          data = new Uint8Array(data);
          for (index in data) {
            color = data[index];
            if (color !== 0 && color !== 102) {
              console.log(color, index);
            }
          }
          type = this.gl.UNSIGNED_BYTE;
          format = this.gl.RGB;
          this.gl.viewport(0, 0, pitch / 4, this.height);
          this.gl.texImage2D(this.gl.TEXTURE_2D, 0, format, pitch / 4, this.height, 0, format, type, new Uint8Array(data));
          break;
        case this.core.PIXEL_FORMAT_RGB565:
          format = this.gl.RGB;
          type = this.gl.UNSIGNED_SHORT_5_6_5;
          this.gl.viewport(0, 0, pitch / 2, this.height);
          this.gl.texImage2D(this.gl.TEXTURE_2D, 0, format, pitch / 2, this.height, 0, format, type, data);
      }
      return this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    };
    Player.prototype.audio_sample_batch = function(left, right, frames) {
      var buf,
          count,
          fill,
          i,
          source,
          startTime;
      i = 0;
      while (i < this.bufIndex) {
        if (this.buffers[i].endTime < this.audio.currentTime) {
          buf = this.buffers.splice(i, 1)[0];
          this.buffers[this.numBuffers - 1] = buf;
          i--;
          this.bufIndex--;
        }
        i++;
      }
      count = 0;
      while (frames) {
        fill = this.buffers[this.bufIndex].length - this.bufOffset;
        if (fill > frames) {
          fill = frames;
        }
        if (this.bufOffset >= this.bufferSize) {
          if (this.bufIndex >= this.numBuffers - 1) {
            break;
          }
          if (this.bufIndex) {
            startTime = this.buffers[this.bufIndex - 1].endTime;
          } else {
            startTime = this.audio.currentTime;
          }
          this.buffers[this.bufIndex].endTime = startTime + this.buffers[this.bufIndex].duration;
          source = this.audio.createBufferSource();
          source.buffer = this.buffers[this.bufIndex];
          source.connect(this.audio.destination);
          source.start(startTime);
          this.bufIndex++;
          this.bufOffset = 0;
        }
        this.buffers[this.bufIndex].copyToChannel(new Float32Array(left, count * 4, fill), 0, this.bufOffset);
        this.buffers[this.bufIndex].copyToChannel(new Float32Array(right, count * 4, fill), 1, this.bufOffset);
        this.bufOffset += fill;
        count += fill;
        frames -= fill;
      }
      return count;
    };
    Player.prototype.setVariable = function(key, value) {
      this[key] = value;
      return this.update = true;
    };
    Player.prototype.log = function(level, msg) {
      return console.log(msg);
    };
    Player.prototype.environment = function(cmd, value) {
      switch (cmd) {
        case this.core.ENVIRONMENT_GET_LOG_INTERFACE:
          return this.log;
        case this.core.ENVIRONMENT_SET_PIXEL_FORMAT:
          this.pixelFormat = value;
          return true;
        case this.core.ENVIRONMENT_GET_VARIABLE_UPDATE:
          if (this.update) {
            this.update = false;
            return true;
          } else {
            return false;
          }
          break;
        case this.core.ENVIRONMENT_GET_OVERSCAN:
          return this.overscan;
        case this.core.ENVIRONMENT_GET_CAN_DUPE:
          return this.can_dupe;
        case this.core.ENVIRONMENT_SET_PERFORMANCE_LEVEL:
          return true;
        case this.core.ENVIRONMENT_SET_VARIABLES:
          return true;
        case this.core.ENVIRONMENT_SET_MEMORY_MAPS:
          return true;
        default:
          console.log("Unknown environment command " + cmd);
          return true;
      }
    };
    Player.prototype.frame = function(now) {
      this.requestID = requestAnimationFrame(this.frame);
      return this.core.run();
    };
    Player.prototype.start = function() {
      return this.frame();
    };
    Player.prototype.stop = function() {
      return cancelAnimationFrame(this.requestID);
    };
    return Player;
  })();
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:punycode@1.3.2/punycode", ["github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  (function(process) {
    ;
    (function(root) {
      var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
      var freeModule = typeof module == 'object' && module && !module.nodeType && module;
      var freeGlobal = typeof global == 'object' && global;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
        root = freeGlobal;
      }
      var punycode,
          maxInt = 2147483647,
          base = 36,
          tMin = 1,
          tMax = 26,
          skew = 38,
          damp = 700,
          initialBias = 72,
          initialN = 128,
          delimiter = '-',
          regexPunycode = /^xn--/,
          regexNonASCII = /[^\x20-\x7E]/,
          regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
          errors = {
            'overflow': 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input'
          },
          baseMinusTMin = base - tMin,
          floor = Math.floor,
          stringFromCharCode = String.fromCharCode,
          key;
      function error(type) {
        throw RangeError(errors[type]);
      }
      function map(array, fn) {
        var length = array.length;
        var result = [];
        while (length--) {
          result[length] = fn(array[length]);
        }
        return result;
      }
      function mapDomain(string, fn) {
        var parts = string.split('@');
        var result = '';
        if (parts.length > 1) {
          result = parts[0] + '@';
          string = parts[1];
        }
        string = string.replace(regexSeparators, '\x2E');
        var labels = string.split('.');
        var encoded = map(labels, fn).join('.');
        return result + encoded;
      }
      function ucs2decode(string) {
        var output = [],
            counter = 0,
            length = string.length,
            value,
            extra;
        while (counter < length) {
          value = string.charCodeAt(counter++);
          if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) {
              output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }
      function ucs2encode(array) {
        return map(array, function(value) {
          var output = '';
          if (value > 0xFFFF) {
            value -= 0x10000;
            output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
            value = 0xDC00 | value & 0x3FF;
          }
          output += stringFromCharCode(value);
          return output;
        }).join('');
      }
      function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) {
          return codePoint - 22;
        }
        if (codePoint - 65 < 26) {
          return codePoint - 65;
        }
        if (codePoint - 97 < 26) {
          return codePoint - 97;
        }
        return base;
      }
      function digitToBasic(digit, flag) {
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      }
      function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (; delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      }
      function decode(input) {
        var output = [],
            inputLength = input.length,
            out,
            i = 0,
            n = initialN,
            bias = initialBias,
            basic,
            j,
            index,
            oldi,
            w,
            k,
            digit,
            t,
            baseMinusT;
        basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
          basic = 0;
        }
        for (j = 0; j < basic; ++j) {
          if (input.charCodeAt(j) >= 0x80) {
            error('not-basic');
          }
          output.push(input.charCodeAt(j));
        }
        for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
          for (oldi = i, w = 1, k = base; ; k += base) {
            if (index >= inputLength) {
              error('invalid-input');
            }
            digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base || digit > floor((maxInt - i) / w)) {
              error('overflow');
            }
            i += digit * w;
            t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
            if (digit < t) {
              break;
            }
            baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) {
              error('overflow');
            }
            w *= baseMinusT;
          }
          out = output.length + 1;
          bias = adapt(i - oldi, out, oldi == 0);
          if (floor(i / out) > maxInt - n) {
            error('overflow');
          }
          n += floor(i / out);
          i %= out;
          output.splice(i++, 0, n);
        }
        return ucs2encode(output);
      }
      function encode(input) {
        var n,
            delta,
            handledCPCount,
            basicLength,
            bias,
            j,
            m,
            q,
            k,
            t,
            currentValue,
            output = [],
            inputLength,
            handledCPCountPlusOne,
            baseMinusT,
            qMinusT;
        input = ucs2decode(input);
        inputLength = input.length;
        n = initialN;
        delta = 0;
        bias = initialBias;
        for (j = 0; j < inputLength; ++j) {
          currentValue = input[j];
          if (currentValue < 0x80) {
            output.push(stringFromCharCode(currentValue));
          }
        }
        handledCPCount = basicLength = output.length;
        if (basicLength) {
          output.push(delimiter);
        }
        while (handledCPCount < inputLength) {
          for (m = maxInt, j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          }
          handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            error('overflow');
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          for (j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue < n && ++delta > maxInt) {
              error('overflow');
            }
            if (currentValue == n) {
              for (q = delta, k = base; ; k += base) {
                t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
                if (q < t) {
                  break;
                }
                qMinusT = q - t;
                baseMinusT = base - t;
                output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                q = floor(qMinusT / baseMinusT);
              }
              output.push(stringFromCharCode(digitToBasic(q, 0)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
              delta = 0;
              ++handledCPCount;
            }
          }
          ++delta;
          ++n;
        }
        return output.join('');
      }
      function toUnicode(input) {
        return mapDomain(input, function(string) {
          return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
      }
      function toASCII(input) {
        return mapDomain(input, function(string) {
          return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
        });
      }
      punycode = {
        'version': '1.3.2',
        'ucs2': {
          'decode': ucs2decode,
          'encode': ucs2encode
        },
        'decode': decode,
        'encode': encode,
        'toASCII': toASCII,
        'toUnicode': toUnicode
      };
      if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        define('punycode', function() {
          return punycode;
        });
      } else if (freeExports && freeModule) {
        if (module.exports == freeExports) {
          freeModule.exports = punycode;
        } else {
          for (key in punycode) {
            punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
          }
        }
      } else {
        root.punycode = punycode;
      }
    }(this));
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:punycode@1.3.2", ["npm:punycode@1.3.2/punycode"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:punycode@1.3.2/punycode");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:url@0.10.3/url", ["npm:punycode@1.3.2", "npm:querystring@0.2.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var punycode = require("npm:punycode@1.3.2");
  exports.parse = urlParse;
  exports.resolve = urlResolve;
  exports.resolveObject = urlResolveObject;
  exports.format = urlFormat;
  exports.Url = Url;
  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }
  var protocolPattern = /^([a-z0-9.+-]+:)/i,
      portPattern = /:[0-9]*$/,
      delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
      unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
      autoEscape = ['\''].concat(unwise),
      nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
      hostEndingChars = ['/', '?', '#'],
      hostnameMaxLen = 255,
      hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
      hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
      unsafeProtocol = {
        'javascript': true,
        'javascript:': true
      },
      hostlessProtocol = {
        'javascript': true,
        'javascript:': true
      },
      slashedProtocol = {
        'http': true,
        'https': true,
        'ftp': true,
        'gopher': true,
        'file': true,
        'http:': true,
        'https:': true,
        'ftp:': true,
        'gopher:': true,
        'file:': true
      },
      querystring = require("npm:querystring@0.2.0");
  function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && isObject(url) && url instanceof Url)
      return url;
    var u = new Url;
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
  }
  Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
    if (!isString(url)) {
      throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    }
    var rest = url;
    rest = rest.trim();
    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var slashes = rest.substr(0, 2) === '//';
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }
    if (!hostlessProtocol[proto] && (slashes || (proto && !slashedProtocol[proto]))) {
      var hostEnd = -1;
      for (var i = 0; i < hostEndingChars.length; i++) {
        var hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
          hostEnd = hec;
      }
      var auth,
          atSign;
      if (hostEnd === -1) {
        atSign = rest.lastIndexOf('@');
      } else {
        atSign = rest.lastIndexOf('@', hostEnd);
      }
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = decodeURIComponent(auth);
      }
      hostEnd = -1;
      for (var i = 0; i < nonHostChars.length; i++) {
        var hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
          hostEnd = hec;
      }
      if (hostEnd === -1)
        hostEnd = rest.length;
      this.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);
      this.parseHost();
      this.hostname = this.hostname || '';
      var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (var i = 0,
            l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part)
            continue;
          if (!part.match(hostnamePartPattern)) {
            var newpart = '';
            for (var j = 0,
                k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                newpart += 'x';
              } else {
                newpart += part[j];
              }
            }
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = '/' + notHost.join('.') + rest;
              }
              this.hostname = validParts.join('.');
              break;
            }
          }
        }
      }
      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = '';
      } else {
        this.hostname = this.hostname.toLowerCase();
      }
      if (!ipv6Hostname) {
        var domainArray = this.hostname.split('.');
        var newOut = [];
        for (var i = 0; i < domainArray.length; ++i) {
          var s = domainArray[i];
          newOut.push(s.match(/[^A-Za-z0-9_-]/) ? 'xn--' + punycode.encode(s) : s);
        }
        this.hostname = newOut.join('.');
      }
      var p = this.port ? ':' + this.port : '';
      var h = this.hostname || '';
      this.host = h + p;
      this.href += this.host;
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (rest[0] !== '/') {
          rest = '/' + rest;
        }
      }
    }
    if (!unsafeProtocol[lowerProto]) {
      for (var i = 0,
          l = autoEscape.length; i < l; i++) {
        var ae = autoEscape[i];
        var esc = encodeURIComponent(ae);
        if (esc === ae) {
          esc = escape(ae);
        }
        rest = rest.split(ae).join(esc);
      }
    }
    var hash = rest.indexOf('#');
    if (hash !== -1) {
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
      this.search = rest.substr(qm);
      this.query = rest.substr(qm + 1);
      if (parseQueryString) {
        this.query = querystring.parse(this.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      this.search = '';
      this.query = {};
    }
    if (rest)
      this.pathname = rest;
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = '/';
    }
    if (this.pathname || this.search) {
      var p = this.pathname || '';
      var s = this.search || '';
      this.path = p + s;
    }
    this.href = this.format();
    return this;
  };
  function urlFormat(obj) {
    if (isString(obj))
      obj = urlParse(obj);
    if (!(obj instanceof Url))
      return Url.prototype.format.call(obj);
    return obj.format();
  }
  Url.prototype.format = function() {
    var auth = this.auth || '';
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ':');
      auth += '@';
    }
    var protocol = this.protocol || '',
        pathname = this.pathname || '',
        hash = this.hash || '',
        host = false,
        query = '';
    if (this.host) {
      host = auth + this.host;
    } else if (this.hostname) {
      host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
      if (this.port) {
        host += ':' + this.port;
      }
    }
    if (this.query && isObject(this.query) && Object.keys(this.query).length) {
      query = querystring.stringify(this.query);
    }
    var search = this.search || (query && ('?' + query)) || '';
    if (protocol && protocol.substr(-1) !== ':')
      protocol += ':';
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
      host = '//' + (host || '');
      if (pathname && pathname.charAt(0) !== '/')
        pathname = '/' + pathname;
    } else if (!host) {
      host = '';
    }
    if (hash && hash.charAt(0) !== '#')
      hash = '#' + hash;
    if (search && search.charAt(0) !== '?')
      search = '?' + search;
    pathname = pathname.replace(/[?#]/g, function(match) {
      return encodeURIComponent(match);
    });
    search = search.replace('#', '%23');
    return protocol + host + pathname + search + hash;
  };
  function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
  }
  Url.prototype.resolve = function(relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
  };
  function urlResolveObject(source, relative) {
    if (!source)
      return relative;
    return urlParse(source, false, true).resolveObject(relative);
  }
  Url.prototype.resolveObject = function(relative) {
    if (isString(relative)) {
      var rel = new Url();
      rel.parse(relative, false, true);
      relative = rel;
    }
    var result = new Url();
    Object.keys(this).forEach(function(k) {
      result[k] = this[k];
    }, this);
    result.hash = relative.hash;
    if (relative.href === '') {
      result.href = result.format();
      return result;
    }
    if (relative.slashes && !relative.protocol) {
      Object.keys(relative).forEach(function(k) {
        if (k !== 'protocol')
          result[k] = relative[k];
      });
      if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
        result.path = result.pathname = '/';
      }
      result.href = result.format();
      return result;
    }
    if (relative.protocol && relative.protocol !== result.protocol) {
      if (!slashedProtocol[relative.protocol]) {
        Object.keys(relative).forEach(function(k) {
          result[k] = relative[k];
        });
        result.href = result.format();
        return result;
      }
      result.protocol = relative.protocol;
      if (!relative.host && !hostlessProtocol[relative.protocol]) {
        var relPath = (relative.pathname || '').split('/');
        while (relPath.length && !(relative.host = relPath.shift()))
          ;
        if (!relative.host)
          relative.host = '';
        if (!relative.hostname)
          relative.hostname = '';
        if (relPath[0] !== '')
          relPath.unshift('');
        if (relPath.length < 2)
          relPath.unshift('');
        result.pathname = relPath.join('/');
      } else {
        result.pathname = relative.pathname;
      }
      result.search = relative.search;
      result.query = relative.query;
      result.host = relative.host || '';
      result.auth = relative.auth;
      result.hostname = relative.hostname || relative.host;
      result.port = relative.port;
      if (result.pathname || result.search) {
        var p = result.pathname || '';
        var s = result.search || '';
        result.path = p + s;
      }
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    }
    var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
        isRelAbs = (relative.host || relative.pathname && relative.pathname.charAt(0) === '/'),
        mustEndAbs = (isRelAbs || isSourceAbs || (result.host && relative.pathname)),
        removeAllDots = mustEndAbs,
        srcPath = result.pathname && result.pathname.split('/') || [],
        relPath = relative.pathname && relative.pathname.split('/') || [],
        psychotic = result.protocol && !slashedProtocol[result.protocol];
    if (psychotic) {
      result.hostname = '';
      result.port = null;
      if (result.host) {
        if (srcPath[0] === '')
          srcPath[0] = result.host;
        else
          srcPath.unshift(result.host);
      }
      result.host = '';
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) {
          if (relPath[0] === '')
            relPath[0] = relative.host;
          else
            relPath.unshift(relative.host);
        }
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
    }
    if (isRelAbs) {
      result.host = (relative.host || relative.host === '') ? relative.host : result.host;
      result.hostname = (relative.hostname || relative.hostname === '') ? relative.hostname : result.hostname;
      result.search = relative.search;
      result.query = relative.query;
      srcPath = relPath;
    } else if (relPath.length) {
      if (!srcPath)
        srcPath = [];
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative.search;
      result.query = relative.query;
    } else if (!isNullOrUndefined(relative.search)) {
      if (psychotic) {
        result.hostname = result.host = srcPath.shift();
        var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      result.search = relative.search;
      result.query = relative.query;
      if (!isNull(result.pathname) || !isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
      }
      result.href = result.format();
      return result;
    }
    if (!srcPath.length) {
      result.pathname = null;
      if (result.search) {
        result.path = '/' + result.search;
      } else {
        result.path = null;
      }
      result.href = result.format();
      return result;
    }
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = ((result.host || relative.host) && (last === '.' || last === '..') || last === '');
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if (last == '.') {
        srcPath.splice(i, 1);
      } else if (last === '..') {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift('..');
      }
    }
    if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
      srcPath.unshift('');
    }
    if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
      srcPath.push('');
    }
    var isAbsolute = srcPath[0] === '' || (srcPath[0] && srcPath[0].charAt(0) === '/');
    if (psychotic) {
      result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    mustEndAbs = mustEndAbs || (result.host && srcPath.length);
    if (mustEndAbs && !isAbsolute) {
      srcPath.unshift('');
    }
    if (!srcPath.length) {
      result.pathname = null;
      result.path = null;
    } else {
      result.pathname = srcPath.join('/');
    }
    if (!isNull(result.pathname) || !isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  };
  Url.prototype.parseHost = function() {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ':') {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host)
      this.hostname = host;
  };
  function isString(arg) {
    return typeof arg === "string";
  }
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  function isNull(arg) {
    return arg === null;
  }
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:url@0.10.3", ["npm:url@0.10.3/url"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:url@0.10.3/url");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-url@0.1.0/index", ["npm:url@0.10.3"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? System._nodeRequire('url') : require("npm:url@0.10.3");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-url@0.1.0", ["github:jspm/nodelibs-url@0.1.0/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-url@0.1.0/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:path-browserify@0.0.0/index", ["github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    function normalizeArray(parts, allowAboveRoot) {
      var up = 0;
      for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
          parts.splice(i, 1);
        } else if (last === '..') {
          parts.splice(i, 1);
          up++;
        } else if (up) {
          parts.splice(i, 1);
          up--;
        }
      }
      if (allowAboveRoot) {
        for (; up--; up) {
          parts.unshift('..');
        }
      }
      return parts;
    }
    var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    var splitPath = function(filename) {
      return splitPathRe.exec(filename).slice(1);
    };
    exports.resolve = function() {
      var resolvedPath = '',
          resolvedAbsolute = false;
      for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = (i >= 0) ? arguments[i] : process.cwd();
        if (typeof path !== 'string') {
          throw new TypeError('Arguments to path.resolve must be strings');
        } else if (!path) {
          continue;
        }
        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
      }
      resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
        return !!p;
      }), !resolvedAbsolute).join('/');
      return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
    };
    exports.normalize = function(path) {
      var isAbsolute = exports.isAbsolute(path),
          trailingSlash = substr(path, -1) === '/';
      path = normalizeArray(filter(path.split('/'), function(p) {
        return !!p;
      }), !isAbsolute).join('/');
      if (!path && !isAbsolute) {
        path = '.';
      }
      if (path && trailingSlash) {
        path += '/';
      }
      return (isAbsolute ? '/' : '') + path;
    };
    exports.isAbsolute = function(path) {
      return path.charAt(0) === '/';
    };
    exports.join = function() {
      var paths = Array.prototype.slice.call(arguments, 0);
      return exports.normalize(filter(paths, function(p, index) {
        if (typeof p !== 'string') {
          throw new TypeError('Arguments to path.join must be strings');
        }
        return p;
      }).join('/'));
    };
    exports.relative = function(from, to) {
      from = exports.resolve(from).substr(1);
      to = exports.resolve(to).substr(1);
      function trim(arr) {
        var start = 0;
        for (; start < arr.length; start++) {
          if (arr[start] !== '')
            break;
        }
        var end = arr.length - 1;
        for (; end >= 0; end--) {
          if (arr[end] !== '')
            break;
        }
        if (start > end)
          return [];
        return arr.slice(start, end - start + 1);
      }
      var fromParts = trim(from.split('/'));
      var toParts = trim(to.split('/'));
      var length = Math.min(fromParts.length, toParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
          samePartsLength = i;
          break;
        }
      }
      var outputParts = [];
      for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
      }
      outputParts = outputParts.concat(toParts.slice(samePartsLength));
      return outputParts.join('/');
    };
    exports.sep = '/';
    exports.delimiter = ':';
    exports.dirname = function(path) {
      var result = splitPath(path),
          root = result[0],
          dir = result[1];
      if (!root && !dir) {
        return '.';
      }
      if (dir) {
        dir = dir.substr(0, dir.length - 1);
      }
      return root + dir;
    };
    exports.basename = function(path, ext) {
      var f = splitPath(path)[2];
      if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
      }
      return f;
    };
    exports.extname = function(path) {
      return splitPath(path)[3];
    };
    function filter(xs, f) {
      if (xs.filter)
        return xs.filter(f);
      var res = [];
      for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs))
          res.push(xs[i]);
      }
      return res;
    }
    var substr = 'ab'.substr(-1) === 'b' ? function(str, start, len) {
      return str.substr(start, len);
    } : function(str, start, len) {
      if (start < 0)
        start = str.length + start;
      return str.substr(start, len);
    };
    ;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:path-browserify@0.0.0", ["npm:path-browserify@0.0.0/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:path-browserify@0.0.0/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-path@0.1.0/index", ["npm:path-browserify@0.0.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? System._nodeRequire('path') : require("npm:path-browserify@0.0.0");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-path@0.1.0", ["github:jspm/nodelibs-path@0.1.0/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-path@0.1.0/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:base64-js@0.0.8/lib/b64", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  ;
  (function(exports) {
    'use strict';
    var Arr = (typeof Uint8Array !== 'undefined') ? Uint8Array : Array;
    var PLUS = '+'.charCodeAt(0);
    var SLASH = '/'.charCodeAt(0);
    var NUMBER = '0'.charCodeAt(0);
    var LOWER = 'a'.charCodeAt(0);
    var UPPER = 'A'.charCodeAt(0);
    var PLUS_URL_SAFE = '-'.charCodeAt(0);
    var SLASH_URL_SAFE = '_'.charCodeAt(0);
    function decode(elt) {
      var code = elt.charCodeAt(0);
      if (code === PLUS || code === PLUS_URL_SAFE)
        return 62;
      if (code === SLASH || code === SLASH_URL_SAFE)
        return 63;
      if (code < NUMBER)
        return -1;
      if (code < NUMBER + 10)
        return code - NUMBER + 26 + 26;
      if (code < UPPER + 26)
        return code - UPPER;
      if (code < LOWER + 26)
        return code - LOWER + 26;
    }
    function b64ToByteArray(b64) {
      var i,
          j,
          l,
          tmp,
          placeHolders,
          arr;
      if (b64.length % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
      }
      var len = b64.length;
      placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;
      arr = new Arr(b64.length * 3 / 4 - placeHolders);
      l = placeHolders > 0 ? b64.length - 4 : b64.length;
      var L = 0;
      function push(v) {
        arr[L++] = v;
      }
      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3));
        push((tmp & 0xFF0000) >> 16);
        push((tmp & 0xFF00) >> 8);
        push(tmp & 0xFF);
      }
      if (placeHolders === 2) {
        tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4);
        push(tmp & 0xFF);
      } else if (placeHolders === 1) {
        tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2);
        push((tmp >> 8) & 0xFF);
        push(tmp & 0xFF);
      }
      return arr;
    }
    function uint8ToBase64(uint8) {
      var i,
          extraBytes = uint8.length % 3,
          output = "",
          temp,
          length;
      function encode(num) {
        return lookup.charAt(num);
      }
      function tripletToBase64(num) {
        return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
      }
      for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
        temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
        output += tripletToBase64(temp);
      }
      switch (extraBytes) {
        case 1:
          temp = uint8[uint8.length - 1];
          output += encode(temp >> 2);
          output += encode((temp << 4) & 0x3F);
          output += '==';
          break;
        case 2:
          temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
          output += encode(temp >> 10);
          output += encode((temp >> 4) & 0x3F);
          output += encode((temp << 2) & 0x3F);
          output += '=';
          break;
      }
      return output;
    }
    exports.toByteArray = b64ToByteArray;
    exports.fromByteArray = uint8ToBase64;
  }(typeof exports === 'undefined' ? (this.base64js = {}) : exports));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:base64-js@0.0.8", ["npm:base64-js@0.0.8/lib/b64"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:base64-js@0.0.8/lib/b64");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:ieee754@1.1.6/index", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e,
        m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? (nBytes - 1) : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & ((1 << (-nBits)) - 1);
    s >>= (-nBits);
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    m = e & ((1 << (-nBits)) - 1);
    e >>= (-nBits);
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : ((s ? -1 : 1) * Infinity);
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };
  exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e,
        m,
        c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
    var i = isLE ? 0 : (nBytes - 1);
    var d = isLE ? 1 : -1;
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
    e = (e << mLen) | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
    buffer[offset + i - d] |= s * 128;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:ieee754@1.1.6", ["npm:ieee754@1.1.6/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:ieee754@1.1.6/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:is-array@1.0.1/index", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isArray = Array.isArray;
  var str = Object.prototype.toString;
  module.exports = isArray || function(val) {
    return !!val && '[object Array]' == str.call(val);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:is-array@1.0.1", ["npm:is-array@1.0.1/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:is-array@1.0.1/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:buffer@3.5.0/index", ["npm:base64-js@0.0.8", "npm:ieee754@1.1.6", "npm:is-array@1.0.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var base64 = require("npm:base64-js@0.0.8");
  var ieee754 = require("npm:ieee754@1.1.6");
  var isArray = require("npm:is-array@1.0.1");
  exports.Buffer = Buffer;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;
  Buffer.poolSize = 8192;
  var rootParent = {};
  Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : (function() {
    function Bar() {}
    try {
      var arr = new Uint8Array(1);
      arr.foo = function() {
        return 42;
      };
      arr.constructor = Bar;
      return arr.foo() === 42 && arr.constructor === Bar && typeof arr.subarray === 'function' && arr.subarray(1, 1).byteLength === 0;
    } catch (e) {
      return false;
    }
  })();
  function kMaxLength() {
    return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
  }
  function Buffer(arg) {
    if (!(this instanceof Buffer)) {
      if (arguments.length > 1)
        return new Buffer(arg, arguments[1]);
      return new Buffer(arg);
    }
    this.length = 0;
    this.parent = undefined;
    if (typeof arg === 'number') {
      return fromNumber(this, arg);
    }
    if (typeof arg === 'string') {
      return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8');
    }
    return fromObject(this, arg);
  }
  function fromNumber(that, length) {
    that = allocate(that, length < 0 ? 0 : checked(length) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < length; i++) {
        that[i] = 0;
      }
    }
    return that;
  }
  function fromString(that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '')
      encoding = 'utf8';
    var length = byteLength(string, encoding) | 0;
    that = allocate(that, length);
    that.write(string, encoding);
    return that;
  }
  function fromObject(that, object) {
    if (Buffer.isBuffer(object))
      return fromBuffer(that, object);
    if (isArray(object))
      return fromArray(that, object);
    if (object == null) {
      throw new TypeError('must start with number, buffer, array or string');
    }
    if (typeof ArrayBuffer !== 'undefined') {
      if (object.buffer instanceof ArrayBuffer) {
        return fromTypedArray(that, object);
      }
      if (object instanceof ArrayBuffer) {
        return fromArrayBuffer(that, object);
      }
    }
    if (object.length)
      return fromArrayLike(that, object);
    return fromJsonObject(that, object);
  }
  function fromBuffer(that, buffer) {
    var length = checked(buffer.length) | 0;
    that = allocate(that, length);
    buffer.copy(that, 0, 0, length);
    return that;
  }
  function fromArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromTypedArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromArrayBuffer(that, array) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      array.byteLength;
      that = Buffer._augment(new Uint8Array(array));
    } else {
      that = fromTypedArray(that, new Uint8Array(array));
    }
    return that;
  }
  function fromArrayLike(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromJsonObject(that, object) {
    var array;
    var length = 0;
    if (object.type === 'Buffer' && isArray(object.data)) {
      array = object.data;
      length = checked(array.length) | 0;
    }
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
  }
  function allocate(that, length) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      that = Buffer._augment(new Uint8Array(length));
      that.__proto__ = Buffer.prototype;
    } else {
      that.length = length;
      that._isBuffer = true;
    }
    var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1;
    if (fromPool)
      that.parent = rootParent;
    return that;
  }
  function checked(length) {
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
    }
    return length | 0;
  }
  function SlowBuffer(subject, encoding) {
    if (!(this instanceof SlowBuffer))
      return new SlowBuffer(subject, encoding);
    var buf = new Buffer(subject, encoding);
    delete buf.parent;
    return buf;
  }
  Buffer.isBuffer = function isBuffer(b) {
    return !!(b != null && b._isBuffer);
  };
  Buffer.compare = function compare(a, b) {
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError('Arguments must be Buffers');
    }
    if (a === b)
      return 0;
    var x = a.length;
    var y = b.length;
    var i = 0;
    var len = Math.min(x, y);
    while (i < len) {
      if (a[i] !== b[i])
        break;
      ++i;
    }
    if (i !== len) {
      x = a[i];
      y = b[i];
    }
    if (x < y)
      return -1;
    if (y < x)
      return 1;
    return 0;
  };
  Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'binary':
      case 'base64':
      case 'raw':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;
      default:
        return false;
    }
  };
  Buffer.concat = function concat(list, length) {
    if (!isArray(list))
      throw new TypeError('list argument must be an Array of Buffers.');
    if (list.length === 0) {
      return new Buffer(0);
    }
    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; i++) {
        length += list[i].length;
      }
    }
    var buf = new Buffer(length);
    var pos = 0;
    for (i = 0; i < list.length; i++) {
      var item = list[i];
      item.copy(buf, pos);
      pos += item.length;
    }
    return buf;
  };
  function byteLength(string, encoding) {
    if (typeof string !== 'string')
      string = '' + string;
    var len = string.length;
    if (len === 0)
      return 0;
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case 'ascii':
        case 'binary':
        case 'raw':
        case 'raws':
          return len;
        case 'utf8':
        case 'utf-8':
          return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;
        case 'hex':
          return len >>> 1;
        case 'base64':
          return base64ToBytes(string).length;
        default:
          if (loweredCase)
            return utf8ToBytes(string).length;
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.byteLength = byteLength;
  Buffer.prototype.length = undefined;
  Buffer.prototype.parent = undefined;
  function slowToString(encoding, start, end) {
    var loweredCase = false;
    start = start | 0;
    end = end === undefined || end === Infinity ? this.length : end | 0;
    if (!encoding)
      encoding = 'utf8';
    if (start < 0)
      start = 0;
    if (end > this.length)
      end = this.length;
    if (end <= start)
      return '';
    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end);
        case 'ascii':
          return asciiSlice(this, start, end);
        case 'binary':
          return binarySlice(this, start, end);
        case 'base64':
          return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase)
            throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.prototype.toString = function toString() {
    var length = this.length | 0;
    if (length === 0)
      return '';
    if (arguments.length === 0)
      return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b))
      throw new TypeError('Argument must be a Buffer');
    if (this === b)
      return true;
    return Buffer.compare(this, b) === 0;
  };
  Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max)
        str += ' ... ';
    }
    return '<Buffer ' + str + '>';
  };
  Buffer.prototype.compare = function compare(b) {
    if (!Buffer.isBuffer(b))
      throw new TypeError('Argument must be a Buffer');
    if (this === b)
      return 0;
    return Buffer.compare(this, b);
  };
  Buffer.prototype.indexOf = function indexOf(val, byteOffset) {
    if (byteOffset > 0x7fffffff)
      byteOffset = 0x7fffffff;
    else if (byteOffset < -0x80000000)
      byteOffset = -0x80000000;
    byteOffset >>= 0;
    if (this.length === 0)
      return -1;
    if (byteOffset >= this.length)
      return -1;
    if (byteOffset < 0)
      byteOffset = Math.max(this.length + byteOffset, 0);
    if (typeof val === 'string') {
      if (val.length === 0)
        return -1;
      return String.prototype.indexOf.call(this, val, byteOffset);
    }
    if (Buffer.isBuffer(val)) {
      return arrayIndexOf(this, val, byteOffset);
    }
    if (typeof val === 'number') {
      if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
        return Uint8Array.prototype.indexOf.call(this, val, byteOffset);
      }
      return arrayIndexOf(this, [val], byteOffset);
    }
    function arrayIndexOf(arr, val, byteOffset) {
      var foundIndex = -1;
      for (var i = 0; byteOffset + i < arr.length; i++) {
        if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
          if (foundIndex === -1)
            foundIndex = i;
          if (i - foundIndex + 1 === val.length)
            return byteOffset + foundIndex;
        } else {
          foundIndex = -1;
        }
      }
      return -1;
    }
    throw new TypeError('val must be string, number or Buffer');
  };
  Buffer.prototype.get = function get(offset) {
    console.log('.get() is deprecated. Access using array indexes instead.');
    return this.readUInt8(offset);
  };
  Buffer.prototype.set = function set(v, offset) {
    console.log('.set() is deprecated. Access using array indexes instead.');
    return this.writeUInt8(v, offset);
  };
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    var strLen = string.length;
    if (strLen % 2 !== 0)
      throw new Error('Invalid hex string');
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; i++) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed))
        throw new Error('Invalid hex string');
      buf[offset + i] = parsed;
    }
    return i;
  }
  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }
  function binaryWrite(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  Buffer.prototype.write = function write(string, offset, length, encoding) {
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
    } else if (isFinite(offset)) {
      offset = offset | 0;
      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined)
          encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
    } else {
      var swap = encoding;
      encoding = offset;
      offset = length | 0;
      length = swap;
    }
    var remaining = this.length - offset;
    if (length === undefined || length > remaining)
      length = remaining;
    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
      throw new RangeError('attempt to write outside buffer bounds');
    }
    if (!encoding)
      encoding = 'utf8';
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);
        case 'ascii':
          return asciiWrite(this, string, offset, length);
        case 'binary':
          return binaryWrite(this, string, offset, length);
        case 'base64':
          return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length);
        default:
          if (loweredCase)
            throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer.prototype.toJSON = function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = (firstByte > 0xEF) ? 4 : (firstByte > 0xDF) ? 3 : (firstByte > 0xBF) ? 2 : 1;
      if (i + bytesPerSequence <= end) {
        var secondByte,
            thirdByte,
            fourthByte,
            tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }
      res.push(codePoint);
      i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  var MAX_ARGUMENTS_LENGTH = 0x1000;
  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
  }
  function binarySlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0)
      start = 0;
    if (!end || end < 0 || end > len)
      end = len;
    var out = '';
    for (var i = start; i < end; i++) {
      out += toHex(buf[i]);
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }
  Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0)
        start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0)
        end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start)
      end = start;
    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = Buffer._augment(this.subarray(start, end));
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer(sliceLen, undefined);
      for (var i = 0; i < sliceLen; i++) {
        newBuf[i] = this[i + start];
      }
    }
    if (newBuf.length)
      newBuf.parent = this.parent || this;
    return newBuf;
  };
  function checkOffset(offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0)
      throw new RangeError('offset is not uint');
    if (offset + ext > length)
      throw new RangeError('Trying to access beyond buffer length');
  }
  Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    return val;
  };
  Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }
    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }
    return val;
  };
  Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    return this[offset];
  };
  Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return this[offset] | (this[offset + 1] << 8);
  };
  Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return (this[offset] << 8) | this[offset + 1];
  };
  Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ((this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16)) + (this[offset + 3] * 0x1000000);
  };
  Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] * 0x1000000) + ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3]);
  };
  Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80))
      return (this[offset]);
    return ((0xff - this[offset] + 1) * -1);
  };
  Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    var val = this[offset] | (this[offset + 1] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val;
  };
  Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | (this[offset] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val;
  };
  Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16) | (this[offset + 3] << 24);
  };
  Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] << 24) | (this[offset + 1] << 16) | (this[offset + 2] << 8) | (this[offset + 3]);
  };
  Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
  };
  Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
  };
  Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
  };
  Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
  };
  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf))
      throw new TypeError('buffer must be a Buffer instance');
    if (value > max || value < min)
      throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError('index out of range');
  }
  Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT)
      value = Math.floor(value);
    this[offset] = value;
    return offset + 1;
  };
  function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0)
      value = 0xffff + value + 1;
    for (var i = 0,
        j = Math.min(buf.length - offset, 2); i < j; i++) {
      buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>> (littleEndian ? i : 1 - i) * 8;
    }
  }
  Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value;
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };
  Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = value;
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };
  function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0)
      value = 0xffffffff + value + 1;
    for (var i = 0,
        j = Math.min(buf.length - offset, 4); i < j; i++) {
      buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
    }
  }
  Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = (value >>> 24);
      this[offset + 2] = (value >>> 16);
      this[offset + 1] = (value >>> 8);
      this[offset] = value;
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };
  Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = value;
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };
  Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer.TYPED_ARRAY_SUPPORT)
      value = Math.floor(value);
    if (value < 0)
      value = 0xff + value + 1;
    this[offset] = value;
    return offset + 1;
  };
  Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value;
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };
  Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = value;
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };
  Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value;
      this[offset + 1] = (value >>> 8);
      this[offset + 2] = (value >>> 16);
      this[offset + 3] = (value >>> 24);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };
  Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0)
      value = 0xffffffff + value + 1;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = value;
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (value > max || value < min)
      throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError('index out of range');
    if (offset < 0)
      throw new RangeError('index out of range');
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };
  Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start)
      start = 0;
    if (!end && end !== 0)
      end = this.length;
    if (targetStart >= target.length)
      targetStart = target.length;
    if (!targetStart)
      targetStart = 0;
    if (end > 0 && end < start)
      end = start;
    if (end === start)
      return 0;
    if (target.length === 0 || this.length === 0)
      return 0;
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length)
      throw new RangeError('sourceStart out of bounds');
    if (end < 0)
      throw new RangeError('sourceEnd out of bounds');
    if (end > this.length)
      end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    var len = end - start;
    var i;
    if (this === target && start < targetStart && targetStart < end) {
      for (i = len - 1; i >= 0; i--) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      for (i = 0; i < len; i++) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      target._set(this.subarray(start, start + len), targetStart);
    }
    return len;
  };
  Buffer.prototype.fill = function fill(value, start, end) {
    if (!value)
      value = 0;
    if (!start)
      start = 0;
    if (!end)
      end = this.length;
    if (end < start)
      throw new RangeError('end < start');
    if (end === start)
      return;
    if (this.length === 0)
      return;
    if (start < 0 || start >= this.length)
      throw new RangeError('start out of bounds');
    if (end < 0 || end > this.length)
      throw new RangeError('end out of bounds');
    var i;
    if (typeof value === 'number') {
      for (i = start; i < end; i++) {
        this[i] = value;
      }
    } else {
      var bytes = utf8ToBytes(value.toString());
      var len = bytes.length;
      for (i = start; i < end; i++) {
        this[i] = bytes[i % len];
      }
    }
    return this;
  };
  Buffer.prototype.toArrayBuffer = function toArrayBuffer() {
    if (typeof Uint8Array !== 'undefined') {
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        return (new Buffer(this)).buffer;
      } else {
        var buf = new Uint8Array(this.length);
        for (var i = 0,
            len = buf.length; i < len; i += 1) {
          buf[i] = this[i];
        }
        return buf.buffer;
      }
    } else {
      throw new TypeError('Buffer.toArrayBuffer not supported in this browser');
    }
  };
  var BP = Buffer.prototype;
  Buffer._augment = function _augment(arr) {
    arr.constructor = Buffer;
    arr._isBuffer = true;
    arr._set = arr.set;
    arr.get = BP.get;
    arr.set = BP.set;
    arr.write = BP.write;
    arr.toString = BP.toString;
    arr.toLocaleString = BP.toString;
    arr.toJSON = BP.toJSON;
    arr.equals = BP.equals;
    arr.compare = BP.compare;
    arr.indexOf = BP.indexOf;
    arr.copy = BP.copy;
    arr.slice = BP.slice;
    arr.readUIntLE = BP.readUIntLE;
    arr.readUIntBE = BP.readUIntBE;
    arr.readUInt8 = BP.readUInt8;
    arr.readUInt16LE = BP.readUInt16LE;
    arr.readUInt16BE = BP.readUInt16BE;
    arr.readUInt32LE = BP.readUInt32LE;
    arr.readUInt32BE = BP.readUInt32BE;
    arr.readIntLE = BP.readIntLE;
    arr.readIntBE = BP.readIntBE;
    arr.readInt8 = BP.readInt8;
    arr.readInt16LE = BP.readInt16LE;
    arr.readInt16BE = BP.readInt16BE;
    arr.readInt32LE = BP.readInt32LE;
    arr.readInt32BE = BP.readInt32BE;
    arr.readFloatLE = BP.readFloatLE;
    arr.readFloatBE = BP.readFloatBE;
    arr.readDoubleLE = BP.readDoubleLE;
    arr.readDoubleBE = BP.readDoubleBE;
    arr.writeUInt8 = BP.writeUInt8;
    arr.writeUIntLE = BP.writeUIntLE;
    arr.writeUIntBE = BP.writeUIntBE;
    arr.writeUInt16LE = BP.writeUInt16LE;
    arr.writeUInt16BE = BP.writeUInt16BE;
    arr.writeUInt32LE = BP.writeUInt32LE;
    arr.writeUInt32BE = BP.writeUInt32BE;
    arr.writeIntLE = BP.writeIntLE;
    arr.writeIntBE = BP.writeIntBE;
    arr.writeInt8 = BP.writeInt8;
    arr.writeInt16LE = BP.writeInt16LE;
    arr.writeInt16BE = BP.writeInt16BE;
    arr.writeInt32LE = BP.writeInt32LE;
    arr.writeInt32BE = BP.writeInt32BE;
    arr.writeFloatLE = BP.writeFloatLE;
    arr.writeFloatBE = BP.writeFloatBE;
    arr.writeDoubleLE = BP.writeDoubleLE;
    arr.writeDoubleBE = BP.writeDoubleBE;
    arr.fill = BP.fill;
    arr.inspect = BP.inspect;
    arr.toArrayBuffer = BP.toArrayBuffer;
    return arr;
  };
  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
  function base64clean(str) {
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
    if (str.length < 2)
      return '';
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str;
  }
  function stringtrim(str) {
    if (str.trim)
      return str.trim();
    return str.replace(/^\s+|\s+$/g, '');
  }
  function toHex(n) {
    if (n < 16)
      return '0' + n.toString(16);
    return n.toString(16);
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for (var i = 0; i < length; i++) {
      codePoint = string.charCodeAt(i);
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        if (!leadSurrogate) {
          if (codePoint > 0xDBFF) {
            if ((units -= 3) > -1)
              bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            if ((units -= 3) > -1)
              bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1)
            bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1)
          bytes.push(0xEF, 0xBF, 0xBD);
      }
      leadSurrogate = null;
      if (codePoint < 0x80) {
        if ((units -= 1) < 0)
          break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0)
          break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0)
          break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0)
          break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    var c,
        hi,
        lo;
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      if ((units -= 2) < 0)
        break;
      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; i++) {
      if ((i + offset >= dst.length) || (i >= src.length))
        break;
      dst[i + offset] = src[i];
    }
    return i;
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:buffer@3.5.0", ["npm:buffer@3.5.0/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:buffer@3.5.0/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-buffer@0.1.0/index", ["npm:buffer@3.5.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? System._nodeRequire('buffer') : require("npm:buffer@3.5.0");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-buffer@0.1.0", ["github:jspm/nodelibs-buffer@0.1.0/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-buffer@0.1.0/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:hctef@0.3.2/body", ["github:jspm/nodelibs-buffer@0.1.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer) {
    function fileReaderReady(reader) {
      return new Promise(function(resolve, reject) {
        reader.onload = function() {
          resolve(reader.result);
        };
        reader.onerror = function() {
          reject(reader.error);
        };
      });
    }
    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(blob);
      return fileReaderReady(reader);
    }
    function readBlobAsText(blob) {
      var reader = new FileReader();
      reader.readAsText(blob);
      return fileReaderReady(reader);
    }
    function decode(body) {
      var form = new FormData();
      body.trim().split('&').forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
      return form;
    }
    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError('Already read'));
      }
      body.bodyUsed = true;
    }
    module.exports = function(body) {
      this.bodyUsed = false;
      this.body = body;
      if (typeof body === 'string') {
        this.arrayBuffer = function() {
          return Promise.resolve(new Uint8Array(this.text()));
        };
        this.text = function() {
          var rejected = consumed(this);
          if (rejected)
            return rejected;
          return Promise.resolve(body);
        };
      }
      if (body instanceof ArrayBuffer || (typeof Buffer !== 'undefined' && Buffer.isBuffer(body))) {
        this.arrayBuffer = function() {
          var rejected = consumed(this);
          if (rejected)
            return rejected;
          return Promise.resolve(body);
        };
        this.text = function() {
          return this.arrayBuffer().toString();
        };
      }
      if (typeof Blob !== 'undefined' && Blob.prototype.isPrototypeOf(body)) {
        this.blob = function() {
          var rejected = consumed(this);
          if (rejected)
            return rejected;
          return Promise.resolve(body);
        };
        this.arrayBuffer = function() {
          return this.blob().then(readBlobAsArrayBuffer);
        };
        this.text = function() {
          return this.blob().then(readBlobAsText);
        };
      }
      if (body.on) {
        this.arrayBuffer = function() {
          var rejected = consumed(this);
          if (rejected)
            return rejected;
          return new Promise(function(resolve, reject) {
            var data = new Buffer(0);
            body.on('data', function(chunk) {
              data = Buffer.concat([data, chunk]);
            });
            body.on('error', reject);
            body.on('end', function() {
              resolve(data);
            });
          });
        };
        this.text = function() {
          return this.arrayBuffer().then(function(buffer) {
            return buffer.toString();
          });
        };
      }
      this.json = function() {
        return this.text().then(JSON.parse);
      };
      this.formData = function() {
        return this.text().then(decode);
      };
    };
  })(require("github:jspm/nodelibs-buffer@0.1.0").Buffer);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:hctef@0.3.2/headers", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function Headers(headers) {
    this.map = {};
    if (headers instanceof Headers)
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    else if (headers)
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
  }
  function normalizeValue(value) {
    if (typeof value !== 'string')
      value = String(value);
    return value;
  }
  function normalizeName(name) {
    if (typeof name !== 'string')
      name = String(name);
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name))
      throw new TypeError('Invalid character in header field name');
    return name.toLowerCase();
  }
  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var list = this.map[name];
    if (!list) {
      list = [];
      this.map[name] = list;
    }
    list.push(value);
  };
  Headers.prototype.delete = function(name) {
    delete this.map[normalizeName(name)];
  };
  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)];
    return values ? values[0] : null;
  };
  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || [];
  };
  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };
  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)];
  };
  Headers.prototype.forEach = function(callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      this.map[name].forEach(function(value) {
        callback.call(thisArg, value, name, this);
      }, this);
    }, this);
  };
  module.exports = Headers;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:hctef@0.3.2/request", ["npm:hctef@0.3.2/body", "npm:hctef@0.3.2/headers", "github:jspm/nodelibs-url@0.1.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Body = require("npm:hctef@0.3.2/body");
  var Headers = require("npm:hctef@0.3.2/headers");
  var url = require("github:jspm/nodelibs-url@0.1.0");
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method;
  }
  module.exports = function Request(input, options) {
    options = options || {};
    var body = options.body;
    if (Request.prototype.isPrototypeOf(input)) {
      if (input.bodyUsed)
        throw new TypeError('Already read');
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers)
        this.headers = new Headers(input.headers);
      this.method = input.method;
      this.mode = input.mode;
      if (!body) {
        body = input.body;
        input.bodyUsed = true;
      }
    } else
      this.url = input;
    if (this.baseURL && this.url)
      this.url = url.resolve(this.baseURL, this.url);
    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers)
      this.headers = new Headers(options.headers);
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;
    if ((this.method === 'GET' || this.method === 'HEAD') && body)
      throw new TypeError('Body not allowed for GET or HEAD requests');
    if (body)
      Body.call(this, body);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:hctef@0.3.2/response", ["npm:hctef@0.3.2/headers", "npm:hctef@0.3.2/body"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Headers = require("npm:hctef@0.3.2/headers");
  var Body = require("npm:hctef@0.3.2/body");
  module.exports = function(bodyInit, options) {
    options = options || {};
    Body.call(this, bodyInit);
    this.type = 'default';
    this.url = options.url || '';
    this.status = options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText;
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:hctef@0.3.2/fetch-xhr", ["npm:hctef@0.3.2/response"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Response = require("npm:hctef@0.3.2/response");
  function headers(xhr) {
    var head = new Headers();
    var pairs = xhr.getAllResponseHeaders().trim().split('\n');
    pairs.forEach(function(header) {
      var split = header.trim().split(':');
      var key = split.shift().trim();
      var value = split.join(':').trim();
      head.append(key, value);
    });
    return head;
  }
  module.exports = function(request) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      function responseURL() {
        if ('responseURL' in xhr)
          return xhr.responseURL;
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders()))
          return xhr.getResponseHeader('X-Request-URL');
      }
      xhr.onload = function() {
        var status = (xhr.status === 1223) ? 204 : xhr.status;
        if (status < 100 || status > 599) {
          reject(new TypeError('Network request failed'));
          return;
        }
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, {
          status: status,
          statusText: xhr.statusText,
          headers: headers(xhr),
          url: responseURL()
        }));
      };
      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };
      xhr.open(request.method, request.url, true);
      if (request.credentials === 'include')
        xhr.withCredentials = true;
      if ('responseType' in xhr)
        xhr.responseType = 'blob';
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });
      xhr.send(typeof request.body === 'undefined' ? null : request.body);
    });
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:detect-node@2.0.3/index", ["github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    module.exports = false;
    try {
      module.exports = Object.prototype.toString.call(global.process) === '[object process]';
    } catch (e) {}
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:detect-node@2.0.3", ["npm:detect-node@2.0.3/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:detect-node@2.0.3/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:events@1.0.2/events", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  module.exports = EventEmitter;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;
  EventEmitter.defaultMaxListeners = 10;
  EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n))
      throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };
  EventEmitter.prototype.emit = function(type) {
    var er,
        handler,
        len,
        args,
        i,
        listeners;
    if (!this._events)
      this._events = {};
    if (type === 'error') {
      if (!this._events.error || (isObject(this._events.error) && !this._events.error.length)) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er;
        }
        throw TypeError('Uncaught, unspecified "error" event.');
      }
    }
    handler = this._events[type];
    if (isUndefined(handler))
      return false;
    if (isFunction(handler)) {
      switch (arguments.length) {
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        default:
          len = arguments.length;
          args = new Array(len - 1);
          for (i = 1; i < len; i++)
            args[i - 1] = arguments[i];
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      len = arguments.length;
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++)
        listeners[i].apply(this, args);
    }
    return true;
  };
  EventEmitter.prototype.addListener = function(type, listener) {
    var m;
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    if (!this._events)
      this._events = {};
    if (this._events.newListener)
      this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type])
      this._events[type] = listener;
    else if (isObject(this._events[type]))
      this._events[type].push(listener);
    else
      this._events[type] = [this._events[type], listener];
    if (isObject(this._events[type]) && !this._events[type].warned) {
      var m;
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }
      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
        if (typeof console.trace === 'function') {
          console.trace();
        }
      }
    }
    return this;
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    var fired = false;
    function g() {
      this.removeListener(type, g);
      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }
    g.listener = listener;
    this.on(type, g);
    return this;
  };
  EventEmitter.prototype.removeListener = function(type, listener) {
    var list,
        position,
        length,
        i;
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    if (!this._events || !this._events[type])
      return this;
    list = this._events[type];
    length = list.length;
    position = -1;
    if (list === listener || (isFunction(list.listener) && list.listener === listener)) {
      delete this._events[type];
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
      for (i = length; i-- > 0; ) {
        if (list[i] === listener || (list[i].listener && list[i].listener === listener)) {
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    }
    return this;
  };
  EventEmitter.prototype.removeAllListeners = function(type) {
    var key,
        listeners;
    if (!this._events)
      return this;
    if (!this._events.removeListener) {
      if (arguments.length === 0)
        this._events = {};
      else if (this._events[type])
        delete this._events[type];
      return this;
    }
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener')
          continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else {
      while (listeners.length)
        this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];
    return this;
  };
  EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type])
      ret = [];
    else if (isFunction(this._events[type]))
      ret = [this._events[type]];
    else
      ret = this._events[type].slice();
    return ret;
  };
  EventEmitter.listenerCount = function(emitter, type) {
    var ret;
    if (!emitter._events || !emitter._events[type])
      ret = 0;
    else if (isFunction(emitter._events[type]))
      ret = 1;
    else
      ret = emitter._events[type].length;
    return ret;
  };
  function isFunction(arg) {
    return typeof arg === 'function';
  }
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  function isUndefined(arg) {
    return arg === void 0;
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:events@1.0.2", ["npm:events@1.0.2/events"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:events@1.0.2/events");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-events@0.1.1/index", ["npm:events@1.0.2"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? System._nodeRequire('events') : require("npm:events@1.0.2");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-events@0.1.1", ["github:jspm/nodelibs-events@0.1.1/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-events@0.1.1/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:inherits@2.0.1/inherits_browser", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (typeof Object.create === 'function') {
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }});
    };
  } else {
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:inherits@2.0.1", ["npm:inherits@2.0.1/inherits_browser"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:inherits@2.0.1/inherits_browser");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:isarray@0.0.1/index", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Array.isArray || function(arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:isarray@0.0.1", ["npm:isarray@0.0.1/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:isarray@0.0.1/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-util-is@1.0.1/lib/util", ["github:jspm/nodelibs-buffer@0.1.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer) {
    function isArray(ar) {
      return Array.isArray(ar);
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === 'number';
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === 'string';
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return isObject(re) && objectToString(re) === '[object RegExp]';
    }
    exports.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return isObject(d) && objectToString(d) === '[object Date]';
    }
    exports.isDate = isDate;
    function isError(e) {
      return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
    }
    exports.isError = isError;
    function isFunction(arg) {
      return typeof arg === 'function';
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
    }
    exports.isPrimitive = isPrimitive;
    function isBuffer(arg) {
      return Buffer.isBuffer(arg);
    }
    exports.isBuffer = isBuffer;
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
  })(require("github:jspm/nodelibs-buffer@0.1.0").Buffer);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-util-is@1.0.1", ["npm:core-util-is@1.0.1/lib/util"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:core-util-is@1.0.1/lib/util");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:readable-stream@1.1.13/lib/_stream_writable", ["github:jspm/nodelibs-buffer@0.1.0", "npm:core-util-is@1.0.1", "npm:inherits@2.0.1", "npm:stream-browserify@1.0.0/index", "npm:readable-stream@1.1.13/lib/_stream_duplex", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer, process) {
    module.exports = Writable;
    var Buffer = require("github:jspm/nodelibs-buffer@0.1.0").Buffer;
    Writable.WritableState = WritableState;
    var util = require("npm:core-util-is@1.0.1");
    util.inherits = require("npm:inherits@2.0.1");
    var Stream = require("npm:stream-browserify@1.0.0/index");
    util.inherits(Writable, Stream);
    function WriteReq(chunk, encoding, cb) {
      this.chunk = chunk;
      this.encoding = encoding;
      this.callback = cb;
    }
    function WritableState(options, stream) {
      var Duplex = require("npm:readable-stream@1.1.13/lib/_stream_duplex");
      options = options || {};
      var hwm = options.highWaterMark;
      var defaultHwm = options.objectMode ? 16 : 16 * 1024;
      this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;
      this.objectMode = !!options.objectMode;
      if (stream instanceof Duplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode;
      this.highWaterMark = ~~this.highWaterMark;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || 'utf8';
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.buffer = [];
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
    }
    function Writable(options) {
      var Duplex = require("npm:readable-stream@1.1.13/lib/_stream_duplex");
      if (!(this instanceof Writable) && !(this instanceof Duplex))
        return new Writable(options);
      this._writableState = new WritableState(options, this);
      this.writable = true;
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      this.emit('error', new Error('Cannot pipe. Not readable.'));
    };
    function writeAfterEnd(stream, state, cb) {
      var er = new Error('write after end');
      stream.emit('error', er);
      process.nextTick(function() {
        cb(er);
      });
    }
    function validChunk(stream, state, chunk, cb) {
      var valid = true;
      if (!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode) {
        var er = new TypeError('Invalid non-string/buffer chunk');
        stream.emit('error', er);
        process.nextTick(function() {
          cb(er);
        });
        valid = false;
      }
      return valid;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      if (util.isFunction(encoding)) {
        cb = encoding;
        encoding = null;
      }
      if (util.isBuffer(chunk))
        encoding = 'buffer';
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (!util.isFunction(cb))
        cb = function() {};
      if (state.ended)
        writeAfterEnd(this, state, cb);
      else if (validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.buffer.length)
          clearBuffer(this, state);
      }
    };
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && util.isString(chunk)) {
        chunk = new Buffer(chunk, encoding);
      }
      return chunk;
    }
    function writeOrBuffer(stream, state, chunk, encoding, cb) {
      chunk = decodeChunk(state, chunk, encoding);
      if (util.isBuffer(chunk))
        encoding = 'buffer';
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked)
        state.buffer.push(new WriteReq(chunk, encoding, cb));
      else
        doWrite(stream, state, false, len, chunk, encoding, cb);
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      if (sync)
        process.nextTick(function() {
          state.pendingcb--;
          cb(er);
        });
      else {
        state.pendingcb--;
        cb(er);
      }
      stream._writableState.errorEmitted = true;
      stream.emit('error', er);
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      onwriteStateUpdate(state);
      if (er)
        onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(stream, state);
        if (!finished && !state.corked && !state.bufferProcessing && state.buffer.length) {
          clearBuffer(stream, state);
        }
        if (sync) {
          process.nextTick(function() {
            afterWrite(stream, state, finished, cb);
          });
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      if (stream._writev && state.buffer.length > 1) {
        var cbs = [];
        for (var c = 0; c < state.buffer.length; c++)
          cbs.push(state.buffer[c].callback);
        state.pendingcb++;
        doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
          for (var i = 0; i < cbs.length; i++) {
            state.pendingcb--;
            cbs[i](err);
          }
        });
        state.buffer = [];
      } else {
        for (var c = 0; c < state.buffer.length; c++) {
          var entry = state.buffer[c];
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          if (state.writing) {
            c++;
            break;
          }
        }
        if (c < state.buffer.length)
          state.buffer = state.buffer.slice(c);
        else
          state.buffer.length = 0;
      }
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new Error('not implemented'));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (util.isFunction(chunk)) {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (util.isFunction(encoding)) {
        cb = encoding;
        encoding = null;
      }
      if (!util.isNullOrUndefined(chunk))
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending && !state.finished)
        endWritable(this, state, cb);
    };
    function needFinish(stream, state) {
      return (state.ending && state.length === 0 && !state.finished && !state.writing);
    }
    function prefinish(stream, state) {
      if (!state.prefinished) {
        state.prefinished = true;
        stream.emit('prefinish');
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(stream, state);
      if (need) {
        if (state.pendingcb === 0) {
          prefinish(stream, state);
          state.finished = true;
          stream.emit('finish');
        } else
          prefinish(stream, state);
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished)
          process.nextTick(cb);
        else
          stream.once('finish', cb);
      }
      state.ended = true;
    }
  })(require("github:jspm/nodelibs-buffer@0.1.0").Buffer, require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:readable-stream@1.1.13/lib/_stream_duplex", ["npm:core-util-is@1.0.1", "npm:inherits@2.0.1", "npm:readable-stream@1.1.13/lib/_stream_readable", "npm:readable-stream@1.1.13/lib/_stream_writable", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    module.exports = Duplex;
    var objectKeys = Object.keys || function(obj) {
      var keys = [];
      for (var key in obj)
        keys.push(key);
      return keys;
    };
    var util = require("npm:core-util-is@1.0.1");
    util.inherits = require("npm:inherits@2.0.1");
    var Readable = require("npm:readable-stream@1.1.13/lib/_stream_readable");
    var Writable = require("npm:readable-stream@1.1.13/lib/_stream_writable");
    util.inherits(Duplex, Readable);
    forEach(objectKeys(Writable.prototype), function(method) {
      if (!Duplex.prototype[method])
        Duplex.prototype[method] = Writable.prototype[method];
    });
    function Duplex(options) {
      if (!(this instanceof Duplex))
        return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      if (options && options.readable === false)
        this.readable = false;
      if (options && options.writable === false)
        this.writable = false;
      this.allowHalfOpen = true;
      if (options && options.allowHalfOpen === false)
        this.allowHalfOpen = false;
      this.once('end', onend);
    }
    function onend() {
      if (this.allowHalfOpen || this._writableState.ended)
        return;
      process.nextTick(this.end.bind(this));
    }
    function forEach(xs, f) {
      for (var i = 0,
          l = xs.length; i < l; i++) {
        f(xs[i], i);
      }
    }
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:string_decoder@0.10.31/index", ["github:jspm/nodelibs-buffer@0.1.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer) {
    var Buffer = require("github:jspm/nodelibs-buffer@0.1.0").Buffer;
    var isBufferEncoding = Buffer.isEncoding || function(encoding) {
      switch (encoding && encoding.toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
        case 'raw':
          return true;
        default:
          return false;
      }
    };
    function assertEncoding(encoding) {
      if (encoding && !isBufferEncoding(encoding)) {
        throw new Error('Unknown encoding: ' + encoding);
      }
    }
    var StringDecoder = exports.StringDecoder = function(encoding) {
      this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
      assertEncoding(encoding);
      switch (this.encoding) {
        case 'utf8':
          this.surrogateSize = 3;
          break;
        case 'ucs2':
        case 'utf16le':
          this.surrogateSize = 2;
          this.detectIncompleteChar = utf16DetectIncompleteChar;
          break;
        case 'base64':
          this.surrogateSize = 3;
          this.detectIncompleteChar = base64DetectIncompleteChar;
          break;
        default:
          this.write = passThroughWrite;
          return;
      }
      this.charBuffer = new Buffer(6);
      this.charReceived = 0;
      this.charLength = 0;
    };
    StringDecoder.prototype.write = function(buffer) {
      var charStr = '';
      while (this.charLength) {
        var available = (buffer.length >= this.charLength - this.charReceived) ? this.charLength - this.charReceived : buffer.length;
        buffer.copy(this.charBuffer, this.charReceived, 0, available);
        this.charReceived += available;
        if (this.charReceived < this.charLength) {
          return '';
        }
        buffer = buffer.slice(available, buffer.length);
        charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
        var charCode = charStr.charCodeAt(charStr.length - 1);
        if (charCode >= 0xD800 && charCode <= 0xDBFF) {
          this.charLength += this.surrogateSize;
          charStr = '';
          continue;
        }
        this.charReceived = this.charLength = 0;
        if (buffer.length === 0) {
          return charStr;
        }
        break;
      }
      this.detectIncompleteChar(buffer);
      var end = buffer.length;
      if (this.charLength) {
        buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
        end -= this.charReceived;
      }
      charStr += buffer.toString(this.encoding, 0, end);
      var end = charStr.length - 1;
      var charCode = charStr.charCodeAt(end);
      if (charCode >= 0xD800 && charCode <= 0xDBFF) {
        var size = this.surrogateSize;
        this.charLength += size;
        this.charReceived += size;
        this.charBuffer.copy(this.charBuffer, size, 0, size);
        buffer.copy(this.charBuffer, 0, 0, size);
        return charStr.substring(0, end);
      }
      return charStr;
    };
    StringDecoder.prototype.detectIncompleteChar = function(buffer) {
      var i = (buffer.length >= 3) ? 3 : buffer.length;
      for (; i > 0; i--) {
        var c = buffer[buffer.length - i];
        if (i == 1 && c >> 5 == 0x06) {
          this.charLength = 2;
          break;
        }
        if (i <= 2 && c >> 4 == 0x0E) {
          this.charLength = 3;
          break;
        }
        if (i <= 3 && c >> 3 == 0x1E) {
          this.charLength = 4;
          break;
        }
      }
      this.charReceived = i;
    };
    StringDecoder.prototype.end = function(buffer) {
      var res = '';
      if (buffer && buffer.length)
        res = this.write(buffer);
      if (this.charReceived) {
        var cr = this.charReceived;
        var buf = this.charBuffer;
        var enc = this.encoding;
        res += buf.slice(0, cr).toString(enc);
      }
      return res;
    };
    function passThroughWrite(buffer) {
      return buffer.toString(this.encoding);
    }
    function utf16DetectIncompleteChar(buffer) {
      this.charReceived = buffer.length % 2;
      this.charLength = this.charReceived ? 2 : 0;
    }
    function base64DetectIncompleteChar(buffer) {
      this.charReceived = buffer.length % 3;
      this.charLength = this.charReceived ? 3 : 0;
    }
  })(require("github:jspm/nodelibs-buffer@0.1.0").Buffer);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:string_decoder@0.10.31", ["npm:string_decoder@0.10.31/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:string_decoder@0.10.31/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:readable-stream@1.1.13/lib/_stream_readable", ["npm:isarray@0.0.1", "github:jspm/nodelibs-buffer@0.1.0", "github:jspm/nodelibs-events@0.1.1", "npm:stream-browserify@1.0.0/index", "npm:core-util-is@1.0.1", "npm:inherits@2.0.1", "@empty", "npm:readable-stream@1.1.13/lib/_stream_duplex", "npm:string_decoder@0.10.31", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer, process) {
    module.exports = Readable;
    var isArray = require("npm:isarray@0.0.1");
    var Buffer = require("github:jspm/nodelibs-buffer@0.1.0").Buffer;
    Readable.ReadableState = ReadableState;
    var EE = require("github:jspm/nodelibs-events@0.1.1").EventEmitter;
    if (!EE.listenerCount)
      EE.listenerCount = function(emitter, type) {
        return emitter.listeners(type).length;
      };
    var Stream = require("npm:stream-browserify@1.0.0/index");
    var util = require("npm:core-util-is@1.0.1");
    util.inherits = require("npm:inherits@2.0.1");
    var StringDecoder;
    var debug = require("@empty");
    if (debug && debug.debuglog) {
      debug = debug.debuglog('stream');
    } else {
      debug = function() {};
    }
    util.inherits(Readable, Stream);
    function ReadableState(options, stream) {
      var Duplex = require("npm:readable-stream@1.1.13/lib/_stream_duplex");
      options = options || {};
      var hwm = options.highWaterMark;
      var defaultHwm = options.objectMode ? 16 : 16 * 1024;
      this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;
      this.highWaterMark = ~~this.highWaterMark;
      this.buffer = [];
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.objectMode = !!options.objectMode;
      if (stream instanceof Duplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode;
      this.defaultEncoding = options.defaultEncoding || 'utf8';
      this.ranOut = false;
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder)
          StringDecoder = require("npm:string_decoder@0.10.31").StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {
      var Duplex = require("npm:readable-stream@1.1.13/lib/_stream_duplex");
      if (!(this instanceof Readable))
        return new Readable(options);
      this._readableState = new ReadableState(options, this);
      this.readable = true;
      Stream.call(this);
    }
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      if (util.isString(chunk) && !state.objectMode) {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = new Buffer(chunk, encoding);
          encoding = '';
        }
      }
      return readableAddChunk(this, state, chunk, encoding, false);
    };
    Readable.prototype.unshift = function(chunk) {
      var state = this._readableState;
      return readableAddChunk(this, state, chunk, '', true);
    };
    function readableAddChunk(stream, state, chunk, encoding, addToFront) {
      var er = chunkInvalid(state, chunk);
      if (er) {
        stream.emit('error', er);
      } else if (util.isNullOrUndefined(chunk)) {
        state.reading = false;
        if (!state.ended)
          onEofChunk(stream, state);
      } else if (state.objectMode || chunk && chunk.length > 0) {
        if (state.ended && !addToFront) {
          var e = new Error('stream.push() after EOF');
          stream.emit('error', e);
        } else if (state.endEmitted && addToFront) {
          var e = new Error('stream.unshift() after end event');
          stream.emit('error', e);
        } else {
          if (state.decoder && !addToFront && !encoding)
            chunk = state.decoder.write(chunk);
          if (!addToFront)
            state.reading = false;
          if (state.flowing && state.length === 0 && !state.sync) {
            stream.emit('data', chunk);
            stream.read(0);
          } else {
            state.length += state.objectMode ? 1 : chunk.length;
            if (addToFront)
              state.buffer.unshift(chunk);
            else
              state.buffer.push(chunk);
            if (state.needReadable)
              emitReadable(stream);
          }
          maybeReadMore(stream, state);
        }
      } else if (!addToFront) {
        state.reading = false;
      }
      return needMoreData(state);
    }
    function needMoreData(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder)
        StringDecoder = require("npm:string_decoder@0.10.31").StringDecoder;
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };
    var MAX_HWM = 0x800000;
    function roundUpToNextPowerOf2(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        for (var p = 1; p < 32; p <<= 1)
          n |= n >> p;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state) {
      if (state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return n === 0 ? 0 : 1;
      if (isNaN(n) || util.isNull(n)) {
        if (state.flowing && state.buffer.length)
          return state.buffer[0].length;
        else
          return state.length;
      }
      if (n <= 0)
        return 0;
      if (n > state.highWaterMark)
        state.highWaterMark = roundUpToNextPowerOf2(n);
      if (n > state.length) {
        if (!state.ended) {
          state.needReadable = true;
          return 0;
        } else
          return state.length;
      }
      return n;
    }
    Readable.prototype.read = function(n) {
      debug('read', n);
      var state = this._readableState;
      var nOrig = n;
      if (!util.isNumber(n) || n > 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug('need readable', doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
      }
      if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
      }
      if (doRead && !state.reading)
        n = howMuchToRead(nOrig, state);
      var ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (util.isNull(ret)) {
        state.needReadable = true;
        n = 0;
      }
      state.length -= n;
      if (state.length === 0 && !state.ended)
        state.needReadable = true;
      if (nOrig !== n && state.ended && state.length === 0)
        endReadable(this);
      if (!util.isNull(ret))
        this.emit('data', ret);
      return ret;
    };
    function chunkInvalid(state, chunk) {
      var er = null;
      if (!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode) {
        er = new TypeError('Invalid non-string/buffer chunk');
      }
      return er;
    }
    function onEofChunk(stream, state) {
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      emitReadable(stream);
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        if (state.sync)
          process.nextTick(function() {
            emitReadable_(stream);
          });
        else
          emitReadable_(stream);
      }
    }
    function emitReadable_(stream) {
      debug('emit readable');
      stream.emit('readable');
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(function() {
          maybeReadMore_(stream, state);
        });
      }
    }
    function maybeReadMore_(stream, state) {
      var len = state.length;
      while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length)
          break;
        else
          len = state.length;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n) {
      this.emit('error', new Error('not implemented'));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : cleanup;
      if (state.endEmitted)
        process.nextTick(endFn);
      else
        src.once('end', endFn);
      dest.on('unpipe', onunpipe);
      function onunpipe(readable) {
        debug('onunpipe');
        if (readable === src) {
          cleanup();
        }
      }
      function onend() {
        debug('onend');
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on('drain', ondrain);
      function cleanup() {
        debug('cleanup');
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', cleanup);
        src.removeListener('data', ondata);
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      src.on('data', ondata);
      function ondata(chunk) {
        debug('ondata');
        var ret = dest.write(chunk);
        if (false === ret) {
          debug('false write response, pause', src._readableState.awaitDrain);
          src._readableState.awaitDrain++;
          src.pause();
        }
      }
      function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EE.listenerCount(dest, 'error') === 0)
          dest.emit('error', er);
      }
      if (!dest._events || !dest._events.error)
        dest.on('error', onerror);
      else if (isArray(dest._events.error))
        dest._events.error.unshift(onerror);
      else
        dest._events.error = [onerror, dest._events.error];
      function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
      }
      dest.once('close', onclose);
      function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
      }
      dest.once('finish', onfinish);
      function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
      }
      dest.emit('pipe', src);
      if (!state.flowing) {
        debug('pipe resume');
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function() {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain)
          state.awaitDrain--;
        if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit('unpipe', this);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++)
          dests[i].emit('unpipe', this);
        return this;
      }
      var i = indexOf(state.pipes, dest);
      if (i === -1)
        return this;
      state.pipes.splice(i, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit('unpipe', this);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      if (ev === 'data' && false !== this._readableState.flowing) {
        this.resume();
      }
      if (ev === 'readable' && this.readable) {
        var state = this._readableState;
        if (!state.readableListening) {
          state.readableListening = true;
          state.emittedReadable = false;
          state.needReadable = true;
          if (!state.reading) {
            var self = this;
            process.nextTick(function() {
              debug('readable nexttick read 0');
              self.read(0);
            });
          } else if (state.length) {
            emitReadable(this, state);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug('resume');
        state.flowing = true;
        if (!state.reading) {
          debug('resume read 0');
          this.read(0);
        }
        resume(this, state);
      }
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(function() {
          resume_(stream, state);
        });
      }
    }
    function resume_(stream, state) {
      state.resumeScheduled = false;
      stream.emit('resume');
      flow(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug('call pause flowing=%j', this._readableState.flowing);
      if (false !== this._readableState.flowing) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
      }
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug('flow', state.flowing);
      if (state.flowing) {
        do {
          var chunk = stream.read();
        } while (null !== chunk && state.flowing);
      }
    }
    Readable.prototype.wrap = function(stream) {
      var state = this._readableState;
      var paused = false;
      var self = this;
      stream.on('end', function() {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            self.push(chunk);
        }
        self.push(null);
      });
      stream.on('data', function(chunk) {
        debug('wrapped data');
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (!chunk || !state.objectMode && !chunk.length)
          return;
        var ret = self.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
          this[i] = function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      var events = ['error', 'close', 'destroy', 'pause', 'resume'];
      forEach(events, function(ev) {
        stream.on(ev, self.emit.bind(self, ev));
      });
      self._read = function(n) {
        debug('wrapped _read', n);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return self;
    };
    Readable._fromList = fromList;
    function fromList(n, state) {
      var list = state.buffer;
      var length = state.length;
      var stringMode = !!state.decoder;
      var objectMode = !!state.objectMode;
      var ret;
      if (list.length === 0)
        return null;
      if (length === 0)
        ret = null;
      else if (objectMode)
        ret = list.shift();
      else if (!n || n >= length) {
        if (stringMode)
          ret = list.join('');
        else
          ret = Buffer.concat(list, length);
        list.length = 0;
      } else {
        if (n < list[0].length) {
          var buf = list[0];
          ret = buf.slice(0, n);
          list[0] = buf.slice(n);
        } else if (n === list[0].length) {
          ret = list.shift();
        } else {
          if (stringMode)
            ret = '';
          else
            ret = new Buffer(n);
          var c = 0;
          for (var i = 0,
              l = list.length; i < l && c < n; i++) {
            var buf = list[0];
            var cpy = Math.min(n - c, buf.length);
            if (stringMode)
              ret += buf.slice(0, cpy);
            else
              buf.copy(ret, c, 0, cpy);
            if (cpy < buf.length)
              list[0] = buf.slice(cpy);
            else
              list.shift();
            c += cpy;
          }
        }
      }
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      if (state.length > 0)
        throw new Error('endReadable called on non-empty stream');
      if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(function() {
          if (!state.endEmitted && state.length === 0) {
            state.endEmitted = true;
            stream.readable = false;
            stream.emit('end');
          }
        });
      }
    }
    function forEach(xs, f) {
      for (var i = 0,
          l = xs.length; i < l; i++) {
        f(xs[i], i);
      }
    }
    function indexOf(xs, x) {
      for (var i = 0,
          l = xs.length; i < l; i++) {
        if (xs[i] === x)
          return i;
      }
      return -1;
    }
  })(require("github:jspm/nodelibs-buffer@0.1.0").Buffer, require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:readable-stream@1.1.13/lib/_stream_transform", ["npm:readable-stream@1.1.13/lib/_stream_duplex", "npm:core-util-is@1.0.1", "npm:inherits@2.0.1", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    module.exports = Transform;
    var Duplex = require("npm:readable-stream@1.1.13/lib/_stream_duplex");
    var util = require("npm:core-util-is@1.0.1");
    util.inherits = require("npm:inherits@2.0.1");
    util.inherits(Transform, Duplex);
    function TransformState(options, stream) {
      this.afterTransform = function(er, data) {
        return afterTransform(stream, er, data);
      };
      this.needTransform = false;
      this.transforming = false;
      this.writecb = null;
      this.writechunk = null;
    }
    function afterTransform(stream, er, data) {
      var ts = stream._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (!cb)
        return stream.emit('error', new Error('no writecb in Transform class'));
      ts.writechunk = null;
      ts.writecb = null;
      if (!util.isNullOrUndefined(data))
        stream.push(data);
      if (cb)
        cb(er);
      var rs = stream._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        stream._read(rs.highWaterMark);
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform))
        return new Transform(options);
      Duplex.call(this, options);
      this._transformState = new TransformState(options, this);
      var stream = this;
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      this.once('prefinish', function() {
        if (util.isFunction(this._flush))
          this._flush(function(er) {
            done(stream, er);
          });
        else
          done(stream);
      });
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      throw new Error('not implemented');
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    function done(stream, er) {
      if (er)
        return stream.emit('error', er);
      var ws = stream._writableState;
      var ts = stream._transformState;
      if (ws.length)
        throw new Error('calling transform done when ws.length != 0');
      if (ts.transforming)
        throw new Error('calling transform done when still transforming');
      return stream.push(null);
    }
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:readable-stream@1.1.13/lib/_stream_passthrough", ["npm:readable-stream@1.1.13/lib/_stream_transform", "npm:core-util-is@1.0.1", "npm:inherits@2.0.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = PassThrough;
  var Transform = require("npm:readable-stream@1.1.13/lib/_stream_transform");
  var util = require("npm:core-util-is@1.0.1");
  util.inherits = require("npm:inherits@2.0.1");
  util.inherits(PassThrough, Transform);
  function PassThrough(options) {
    if (!(this instanceof PassThrough))
      return new PassThrough(options);
    Transform.call(this, options);
  }
  PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:readable-stream@1.1.13/readable", ["npm:readable-stream@1.1.13/lib/_stream_readable", "npm:stream-browserify@1.0.0/index", "npm:readable-stream@1.1.13/lib/_stream_writable", "npm:readable-stream@1.1.13/lib/_stream_duplex", "npm:readable-stream@1.1.13/lib/_stream_transform", "npm:readable-stream@1.1.13/lib/_stream_passthrough"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports = module.exports = require("npm:readable-stream@1.1.13/lib/_stream_readable");
  exports.Stream = require("npm:stream-browserify@1.0.0/index");
  exports.Readable = exports;
  exports.Writable = require("npm:readable-stream@1.1.13/lib/_stream_writable");
  exports.Duplex = require("npm:readable-stream@1.1.13/lib/_stream_duplex");
  exports.Transform = require("npm:readable-stream@1.1.13/lib/_stream_transform");
  exports.PassThrough = require("npm:readable-stream@1.1.13/lib/_stream_passthrough");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:readable-stream@1.1.13/writable", ["npm:readable-stream@1.1.13/lib/_stream_writable"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:readable-stream@1.1.13/lib/_stream_writable");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:readable-stream@1.1.13/duplex", ["npm:readable-stream@1.1.13/lib/_stream_duplex"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:readable-stream@1.1.13/lib/_stream_duplex");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:readable-stream@1.1.13/transform", ["npm:readable-stream@1.1.13/lib/_stream_transform"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:readable-stream@1.1.13/lib/_stream_transform");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:readable-stream@1.1.13/passthrough", ["npm:readable-stream@1.1.13/lib/_stream_passthrough"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:readable-stream@1.1.13/lib/_stream_passthrough");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:stream-browserify@1.0.0/index", ["github:jspm/nodelibs-events@0.1.1", "npm:inherits@2.0.1", "npm:readable-stream@1.1.13/readable", "npm:readable-stream@1.1.13/writable", "npm:readable-stream@1.1.13/duplex", "npm:readable-stream@1.1.13/transform", "npm:readable-stream@1.1.13/passthrough"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Stream;
  var EE = require("github:jspm/nodelibs-events@0.1.1").EventEmitter;
  var inherits = require("npm:inherits@2.0.1");
  inherits(Stream, EE);
  Stream.Readable = require("npm:readable-stream@1.1.13/readable");
  Stream.Writable = require("npm:readable-stream@1.1.13/writable");
  Stream.Duplex = require("npm:readable-stream@1.1.13/duplex");
  Stream.Transform = require("npm:readable-stream@1.1.13/transform");
  Stream.PassThrough = require("npm:readable-stream@1.1.13/passthrough");
  Stream.Stream = Stream;
  function Stream() {
    EE.call(this);
  }
  Stream.prototype.pipe = function(dest, options) {
    var source = this;
    function ondata(chunk) {
      if (dest.writable) {
        if (false === dest.write(chunk) && source.pause) {
          source.pause();
        }
      }
    }
    source.on('data', ondata);
    function ondrain() {
      if (source.readable && source.resume) {
        source.resume();
      }
    }
    dest.on('drain', ondrain);
    if (!dest._isStdio && (!options || options.end !== false)) {
      source.on('end', onend);
      source.on('close', onclose);
    }
    var didOnEnd = false;
    function onend() {
      if (didOnEnd)
        return;
      didOnEnd = true;
      dest.end();
    }
    function onclose() {
      if (didOnEnd)
        return;
      didOnEnd = true;
      if (typeof dest.destroy === 'function')
        dest.destroy();
    }
    function onerror(er) {
      cleanup();
      if (EE.listenerCount(this, 'error') === 0) {
        throw er;
      }
    }
    source.on('error', onerror);
    dest.on('error', onerror);
    function cleanup() {
      source.removeListener('data', ondata);
      dest.removeListener('drain', ondrain);
      source.removeListener('end', onend);
      source.removeListener('close', onclose);
      source.removeListener('error', onerror);
      dest.removeListener('error', onerror);
      source.removeListener('end', cleanup);
      source.removeListener('close', cleanup);
      dest.removeListener('close', cleanup);
    }
    source.on('end', cleanup);
    source.on('close', cleanup);
    dest.on('close', cleanup);
    dest.emit('pipe', source);
    return dest;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:stream-browserify@1.0.0", ["npm:stream-browserify@1.0.0/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:stream-browserify@1.0.0/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-stream@0.1.0/index", ["npm:stream-browserify@1.0.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? System._nodeRequire('stream') : require("npm:stream-browserify@1.0.0");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-stream@0.1.0", ["github:jspm/nodelibs-stream@0.1.0/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-stream@0.1.0/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:util@0.10.3/support/isBufferBrowser", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:util@0.10.3/util", ["npm:util@0.10.3/support/isBufferBrowser", "npm:inherits@2.0.1", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var formatRegExp = /%[sdj%]/g;
    exports.format = function(f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }
        return objects.join(' ');
      }
      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x) {
        if (x === '%%')
          return '%';
        if (i >= len)
          return x;
        switch (x) {
          case '%s':
            return String(args[i++]);
          case '%d':
            return Number(args[i++]);
          case '%j':
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return '[Circular]';
            }
          default:
            return x;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += ' ' + x;
        } else {
          str += ' ' + inspect(x);
        }
      }
      return str;
    };
    exports.deprecate = function(fn, msg) {
      if (isUndefined(global.process)) {
        return function() {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
      }
      if (process.noDeprecation === true) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnviron;
    exports.debuglog = function(set) {
      if (isUndefined(debugEnviron))
        debugEnviron = process.env.NODE_DEBUG || '';
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
          var pid = process.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error('%s %d: %s', set, pid, msg);
          };
        } else {
          debugs[set] = function() {};
        }
      }
      return debugs[set];
    };
    function inspect(obj, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3)
        ctx.depth = arguments[2];
      if (arguments.length >= 4)
        ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        ctx.showHidden = opts;
      } else if (opts) {
        exports._extend(ctx, opts);
      }
      if (isUndefined(ctx.showHidden))
        ctx.showHidden = false;
      if (isUndefined(ctx.depth))
        ctx.depth = 2;
      if (isUndefined(ctx.colors))
        ctx.colors = false;
      if (isUndefined(ctx.customInspect))
        ctx.customInspect = true;
      if (ctx.colors)
        ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect;
    inspect.colors = {
      'bold': [1, 22],
      'italic': [3, 23],
      'underline': [4, 24],
      'inverse': [7, 27],
      'white': [37, 39],
      'grey': [90, 39],
      'black': [30, 39],
      'blue': [34, 39],
      'cyan': [36, 39],
      'green': [32, 39],
      'magenta': [35, 39],
      'red': [31, 39],
      'yellow': [33, 39]
    };
    inspect.styles = {
      'special': 'cyan',
      'number': 'yellow',
      'boolean': 'yellow',
      'undefined': 'grey',
      'null': 'bold',
      'string': 'green',
      'date': 'magenta',
      'regexp': 'red'
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];
      if (style) {
        return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
      } else {
        return str;
      }
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash = {};
      array.forEach(function(val, idx) {
        hash[val] = true;
      });
      return hash;
    }
    function formatValue(ctx, value, recurseTimes) {
      if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);
      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }
      if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
      }
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ': ' + value.name : '';
          return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError(value)) {
          return formatError(value);
        }
      }
      var base = '',
          array = false,
          braces = ['{', '}'];
      if (isArray(value)) {
        array = true;
        braces = ['[', ']'];
      }
      if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
      }
      if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
      }
      if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
      }
      if (isError(value)) {
        base = ' ' + formatError(value);
      }
      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
          return ctx.stylize('[Object]', 'special');
        }
      }
      ctx.seen.push(value);
      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        return ctx.stylize('undefined', 'undefined');
      if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
      }
      if (isNumber(value))
        return ctx.stylize('' + value, 'number');
      if (isBoolean(value))
        return ctx.stylize('' + value, 'boolean');
      if (isNull(value))
        return ctx.stylize('null', 'null');
    }
    function formatError(value) {
      return '[' + Error.prototype.toString.call(value) + ']';
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0,
          l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        } else {
          output.push('');
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
      });
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name,
          str,
          desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || {value: value[key]};
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
          str = ctx.stylize('[Getter]', 'special');
        }
      } else {
        if (desc.set) {
          str = ctx.stylize('[Setter]', 'special');
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (array) {
              str = str.split('\n').map(function(line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function(line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = ctx.stylize('[Circular]', 'special');
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, 'string');
        }
      }
      return name + ': ' + str;
    }
    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0)
          numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
      }, 0);
      if (length > 60) {
        return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
      }
      return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }
    function isArray(ar) {
      return Array.isArray(ar);
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === 'number';
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === 'string';
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return isObject(re) && objectToString(re) === '[object RegExp]';
    }
    exports.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return isObject(d) && objectToString(d) === '[object Date]';
    }
    exports.isDate = isDate;
    function isError(e) {
      return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
    }
    exports.isError = isError;
    function isFunction(arg) {
      return typeof arg === 'function';
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = require("npm:util@0.10.3/support/isBufferBrowser");
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function pad(n) {
      return n < 10 ? '0' + n.toString(10) : n.toString(10);
    }
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    function timestamp() {
      var d = new Date();
      var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
      return [d.getDate(), months[d.getMonth()], time].join(' ');
    }
    exports.log = function() {
      console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
    };
    exports.inherits = require("npm:inherits@2.0.1");
    exports._extend = function(origin, add) {
      if (!add || !isObject(add))
        return origin;
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    };
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:util@0.10.3", ["npm:util@0.10.3/util"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:util@0.10.3/util");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-util@0.1.0/index", ["npm:util@0.10.3"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? System._nodeRequire('util') : require("npm:util@0.10.3");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-util@0.1.0", ["github:jspm/nodelibs-util@0.1.0/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-util@0.1.0/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-http@1.7.1/lib/response", ["github:jspm/nodelibs-stream@0.1.0", "github:jspm/nodelibs-util@0.1.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Stream = require("github:jspm/nodelibs-stream@0.1.0");
  var util = require("github:jspm/nodelibs-util@0.1.0");
  var Response = module.exports = function(res) {
    this.offset = 0;
    this.readable = true;
  };
  util.inherits(Response, Stream);
  var capable = {
    streaming: true,
    status2: true
  };
  function parseHeaders(res) {
    var lines = res.getAllResponseHeaders().split(/\r?\n/);
    var headers = {};
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (line === '')
        continue;
      var m = line.match(/^([^:]+):\s*(.*)/);
      if (m) {
        var key = m[1].toLowerCase(),
            value = m[2];
        if (headers[key] !== undefined) {
          if (isArray(headers[key])) {
            headers[key].push(value);
          } else {
            headers[key] = [headers[key], value];
          }
        } else {
          headers[key] = value;
        }
      } else {
        headers[line] = true;
      }
    }
    return headers;
  }
  Response.prototype.getResponse = function(xhr) {
    var respType = String(xhr.responseType).toLowerCase();
    if (respType === 'blob')
      return xhr.responseBlob || xhr.response;
    if (respType === 'arraybuffer')
      return xhr.response;
    return xhr.responseText;
  };
  Response.prototype.getHeader = function(key) {
    return this.headers[key.toLowerCase()];
  };
  Response.prototype.handle = function(res) {
    if (res.readyState === 2 && capable.status2) {
      try {
        this.statusCode = res.status;
        this.headers = parseHeaders(res);
      } catch (err) {
        capable.status2 = false;
      }
      if (capable.status2) {
        this.emit('ready');
      }
    } else if (capable.streaming && res.readyState === 3) {
      try {
        if (!this.statusCode) {
          this.statusCode = res.status;
          this.headers = parseHeaders(res);
          this.emit('ready');
        }
      } catch (err) {}
      try {
        this._emitData(res);
      } catch (err) {
        capable.streaming = false;
      }
    } else if (res.readyState === 4) {
      if (!this.statusCode) {
        this.statusCode = res.status;
        this.emit('ready');
      }
      this._emitData(res);
      if (res.error) {
        this.emit('error', this.getResponse(res));
      } else
        this.emit('end');
      this.emit('close');
    }
  };
  Response.prototype._emitData = function(res) {
    var respBody = this.getResponse(res);
    if (respBody.toString().match(/ArrayBuffer/)) {
      this.emit('data', new Uint8Array(respBody, this.offset));
      this.offset = respBody.byteLength;
      return;
    }
    if (respBody.length > this.offset) {
      this.emit('data', respBody.slice(this.offset));
      this.offset = respBody.length;
    }
  };
  var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:Base64@0.2.1/base64", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function() {
    var object = typeof exports != 'undefined' ? exports : this;
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    function InvalidCharacterError(message) {
      this.message = message;
    }
    InvalidCharacterError.prototype = new Error;
    InvalidCharacterError.prototype.name = 'InvalidCharacterError';
    object.btoa || (object.btoa = function(input) {
      for (var block,
          charCode,
          idx = 0,
          map = chars,
          output = ''; input.charAt(idx | 0) || (map = '=', idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
        charCode = input.charCodeAt(idx += 3 / 4);
        if (charCode > 0xFF) {
          throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        }
        block = block << 8 | charCode;
      }
      return output;
    });
    object.atob || (object.atob = function(input) {
      input = input.replace(/=+$/, '');
      if (input.length % 4 == 1) {
        throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
      }
      for (var bc = 0,
          bs,
          buffer,
          idx = 0,
          output = ''; buffer = input.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        buffer = chars.indexOf(buffer);
      }
      return output;
    });
  }());
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:Base64@0.2.1", ["npm:Base64@0.2.1/base64"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:Base64@0.2.1/base64");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-http@1.7.1/lib/request", ["github:jspm/nodelibs-stream@0.1.0", "github:jspm/nodelibs-http@1.7.1/lib/response", "npm:Base64@0.2.1", "npm:inherits@2.0.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Stream = require("github:jspm/nodelibs-stream@0.1.0");
  var Response = require("github:jspm/nodelibs-http@1.7.1/lib/response");
  var Base64 = require("npm:Base64@0.2.1");
  var inherits = require("npm:inherits@2.0.1");
  var Request = module.exports = function(xhr, params) {
    var self = this;
    self.writable = true;
    self.xhr = xhr;
    self.body = [];
    self.uri = (params.protocol || 'http:') + '//' + params.host + (params.port ? ':' + params.port : '') + (params.path || '/');
    ;
    if (typeof params.withCredentials === 'undefined') {
      params.withCredentials = true;
    }
    try {
      xhr.withCredentials = params.withCredentials;
    } catch (e) {}
    if (params.responseType)
      try {
        xhr.responseType = params.responseType;
      } catch (e) {}
    xhr.open(params.method || 'GET', self.uri, true);
    xhr.onerror = function(event) {
      self.emit('error', new Error('Network error'));
    };
    self._headers = {};
    if (params.headers) {
      var keys = objectKeys(params.headers);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!self.isSafeRequestHeader(key))
          continue;
        var value = params.headers[key];
        self.setHeader(key, value);
      }
    }
    if (params.auth) {
      this.setHeader('Authorization', 'Basic ' + Base64.btoa(params.auth));
    }
    var res = new Response;
    res.on('close', function() {
      self.emit('close');
    });
    res.on('ready', function() {
      self.emit('response', res);
    });
    res.on('error', function(err) {
      self.emit('error', err);
    });
    xhr.onreadystatechange = function() {
      if (xhr.__aborted)
        return;
      res.handle(xhr);
    };
  };
  inherits(Request, Stream);
  Request.prototype.setHeader = function(key, value) {
    this._headers[key.toLowerCase()] = value;
  };
  Request.prototype.getHeader = function(key) {
    return this._headers[key.toLowerCase()];
  };
  Request.prototype.removeHeader = function(key) {
    delete this._headers[key.toLowerCase()];
  };
  Request.prototype.write = function(s) {
    this.body.push(s);
  };
  Request.prototype.destroy = function(s) {
    this.xhr.__aborted = true;
    this.xhr.abort();
    this.emit('close');
  };
  Request.prototype.end = function(s) {
    if (s !== undefined)
      this.body.push(s);
    var keys = objectKeys(this._headers);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = this._headers[key];
      if (isArray(value)) {
        for (var j = 0; j < value.length; j++) {
          this.xhr.setRequestHeader(key, value[j]);
        }
      } else
        this.xhr.setRequestHeader(key, value);
    }
    if (this.body.length === 0) {
      this.xhr.send('');
    } else if (typeof this.body[0] === 'string') {
      this.xhr.send(this.body.join(''));
    } else if (isArray(this.body[0])) {
      var body = [];
      for (var i = 0; i < this.body.length; i++) {
        body.push.apply(body, this.body[i]);
      }
      this.xhr.send(body);
    } else if (/Array/.test(Object.prototype.toString.call(this.body[0]))) {
      var len = 0;
      for (var i = 0; i < this.body.length; i++) {
        len += this.body[i].length;
      }
      var body = new (this.body[0].constructor)(len);
      var k = 0;
      for (var i = 0; i < this.body.length; i++) {
        var b = this.body[i];
        for (var j = 0; j < b.length; j++) {
          body[k++] = b[j];
        }
      }
      this.xhr.send(body);
    } else if (isXHR2Compatible(this.body[0])) {
      this.xhr.send(this.body[0]);
    } else {
      var body = '';
      for (var i = 0; i < this.body.length; i++) {
        body += this.body[i].toString();
      }
      this.xhr.send(body);
    }
  };
  Request.unsafeHeaders = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
  Request.prototype.isSafeRequestHeader = function(headerName) {
    if (!headerName)
      return false;
    return indexOf(Request.unsafeHeaders, headerName.toLowerCase()) === -1;
  };
  var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for (var key in obj)
      keys.push(key);
    return keys;
  };
  var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };
  var indexOf = function(xs, x) {
    if (xs.indexOf)
      return xs.indexOf(x);
    for (var i = 0; i < xs.length; i++) {
      if (xs[i] === x)
        return i;
    }
    return -1;
  };
  var isXHR2Compatible = function(obj) {
    if (typeof Blob !== 'undefined' && obj instanceof Blob)
      return true;
    if (typeof ArrayBuffer !== 'undefined' && obj instanceof ArrayBuffer)
      return true;
    if (typeof FormData !== 'undefined' && obj instanceof FormData)
      return true;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-http@1.7.1/index", ["github:jspm/nodelibs-events@0.1.1", "github:jspm/nodelibs-http@1.7.1/lib/request", "github:jspm/nodelibs-url@0.1.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (System._nodeRequire) {
    module.exports = System._nodeRequire('http');
  } else {
    var http = module.exports;
    var EventEmitter = require("github:jspm/nodelibs-events@0.1.1").EventEmitter;
    var Request = require("github:jspm/nodelibs-http@1.7.1/lib/request");
    var url = require("github:jspm/nodelibs-url@0.1.0");
    http.request = function(params, cb) {
      if (typeof params === 'string') {
        params = url.parse(params);
      }
      if (!params)
        params = {};
      if (!params.host && !params.port) {
        params.port = parseInt(window.location.port, 10);
      }
      if (!params.host && params.hostname) {
        params.host = params.hostname;
      }
      if (!params.protocol) {
        if (params.scheme) {
          params.protocol = params.scheme + ':';
        } else {
          params.protocol = window.location.protocol;
        }
      }
      if (!params.host) {
        params.host = window.location.hostname || window.location.host;
      }
      if (/:/.test(params.host)) {
        if (!params.port) {
          params.port = params.host.split(':')[1];
        }
        params.host = params.host.split(':')[0];
      }
      if (!params.port)
        params.port = params.protocol == 'https:' ? 443 : 80;
      var req = new Request(new xhrHttp, params);
      if (cb)
        req.on('response', cb);
      return req;
    };
    http.get = function(params, cb) {
      params.method = 'GET';
      var req = http.request(params, cb);
      req.end();
      return req;
    };
    http.Agent = function() {};
    http.Agent.defaultMaxSockets = 4;
    var xhrHttp = (function() {
      if (typeof window === 'undefined') {
        throw new Error('no window object present');
      } else if (window.XMLHttpRequest) {
        return window.XMLHttpRequest;
      } else if (window.ActiveXObject) {
        var axs = ['Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.3.0', 'Microsoft.XMLHTTP'];
        for (var i = 0; i < axs.length; i++) {
          try {
            var ax = new (window.ActiveXObject)(axs[i]);
            return function() {
              if (ax) {
                var ax_ = ax;
                ax = null;
                return ax_;
              } else {
                return new (window.ActiveXObject)(axs[i]);
              }
            };
          } catch (e) {}
        }
        throw new Error('ajax not supported in this browser');
      } else {
        throw new Error('ajax not supported in this browser');
      }
    })();
    http.STATUS_CODES = {
      100: 'Continue',
      101: 'Switching Protocols',
      102: 'Processing',
      200: 'OK',
      201: 'Created',
      202: 'Accepted',
      203: 'Non-Authoritative Information',
      204: 'No Content',
      205: 'Reset Content',
      206: 'Partial Content',
      207: 'Multi-Status',
      300: 'Multiple Choices',
      301: 'Moved Permanently',
      302: 'Moved Temporarily',
      303: 'See Other',
      304: 'Not Modified',
      305: 'Use Proxy',
      307: 'Temporary Redirect',
      400: 'Bad Request',
      401: 'Unauthorized',
      402: 'Payment Required',
      403: 'Forbidden',
      404: 'Not Found',
      405: 'Method Not Allowed',
      406: 'Not Acceptable',
      407: 'Proxy Authentication Required',
      408: 'Request Time-out',
      409: 'Conflict',
      410: 'Gone',
      411: 'Length Required',
      412: 'Precondition Failed',
      413: 'Request Entity Too Large',
      414: 'Request-URI Too Large',
      415: 'Unsupported Media Type',
      416: 'Requested Range Not Satisfiable',
      417: 'Expectation Failed',
      418: 'I\'m a teapot',
      422: 'Unprocessable Entity',
      423: 'Locked',
      424: 'Failed Dependency',
      425: 'Unordered Collection',
      426: 'Upgrade Required',
      428: 'Precondition Required',
      429: 'Too Many Requests',
      431: 'Request Header Fields Too Large',
      500: 'Internal Server Error',
      501: 'Not Implemented',
      502: 'Bad Gateway',
      503: 'Service Unavailable',
      504: 'Gateway Time-out',
      505: 'HTTP Version Not Supported',
      506: 'Variant Also Negotiates',
      507: 'Insufficient Storage',
      509: 'Bandwidth Limit Exceeded',
      510: 'Not Extended',
      511: 'Network Authentication Required'
    };
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-http@1.7.1", ["github:jspm/nodelibs-http@1.7.1/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-http@1.7.1/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:https-browserify@0.0.0/index", ["github:jspm/nodelibs-http@1.7.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var http = require("github:jspm/nodelibs-http@1.7.1");
  var https = module.exports;
  for (var key in http) {
    if (http.hasOwnProperty(key))
      https[key] = http[key];
  }
  ;
  https.request = function(params, cb) {
    if (!params)
      params = {};
    params.scheme = 'https';
    return http.request.call(this, params, cb);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:https-browserify@0.0.0", ["npm:https-browserify@0.0.0/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:https-browserify@0.0.0/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-https@0.1.0/index", ["npm:https-browserify@0.0.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? System._nodeRequire('https') : require("npm:https-browserify@0.0.0");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-https@0.1.0", ["github:jspm/nodelibs-https@0.1.0/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-https@0.1.0/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-fs@0.1.2/index", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  if (System._nodeRequire) {
    module.exports = System._nodeRequire('fs');
  } else {
    exports.readFileSync = function(address) {
      var output;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', address, false);
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState == 4) {
          var status = xhr.status;
          if ((status > 399 && status < 600) || status == 400) {
            throw 'File read error on ' + address;
          } else
            output = xhr.responseText;
        }
      };
      xhr.send(null);
      return output;
    };
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-fs@0.1.2", ["github:jspm/nodelibs-fs@0.1.2/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-fs@0.1.2/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:hctef@0.3.2/fetch-node", ["github:jspm/nodelibs-url@0.1.0", "github:jspm/nodelibs-https@0.1.0", "github:jspm/nodelibs-http@1.7.1", "github:jspm/nodelibs-fs@0.1.2", "npm:hctef@0.3.2/request", "npm:hctef@0.3.2/response", "npm:hctef@0.3.2/headers"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var url = require("github:jspm/nodelibs-url@0.1.0");
  var https = require("github:jspm/nodelibs-https@0.1.0");
  var http = require("github:jspm/nodelibs-http@1.7.1");
  var fs = require("github:jspm/nodelibs-fs@0.1.2");
  var Request = require("npm:hctef@0.3.2/request");
  var Response = require("npm:hctef@0.3.2/response");
  var Headers = require("npm:hctef@0.3.2/headers");
  function fetchFile(request) {
    return new Promise(function(resolve, reject) {
      fs.readFile(request.url.substr(7), function(err, data) {
        if (err)
          reject(err);
        resolve(data);
      });
    }).then(function(data) {
      return new Response(data, {
        status: 200,
        statusText: 'OK',
        headers: new Headers(),
        url: request.url
      });
    });
  }
  function fetchHTTP(input) {
    var options = url.parse(input.url);
    options.protocol = options.protocol || 'http:';
    options.method = input.method;
    options.headers = {};
    input.headers.forEach(function(value, name) {
      options.headers[value] = name;
    });
    return new Promise(function(resolve, reject) {
      var send;
      if (options.protocol === 'https:')
        send = https.request;
      else if (options.protocol === 'http:')
        send = http.request;
      var request = send(options);
      request.on('response', resolve);
      request.on('error', reject);
      if (input.arrayBuffer)
        input.arrayBuffer().then(function(buffer) {
          request.write(buffer);
          request.end();
        });
      else
        request.end();
    }).then(function(message) {
      if (message.statusCode >= 300 && message.statusCode < 400) {
        var request = new Request(input);
        request.url = url.resolve(input.url, message.headers.location);
        return fetchHTTP(request);
      }
      return new Response(message, {
        status: message.statusCode,
        statusText: message.statusMessage,
        headers: new Headers(message.headers),
        url: input.url
      });
    });
  }
  module.exports = function(request) {
    if (request.url.substr(0, 5) === 'file:')
      return fetchFile(request);
    else
      return fetchHTTP(request);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:hctef@0.3.2/fetch", ["npm:hctef@0.3.2/request", "npm:hctef@0.3.2/fetch-xhr", "npm:detect-node@2.0.3", "npm:hctef@0.3.2/fetch-node"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Request = require("npm:hctef@0.3.2/request");
  var fetch;
  if (typeof XMLHttpRequest !== 'undefined')
    fetch = require("npm:hctef@0.3.2/fetch-xhr");
  else if (require("npm:detect-node@2.0.3"))
    fetch = require("npm:hctef@0.3.2/fetch-node");
  else
    fetch = function() {
      return Promise.reject(new Error('cannot fetch request in current environment'));
    };
  module.exports = function() {
    var request = Object.create(Request.prototype);
    Request.apply(request, arguments);
    return fetch(request);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:hctef@0.3.2", ["npm:hctef@0.3.2/fetch"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:hctef@0.3.2/fetch");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/base64", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  exports.encode = function(input, utf8) {
    var output = "";
    var chr1,
        chr2,
        chr3,
        enc1,
        enc2,
        enc3,
        enc4;
    var i = 0;
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    }
    return output;
  };
  exports.decode = function(input, utf8) {
    var output = "";
    var chr1,
        chr2,
        chr3;
    var enc1,
        enc2,
        enc3,
        enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    return output;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/support", ["github:jspm/nodelibs-buffer@0.1.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer) {
    'use strict';
    exports.base64 = true;
    exports.array = true;
    exports.string = true;
    exports.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
    exports.nodebuffer = typeof Buffer !== "undefined";
    exports.uint8array = typeof Uint8Array !== "undefined";
    if (typeof ArrayBuffer === "undefined") {
      exports.blob = false;
    } else {
      var buffer = new ArrayBuffer(0);
      try {
        exports.blob = new Blob([buffer], {type: "application/zip"}).size === 0;
      } catch (e) {
        try {
          var Builder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
          var builder = new Builder();
          builder.append(buffer);
          exports.blob = builder.getBlob('application/zip').size === 0;
        } catch (e) {
          exports.blob = false;
        }
      }
    }
  })(require("github:jspm/nodelibs-buffer@0.1.0").Buffer);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/utils/common", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var TYPED_OK = (typeof Uint8Array !== 'undefined') && (typeof Uint16Array !== 'undefined') && (typeof Int32Array !== 'undefined');
  exports.assign = function(obj) {
    var sources = Array.prototype.slice.call(arguments, 1);
    while (sources.length) {
      var source = sources.shift();
      if (!source) {
        continue;
      }
      if (typeof source !== 'object') {
        throw new TypeError(source + 'must be non-object');
      }
      for (var p in source) {
        if (source.hasOwnProperty(p)) {
          obj[p] = source[p];
        }
      }
    }
    return obj;
  };
  exports.shrinkBuf = function(buf, size) {
    if (buf.length === size) {
      return buf;
    }
    if (buf.subarray) {
      return buf.subarray(0, size);
    }
    buf.length = size;
    return buf;
  };
  var fnTyped = {
    arraySet: function(dest, src, src_offs, len, dest_offs) {
      if (src.subarray && dest.subarray) {
        dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
        return;
      }
      for (var i = 0; i < len; i++) {
        dest[dest_offs + i] = src[src_offs + i];
      }
    },
    flattenChunks: function(chunks) {
      var i,
          l,
          len,
          pos,
          chunk,
          result;
      len = 0;
      for (i = 0, l = chunks.length; i < l; i++) {
        len += chunks[i].length;
      }
      result = new Uint8Array(len);
      pos = 0;
      for (i = 0, l = chunks.length; i < l; i++) {
        chunk = chunks[i];
        result.set(chunk, pos);
        pos += chunk.length;
      }
      return result;
    }
  };
  var fnUntyped = {
    arraySet: function(dest, src, src_offs, len, dest_offs) {
      for (var i = 0; i < len; i++) {
        dest[dest_offs + i] = src[src_offs + i];
      }
    },
    flattenChunks: function(chunks) {
      return [].concat.apply([], chunks);
    }
  };
  exports.setTyped = function(on) {
    if (on) {
      exports.Buf8 = Uint8Array;
      exports.Buf16 = Uint16Array;
      exports.Buf32 = Int32Array;
      exports.assign(exports, fnTyped);
    } else {
      exports.Buf8 = Array;
      exports.Buf16 = Array;
      exports.Buf32 = Array;
      exports.assign(exports, fnUntyped);
    }
  };
  exports.setTyped(TYPED_OK);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/zlib/trees", ["npm:pako@0.2.8/lib/utils/common", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var utils = require("npm:pako@0.2.8/lib/utils/common");
    var Z_FIXED = 4;
    var Z_BINARY = 0;
    var Z_TEXT = 1;
    var Z_UNKNOWN = 2;
    function zero(buf) {
      var len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    var STORED_BLOCK = 0;
    var STATIC_TREES = 1;
    var DYN_TREES = 2;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var Buf_size = 16;
    var MAX_BL_BITS = 7;
    var END_BLOCK = 256;
    var REP_3_6 = 16;
    var REPZ_3_10 = 17;
    var REPZ_11_138 = 18;
    var extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
    var extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
    var extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
    var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    var DIST_CODE_LEN = 512;
    var static_ltree = new Array((L_CODES + 2) * 2);
    zero(static_ltree);
    var static_dtree = new Array(D_CODES * 2);
    zero(static_dtree);
    var _dist_code = new Array(DIST_CODE_LEN);
    zero(_dist_code);
    var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
    zero(_length_code);
    var base_length = new Array(LENGTH_CODES);
    zero(base_length);
    var base_dist = new Array(D_CODES);
    zero(base_dist);
    var StaticTreeDesc = function(static_tree, extra_bits, extra_base, elems, max_length) {
      this.static_tree = static_tree;
      this.extra_bits = extra_bits;
      this.extra_base = extra_base;
      this.elems = elems;
      this.max_length = max_length;
      this.has_stree = static_tree && static_tree.length;
    };
    var static_l_desc;
    var static_d_desc;
    var static_bl_desc;
    var TreeDesc = function(dyn_tree, stat_desc) {
      this.dyn_tree = dyn_tree;
      this.max_code = 0;
      this.stat_desc = stat_desc;
    };
    function d_code(dist) {
      return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
    }
    function put_short(s, w) {
      s.pending_buf[s.pending++] = (w) & 0xff;
      s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
    }
    function send_bits(s, value, length) {
      if (s.bi_valid > (Buf_size - length)) {
        s.bi_buf |= (value << s.bi_valid) & 0xffff;
        put_short(s, s.bi_buf);
        s.bi_buf = value >> (Buf_size - s.bi_valid);
        s.bi_valid += length - Buf_size;
      } else {
        s.bi_buf |= (value << s.bi_valid) & 0xffff;
        s.bi_valid += length;
      }
    }
    function send_code(s, c, tree) {
      send_bits(s, tree[c * 2], tree[c * 2 + 1]);
    }
    function bi_reverse(code, len) {
      var res = 0;
      do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
      } while (--len > 0);
      return res >>> 1;
    }
    function bi_flush(s) {
      if (s.bi_valid === 16) {
        put_short(s, s.bi_buf);
        s.bi_buf = 0;
        s.bi_valid = 0;
      } else if (s.bi_valid >= 8) {
        s.pending_buf[s.pending++] = s.bi_buf & 0xff;
        s.bi_buf >>= 8;
        s.bi_valid -= 8;
      }
    }
    function gen_bitlen(s, desc) {
      var tree = desc.dyn_tree;
      var max_code = desc.max_code;
      var stree = desc.stat_desc.static_tree;
      var has_stree = desc.stat_desc.has_stree;
      var extra = desc.stat_desc.extra_bits;
      var base = desc.stat_desc.extra_base;
      var max_length = desc.stat_desc.max_length;
      var h;
      var n,
          m;
      var bits;
      var xbits;
      var f;
      var overflow = 0;
      for (bits = 0; bits <= MAX_BITS; bits++) {
        s.bl_count[bits] = 0;
      }
      tree[s.heap[s.heap_max] * 2 + 1] = 0;
      for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
        n = s.heap[h];
        bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
          bits = max_length;
          overflow++;
        }
        tree[n * 2 + 1] = bits;
        if (n > max_code) {
          continue;
        }
        s.bl_count[bits]++;
        xbits = 0;
        if (n >= base) {
          xbits = extra[n - base];
        }
        f = tree[n * 2];
        s.opt_len += f * (bits + xbits);
        if (has_stree) {
          s.static_len += f * (stree[n * 2 + 1] + xbits);
        }
      }
      if (overflow === 0) {
        return;
      }
      do {
        bits = max_length - 1;
        while (s.bl_count[bits] === 0) {
          bits--;
        }
        s.bl_count[bits]--;
        s.bl_count[bits + 1] += 2;
        s.bl_count[max_length]--;
        overflow -= 2;
      } while (overflow > 0);
      for (bits = max_length; bits !== 0; bits--) {
        n = s.bl_count[bits];
        while (n !== 0) {
          m = s.heap[--h];
          if (m > max_code) {
            continue;
          }
          if (tree[m * 2 + 1] !== bits) {
            s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
            tree[m * 2 + 1] = bits;
          }
          n--;
        }
      }
    }
    function gen_codes(tree, max_code, bl_count) {
      var next_code = new Array(MAX_BITS + 1);
      var code = 0;
      var bits;
      var n;
      for (bits = 1; bits <= MAX_BITS; bits++) {
        next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
      }
      for (n = 0; n <= max_code; n++) {
        var len = tree[n * 2 + 1];
        if (len === 0) {
          continue;
        }
        tree[n * 2] = bi_reverse(next_code[len]++, len);
      }
    }
    function tr_static_init() {
      var n;
      var bits;
      var length;
      var code;
      var dist;
      var bl_count = new Array(MAX_BITS + 1);
      length = 0;
      for (code = 0; code < LENGTH_CODES - 1; code++) {
        base_length[code] = length;
        for (n = 0; n < (1 << extra_lbits[code]); n++) {
          _length_code[length++] = code;
        }
      }
      _length_code[length - 1] = code;
      dist = 0;
      for (code = 0; code < 16; code++) {
        base_dist[code] = dist;
        for (n = 0; n < (1 << extra_dbits[code]); n++) {
          _dist_code[dist++] = code;
        }
      }
      dist >>= 7;
      for (; code < D_CODES; code++) {
        base_dist[code] = dist << 7;
        for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
          _dist_code[256 + dist++] = code;
        }
      }
      for (bits = 0; bits <= MAX_BITS; bits++) {
        bl_count[bits] = 0;
      }
      n = 0;
      while (n <= 143) {
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
      }
      while (n <= 255) {
        static_ltree[n * 2 + 1] = 9;
        n++;
        bl_count[9]++;
      }
      while (n <= 279) {
        static_ltree[n * 2 + 1] = 7;
        n++;
        bl_count[7]++;
      }
      while (n <= 287) {
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
      }
      gen_codes(static_ltree, L_CODES + 1, bl_count);
      for (n = 0; n < D_CODES; n++) {
        static_dtree[n * 2 + 1] = 5;
        static_dtree[n * 2] = bi_reverse(n, 5);
      }
      static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
      static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
      static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
    }
    function init_block(s) {
      var n;
      for (n = 0; n < L_CODES; n++) {
        s.dyn_ltree[n * 2] = 0;
      }
      for (n = 0; n < D_CODES; n++) {
        s.dyn_dtree[n * 2] = 0;
      }
      for (n = 0; n < BL_CODES; n++) {
        s.bl_tree[n * 2] = 0;
      }
      s.dyn_ltree[END_BLOCK * 2] = 1;
      s.opt_len = s.static_len = 0;
      s.last_lit = s.matches = 0;
    }
    function bi_windup(s) {
      if (s.bi_valid > 8) {
        put_short(s, s.bi_buf);
      } else if (s.bi_valid > 0) {
        s.pending_buf[s.pending++] = s.bi_buf;
      }
      s.bi_buf = 0;
      s.bi_valid = 0;
    }
    function copy_block(s, buf, len, header) {
      bi_windup(s);
      if (header) {
        put_short(s, len);
        put_short(s, ~len);
      }
      utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
      s.pending += len;
    }
    function smaller(tree, n, m, depth) {
      var _n2 = n * 2;
      var _m2 = m * 2;
      return (tree[_n2] < tree[_m2] || (tree[_n2] === tree[_m2] && depth[n] <= depth[m]));
    }
    function pqdownheap(s, tree, k) {
      var v = s.heap[k];
      var j = k << 1;
      while (j <= s.heap_len) {
        if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
          j++;
        }
        if (smaller(tree, v, s.heap[j], s.depth)) {
          break;
        }
        s.heap[k] = s.heap[j];
        k = j;
        j <<= 1;
      }
      s.heap[k] = v;
    }
    function compress_block(s, ltree, dtree) {
      var dist;
      var lc;
      var lx = 0;
      var code;
      var extra;
      if (s.last_lit !== 0) {
        do {
          dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
          lc = s.pending_buf[s.l_buf + lx];
          lx++;
          if (dist === 0) {
            send_code(s, lc, ltree);
          } else {
            code = _length_code[lc];
            send_code(s, code + LITERALS + 1, ltree);
            extra = extra_lbits[code];
            if (extra !== 0) {
              lc -= base_length[code];
              send_bits(s, lc, extra);
            }
            dist--;
            code = d_code(dist);
            send_code(s, code, dtree);
            extra = extra_dbits[code];
            if (extra !== 0) {
              dist -= base_dist[code];
              send_bits(s, dist, extra);
            }
          }
        } while (lx < s.last_lit);
      }
      send_code(s, END_BLOCK, ltree);
    }
    function build_tree(s, desc) {
      var tree = desc.dyn_tree;
      var stree = desc.stat_desc.static_tree;
      var has_stree = desc.stat_desc.has_stree;
      var elems = desc.stat_desc.elems;
      var n,
          m;
      var max_code = -1;
      var node;
      s.heap_len = 0;
      s.heap_max = HEAP_SIZE;
      for (n = 0; n < elems; n++) {
        if (tree[n * 2] !== 0) {
          s.heap[++s.heap_len] = max_code = n;
          s.depth[n] = 0;
        } else {
          tree[n * 2 + 1] = 0;
        }
      }
      while (s.heap_len < 2) {
        node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
        tree[node * 2] = 1;
        s.depth[node] = 0;
        s.opt_len--;
        if (has_stree) {
          s.static_len -= stree[node * 2 + 1];
        }
      }
      desc.max_code = max_code;
      for (n = (s.heap_len >> 1); n >= 1; n--) {
        pqdownheap(s, tree, n);
      }
      node = elems;
      do {
        n = s.heap[1];
        s.heap[1] = s.heap[s.heap_len--];
        pqdownheap(s, tree, 1);
        m = s.heap[1];
        s.heap[--s.heap_max] = n;
        s.heap[--s.heap_max] = m;
        tree[node * 2] = tree[n * 2] + tree[m * 2];
        s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
        tree[n * 2 + 1] = tree[m * 2 + 1] = node;
        s.heap[1] = node++;
        pqdownheap(s, tree, 1);
      } while (s.heap_len >= 2);
      s.heap[--s.heap_max] = s.heap[1];
      gen_bitlen(s, desc);
      gen_codes(tree, max_code, s.bl_count);
    }
    function scan_tree(s, tree, max_code) {
      var n;
      var prevlen = -1;
      var curlen;
      var nextlen = tree[0 * 2 + 1];
      var count = 0;
      var max_count = 7;
      var min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      tree[(max_code + 1) * 2 + 1] = 0xffff;
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count < max_count && curlen === nextlen) {
          continue;
        } else if (count < min_count) {
          s.bl_tree[curlen * 2] += count;
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            s.bl_tree[curlen * 2]++;
          }
          s.bl_tree[REP_3_6 * 2]++;
        } else if (count <= 10) {
          s.bl_tree[REPZ_3_10 * 2]++;
        } else {
          s.bl_tree[REPZ_11_138 * 2]++;
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    }
    function send_tree(s, tree, max_code) {
      var n;
      var prevlen = -1;
      var curlen;
      var nextlen = tree[0 * 2 + 1];
      var count = 0;
      var max_count = 7;
      var min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count < max_count && curlen === nextlen) {
          continue;
        } else if (count < min_count) {
          do {
            send_code(s, curlen, s.bl_tree);
          } while (--count !== 0);
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            send_code(s, curlen, s.bl_tree);
            count--;
          }
          send_code(s, REP_3_6, s.bl_tree);
          send_bits(s, count - 3, 2);
        } else if (count <= 10) {
          send_code(s, REPZ_3_10, s.bl_tree);
          send_bits(s, count - 3, 3);
        } else {
          send_code(s, REPZ_11_138, s.bl_tree);
          send_bits(s, count - 11, 7);
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    }
    function build_bl_tree(s) {
      var max_blindex;
      scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
      scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
      build_tree(s, s.bl_desc);
      for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
        if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
          break;
        }
      }
      s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
      return max_blindex;
    }
    function send_all_trees(s, lcodes, dcodes, blcodes) {
      var rank;
      send_bits(s, lcodes - 257, 5);
      send_bits(s, dcodes - 1, 5);
      send_bits(s, blcodes - 4, 4);
      for (rank = 0; rank < blcodes; rank++) {
        send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
      }
      send_tree(s, s.dyn_ltree, lcodes - 1);
      send_tree(s, s.dyn_dtree, dcodes - 1);
    }
    function detect_data_type(s) {
      var black_mask = 0xf3ffc07f;
      var n;
      for (n = 0; n <= 31; n++, black_mask >>>= 1) {
        if ((black_mask & 1) && (s.dyn_ltree[n * 2] !== 0)) {
          return Z_BINARY;
        }
      }
      if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
        return Z_TEXT;
      }
      for (n = 32; n < LITERALS; n++) {
        if (s.dyn_ltree[n * 2] !== 0) {
          return Z_TEXT;
        }
      }
      return Z_BINARY;
    }
    var static_init_done = false;
    function _tr_init(s) {
      if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
      }
      s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
      s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
      s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
      s.bi_buf = 0;
      s.bi_valid = 0;
      init_block(s);
    }
    function _tr_stored_block(s, buf, stored_len, last) {
      send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
      copy_block(s, buf, stored_len, true);
    }
    function _tr_align(s) {
      send_bits(s, STATIC_TREES << 1, 3);
      send_code(s, END_BLOCK, static_ltree);
      bi_flush(s);
    }
    function _tr_flush_block(s, buf, stored_len, last) {
      var opt_lenb,
          static_lenb;
      var max_blindex = 0;
      if (s.level > 0) {
        if (s.strm.data_type === Z_UNKNOWN) {
          s.strm.data_type = detect_data_type(s);
        }
        build_tree(s, s.l_desc);
        build_tree(s, s.d_desc);
        max_blindex = build_bl_tree(s);
        opt_lenb = (s.opt_len + 3 + 7) >>> 3;
        static_lenb = (s.static_len + 3 + 7) >>> 3;
        if (static_lenb <= opt_lenb) {
          opt_lenb = static_lenb;
        }
      } else {
        opt_lenb = static_lenb = stored_len + 5;
      }
      if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
        _tr_stored_block(s, buf, stored_len, last);
      } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
        send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
        compress_block(s, static_ltree, static_dtree);
      } else {
        send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
        send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
        compress_block(s, s.dyn_ltree, s.dyn_dtree);
      }
      init_block(s);
      if (last) {
        bi_windup(s);
      }
    }
    function _tr_tally(s, dist, lc) {
      s.pending_buf[s.d_buf + s.last_lit * 2] = (dist >>> 8) & 0xff;
      s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;
      s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
      s.last_lit++;
      if (dist === 0) {
        s.dyn_ltree[lc * 2]++;
      } else {
        s.matches++;
        dist--;
        s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
        s.dyn_dtree[d_code(dist) * 2]++;
      }
      return (s.last_lit === s.lit_bufsize - 1);
    }
    exports._tr_init = _tr_init;
    exports._tr_stored_block = _tr_stored_block;
    exports._tr_flush_block = _tr_flush_block;
    exports._tr_tally = _tr_tally;
    exports._tr_align = _tr_align;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/zlib/adler32", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function adler32(adler, buf, len, pos) {
    var s1 = (adler & 0xffff) | 0,
        s2 = ((adler >>> 16) & 0xffff) | 0,
        n = 0;
    while (len !== 0) {
      n = len > 2000 ? 2000 : len;
      len -= n;
      do {
        s1 = (s1 + buf[pos++]) | 0;
        s2 = (s2 + s1) | 0;
      } while (--n);
      s1 %= 65521;
      s2 %= 65521;
    }
    return (s1 | (s2 << 16)) | 0;
  }
  module.exports = adler32;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/zlib/crc32", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function makeTable() {
    var c,
        table = [];
    for (var n = 0; n < 256; n++) {
      c = n;
      for (var k = 0; k < 8; k++) {
        c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
      }
      table[n] = c;
    }
    return table;
  }
  var crcTable = makeTable();
  function crc32(crc, buf, len, pos) {
    var t = crcTable,
        end = pos + len;
    crc = crc ^ (-1);
    for (var i = pos; i < end; i++) {
      crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
    }
    return (crc ^ (-1));
  }
  module.exports = crc32;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/zlib/messages", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  module.exports = {
    '2': 'need dictionary',
    '1': 'stream end',
    '0': '',
    '-1': 'file error',
    '-2': 'stream error',
    '-3': 'data error',
    '-4': 'insufficient memory',
    '-5': 'buffer error',
    '-6': 'incompatible version'
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/zlib/deflate", ["npm:pako@0.2.8/lib/utils/common", "npm:pako@0.2.8/lib/zlib/trees", "npm:pako@0.2.8/lib/zlib/adler32", "npm:pako@0.2.8/lib/zlib/crc32", "npm:pako@0.2.8/lib/zlib/messages", "github:jspm/nodelibs-buffer@0.1.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer) {
    'use strict';
    var utils = require("npm:pako@0.2.8/lib/utils/common");
    var trees = require("npm:pako@0.2.8/lib/zlib/trees");
    var adler32 = require("npm:pako@0.2.8/lib/zlib/adler32");
    var crc32 = require("npm:pako@0.2.8/lib/zlib/crc32");
    var msg = require("npm:pako@0.2.8/lib/zlib/messages");
    var Z_NO_FLUSH = 0;
    var Z_PARTIAL_FLUSH = 1;
    var Z_FULL_FLUSH = 3;
    var Z_FINISH = 4;
    var Z_BLOCK = 5;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_STREAM_ERROR = -2;
    var Z_DATA_ERROR = -3;
    var Z_BUF_ERROR = -5;
    var Z_DEFAULT_COMPRESSION = -1;
    var Z_FILTERED = 1;
    var Z_HUFFMAN_ONLY = 2;
    var Z_RLE = 3;
    var Z_FIXED = 4;
    var Z_DEFAULT_STRATEGY = 0;
    var Z_UNKNOWN = 2;
    var Z_DEFLATED = 8;
    var MAX_MEM_LEVEL = 9;
    var MAX_WBITS = 15;
    var DEF_MEM_LEVEL = 8;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);
    var PRESET_DICT = 0x20;
    var INIT_STATE = 42;
    var EXTRA_STATE = 69;
    var NAME_STATE = 73;
    var COMMENT_STATE = 91;
    var HCRC_STATE = 103;
    var BUSY_STATE = 113;
    var FINISH_STATE = 666;
    var BS_NEED_MORE = 1;
    var BS_BLOCK_DONE = 2;
    var BS_FINISH_STARTED = 3;
    var BS_FINISH_DONE = 4;
    var OS_CODE = 0x03;
    function err(strm, errorCode) {
      strm.msg = msg[errorCode];
      return errorCode;
    }
    function rank(f) {
      return ((f) << 1) - ((f) > 4 ? 9 : 0);
    }
    function zero(buf) {
      var len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    function flush_pending(strm) {
      var s = strm.state;
      var len = s.pending;
      if (len > strm.avail_out) {
        len = strm.avail_out;
      }
      if (len === 0) {
        return;
      }
      utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
      strm.next_out += len;
      s.pending_out += len;
      strm.total_out += len;
      strm.avail_out -= len;
      s.pending -= len;
      if (s.pending === 0) {
        s.pending_out = 0;
      }
    }
    function flush_block_only(s, last) {
      trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
      s.block_start = s.strstart;
      flush_pending(s.strm);
    }
    function put_byte(s, b) {
      s.pending_buf[s.pending++] = b;
    }
    function putShortMSB(s, b) {
      s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
      s.pending_buf[s.pending++] = b & 0xff;
    }
    function read_buf(strm, buf, start, size) {
      var len = strm.avail_in;
      if (len > size) {
        len = size;
      }
      if (len === 0) {
        return 0;
      }
      strm.avail_in -= len;
      utils.arraySet(buf, strm.input, strm.next_in, len, start);
      if (strm.state.wrap === 1) {
        strm.adler = adler32(strm.adler, buf, len, start);
      } else if (strm.state.wrap === 2) {
        strm.adler = crc32(strm.adler, buf, len, start);
      }
      strm.next_in += len;
      strm.total_in += len;
      return len;
    }
    function longest_match(s, cur_match) {
      var chain_length = s.max_chain_length;
      var scan = s.strstart;
      var match;
      var len;
      var best_len = s.prev_length;
      var nice_match = s.nice_match;
      var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
      var _win = s.window;
      var wmask = s.w_mask;
      var prev = s.prev;
      var strend = s.strstart + MAX_MATCH;
      var scan_end1 = _win[scan + best_len - 1];
      var scan_end = _win[scan + best_len];
      if (s.prev_length >= s.good_match) {
        chain_length >>= 2;
      }
      if (nice_match > s.lookahead) {
        nice_match = s.lookahead;
      }
      do {
        match = cur_match;
        if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
          continue;
        }
        scan += 2;
        match++;
        do {} while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
        len = MAX_MATCH - (strend - scan);
        scan = strend - MAX_MATCH;
        if (len > best_len) {
          s.match_start = cur_match;
          best_len = len;
          if (len >= nice_match) {
            break;
          }
          scan_end1 = _win[scan + best_len - 1];
          scan_end = _win[scan + best_len];
        }
      } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
      if (best_len <= s.lookahead) {
        return best_len;
      }
      return s.lookahead;
    }
    function fill_window(s) {
      var _w_size = s.w_size;
      var p,
          n,
          m,
          more,
          str;
      do {
        more = s.window_size - s.lookahead - s.strstart;
        if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
          utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
          s.match_start -= _w_size;
          s.strstart -= _w_size;
          s.block_start -= _w_size;
          n = s.hash_size;
          p = n;
          do {
            m = s.head[--p];
            s.head[p] = (m >= _w_size ? m - _w_size : 0);
          } while (--n);
          n = _w_size;
          p = n;
          do {
            m = s.prev[--p];
            s.prev[p] = (m >= _w_size ? m - _w_size : 0);
          } while (--n);
          more += _w_size;
        }
        if (s.strm.avail_in === 0) {
          break;
        }
        n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
        s.lookahead += n;
        if (s.lookahead + s.insert >= MIN_MATCH) {
          str = s.strstart - s.insert;
          s.ins_h = s.window[str];
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
          while (s.insert) {
            s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
            s.insert--;
            if (s.lookahead + s.insert < MIN_MATCH) {
              break;
            }
          }
        }
      } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
    }
    function deflate_stored(s, flush) {
      var max_block_size = 0xffff;
      if (max_block_size > s.pending_buf_size - 5) {
        max_block_size = s.pending_buf_size - 5;
      }
      for (; ; ) {
        if (s.lookahead <= 1) {
          fill_window(s);
          if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        s.strstart += s.lookahead;
        s.lookahead = 0;
        var max_start = s.block_start + max_block_size;
        if (s.strstart === 0 || s.strstart >= max_start) {
          s.lookahead = s.strstart - max_start;
          s.strstart = max_start;
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
        if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.strstart > s.block_start) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_NEED_MORE;
    }
    function deflate_fast(s, flush) {
      var hash_head;
      var bflush;
      for (; ; ) {
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s.lookahead >= MIN_MATCH) {
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
        if (hash_head !== 0 && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
          s.match_length = longest_match(s, hash_head);
        }
        if (s.match_length >= MIN_MATCH) {
          bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
          s.lookahead -= s.match_length;
          if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
            s.match_length--;
            do {
              s.strstart++;
              s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
            } while (--s.match_length !== 0);
            s.strstart++;
          } else {
            s.strstart += s.match_length;
            s.match_length = 0;
            s.ins_h = s.window[s.strstart];
            s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;
          }
        } else {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_slow(s, flush) {
      var hash_head;
      var bflush;
      var max_insert;
      for (; ; ) {
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s.lookahead >= MIN_MATCH) {
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
        s.prev_length = s.match_length;
        s.prev_match = s.match_start;
        s.match_length = MIN_MATCH - 1;
        if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)) {
          s.match_length = longest_match(s, hash_head);
          if (s.match_length <= 5 && (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096))) {
            s.match_length = MIN_MATCH - 1;
          }
        }
        if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
          max_insert = s.strstart + s.lookahead - MIN_MATCH;
          bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
          s.lookahead -= s.prev_length - 1;
          s.prev_length -= 2;
          do {
            if (++s.strstart <= max_insert) {
              s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
            }
          } while (--s.prev_length !== 0);
          s.match_available = 0;
          s.match_length = MIN_MATCH - 1;
          s.strstart++;
          if (bflush) {
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          }
        } else if (s.match_available) {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
          if (bflush) {
            flush_block_only(s, false);
          }
          s.strstart++;
          s.lookahead--;
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        } else {
          s.match_available = 1;
          s.strstart++;
          s.lookahead--;
        }
      }
      if (s.match_available) {
        bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
        s.match_available = 0;
      }
      s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_rle(s, flush) {
      var bflush;
      var prev;
      var scan,
          strend;
      var _win = s.window;
      for (; ; ) {
        if (s.lookahead <= MAX_MATCH) {
          fill_window(s);
          if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        s.match_length = 0;
        if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
          scan = s.strstart - 1;
          prev = _win[scan];
          if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
            strend = s.strstart + MAX_MATCH;
            do {} while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
            s.match_length = MAX_MATCH - (strend - scan);
            if (s.match_length > s.lookahead) {
              s.match_length = s.lookahead;
            }
          }
        }
        if (s.match_length >= MIN_MATCH) {
          bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
          s.lookahead -= s.match_length;
          s.strstart += s.match_length;
          s.match_length = 0;
        } else {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_huff(s, flush) {
      var bflush;
      for (; ; ) {
        if (s.lookahead === 0) {
          fill_window(s);
          if (s.lookahead === 0) {
            if (flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            break;
          }
        }
        s.match_length = 0;
        bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    var Config = function(good_length, max_lazy, nice_length, max_chain, func) {
      this.good_length = good_length;
      this.max_lazy = max_lazy;
      this.nice_length = nice_length;
      this.max_chain = max_chain;
      this.func = func;
    };
    var configuration_table;
    configuration_table = [new Config(0, 0, 0, 0, deflate_stored), new Config(4, 4, 8, 4, deflate_fast), new Config(4, 5, 16, 8, deflate_fast), new Config(4, 6, 32, 32, deflate_fast), new Config(4, 4, 16, 16, deflate_slow), new Config(8, 16, 32, 32, deflate_slow), new Config(8, 16, 128, 128, deflate_slow), new Config(8, 32, 128, 256, deflate_slow), new Config(32, 128, 258, 1024, deflate_slow), new Config(32, 258, 258, 4096, deflate_slow)];
    function lm_init(s) {
      s.window_size = 2 * s.w_size;
      zero(s.head);
      s.max_lazy_match = configuration_table[s.level].max_lazy;
      s.good_match = configuration_table[s.level].good_length;
      s.nice_match = configuration_table[s.level].nice_length;
      s.max_chain_length = configuration_table[s.level].max_chain;
      s.strstart = 0;
      s.block_start = 0;
      s.lookahead = 0;
      s.insert = 0;
      s.match_length = s.prev_length = MIN_MATCH - 1;
      s.match_available = 0;
      s.ins_h = 0;
    }
    function DeflateState() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = Z_DEFLATED;
      this.last_flush = -1;
      this.w_size = 0;
      this.w_bits = 0;
      this.w_mask = 0;
      this.window = null;
      this.window_size = 0;
      this.prev = null;
      this.head = null;
      this.ins_h = 0;
      this.hash_size = 0;
      this.hash_bits = 0;
      this.hash_mask = 0;
      this.hash_shift = 0;
      this.block_start = 0;
      this.match_length = 0;
      this.prev_match = 0;
      this.match_available = 0;
      this.strstart = 0;
      this.match_start = 0;
      this.lookahead = 0;
      this.prev_length = 0;
      this.max_chain_length = 0;
      this.max_lazy_match = 0;
      this.level = 0;
      this.strategy = 0;
      this.good_match = 0;
      this.nice_match = 0;
      this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
      this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
      this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
      zero(this.dyn_ltree);
      zero(this.dyn_dtree);
      zero(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new utils.Buf16(MAX_BITS + 1);
      this.heap = new utils.Buf16(2 * L_CODES + 1);
      zero(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new utils.Buf16(2 * L_CODES + 1);
      zero(this.depth);
      this.l_buf = 0;
      this.lit_bufsize = 0;
      this.last_lit = 0;
      this.d_buf = 0;
      this.opt_len = 0;
      this.static_len = 0;
      this.matches = 0;
      this.insert = 0;
      this.bi_buf = 0;
      this.bi_valid = 0;
    }
    function deflateResetKeep(strm) {
      var s;
      if (!strm || !strm.state) {
        return err(strm, Z_STREAM_ERROR);
      }
      strm.total_in = strm.total_out = 0;
      strm.data_type = Z_UNKNOWN;
      s = strm.state;
      s.pending = 0;
      s.pending_out = 0;
      if (s.wrap < 0) {
        s.wrap = -s.wrap;
      }
      s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
      strm.adler = (s.wrap === 2) ? 0 : 1;
      s.last_flush = Z_NO_FLUSH;
      trees._tr_init(s);
      return Z_OK;
    }
    function deflateReset(strm) {
      var ret = deflateResetKeep(strm);
      if (ret === Z_OK) {
        lm_init(strm.state);
      }
      return ret;
    }
    function deflateSetHeader(strm, head) {
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      if (strm.state.wrap !== 2) {
        return Z_STREAM_ERROR;
      }
      strm.state.gzhead = head;
      return Z_OK;
    }
    function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      var wrap = 1;
      if (level === Z_DEFAULT_COMPRESSION) {
        level = 6;
      }
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      } else if (windowBits > 15) {
        wrap = 2;
        windowBits -= 16;
      }
      if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
        return err(strm, Z_STREAM_ERROR);
      }
      if (windowBits === 8) {
        windowBits = 9;
      }
      var s = new DeflateState();
      strm.state = s;
      s.strm = strm;
      s.wrap = wrap;
      s.gzhead = null;
      s.w_bits = windowBits;
      s.w_size = 1 << s.w_bits;
      s.w_mask = s.w_size - 1;
      s.hash_bits = memLevel + 7;
      s.hash_size = 1 << s.hash_bits;
      s.hash_mask = s.hash_size - 1;
      s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
      s.window = new utils.Buf8(s.w_size * 2);
      s.head = new utils.Buf16(s.hash_size);
      s.prev = new utils.Buf16(s.w_size);
      s.lit_bufsize = 1 << (memLevel + 6);
      s.pending_buf_size = s.lit_bufsize * 4;
      s.pending_buf = new utils.Buf8(s.pending_buf_size);
      s.d_buf = s.lit_bufsize >> 1;
      s.l_buf = (1 + 2) * s.lit_bufsize;
      s.level = level;
      s.strategy = strategy;
      s.method = method;
      return deflateReset(strm);
    }
    function deflateInit(strm, level) {
      return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
    }
    function deflate(strm, flush) {
      var old_flush,
          s;
      var beg,
          val;
      if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
        return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
      }
      s = strm.state;
      if (!strm.output || (!strm.input && strm.avail_in !== 0) || (s.status === FINISH_STATE && flush !== Z_FINISH)) {
        return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
      }
      s.strm = strm;
      old_flush = s.last_flush;
      s.last_flush = flush;
      if (s.status === INIT_STATE) {
        if (s.wrap === 2) {
          strm.adler = 0;
          put_byte(s, 31);
          put_byte(s, 139);
          put_byte(s, 8);
          if (!s.gzhead) {
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, s.level === 9 ? 2 : (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0));
            put_byte(s, OS_CODE);
            s.status = BUSY_STATE;
          } else {
            put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
            put_byte(s, s.gzhead.time & 0xff);
            put_byte(s, (s.gzhead.time >> 8) & 0xff);
            put_byte(s, (s.gzhead.time >> 16) & 0xff);
            put_byte(s, (s.gzhead.time >> 24) & 0xff);
            put_byte(s, s.level === 9 ? 2 : (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0));
            put_byte(s, s.gzhead.os & 0xff);
            if (s.gzhead.extra && s.gzhead.extra.length) {
              put_byte(s, s.gzhead.extra.length & 0xff);
              put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
            }
            if (s.gzhead.hcrc) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
            }
            s.gzindex = 0;
            s.status = EXTRA_STATE;
          }
        } else {
          var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
          var level_flags = -1;
          if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
            level_flags = 0;
          } else if (s.level < 6) {
            level_flags = 1;
          } else if (s.level === 6) {
            level_flags = 2;
          } else {
            level_flags = 3;
          }
          header |= (level_flags << 6);
          if (s.strstart !== 0) {
            header |= PRESET_DICT;
          }
          header += 31 - (header % 31);
          s.status = BUSY_STATE;
          putShortMSB(s, header);
          if (s.strstart !== 0) {
            putShortMSB(s, strm.adler >>> 16);
            putShortMSB(s, strm.adler & 0xffff);
          }
          strm.adler = 1;
        }
      }
      if (s.status === EXTRA_STATE) {
        if (s.gzhead.extra) {
          beg = s.pending;
          while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                break;
              }
            }
            put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
            s.gzindex++;
          }
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (s.gzindex === s.gzhead.extra.length) {
            s.gzindex = 0;
            s.status = NAME_STATE;
          }
        } else {
          s.status = NAME_STATE;
        }
      }
      if (s.status === NAME_STATE) {
        if (s.gzhead.name) {
          beg = s.pending;
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            }
            if (s.gzindex < s.gzhead.name.length) {
              val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (val === 0) {
            s.gzindex = 0;
            s.status = COMMENT_STATE;
          }
        } else {
          s.status = COMMENT_STATE;
        }
      }
      if (s.status === COMMENT_STATE) {
        if (s.gzhead.comment) {
          beg = s.pending;
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            }
            if (s.gzindex < s.gzhead.comment.length) {
              val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (val === 0) {
            s.status = HCRC_STATE;
          }
        } else {
          s.status = HCRC_STATE;
        }
      }
      if (s.status === HCRC_STATE) {
        if (s.gzhead.hcrc) {
          if (s.pending + 2 > s.pending_buf_size) {
            flush_pending(strm);
          }
          if (s.pending + 2 <= s.pending_buf_size) {
            put_byte(s, strm.adler & 0xff);
            put_byte(s, (strm.adler >> 8) & 0xff);
            strm.adler = 0;
            s.status = BUSY_STATE;
          }
        } else {
          s.status = BUSY_STATE;
        }
      }
      if (s.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
          s.last_flush = -1;
          return Z_OK;
        }
      } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
        return err(strm, Z_BUF_ERROR);
      }
      if (s.status === FINISH_STATE && strm.avail_in !== 0) {
        return err(strm, Z_BUF_ERROR);
      }
      if (strm.avail_in !== 0 || s.lookahead !== 0 || (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
        var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) : (s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush));
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
          s.status = FINISH_STATE;
        }
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
          if (strm.avail_out === 0) {
            s.last_flush = -1;
          }
          return Z_OK;
        }
        if (bstate === BS_BLOCK_DONE) {
          if (flush === Z_PARTIAL_FLUSH) {
            trees._tr_align(s);
          } else if (flush !== Z_BLOCK) {
            trees._tr_stored_block(s, 0, 0, false);
            if (flush === Z_FULL_FLUSH) {
              zero(s.head);
              if (s.lookahead === 0) {
                s.strstart = 0;
                s.block_start = 0;
                s.insert = 0;
              }
            }
          }
          flush_pending(strm);
          if (strm.avail_out === 0) {
            s.last_flush = -1;
            return Z_OK;
          }
        }
      }
      if (flush !== Z_FINISH) {
        return Z_OK;
      }
      if (s.wrap <= 0) {
        return Z_STREAM_END;
      }
      if (s.wrap === 2) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        put_byte(s, (strm.adler >> 16) & 0xff);
        put_byte(s, (strm.adler >> 24) & 0xff);
        put_byte(s, strm.total_in & 0xff);
        put_byte(s, (strm.total_in >> 8) & 0xff);
        put_byte(s, (strm.total_in >> 16) & 0xff);
        put_byte(s, (strm.total_in >> 24) & 0xff);
      } else {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      flush_pending(strm);
      if (s.wrap > 0) {
        s.wrap = -s.wrap;
      }
      return s.pending !== 0 ? Z_OK : Z_STREAM_END;
    }
    function deflateEnd(strm) {
      var status;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      status = strm.state.status;
      if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
        return err(strm, Z_STREAM_ERROR);
      }
      strm.state = null;
      return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
    }
    exports.deflateInit = deflateInit;
    exports.deflateInit2 = deflateInit2;
    exports.deflateReset = deflateReset;
    exports.deflateResetKeep = deflateResetKeep;
    exports.deflateSetHeader = deflateSetHeader;
    exports.deflate = deflate;
    exports.deflateEnd = deflateEnd;
    exports.deflateInfo = 'pako deflate (from Nodeca project)';
  })(require("github:jspm/nodelibs-buffer@0.1.0").Buffer);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/utils/strings", ["npm:pako@0.2.8/lib/utils/common", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var utils = require("npm:pako@0.2.8/lib/utils/common");
    var STR_APPLY_OK = true;
    var STR_APPLY_UIA_OK = true;
    try {
      String.fromCharCode.apply(null, [0]);
    } catch (__) {
      STR_APPLY_OK = false;
    }
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (__) {
      STR_APPLY_UIA_OK = false;
    }
    var _utf8len = new utils.Buf8(256);
    for (var q = 0; q < 256; q++) {
      _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
    }
    _utf8len[254] = _utf8len[254] = 1;
    exports.string2buf = function(str) {
      var buf,
          c,
          c2,
          m_pos,
          i,
          str_len = str.length,
          buf_len = 0;
      for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 0xfc00) === 0xdc00) {
            c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
            m_pos++;
          }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
      }
      buf = new utils.Buf8(buf_len);
      for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 0xfc00) === 0xdc00) {
            c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
            m_pos++;
          }
        }
        if (c < 0x80) {
          buf[i++] = c;
        } else if (c < 0x800) {
          buf[i++] = 0xC0 | (c >>> 6);
          buf[i++] = 0x80 | (c & 0x3f);
        } else if (c < 0x10000) {
          buf[i++] = 0xE0 | (c >>> 12);
          buf[i++] = 0x80 | (c >>> 6 & 0x3f);
          buf[i++] = 0x80 | (c & 0x3f);
        } else {
          buf[i++] = 0xf0 | (c >>> 18);
          buf[i++] = 0x80 | (c >>> 12 & 0x3f);
          buf[i++] = 0x80 | (c >>> 6 & 0x3f);
          buf[i++] = 0x80 | (c & 0x3f);
        }
      }
      return buf;
    };
    function buf2binstring(buf, len) {
      if (len < 65537) {
        if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
          return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
        }
      }
      var result = '';
      for (var i = 0; i < len; i++) {
        result += String.fromCharCode(buf[i]);
      }
      return result;
    }
    exports.buf2binstring = function(buf) {
      return buf2binstring(buf, buf.length);
    };
    exports.binstring2buf = function(str) {
      var buf = new utils.Buf8(str.length);
      for (var i = 0,
          len = buf.length; i < len; i++) {
        buf[i] = str.charCodeAt(i);
      }
      return buf;
    };
    exports.buf2string = function(buf, max) {
      var i,
          out,
          c,
          c_len;
      var len = max || buf.length;
      var utf16buf = new Array(len * 2);
      for (out = 0, i = 0; i < len; ) {
        c = buf[i++];
        if (c < 0x80) {
          utf16buf[out++] = c;
          continue;
        }
        c_len = _utf8len[c];
        if (c_len > 4) {
          utf16buf[out++] = 0xfffd;
          i += c_len - 1;
          continue;
        }
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        while (c_len > 1 && i < len) {
          c = (c << 6) | (buf[i++] & 0x3f);
          c_len--;
        }
        if (c_len > 1) {
          utf16buf[out++] = 0xfffd;
          continue;
        }
        if (c < 0x10000) {
          utf16buf[out++] = c;
        } else {
          c -= 0x10000;
          utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
          utf16buf[out++] = 0xdc00 | (c & 0x3ff);
        }
      }
      return buf2binstring(utf16buf, out);
    };
    exports.utf8border = function(buf, max) {
      var pos;
      max = max || buf.length;
      if (max > buf.length) {
        max = buf.length;
      }
      pos = max - 1;
      while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) {
        pos--;
      }
      if (pos < 0) {
        return max;
      }
      if (pos === 0) {
        return max;
      }
      return (pos + _utf8len[buf[pos]] > max) ? pos : max;
    };
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/zlib/zstream", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function ZStream() {
    this.input = null;
    this.next_in = 0;
    this.avail_in = 0;
    this.total_in = 0;
    this.output = null;
    this.next_out = 0;
    this.avail_out = 0;
    this.total_out = 0;
    this.msg = '';
    this.state = null;
    this.data_type = 2;
    this.adler = 0;
  }
  module.exports = ZStream;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/deflate", ["npm:pako@0.2.8/lib/zlib/deflate", "npm:pako@0.2.8/lib/utils/common", "npm:pako@0.2.8/lib/utils/strings", "npm:pako@0.2.8/lib/zlib/messages", "npm:pako@0.2.8/lib/zlib/zstream"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var zlib_deflate = require("npm:pako@0.2.8/lib/zlib/deflate");
  var utils = require("npm:pako@0.2.8/lib/utils/common");
  var strings = require("npm:pako@0.2.8/lib/utils/strings");
  var msg = require("npm:pako@0.2.8/lib/zlib/messages");
  var zstream = require("npm:pako@0.2.8/lib/zlib/zstream");
  var toString = Object.prototype.toString;
  var Z_NO_FLUSH = 0;
  var Z_FINISH = 4;
  var Z_OK = 0;
  var Z_STREAM_END = 1;
  var Z_SYNC_FLUSH = 2;
  var Z_DEFAULT_COMPRESSION = -1;
  var Z_DEFAULT_STRATEGY = 0;
  var Z_DEFLATED = 8;
  var Deflate = function(options) {
    this.options = utils.assign({
      level: Z_DEFAULT_COMPRESSION,
      method: Z_DEFLATED,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: Z_DEFAULT_STRATEGY,
      to: ''
    }, options || {});
    var opt = this.options;
    if (opt.raw && (opt.windowBits > 0)) {
      opt.windowBits = -opt.windowBits;
    } else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
      opt.windowBits += 16;
    }
    this.err = 0;
    this.msg = '';
    this.ended = false;
    this.chunks = [];
    this.strm = new zstream();
    this.strm.avail_out = 0;
    var status = zlib_deflate.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);
    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }
    if (opt.header) {
      zlib_deflate.deflateSetHeader(this.strm, opt.header);
    }
  };
  Deflate.prototype.push = function(data, mode) {
    var strm = this.strm;
    var chunkSize = this.options.chunkSize;
    var status,
        _mode;
    if (this.ended) {
      return false;
    }
    _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);
    if (typeof data === 'string') {
      strm.input = strings.string2buf(data);
    } else if (toString.call(data) === '[object ArrayBuffer]') {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    do {
      if (strm.avail_out === 0) {
        strm.output = new utils.Buf8(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      }
      status = zlib_deflate.deflate(strm, _mode);
      if (status !== Z_STREAM_END && status !== Z_OK) {
        this.onEnd(status);
        this.ended = true;
        return false;
      }
      if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
        if (this.options.to === 'string') {
          this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
    if (_mode === Z_FINISH) {
      status = zlib_deflate.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK;
    }
    if (_mode === Z_SYNC_FLUSH) {
      this.onEnd(Z_OK);
      strm.avail_out = 0;
      return true;
    }
    return true;
  };
  Deflate.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
  };
  Deflate.prototype.onEnd = function(status) {
    if (status === Z_OK) {
      if (this.options.to === 'string') {
        this.result = this.chunks.join('');
      } else {
        this.result = utils.flattenChunks(this.chunks);
      }
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };
  function deflate(input, options) {
    var deflator = new Deflate(options);
    deflator.push(input, true);
    if (deflator.err) {
      throw deflator.msg;
    }
    return deflator.result;
  }
  function deflateRaw(input, options) {
    options = options || {};
    options.raw = true;
    return deflate(input, options);
  }
  function gzip(input, options) {
    options = options || {};
    options.gzip = true;
    return deflate(input, options);
  }
  exports.Deflate = Deflate;
  exports.deflate = deflate;
  exports.deflateRaw = deflateRaw;
  exports.gzip = gzip;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/zlib/inffast", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var BAD = 30;
  var TYPE = 12;
  module.exports = function inflate_fast(strm, start) {
    var state;
    var _in;
    var last;
    var _out;
    var beg;
    var end;
    var dmax;
    var wsize;
    var whave;
    var wnext;
    var s_window;
    var hold;
    var bits;
    var lcode;
    var dcode;
    var lmask;
    var dmask;
    var here;
    var op;
    var len;
    var dist;
    var from;
    var from_source;
    var input,
        output;
    state = strm.state;
    _in = strm.next_in;
    input = strm.input;
    last = _in + (strm.avail_in - 5);
    _out = strm.next_out;
    output = strm.output;
    beg = _out - (start - strm.avail_out);
    end = _out + (strm.avail_out - 257);
    dmax = state.dmax;
    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    s_window = state.window;
    hold = state.hold;
    bits = state.bits;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;
    top: do {
      if (bits < 15) {
        hold += input[_in++] << bits;
        bits += 8;
        hold += input[_in++] << bits;
        bits += 8;
      }
      here = lcode[hold & lmask];
      dolen: for (; ; ) {
        op = here >>> 24;
        hold >>>= op;
        bits -= op;
        op = (here >>> 16) & 0xff;
        if (op === 0) {
          output[_out++] = here & 0xffff;
        } else if (op & 16) {
          len = here & 0xffff;
          op &= 15;
          if (op) {
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
            }
            len += hold & ((1 << op) - 1);
            hold >>>= op;
            bits -= op;
          }
          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }
          here = dcode[hold & dmask];
          dodist: for (; ; ) {
            op = here >>> 24;
            hold >>>= op;
            bits -= op;
            op = (here >>> 16) & 0xff;
            if (op & 16) {
              dist = here & 0xffff;
              op &= 15;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
                if (bits < op) {
                  hold += input[_in++] << bits;
                  bits += 8;
                }
              }
              dist += hold & ((1 << op) - 1);
              if (dist > dmax) {
                strm.msg = 'invalid distance too far back';
                state.mode = BAD;
                break top;
              }
              hold >>>= op;
              bits -= op;
              op = _out - beg;
              if (dist > op) {
                op = dist - op;
                if (op > whave) {
                  if (state.sane) {
                    strm.msg = 'invalid distance too far back';
                    state.mode = BAD;
                    break top;
                  }
                }
                from = 0;
                from_source = s_window;
                if (wnext === 0) {
                  from += wsize - op;
                  if (op < len) {
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;
                    from_source = output;
                  }
                } else if (wnext < op) {
                  from += wsize + wnext - op;
                  op -= wnext;
                  if (op < len) {
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = 0;
                    if (wnext < len) {
                      op = wnext;
                      len -= op;
                      do {
                        output[_out++] = s_window[from++];
                      } while (--op);
                      from = _out - dist;
                      from_source = output;
                    }
                  }
                } else {
                  from += wnext - op;
                  if (op < len) {
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;
                    from_source = output;
                  }
                }
                while (len > 2) {
                  output[_out++] = from_source[from++];
                  output[_out++] = from_source[from++];
                  output[_out++] = from_source[from++];
                  len -= 3;
                }
                if (len) {
                  output[_out++] = from_source[from++];
                  if (len > 1) {
                    output[_out++] = from_source[from++];
                  }
                }
              } else {
                from = _out - dist;
                do {
                  output[_out++] = output[from++];
                  output[_out++] = output[from++];
                  output[_out++] = output[from++];
                  len -= 3;
                } while (len > 2);
                if (len) {
                  output[_out++] = output[from++];
                  if (len > 1) {
                    output[_out++] = output[from++];
                  }
                }
              }
            } else if ((op & 64) === 0) {
              here = dcode[(here & 0xffff) + (hold & ((1 << op) - 1))];
              continue dodist;
            } else {
              strm.msg = 'invalid distance code';
              state.mode = BAD;
              break top;
            }
            break;
          }
        } else if ((op & 64) === 0) {
          here = lcode[(here & 0xffff) + (hold & ((1 << op) - 1))];
          continue dolen;
        } else if (op & 32) {
          state.mode = TYPE;
          break top;
        } else {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break top;
        }
        break;
      }
    } while (_in < last && _out < end);
    len = bits >> 3;
    _in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;
    strm.next_in = _in;
    strm.next_out = _out;
    strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
    strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
    state.hold = hold;
    state.bits = bits;
    return;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/zlib/inftrees", ["npm:pako@0.2.8/lib/utils/common", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var utils = require("npm:pako@0.2.8/lib/utils/common");
    var MAXBITS = 15;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    var lbase = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
    var lext = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
    var dbase = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
    var dext = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
    module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
      var bits = opts.bits;
      var len = 0;
      var sym = 0;
      var min = 0,
          max = 0;
      var root = 0;
      var curr = 0;
      var drop = 0;
      var left = 0;
      var used = 0;
      var huff = 0;
      var incr;
      var fill;
      var low;
      var mask;
      var next;
      var base = null;
      var base_index = 0;
      var end;
      var count = new utils.Buf16(MAXBITS + 1);
      var offs = new utils.Buf16(MAXBITS + 1);
      var extra = null;
      var extra_index = 0;
      var here_bits,
          here_op,
          here_val;
      for (len = 0; len <= MAXBITS; len++) {
        count[len] = 0;
      }
      for (sym = 0; sym < codes; sym++) {
        count[lens[lens_index + sym]]++;
      }
      root = bits;
      for (max = MAXBITS; max >= 1; max--) {
        if (count[max] !== 0) {
          break;
        }
      }
      if (root > max) {
        root = max;
      }
      if (max === 0) {
        table[table_index++] = (1 << 24) | (64 << 16) | 0;
        table[table_index++] = (1 << 24) | (64 << 16) | 0;
        opts.bits = 1;
        return 0;
      }
      for (min = 1; min < max; min++) {
        if (count[min] !== 0) {
          break;
        }
      }
      if (root < min) {
        root = min;
      }
      left = 1;
      for (len = 1; len <= MAXBITS; len++) {
        left <<= 1;
        left -= count[len];
        if (left < 0) {
          return -1;
        }
      }
      if (left > 0 && (type === CODES || max !== 1)) {
        return -1;
      }
      offs[1] = 0;
      for (len = 1; len < MAXBITS; len++) {
        offs[len + 1] = offs[len] + count[len];
      }
      for (sym = 0; sym < codes; sym++) {
        if (lens[lens_index + sym] !== 0) {
          work[offs[lens[lens_index + sym]]++] = sym;
        }
      }
      if (type === CODES) {
        base = extra = work;
        end = 19;
      } else if (type === LENS) {
        base = lbase;
        base_index -= 257;
        extra = lext;
        extra_index -= 257;
        end = 256;
      } else {
        base = dbase;
        extra = dext;
        end = -1;
      }
      huff = 0;
      sym = 0;
      len = min;
      next = table_index;
      curr = root;
      drop = 0;
      low = -1;
      used = 1 << root;
      mask = used - 1;
      if ((type === LENS && used > ENOUGH_LENS) || (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }
      var i = 0;
      for (; ; ) {
        i++;
        here_bits = len - drop;
        if (work[sym] < end) {
          here_op = 0;
          here_val = work[sym];
        } else if (work[sym] > end) {
          here_op = extra[extra_index + work[sym]];
          here_val = base[base_index + work[sym]];
        } else {
          here_op = 32 + 64;
          here_val = 0;
        }
        incr = 1 << (len - drop);
        fill = 1 << curr;
        min = fill;
        do {
          fill -= incr;
          table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val | 0;
        } while (fill !== 0);
        incr = 1 << (len - 1);
        while (huff & incr) {
          incr >>= 1;
        }
        if (incr !== 0) {
          huff &= incr - 1;
          huff += incr;
        } else {
          huff = 0;
        }
        sym++;
        if (--count[len] === 0) {
          if (len === max) {
            break;
          }
          len = lens[lens_index + work[sym]];
        }
        if (len > root && (huff & mask) !== low) {
          if (drop === 0) {
            drop = root;
          }
          next += min;
          curr = len - drop;
          left = 1 << curr;
          while (curr + drop < max) {
            left -= count[curr + drop];
            if (left <= 0) {
              break;
            }
            curr++;
            left <<= 1;
          }
          used += 1 << curr;
          if ((type === LENS && used > ENOUGH_LENS) || (type === DISTS && used > ENOUGH_DISTS)) {
            return 1;
          }
          low = huff & mask;
          table[low] = (root << 24) | (curr << 16) | (next - table_index) | 0;
        }
      }
      if (huff !== 0) {
        table[next + huff] = ((len - drop) << 24) | (64 << 16) | 0;
      }
      opts.bits = root;
      return 0;
    };
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/zlib/inflate", ["npm:pako@0.2.8/lib/utils/common", "npm:pako@0.2.8/lib/zlib/adler32", "npm:pako@0.2.8/lib/zlib/crc32", "npm:pako@0.2.8/lib/zlib/inffast", "npm:pako@0.2.8/lib/zlib/inftrees", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var utils = require("npm:pako@0.2.8/lib/utils/common");
    var adler32 = require("npm:pako@0.2.8/lib/zlib/adler32");
    var crc32 = require("npm:pako@0.2.8/lib/zlib/crc32");
    var inflate_fast = require("npm:pako@0.2.8/lib/zlib/inffast");
    var inflate_table = require("npm:pako@0.2.8/lib/zlib/inftrees");
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    var Z_FINISH = 4;
    var Z_BLOCK = 5;
    var Z_TREES = 6;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_NEED_DICT = 2;
    var Z_STREAM_ERROR = -2;
    var Z_DATA_ERROR = -3;
    var Z_MEM_ERROR = -4;
    var Z_BUF_ERROR = -5;
    var Z_DEFLATED = 8;
    var HEAD = 1;
    var FLAGS = 2;
    var TIME = 3;
    var OS = 4;
    var EXLEN = 5;
    var EXTRA = 6;
    var NAME = 7;
    var COMMENT = 8;
    var HCRC = 9;
    var DICTID = 10;
    var DICT = 11;
    var TYPE = 12;
    var TYPEDO = 13;
    var STORED = 14;
    var COPY_ = 15;
    var COPY = 16;
    var TABLE = 17;
    var LENLENS = 18;
    var CODELENS = 19;
    var LEN_ = 20;
    var LEN = 21;
    var LENEXT = 22;
    var DIST = 23;
    var DISTEXT = 24;
    var MATCH = 25;
    var LIT = 26;
    var CHECK = 27;
    var LENGTH = 28;
    var DONE = 29;
    var BAD = 30;
    var MEM = 31;
    var SYNC = 32;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var MAX_WBITS = 15;
    var DEF_WBITS = MAX_WBITS;
    function ZSWAP32(q) {
      return (((q >>> 24) & 0xff) + ((q >>> 8) & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24));
    }
    function InflateState() {
      this.mode = 0;
      this.last = false;
      this.wrap = 0;
      this.havedict = false;
      this.flags = 0;
      this.dmax = 0;
      this.check = 0;
      this.total = 0;
      this.head = null;
      this.wbits = 0;
      this.wsize = 0;
      this.whave = 0;
      this.wnext = 0;
      this.window = null;
      this.hold = 0;
      this.bits = 0;
      this.length = 0;
      this.offset = 0;
      this.extra = 0;
      this.lencode = null;
      this.distcode = null;
      this.lenbits = 0;
      this.distbits = 0;
      this.ncode = 0;
      this.nlen = 0;
      this.ndist = 0;
      this.have = 0;
      this.next = null;
      this.lens = new utils.Buf16(320);
      this.work = new utils.Buf16(288);
      this.lendyn = null;
      this.distdyn = null;
      this.sane = 0;
      this.back = 0;
      this.was = 0;
    }
    function inflateResetKeep(strm) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      strm.total_in = strm.total_out = state.total = 0;
      strm.msg = '';
      if (state.wrap) {
        strm.adler = state.wrap & 1;
      }
      state.mode = HEAD;
      state.last = 0;
      state.havedict = 0;
      state.dmax = 32768;
      state.head = null;
      state.hold = 0;
      state.bits = 0;
      state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
      state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
      state.sane = 1;
      state.back = -1;
      return Z_OK;
    }
    function inflateReset(strm) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      state.wsize = 0;
      state.whave = 0;
      state.wnext = 0;
      return inflateResetKeep(strm);
    }
    function inflateReset2(strm, windowBits) {
      var wrap;
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      } else {
        wrap = (windowBits >> 4) + 1;
        if (windowBits < 48) {
          windowBits &= 15;
        }
      }
      if (windowBits && (windowBits < 8 || windowBits > 15)) {
        return Z_STREAM_ERROR;
      }
      if (state.window !== null && state.wbits !== windowBits) {
        state.window = null;
      }
      state.wrap = wrap;
      state.wbits = windowBits;
      return inflateReset(strm);
    }
    function inflateInit2(strm, windowBits) {
      var ret;
      var state;
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      state = new InflateState();
      strm.state = state;
      state.window = null;
      ret = inflateReset2(strm, windowBits);
      if (ret !== Z_OK) {
        strm.state = null;
      }
      return ret;
    }
    function inflateInit(strm) {
      return inflateInit2(strm, DEF_WBITS);
    }
    var virgin = true;
    var lenfix,
        distfix;
    function fixedtables(state) {
      if (virgin) {
        var sym;
        lenfix = new utils.Buf32(512);
        distfix = new utils.Buf32(32);
        sym = 0;
        while (sym < 144) {
          state.lens[sym++] = 8;
        }
        while (sym < 256) {
          state.lens[sym++] = 9;
        }
        while (sym < 280) {
          state.lens[sym++] = 7;
        }
        while (sym < 288) {
          state.lens[sym++] = 8;
        }
        inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, {bits: 9});
        sym = 0;
        while (sym < 32) {
          state.lens[sym++] = 5;
        }
        inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, {bits: 5});
        virgin = false;
      }
      state.lencode = lenfix;
      state.lenbits = 9;
      state.distcode = distfix;
      state.distbits = 5;
    }
    function updatewindow(strm, src, end, copy) {
      var dist;
      var state = strm.state;
      if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;
        state.window = new utils.Buf8(state.wsize);
      }
      if (copy >= state.wsize) {
        utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
        state.wnext = 0;
        state.whave = state.wsize;
      } else {
        dist = state.wsize - state.wnext;
        if (dist > copy) {
          dist = copy;
        }
        utils.arraySet(state.window, src, end - copy, dist, state.wnext);
        copy -= dist;
        if (copy) {
          utils.arraySet(state.window, src, end - copy, copy, 0);
          state.wnext = copy;
          state.whave = state.wsize;
        } else {
          state.wnext += dist;
          if (state.wnext === state.wsize) {
            state.wnext = 0;
          }
          if (state.whave < state.wsize) {
            state.whave += dist;
          }
        }
      }
      return 0;
    }
    function inflate(strm, flush) {
      var state;
      var input,
          output;
      var next;
      var put;
      var have,
          left;
      var hold;
      var bits;
      var _in,
          _out;
      var copy;
      var from;
      var from_source;
      var here = 0;
      var here_bits,
          here_op,
          here_val;
      var last_bits,
          last_op,
          last_val;
      var len;
      var ret;
      var hbuf = new utils.Buf8(4);
      var opts;
      var n;
      var order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
      if (!strm || !strm.state || !strm.output || (!strm.input && strm.avail_in !== 0)) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (state.mode === TYPE) {
        state.mode = TYPEDO;
      }
      put = strm.next_out;
      output = strm.output;
      left = strm.avail_out;
      next = strm.next_in;
      input = strm.input;
      have = strm.avail_in;
      hold = state.hold;
      bits = state.bits;
      _in = have;
      _out = left;
      ret = Z_OK;
      inf_leave: for (; ; ) {
        switch (state.mode) {
          case HEAD:
            if (state.wrap === 0) {
              state.mode = TYPEDO;
              break;
            }
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if ((state.wrap & 2) && hold === 0x8b1f) {
              state.check = 0;
              hbuf[0] = hold & 0xff;
              hbuf[1] = (hold >>> 8) & 0xff;
              state.check = crc32(state.check, hbuf, 2, 0);
              hold = 0;
              bits = 0;
              state.mode = FLAGS;
              break;
            }
            state.flags = 0;
            if (state.head) {
              state.head.done = false;
            }
            if (!(state.wrap & 1) || (((hold & 0xff) << 8) + (hold >> 8)) % 31) {
              strm.msg = 'incorrect header check';
              state.mode = BAD;
              break;
            }
            if ((hold & 0x0f) !== Z_DEFLATED) {
              strm.msg = 'unknown compression method';
              state.mode = BAD;
              break;
            }
            hold >>>= 4;
            bits -= 4;
            len = (hold & 0x0f) + 8;
            if (state.wbits === 0) {
              state.wbits = len;
            } else if (len > state.wbits) {
              strm.msg = 'invalid window size';
              state.mode = BAD;
              break;
            }
            state.dmax = 1 << len;
            strm.adler = state.check = 1;
            state.mode = hold & 0x200 ? DICTID : TYPE;
            hold = 0;
            bits = 0;
            break;
          case FLAGS:
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.flags = hold;
            if ((state.flags & 0xff) !== Z_DEFLATED) {
              strm.msg = 'unknown compression method';
              state.mode = BAD;
              break;
            }
            if (state.flags & 0xe000) {
              strm.msg = 'unknown header flags set';
              state.mode = BAD;
              break;
            }
            if (state.head) {
              state.head.text = ((hold >> 8) & 1);
            }
            if (state.flags & 0x0200) {
              hbuf[0] = hold & 0xff;
              hbuf[1] = (hold >>> 8) & 0xff;
              state.check = crc32(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = TIME;
          case TIME:
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.head) {
              state.head.time = hold;
            }
            if (state.flags & 0x0200) {
              hbuf[0] = hold & 0xff;
              hbuf[1] = (hold >>> 8) & 0xff;
              hbuf[2] = (hold >>> 16) & 0xff;
              hbuf[3] = (hold >>> 24) & 0xff;
              state.check = crc32(state.check, hbuf, 4, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = OS;
          case OS:
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.head) {
              state.head.xflags = (hold & 0xff);
              state.head.os = (hold >> 8);
            }
            if (state.flags & 0x0200) {
              hbuf[0] = hold & 0xff;
              hbuf[1] = (hold >>> 8) & 0xff;
              state.check = crc32(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = EXLEN;
          case EXLEN:
            if (state.flags & 0x0400) {
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.length = hold;
              if (state.head) {
                state.head.extra_len = hold;
              }
              if (state.flags & 0x0200) {
                hbuf[0] = hold & 0xff;
                hbuf[1] = (hold >>> 8) & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
            } else if (state.head) {
              state.head.extra = null;
            }
            state.mode = EXTRA;
          case EXTRA:
            if (state.flags & 0x0400) {
              copy = state.length;
              if (copy > have) {
                copy = have;
              }
              if (copy) {
                if (state.head) {
                  len = state.head.extra_len - state.length;
                  if (!state.head.extra) {
                    state.head.extra = new Array(state.head.extra_len);
                  }
                  utils.arraySet(state.head.extra, input, next, copy, len);
                }
                if (state.flags & 0x0200) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                state.length -= copy;
              }
              if (state.length) {
                break inf_leave;
              }
            }
            state.length = 0;
            state.mode = NAME;
          case NAME:
            if (state.flags & 0x0800) {
              if (have === 0) {
                break inf_leave;
              }
              copy = 0;
              do {
                len = input[next + copy++];
                if (state.head && len && (state.length < 65536)) {
                  state.head.name += String.fromCharCode(len);
                }
              } while (len && copy < have);
              if (state.flags & 0x0200) {
                state.check = crc32(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              if (len) {
                break inf_leave;
              }
            } else if (state.head) {
              state.head.name = null;
            }
            state.length = 0;
            state.mode = COMMENT;
          case COMMENT:
            if (state.flags & 0x1000) {
              if (have === 0) {
                break inf_leave;
              }
              copy = 0;
              do {
                len = input[next + copy++];
                if (state.head && len && (state.length < 65536)) {
                  state.head.comment += String.fromCharCode(len);
                }
              } while (len && copy < have);
              if (state.flags & 0x0200) {
                state.check = crc32(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              if (len) {
                break inf_leave;
              }
            } else if (state.head) {
              state.head.comment = null;
            }
            state.mode = HCRC;
          case HCRC:
            if (state.flags & 0x0200) {
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (hold !== (state.check & 0xffff)) {
                strm.msg = 'header crc mismatch';
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            if (state.head) {
              state.head.hcrc = ((state.flags >> 9) & 1);
              state.head.done = true;
            }
            strm.adler = state.check = 0;
            state.mode = TYPE;
            break;
          case DICTID:
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            strm.adler = state.check = ZSWAP32(hold);
            hold = 0;
            bits = 0;
            state.mode = DICT;
          case DICT:
            if (state.havedict === 0) {
              strm.next_out = put;
              strm.avail_out = left;
              strm.next_in = next;
              strm.avail_in = have;
              state.hold = hold;
              state.bits = bits;
              return Z_NEED_DICT;
            }
            strm.adler = state.check = 1;
            state.mode = TYPE;
          case TYPE:
            if (flush === Z_BLOCK || flush === Z_TREES) {
              break inf_leave;
            }
          case TYPEDO:
            if (state.last) {
              hold >>>= bits & 7;
              bits -= bits & 7;
              state.mode = CHECK;
              break;
            }
            while (bits < 3) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.last = (hold & 0x01);
            hold >>>= 1;
            bits -= 1;
            switch ((hold & 0x03)) {
              case 0:
                state.mode = STORED;
                break;
              case 1:
                fixedtables(state);
                state.mode = LEN_;
                if (flush === Z_TREES) {
                  hold >>>= 2;
                  bits -= 2;
                  break inf_leave;
                }
                break;
              case 2:
                state.mode = TABLE;
                break;
              case 3:
                strm.msg = 'invalid block type';
                state.mode = BAD;
            }
            hold >>>= 2;
            bits -= 2;
            break;
          case STORED:
            hold >>>= bits & 7;
            bits -= bits & 7;
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
              strm.msg = 'invalid stored block lengths';
              state.mode = BAD;
              break;
            }
            state.length = hold & 0xffff;
            hold = 0;
            bits = 0;
            state.mode = COPY_;
            if (flush === Z_TREES) {
              break inf_leave;
            }
          case COPY_:
            state.mode = COPY;
          case COPY:
            copy = state.length;
            if (copy) {
              if (copy > have) {
                copy = have;
              }
              if (copy > left) {
                copy = left;
              }
              if (copy === 0) {
                break inf_leave;
              }
              utils.arraySet(output, input, next, copy, put);
              have -= copy;
              next += copy;
              left -= copy;
              put += copy;
              state.length -= copy;
              break;
            }
            state.mode = TYPE;
            break;
          case TABLE:
            while (bits < 14) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.nlen = (hold & 0x1f) + 257;
            hold >>>= 5;
            bits -= 5;
            state.ndist = (hold & 0x1f) + 1;
            hold >>>= 5;
            bits -= 5;
            state.ncode = (hold & 0x0f) + 4;
            hold >>>= 4;
            bits -= 4;
            if (state.nlen > 286 || state.ndist > 30) {
              strm.msg = 'too many length or distance symbols';
              state.mode = BAD;
              break;
            }
            state.have = 0;
            state.mode = LENLENS;
          case LENLENS:
            while (state.have < state.ncode) {
              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.lens[order[state.have++]] = (hold & 0x07);
              hold >>>= 3;
              bits -= 3;
            }
            while (state.have < 19) {
              state.lens[order[state.have++]] = 0;
            }
            state.lencode = state.lendyn;
            state.lenbits = 7;
            opts = {bits: state.lenbits};
            ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
              strm.msg = 'invalid code lengths set';
              state.mode = BAD;
              break;
            }
            state.have = 0;
            state.mode = CODELENS;
          case CODELENS:
            while (state.have < state.nlen + state.ndist) {
              for (; ; ) {
                here = state.lencode[hold & ((1 << state.lenbits) - 1)];
                here_bits = here >>> 24;
                here_op = (here >>> 16) & 0xff;
                here_val = here & 0xffff;
                if ((here_bits) <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (here_val < 16) {
                hold >>>= here_bits;
                bits -= here_bits;
                state.lens[state.have++] = here_val;
              } else {
                if (here_val === 16) {
                  n = here_bits + 2;
                  while (bits < n) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  if (state.have === 0) {
                    strm.msg = 'invalid bit length repeat';
                    state.mode = BAD;
                    break;
                  }
                  len = state.lens[state.have - 1];
                  copy = 3 + (hold & 0x03);
                  hold >>>= 2;
                  bits -= 2;
                } else if (here_val === 17) {
                  n = here_bits + 3;
                  while (bits < n) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  len = 0;
                  copy = 3 + (hold & 0x07);
                  hold >>>= 3;
                  bits -= 3;
                } else {
                  n = here_bits + 7;
                  while (bits < n) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  len = 0;
                  copy = 11 + (hold & 0x7f);
                  hold >>>= 7;
                  bits -= 7;
                }
                if (state.have + copy > state.nlen + state.ndist) {
                  strm.msg = 'invalid bit length repeat';
                  state.mode = BAD;
                  break;
                }
                while (copy--) {
                  state.lens[state.have++] = len;
                }
              }
            }
            if (state.mode === BAD) {
              break;
            }
            if (state.lens[256] === 0) {
              strm.msg = 'invalid code -- missing end-of-block';
              state.mode = BAD;
              break;
            }
            state.lenbits = 9;
            opts = {bits: state.lenbits};
            ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
              strm.msg = 'invalid literal/lengths set';
              state.mode = BAD;
              break;
            }
            state.distbits = 6;
            state.distcode = state.distdyn;
            opts = {bits: state.distbits};
            ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
            state.distbits = opts.bits;
            if (ret) {
              strm.msg = 'invalid distances set';
              state.mode = BAD;
              break;
            }
            state.mode = LEN_;
            if (flush === Z_TREES) {
              break inf_leave;
            }
          case LEN_:
            state.mode = LEN;
          case LEN:
            if (have >= 6 && left >= 258) {
              strm.next_out = put;
              strm.avail_out = left;
              strm.next_in = next;
              strm.avail_in = have;
              state.hold = hold;
              state.bits = bits;
              inflate_fast(strm, _out);
              put = strm.next_out;
              output = strm.output;
              left = strm.avail_out;
              next = strm.next_in;
              input = strm.input;
              have = strm.avail_in;
              hold = state.hold;
              bits = state.bits;
              if (state.mode === TYPE) {
                state.back = -1;
              }
              break;
            }
            state.back = 0;
            for (; ; ) {
              here = state.lencode[hold & ((1 << state.lenbits) - 1)];
              here_bits = here >>> 24;
              here_op = (here >>> 16) & 0xff;
              here_val = here & 0xffff;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (here_op && (here_op & 0xf0) === 0) {
              last_bits = here_bits;
              last_op = here_op;
              last_val = here_val;
              for (; ; ) {
                here = state.lencode[last_val + ((hold & ((1 << (last_bits + last_op)) - 1)) >> last_bits)];
                here_bits = here >>> 24;
                here_op = (here >>> 16) & 0xff;
                here_val = here & 0xffff;
                if ((last_bits + here_bits) <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              hold >>>= last_bits;
              bits -= last_bits;
              state.back += last_bits;
            }
            hold >>>= here_bits;
            bits -= here_bits;
            state.back += here_bits;
            state.length = here_val;
            if (here_op === 0) {
              state.mode = LIT;
              break;
            }
            if (here_op & 32) {
              state.back = -1;
              state.mode = TYPE;
              break;
            }
            if (here_op & 64) {
              strm.msg = 'invalid literal/length code';
              state.mode = BAD;
              break;
            }
            state.extra = here_op & 15;
            state.mode = LENEXT;
          case LENEXT:
            if (state.extra) {
              n = state.extra;
              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.length += hold & ((1 << state.extra) - 1);
              hold >>>= state.extra;
              bits -= state.extra;
              state.back += state.extra;
            }
            state.was = state.length;
            state.mode = DIST;
          case DIST:
            for (; ; ) {
              here = state.distcode[hold & ((1 << state.distbits) - 1)];
              here_bits = here >>> 24;
              here_op = (here >>> 16) & 0xff;
              here_val = here & 0xffff;
              if ((here_bits) <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if ((here_op & 0xf0) === 0) {
              last_bits = here_bits;
              last_op = here_op;
              last_val = here_val;
              for (; ; ) {
                here = state.distcode[last_val + ((hold & ((1 << (last_bits + last_op)) - 1)) >> last_bits)];
                here_bits = here >>> 24;
                here_op = (here >>> 16) & 0xff;
                here_val = here & 0xffff;
                if ((last_bits + here_bits) <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              hold >>>= last_bits;
              bits -= last_bits;
              state.back += last_bits;
            }
            hold >>>= here_bits;
            bits -= here_bits;
            state.back += here_bits;
            if (here_op & 64) {
              strm.msg = 'invalid distance code';
              state.mode = BAD;
              break;
            }
            state.offset = here_val;
            state.extra = (here_op) & 15;
            state.mode = DISTEXT;
          case DISTEXT:
            if (state.extra) {
              n = state.extra;
              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.offset += hold & ((1 << state.extra) - 1);
              hold >>>= state.extra;
              bits -= state.extra;
              state.back += state.extra;
            }
            if (state.offset > state.dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
            state.mode = MATCH;
          case MATCH:
            if (left === 0) {
              break inf_leave;
            }
            copy = _out - left;
            if (state.offset > copy) {
              copy = state.offset - copy;
              if (copy > state.whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break;
                }
              }
              if (copy > state.wnext) {
                copy -= state.wnext;
                from = state.wsize - copy;
              } else {
                from = state.wnext - copy;
              }
              if (copy > state.length) {
                copy = state.length;
              }
              from_source = state.window;
            } else {
              from_source = output;
              from = put - state.offset;
              copy = state.length;
            }
            if (copy > left) {
              copy = left;
            }
            left -= copy;
            state.length -= copy;
            do {
              output[put++] = from_source[from++];
            } while (--copy);
            if (state.length === 0) {
              state.mode = LEN;
            }
            break;
          case LIT:
            if (left === 0) {
              break inf_leave;
            }
            output[put++] = state.length;
            left--;
            state.mode = LEN;
            break;
          case CHECK:
            if (state.wrap) {
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold |= input[next++] << bits;
                bits += 8;
              }
              _out -= left;
              strm.total_out += _out;
              state.total += _out;
              if (_out) {
                strm.adler = state.check = (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));
              }
              _out = left;
              if ((state.flags ? hold : ZSWAP32(hold)) !== state.check) {
                strm.msg = 'incorrect data check';
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            state.mode = LENGTH;
          case LENGTH:
            if (state.wrap && state.flags) {
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (hold !== (state.total & 0xffffffff)) {
                strm.msg = 'incorrect length check';
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            state.mode = DONE;
          case DONE:
            ret = Z_STREAM_END;
            break inf_leave;
          case BAD:
            ret = Z_DATA_ERROR;
            break inf_leave;
          case MEM:
            return Z_MEM_ERROR;
          case SYNC:
          default:
            return Z_STREAM_ERROR;
        }
      }
      strm.next_out = put;
      strm.avail_out = left;
      strm.next_in = next;
      strm.avail_in = have;
      state.hold = hold;
      state.bits = bits;
      if (state.wsize || (_out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH))) {
        if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
          state.mode = MEM;
          return Z_MEM_ERROR;
        }
      }
      _in -= strm.avail_in;
      _out -= strm.avail_out;
      strm.total_in += _in;
      strm.total_out += _out;
      state.total += _out;
      if (state.wrap && _out) {
        strm.adler = state.check = (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
      }
      strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
      if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
        ret = Z_BUF_ERROR;
      }
      return ret;
    }
    function inflateEnd(strm) {
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      var state = strm.state;
      if (state.window) {
        state.window = null;
      }
      strm.state = null;
      return Z_OK;
    }
    function inflateGetHeader(strm, head) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if ((state.wrap & 2) === 0) {
        return Z_STREAM_ERROR;
      }
      state.head = head;
      head.done = false;
      return Z_OK;
    }
    exports.inflateReset = inflateReset;
    exports.inflateReset2 = inflateReset2;
    exports.inflateResetKeep = inflateResetKeep;
    exports.inflateInit = inflateInit;
    exports.inflateInit2 = inflateInit2;
    exports.inflate = inflate;
    exports.inflateEnd = inflateEnd;
    exports.inflateGetHeader = inflateGetHeader;
    exports.inflateInfo = 'pako inflate (from Nodeca project)';
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/zlib/constants", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/zlib/gzheader", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function GZheader() {
    this.text = 0;
    this.time = 0;
    this.xflags = 0;
    this.os = 0;
    this.extra = null;
    this.extra_len = 0;
    this.name = '';
    this.comment = '';
    this.hcrc = 0;
    this.done = false;
  }
  module.exports = GZheader;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/lib/inflate", ["npm:pako@0.2.8/lib/zlib/inflate", "npm:pako@0.2.8/lib/utils/common", "npm:pako@0.2.8/lib/utils/strings", "npm:pako@0.2.8/lib/zlib/constants", "npm:pako@0.2.8/lib/zlib/messages", "npm:pako@0.2.8/lib/zlib/zstream", "npm:pako@0.2.8/lib/zlib/gzheader", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var zlib_inflate = require("npm:pako@0.2.8/lib/zlib/inflate");
    var utils = require("npm:pako@0.2.8/lib/utils/common");
    var strings = require("npm:pako@0.2.8/lib/utils/strings");
    var c = require("npm:pako@0.2.8/lib/zlib/constants");
    var msg = require("npm:pako@0.2.8/lib/zlib/messages");
    var zstream = require("npm:pako@0.2.8/lib/zlib/zstream");
    var gzheader = require("npm:pako@0.2.8/lib/zlib/gzheader");
    var toString = Object.prototype.toString;
    var Inflate = function(options) {
      this.options = utils.assign({
        chunkSize: 16384,
        windowBits: 0,
        to: ''
      }, options || {});
      var opt = this.options;
      if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) {
          opt.windowBits = -15;
        }
      }
      if ((opt.windowBits >= 0) && (opt.windowBits < 16) && !(options && options.windowBits)) {
        opt.windowBits += 32;
      }
      if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
        if ((opt.windowBits & 15) === 0) {
          opt.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = '';
      this.ended = false;
      this.chunks = [];
      this.strm = new zstream();
      this.strm.avail_out = 0;
      var status = zlib_inflate.inflateInit2(this.strm, opt.windowBits);
      if (status !== c.Z_OK) {
        throw new Error(msg[status]);
      }
      this.header = new gzheader();
      zlib_inflate.inflateGetHeader(this.strm, this.header);
    };
    Inflate.prototype.push = function(data, mode) {
      var strm = this.strm;
      var chunkSize = this.options.chunkSize;
      var status,
          _mode;
      var next_out_utf8,
          tail,
          utf8str;
      var allowBufError = false;
      if (this.ended) {
        return false;
      }
      _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);
      if (typeof data === 'string') {
        strm.input = strings.binstring2buf(data);
      } else if (toString.call(data) === '[object ArrayBuffer]') {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      do {
        if (strm.avail_out === 0) {
          strm.output = new utils.Buf8(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
        if (status === c.Z_BUF_ERROR && allowBufError === true) {
          status = c.Z_OK;
          allowBufError = false;
        }
        if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
          this.onEnd(status);
          this.ended = true;
          return false;
        }
        if (strm.next_out) {
          if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {
            if (this.options.to === 'string') {
              next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
              tail = strm.next_out - next_out_utf8;
              utf8str = strings.buf2string(strm.output, next_out_utf8);
              strm.next_out = tail;
              strm.avail_out = chunkSize - tail;
              if (tail) {
                utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
              }
              this.onData(utf8str);
            } else {
              this.onData(utils.shrinkBuf(strm.output, strm.next_out));
            }
          }
        }
        if (strm.avail_in === 0 && strm.avail_out === 0) {
          allowBufError = true;
        }
      } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);
      if (status === c.Z_STREAM_END) {
        _mode = c.Z_FINISH;
      }
      if (_mode === c.Z_FINISH) {
        status = zlib_inflate.inflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === c.Z_OK;
      }
      if (_mode === c.Z_SYNC_FLUSH) {
        this.onEnd(c.Z_OK);
        strm.avail_out = 0;
        return true;
      }
      return true;
    };
    Inflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    Inflate.prototype.onEnd = function(status) {
      if (status === c.Z_OK) {
        if (this.options.to === 'string') {
          this.result = this.chunks.join('');
        } else {
          this.result = utils.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    function inflate(input, options) {
      var inflator = new Inflate(options);
      inflator.push(input, true);
      if (inflator.err) {
        throw inflator.msg;
      }
      return inflator.result;
    }
    function inflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return inflate(input, options);
    }
    exports.Inflate = Inflate;
    exports.inflate = inflate;
    exports.inflateRaw = inflateRaw;
    exports.ungzip = inflate;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8/index", ["npm:pako@0.2.8/lib/utils/common", "npm:pako@0.2.8/lib/deflate", "npm:pako@0.2.8/lib/inflate", "npm:pako@0.2.8/lib/zlib/constants"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var assign = require("npm:pako@0.2.8/lib/utils/common").assign;
  var deflate = require("npm:pako@0.2.8/lib/deflate");
  var inflate = require("npm:pako@0.2.8/lib/inflate");
  var constants = require("npm:pako@0.2.8/lib/zlib/constants");
  var pako = {};
  assign(pako, deflate, inflate, constants);
  module.exports = pako;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:pako@0.2.8", ["npm:pako@0.2.8/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:pako@0.2.8/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/flate", ["npm:pako@0.2.8"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var USE_TYPEDARRAY = (typeof Uint8Array !== 'undefined') && (typeof Uint16Array !== 'undefined') && (typeof Uint32Array !== 'undefined');
  var pako = require("npm:pako@0.2.8");
  exports.uncompressInputType = USE_TYPEDARRAY ? "uint8array" : "array";
  exports.compressInputType = USE_TYPEDARRAY ? "uint8array" : "array";
  exports.magic = "\x08\x00";
  exports.compress = function(input, compressionOptions) {
    return pako.deflateRaw(input, {level: compressionOptions.level || -1});
  };
  exports.uncompress = function(input) {
    return pako.inflateRaw(input);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/compressions", ["npm:jszip@2.5.0/lib/flate"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  exports.STORE = {
    magic: "\x00\x00",
    compress: function(content, compressionOptions) {
      return content;
    },
    uncompress: function(content) {
      return content;
    },
    compressInputType: null,
    uncompressInputType: null
  };
  exports.DEFLATE = require("npm:jszip@2.5.0/lib/flate");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/nodeBuffer", ["github:jspm/nodelibs-buffer@0.1.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer) {
    'use strict';
    module.exports = function(data, encoding) {
      return new Buffer(data, encoding);
    };
    module.exports.test = function(b) {
      return Buffer.isBuffer(b);
    };
  })(require("github:jspm/nodelibs-buffer@0.1.0").Buffer);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/utils", ["npm:jszip@2.5.0/lib/support", "npm:jszip@2.5.0/lib/compressions", "npm:jszip@2.5.0/lib/nodeBuffer", "github:jspm/nodelibs-buffer@0.1.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer) {
    'use strict';
    var support = require("npm:jszip@2.5.0/lib/support");
    var compressions = require("npm:jszip@2.5.0/lib/compressions");
    var nodeBuffer = require("npm:jszip@2.5.0/lib/nodeBuffer");
    exports.string2binary = function(str) {
      var result = "";
      for (var i = 0; i < str.length; i++) {
        result += String.fromCharCode(str.charCodeAt(i) & 0xff);
      }
      return result;
    };
    exports.arrayBuffer2Blob = function(buffer, mimeType) {
      exports.checkSupport("blob");
      mimeType = mimeType || 'application/zip';
      try {
        return new Blob([buffer], {type: mimeType});
      } catch (e) {
        try {
          var Builder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
          var builder = new Builder();
          builder.append(buffer);
          return builder.getBlob(mimeType);
        } catch (e) {
          throw new Error("Bug : can't construct the Blob.");
        }
      }
    };
    function identity(input) {
      return input;
    }
    function stringToArrayLike(str, array) {
      for (var i = 0; i < str.length; ++i) {
        array[i] = str.charCodeAt(i) & 0xFF;
      }
      return array;
    }
    function arrayLikeToString(array) {
      var chunk = 65536;
      var result = [],
          len = array.length,
          type = exports.getTypeOf(array),
          k = 0,
          canUseApply = true;
      try {
        switch (type) {
          case "uint8array":
            String.fromCharCode.apply(null, new Uint8Array(0));
            break;
          case "nodebuffer":
            String.fromCharCode.apply(null, nodeBuffer(0));
            break;
        }
      } catch (e) {
        canUseApply = false;
      }
      if (!canUseApply) {
        var resultStr = "";
        for (var i = 0; i < array.length; i++) {
          resultStr += String.fromCharCode(array[i]);
        }
        return resultStr;
      }
      while (k < len && chunk > 1) {
        try {
          if (type === "array" || type === "nodebuffer") {
            result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
          } else {
            result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
          }
          k += chunk;
        } catch (e) {
          chunk = Math.floor(chunk / 2);
        }
      }
      return result.join("");
    }
    exports.applyFromCharCode = arrayLikeToString;
    function arrayLikeToArrayLike(arrayFrom, arrayTo) {
      for (var i = 0; i < arrayFrom.length; i++) {
        arrayTo[i] = arrayFrom[i];
      }
      return arrayTo;
    }
    var transform = {};
    transform["string"] = {
      "string": identity,
      "array": function(input) {
        return stringToArrayLike(input, new Array(input.length));
      },
      "arraybuffer": function(input) {
        return transform["string"]["uint8array"](input).buffer;
      },
      "uint8array": function(input) {
        return stringToArrayLike(input, new Uint8Array(input.length));
      },
      "nodebuffer": function(input) {
        return stringToArrayLike(input, nodeBuffer(input.length));
      }
    };
    transform["array"] = {
      "string": arrayLikeToString,
      "array": identity,
      "arraybuffer": function(input) {
        return (new Uint8Array(input)).buffer;
      },
      "uint8array": function(input) {
        return new Uint8Array(input);
      },
      "nodebuffer": function(input) {
        return nodeBuffer(input);
      }
    };
    transform["arraybuffer"] = {
      "string": function(input) {
        return arrayLikeToString(new Uint8Array(input));
      },
      "array": function(input) {
        return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
      },
      "arraybuffer": identity,
      "uint8array": function(input) {
        return new Uint8Array(input);
      },
      "nodebuffer": function(input) {
        return nodeBuffer(new Uint8Array(input));
      }
    };
    transform["uint8array"] = {
      "string": arrayLikeToString,
      "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
      },
      "arraybuffer": function(input) {
        return input.buffer;
      },
      "uint8array": identity,
      "nodebuffer": function(input) {
        return nodeBuffer(input);
      }
    };
    transform["nodebuffer"] = {
      "string": arrayLikeToString,
      "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
      },
      "arraybuffer": function(input) {
        return transform["nodebuffer"]["uint8array"](input).buffer;
      },
      "uint8array": function(input) {
        return arrayLikeToArrayLike(input, new Uint8Array(input.length));
      },
      "nodebuffer": identity
    };
    exports.transformTo = function(outputType, input) {
      if (!input) {
        input = "";
      }
      if (!outputType) {
        return input;
      }
      exports.checkSupport(outputType);
      var inputType = exports.getTypeOf(input);
      var result = transform[inputType][outputType](input);
      return result;
    };
    exports.getTypeOf = function(input) {
      if (typeof input === "string") {
        return "string";
      }
      if (Object.prototype.toString.call(input) === "[object Array]") {
        return "array";
      }
      if (support.nodebuffer && nodeBuffer.test(input)) {
        return "nodebuffer";
      }
      if (support.uint8array && input instanceof Uint8Array) {
        return "uint8array";
      }
      if (support.arraybuffer && input instanceof ArrayBuffer) {
        return "arraybuffer";
      }
    };
    exports.checkSupport = function(type) {
      var supported = support[type.toLowerCase()];
      if (!supported) {
        throw new Error(type + " is not supported by this browser");
      }
    };
    exports.MAX_VALUE_16BITS = 65535;
    exports.MAX_VALUE_32BITS = -1;
    exports.pretty = function(str) {
      var res = '',
          code,
          i;
      for (i = 0; i < (str || "").length; i++) {
        code = str.charCodeAt(i);
        res += '\\x' + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
      }
      return res;
    };
    exports.findCompression = function(compressionMethod) {
      for (var method in compressions) {
        if (!compressions.hasOwnProperty(method)) {
          continue;
        }
        if (compressions[method].magic === compressionMethod) {
          return compressions[method];
        }
      }
      return null;
    };
    exports.isRegExp = function(object) {
      return Object.prototype.toString.call(object) === "[object RegExp]";
    };
  })(require("github:jspm/nodelibs-buffer@0.1.0").Buffer);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/crc32", ["npm:jszip@2.5.0/lib/utils"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var utils = require("npm:jszip@2.5.0/lib/utils");
  var table = [0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE, 0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B, 0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924, 0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01, 0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2, 0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F, 0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8, 0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5, 0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236, 0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713, 0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C, 0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9, 0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D];
  module.exports = function crc32(input, crc) {
    if (typeof input === "undefined" || !input.length) {
      return 0;
    }
    var isArray = utils.getTypeOf(input) !== "string";
    if (typeof(crc) == "undefined") {
      crc = 0;
    }
    var x = 0;
    var y = 0;
    var b = 0;
    crc = crc ^ (-1);
    for (var i = 0,
        iTop = input.length; i < iTop; i++) {
      b = isArray ? input[i] : input.charCodeAt(i);
      y = (crc ^ b) & 0xFF;
      x = table[y];
      crc = (crc >>> 8) ^ x;
    }
    return crc ^ (-1);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/signature", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  exports.LOCAL_FILE_HEADER = "PK\x03\x04";
  exports.CENTRAL_FILE_HEADER = "PK\x01\x02";
  exports.CENTRAL_DIRECTORY_END = "PK\x05\x06";
  exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07";
  exports.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06";
  exports.DATA_DESCRIPTOR = "PK\x07\x08";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/defaults", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  exports.base64 = false;
  exports.binary = false;
  exports.dir = false;
  exports.createFolders = false;
  exports.date = null;
  exports.compression = null;
  exports.compressionOptions = null;
  exports.comment = null;
  exports.unixPermissions = null;
  exports.dosPermissions = null;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/compressedObject", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function CompressedObject() {
    this.compressedSize = 0;
    this.uncompressedSize = 0;
    this.crc32 = 0;
    this.compressionMethod = null;
    this.compressedContent = null;
  }
  CompressedObject.prototype = {
    getContent: function() {
      return null;
    },
    getCompressedContent: function() {
      return null;
    }
  };
  module.exports = CompressedObject;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/utf8", ["npm:jszip@2.5.0/lib/utils", "npm:jszip@2.5.0/lib/support", "npm:jszip@2.5.0/lib/nodeBuffer", "github:jspm/nodelibs-buffer@0.1.0", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer, process) {
    'use strict';
    var utils = require("npm:jszip@2.5.0/lib/utils");
    var support = require("npm:jszip@2.5.0/lib/support");
    var nodeBuffer = require("npm:jszip@2.5.0/lib/nodeBuffer");
    var _utf8len = new Array(256);
    for (var i = 0; i < 256; i++) {
      _utf8len[i] = (i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1);
    }
    _utf8len[254] = _utf8len[254] = 1;
    var string2buf = function(str) {
      var buf,
          c,
          c2,
          m_pos,
          i,
          str_len = str.length,
          buf_len = 0;
      for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 0xfc00) === 0xdc00) {
            c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
            m_pos++;
          }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
      }
      if (support.uint8array) {
        buf = new Uint8Array(buf_len);
      } else {
        buf = new Array(buf_len);
      }
      for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 0xfc00) === 0xdc00) {
            c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
            m_pos++;
          }
        }
        if (c < 0x80) {
          buf[i++] = c;
        } else if (c < 0x800) {
          buf[i++] = 0xC0 | (c >>> 6);
          buf[i++] = 0x80 | (c & 0x3f);
        } else if (c < 0x10000) {
          buf[i++] = 0xE0 | (c >>> 12);
          buf[i++] = 0x80 | (c >>> 6 & 0x3f);
          buf[i++] = 0x80 | (c & 0x3f);
        } else {
          buf[i++] = 0xf0 | (c >>> 18);
          buf[i++] = 0x80 | (c >>> 12 & 0x3f);
          buf[i++] = 0x80 | (c >>> 6 & 0x3f);
          buf[i++] = 0x80 | (c & 0x3f);
        }
      }
      return buf;
    };
    var utf8border = function(buf, max) {
      var pos;
      max = max || buf.length;
      if (max > buf.length) {
        max = buf.length;
      }
      pos = max - 1;
      while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) {
        pos--;
      }
      if (pos < 0) {
        return max;
      }
      if (pos === 0) {
        return max;
      }
      return (pos + _utf8len[buf[pos]] > max) ? pos : max;
    };
    var buf2string = function(buf) {
      var str,
          i,
          out,
          c,
          c_len;
      var len = buf.length;
      var utf16buf = new Array(len * 2);
      for (out = 0, i = 0; i < len; ) {
        c = buf[i++];
        if (c < 0x80) {
          utf16buf[out++] = c;
          continue;
        }
        c_len = _utf8len[c];
        if (c_len > 4) {
          utf16buf[out++] = 0xfffd;
          i += c_len - 1;
          continue;
        }
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        while (c_len > 1 && i < len) {
          c = (c << 6) | (buf[i++] & 0x3f);
          c_len--;
        }
        if (c_len > 1) {
          utf16buf[out++] = 0xfffd;
          continue;
        }
        if (c < 0x10000) {
          utf16buf[out++] = c;
        } else {
          c -= 0x10000;
          utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
          utf16buf[out++] = 0xdc00 | (c & 0x3ff);
        }
      }
      if (utf16buf.length !== out) {
        if (utf16buf.subarray) {
          utf16buf = utf16buf.subarray(0, out);
        } else {
          utf16buf.length = out;
        }
      }
      return utils.applyFromCharCode(utf16buf);
    };
    exports.utf8encode = function utf8encode(str) {
      if (support.nodebuffer) {
        return nodeBuffer(str, "utf-8");
      }
      return string2buf(str);
    };
    exports.utf8decode = function utf8decode(buf) {
      if (support.nodebuffer) {
        return utils.transformTo("nodebuffer", buf).toString("utf-8");
      }
      buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);
      var result = [],
          k = 0,
          len = buf.length,
          chunk = 65536;
      while (k < len) {
        var nextBoundary = utf8border(buf, Math.min(k + chunk, len));
        if (support.uint8array) {
          result.push(buf2string(buf.subarray(k, nextBoundary)));
        } else {
          result.push(buf2string(buf.slice(k, nextBoundary)));
        }
        k = nextBoundary;
      }
      return result.join("");
    };
  })(require("github:jspm/nodelibs-buffer@0.1.0").Buffer, require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/stringWriter", ["npm:jszip@2.5.0/lib/utils"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var utils = require("npm:jszip@2.5.0/lib/utils");
  var StringWriter = function() {
    this.data = [];
  };
  StringWriter.prototype = {
    append: function(input) {
      input = utils.transformTo("string", input);
      this.data.push(input);
    },
    finalize: function() {
      return this.data.join("");
    }
  };
  module.exports = StringWriter;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/uint8ArrayWriter", ["npm:jszip@2.5.0/lib/utils"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var utils = require("npm:jszip@2.5.0/lib/utils");
  var Uint8ArrayWriter = function(length) {
    this.data = new Uint8Array(length);
    this.index = 0;
  };
  Uint8ArrayWriter.prototype = {
    append: function(input) {
      if (input.length !== 0) {
        input = utils.transformTo("uint8array", input);
        this.data.set(input, this.index);
        this.index += input.length;
      }
    },
    finalize: function() {
      return this.data;
    }
  };
  module.exports = Uint8ArrayWriter;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/object", ["npm:jszip@2.5.0/lib/support", "npm:jszip@2.5.0/lib/utils", "npm:jszip@2.5.0/lib/crc32", "npm:jszip@2.5.0/lib/signature", "npm:jszip@2.5.0/lib/defaults", "npm:jszip@2.5.0/lib/base64", "npm:jszip@2.5.0/lib/compressions", "npm:jszip@2.5.0/lib/compressedObject", "npm:jszip@2.5.0/lib/nodeBuffer", "npm:jszip@2.5.0/lib/utf8", "npm:jszip@2.5.0/lib/stringWriter", "npm:jszip@2.5.0/lib/uint8ArrayWriter", "github:jspm/nodelibs-buffer@0.1.0", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer, process) {
    'use strict';
    var support = require("npm:jszip@2.5.0/lib/support");
    var utils = require("npm:jszip@2.5.0/lib/utils");
    var crc32 = require("npm:jszip@2.5.0/lib/crc32");
    var signature = require("npm:jszip@2.5.0/lib/signature");
    var defaults = require("npm:jszip@2.5.0/lib/defaults");
    var base64 = require("npm:jszip@2.5.0/lib/base64");
    var compressions = require("npm:jszip@2.5.0/lib/compressions");
    var CompressedObject = require("npm:jszip@2.5.0/lib/compressedObject");
    var nodeBuffer = require("npm:jszip@2.5.0/lib/nodeBuffer");
    var utf8 = require("npm:jszip@2.5.0/lib/utf8");
    var StringWriter = require("npm:jszip@2.5.0/lib/stringWriter");
    var Uint8ArrayWriter = require("npm:jszip@2.5.0/lib/uint8ArrayWriter");
    var getRawData = function(file) {
      if (file._data instanceof CompressedObject) {
        file._data = file._data.getContent();
        file.options.binary = true;
        file.options.base64 = false;
        if (utils.getTypeOf(file._data) === "uint8array") {
          var copy = file._data;
          file._data = new Uint8Array(copy.length);
          if (copy.length !== 0) {
            file._data.set(copy, 0);
          }
        }
      }
      return file._data;
    };
    var getBinaryData = function(file) {
      var result = getRawData(file),
          type = utils.getTypeOf(result);
      if (type === "string") {
        if (!file.options.binary) {
          if (support.nodebuffer) {
            return nodeBuffer(result, "utf-8");
          }
        }
        return file.asBinary();
      }
      return result;
    };
    var dataToString = function(asUTF8) {
      var result = getRawData(this);
      if (result === null || typeof result === "undefined") {
        return "";
      }
      if (this.options.base64) {
        result = base64.decode(result);
      }
      if (asUTF8 && this.options.binary) {
        result = out.utf8decode(result);
      } else {
        result = utils.transformTo("string", result);
      }
      if (!asUTF8 && !this.options.binary) {
        result = utils.transformTo("string", out.utf8encode(result));
      }
      return result;
    };
    var ZipObject = function(name, data, options) {
      this.name = name;
      this.dir = options.dir;
      this.date = options.date;
      this.comment = options.comment;
      this.unixPermissions = options.unixPermissions;
      this.dosPermissions = options.dosPermissions;
      this._data = data;
      this.options = options;
      this._initialMetadata = {
        dir: options.dir,
        date: options.date
      };
    };
    ZipObject.prototype = {
      asText: function() {
        return dataToString.call(this, true);
      },
      asBinary: function() {
        return dataToString.call(this, false);
      },
      asNodeBuffer: function() {
        var result = getBinaryData(this);
        return utils.transformTo("nodebuffer", result);
      },
      asUint8Array: function() {
        var result = getBinaryData(this);
        return utils.transformTo("uint8array", result);
      },
      asArrayBuffer: function() {
        return this.asUint8Array().buffer;
      }
    };
    var decToHex = function(dec, bytes) {
      var hex = "",
          i;
      for (i = 0; i < bytes; i++) {
        hex += String.fromCharCode(dec & 0xff);
        dec = dec >>> 8;
      }
      return hex;
    };
    var extend = function() {
      var result = {},
          i,
          attr;
      for (i = 0; i < arguments.length; i++) {
        for (attr in arguments[i]) {
          if (arguments[i].hasOwnProperty(attr) && typeof result[attr] === "undefined") {
            result[attr] = arguments[i][attr];
          }
        }
      }
      return result;
    };
    var prepareFileAttrs = function(o) {
      o = o || {};
      if (o.base64 === true && (o.binary === null || o.binary === undefined)) {
        o.binary = true;
      }
      o = extend(o, defaults);
      o.date = o.date || new Date();
      if (o.compression !== null)
        o.compression = o.compression.toUpperCase();
      return o;
    };
    var fileAdd = function(name, data, o) {
      var dataType = utils.getTypeOf(data),
          parent;
      o = prepareFileAttrs(o);
      if (typeof o.unixPermissions === "string") {
        o.unixPermissions = parseInt(o.unixPermissions, 8);
      }
      if (o.unixPermissions && (o.unixPermissions & 0x4000)) {
        o.dir = true;
      }
      if (o.dosPermissions && (o.dosPermissions & 0x0010)) {
        o.dir = true;
      }
      if (o.dir) {
        name = forceTrailingSlash(name);
      }
      if (o.createFolders && (parent = parentFolder(name))) {
        folderAdd.call(this, parent, true);
      }
      if (o.dir || data === null || typeof data === "undefined") {
        o.base64 = false;
        o.binary = false;
        data = null;
        dataType = null;
      } else if (dataType === "string") {
        if (o.binary && !o.base64) {
          if (o.optimizedBinaryString !== true) {
            data = utils.string2binary(data);
          }
        }
      } else {
        o.base64 = false;
        o.binary = true;
        if (!dataType && !(data instanceof CompressedObject)) {
          throw new Error("The data of '" + name + "' is in an unsupported format !");
        }
        if (dataType === "arraybuffer") {
          data = utils.transformTo("uint8array", data);
        }
      }
      var object = new ZipObject(name, data, o);
      this.files[name] = object;
      return object;
    };
    var parentFolder = function(path) {
      if (path.slice(-1) == '/') {
        path = path.substring(0, path.length - 1);
      }
      var lastSlash = path.lastIndexOf('/');
      return (lastSlash > 0) ? path.substring(0, lastSlash) : "";
    };
    var forceTrailingSlash = function(path) {
      if (path.slice(-1) != "/") {
        path += "/";
      }
      return path;
    };
    var folderAdd = function(name, createFolders) {
      createFolders = (typeof createFolders !== 'undefined') ? createFolders : false;
      name = forceTrailingSlash(name);
      if (!this.files[name]) {
        fileAdd.call(this, name, null, {
          dir: true,
          createFolders: createFolders
        });
      }
      return this.files[name];
    };
    var generateCompressedObjectFrom = function(file, compression, compressionOptions) {
      var result = new CompressedObject(),
          content;
      if (file._data instanceof CompressedObject) {
        result.uncompressedSize = file._data.uncompressedSize;
        result.crc32 = file._data.crc32;
        if (result.uncompressedSize === 0 || file.dir) {
          compression = compressions['STORE'];
          result.compressedContent = "";
          result.crc32 = 0;
        } else if (file._data.compressionMethod === compression.magic) {
          result.compressedContent = file._data.getCompressedContent();
        } else {
          content = file._data.getContent();
          result.compressedContent = compression.compress(utils.transformTo(compression.compressInputType, content), compressionOptions);
        }
      } else {
        content = getBinaryData(file);
        if (!content || content.length === 0 || file.dir) {
          compression = compressions['STORE'];
          content = "";
        }
        result.uncompressedSize = content.length;
        result.crc32 = crc32(content);
        result.compressedContent = compression.compress(utils.transformTo(compression.compressInputType, content), compressionOptions);
      }
      result.compressedSize = result.compressedContent.length;
      result.compressionMethod = compression.magic;
      return result;
    };
    var generateUnixExternalFileAttr = function(unixPermissions, isDir) {
      var result = unixPermissions;
      if (!unixPermissions) {
        result = isDir ? 0x41fd : 0x81b4;
      }
      return (result & 0xFFFF) << 16;
    };
    var generateDosExternalFileAttr = function(dosPermissions, isDir) {
      return (dosPermissions || 0) & 0x3F;
    };
    var generateZipParts = function(name, file, compressedObject, offset, platform) {
      var data = compressedObject.compressedContent,
          utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)),
          comment = file.comment || "",
          utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)),
          useUTF8ForFileName = utfEncodedFileName.length !== file.name.length,
          useUTF8ForComment = utfEncodedComment.length !== comment.length,
          o = file.options,
          dosTime,
          dosDate,
          extraFields = "",
          unicodePathExtraField = "",
          unicodeCommentExtraField = "",
          dir,
          date;
      if (file._initialMetadata.dir !== file.dir) {
        dir = file.dir;
      } else {
        dir = o.dir;
      }
      if (file._initialMetadata.date !== file.date) {
        date = file.date;
      } else {
        date = o.date;
      }
      var extFileAttr = 0;
      var versionMadeBy = 0;
      if (dir) {
        extFileAttr |= 0x00010;
      }
      if (platform === "UNIX") {
        versionMadeBy = 0x031E;
        extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
      } else {
        versionMadeBy = 0x0014;
        extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
      }
      dosTime = date.getHours();
      dosTime = dosTime << 6;
      dosTime = dosTime | date.getMinutes();
      dosTime = dosTime << 5;
      dosTime = dosTime | date.getSeconds() / 2;
      dosDate = date.getFullYear() - 1980;
      dosDate = dosDate << 4;
      dosDate = dosDate | (date.getMonth() + 1);
      dosDate = dosDate << 5;
      dosDate = dosDate | date.getDate();
      if (useUTF8ForFileName) {
        unicodePathExtraField = decToHex(1, 1) + decToHex(crc32(utfEncodedFileName), 4) + utfEncodedFileName;
        extraFields += "\x75\x70" + decToHex(unicodePathExtraField.length, 2) + unicodePathExtraField;
      }
      if (useUTF8ForComment) {
        unicodeCommentExtraField = decToHex(1, 1) + decToHex(this.crc32(utfEncodedComment), 4) + utfEncodedComment;
        extraFields += "\x75\x63" + decToHex(unicodeCommentExtraField.length, 2) + unicodeCommentExtraField;
      }
      var header = "";
      header += "\x0A\x00";
      header += (useUTF8ForFileName || useUTF8ForComment) ? "\x00\x08" : "\x00\x00";
      header += compressedObject.compressionMethod;
      header += decToHex(dosTime, 2);
      header += decToHex(dosDate, 2);
      header += decToHex(compressedObject.crc32, 4);
      header += decToHex(compressedObject.compressedSize, 4);
      header += decToHex(compressedObject.uncompressedSize, 4);
      header += decToHex(utfEncodedFileName.length, 2);
      header += decToHex(extraFields.length, 2);
      var fileRecord = signature.LOCAL_FILE_HEADER + header + utfEncodedFileName + extraFields;
      var dirRecord = signature.CENTRAL_FILE_HEADER + decToHex(versionMadeBy, 2) + header + decToHex(utfEncodedComment.length, 2) + "\x00\x00" + "\x00\x00" + decToHex(extFileAttr, 4) + decToHex(offset, 4) + utfEncodedFileName + extraFields + utfEncodedComment;
      return {
        fileRecord: fileRecord,
        dirRecord: dirRecord,
        compressedObject: compressedObject
      };
    };
    var out = {
      load: function(stream, options) {
        throw new Error("Load method is not defined. Is the file jszip-load.js included ?");
      },
      filter: function(search) {
        var result = [],
            filename,
            relativePath,
            file,
            fileClone;
        for (filename in this.files) {
          if (!this.files.hasOwnProperty(filename)) {
            continue;
          }
          file = this.files[filename];
          fileClone = new ZipObject(file.name, file._data, extend(file.options));
          relativePath = filename.slice(this.root.length, filename.length);
          if (filename.slice(0, this.root.length) === this.root && search(relativePath, fileClone)) {
            result.push(fileClone);
          }
        }
        return result;
      },
      file: function(name, data, o) {
        if (arguments.length === 1) {
          if (utils.isRegExp(name)) {
            var regexp = name;
            return this.filter(function(relativePath, file) {
              return !file.dir && regexp.test(relativePath);
            });
          } else {
            return this.filter(function(relativePath, file) {
              return !file.dir && relativePath === name;
            })[0] || null;
          }
        } else {
          name = this.root + name;
          fileAdd.call(this, name, data, o);
        }
        return this;
      },
      folder: function(arg) {
        if (!arg) {
          return this;
        }
        if (utils.isRegExp(arg)) {
          return this.filter(function(relativePath, file) {
            return file.dir && arg.test(relativePath);
          });
        }
        var name = this.root + arg;
        var newFolder = folderAdd.call(this, name);
        var ret = this.clone();
        ret.root = newFolder.name;
        return ret;
      },
      remove: function(name) {
        name = this.root + name;
        var file = this.files[name];
        if (!file) {
          if (name.slice(-1) != "/") {
            name += "/";
          }
          file = this.files[name];
        }
        if (file && !file.dir) {
          delete this.files[name];
        } else {
          var kids = this.filter(function(relativePath, file) {
            return file.name.slice(0, name.length) === name;
          });
          for (var i = 0; i < kids.length; i++) {
            delete this.files[kids[i].name];
          }
        }
        return this;
      },
      generate: function(options) {
        options = extend(options || {}, {
          base64: true,
          compression: "STORE",
          compressionOptions: null,
          type: "base64",
          platform: "DOS",
          comment: null,
          mimeType: 'application/zip'
        });
        utils.checkSupport(options.type);
        if (options.platform === 'darwin' || options.platform === 'freebsd' || options.platform === 'linux' || options.platform === 'sunos') {
          options.platform = "UNIX";
        }
        if (options.platform === 'win32') {
          options.platform = "DOS";
        }
        var zipData = [],
            localDirLength = 0,
            centralDirLength = 0,
            writer,
            i,
            utfEncodedComment = utils.transformTo("string", this.utf8encode(options.comment || this.comment || ""));
        for (var name in this.files) {
          if (!this.files.hasOwnProperty(name)) {
            continue;
          }
          var file = this.files[name];
          var compressionName = file.options.compression || options.compression.toUpperCase();
          var compression = compressions[compressionName];
          if (!compression) {
            throw new Error(compressionName + " is not a valid compression method !");
          }
          var compressionOptions = file.options.compressionOptions || options.compressionOptions || {};
          var compressedObject = generateCompressedObjectFrom.call(this, file, compression, compressionOptions);
          var zipPart = generateZipParts.call(this, name, file, compressedObject, localDirLength, options.platform);
          localDirLength += zipPart.fileRecord.length + compressedObject.compressedSize;
          centralDirLength += zipPart.dirRecord.length;
          zipData.push(zipPart);
        }
        var dirEnd = "";
        dirEnd = signature.CENTRAL_DIRECTORY_END + "\x00\x00" + "\x00\x00" + decToHex(zipData.length, 2) + decToHex(zipData.length, 2) + decToHex(centralDirLength, 4) + decToHex(localDirLength, 4) + decToHex(utfEncodedComment.length, 2) + utfEncodedComment;
        var typeName = options.type.toLowerCase();
        if (typeName === "uint8array" || typeName === "arraybuffer" || typeName === "blob" || typeName === "nodebuffer") {
          writer = new Uint8ArrayWriter(localDirLength + centralDirLength + dirEnd.length);
        } else {
          writer = new StringWriter(localDirLength + centralDirLength + dirEnd.length);
        }
        for (i = 0; i < zipData.length; i++) {
          writer.append(zipData[i].fileRecord);
          writer.append(zipData[i].compressedObject.compressedContent);
        }
        for (i = 0; i < zipData.length; i++) {
          writer.append(zipData[i].dirRecord);
        }
        writer.append(dirEnd);
        var zip = writer.finalize();
        switch (options.type.toLowerCase()) {
          case "uint8array":
          case "arraybuffer":
          case "nodebuffer":
            return utils.transformTo(options.type.toLowerCase(), zip);
          case "blob":
            return utils.arrayBuffer2Blob(utils.transformTo("arraybuffer", zip), options.mimeType);
          case "base64":
            return (options.base64) ? base64.encode(zip) : zip;
          default:
            return zip;
        }
      },
      crc32: function(input, crc) {
        return crc32(input, crc);
      },
      utf8encode: function(string) {
        return utils.transformTo("string", utf8.utf8encode(string));
      },
      utf8decode: function(input) {
        return utf8.utf8decode(input);
      }
    };
    module.exports = out;
  })(require("github:jspm/nodelibs-buffer@0.1.0").Buffer, require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/dataReader", ["npm:jszip@2.5.0/lib/utils"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var utils = require("npm:jszip@2.5.0/lib/utils");
  function DataReader(data) {
    this.data = null;
    this.length = 0;
    this.index = 0;
  }
  DataReader.prototype = {
    checkOffset: function(offset) {
      this.checkIndex(this.index + offset);
    },
    checkIndex: function(newIndex) {
      if (this.length < newIndex || newIndex < 0) {
        throw new Error("End of data reached (data length = " + this.length + ", asked index = " + (newIndex) + "). Corrupted zip ?");
      }
    },
    setIndex: function(newIndex) {
      this.checkIndex(newIndex);
      this.index = newIndex;
    },
    skip: function(n) {
      this.setIndex(this.index + n);
    },
    byteAt: function(i) {},
    readInt: function(size) {
      var result = 0,
          i;
      this.checkOffset(size);
      for (i = this.index + size - 1; i >= this.index; i--) {
        result = (result << 8) + this.byteAt(i);
      }
      this.index += size;
      return result;
    },
    readString: function(size) {
      return utils.transformTo("string", this.readData(size));
    },
    readData: function(size) {},
    lastIndexOfSignature: function(sig) {},
    readDate: function() {
      var dostime = this.readInt(4);
      return new Date(((dostime >> 25) & 0x7f) + 1980, ((dostime >> 21) & 0x0f) - 1, (dostime >> 16) & 0x1f, (dostime >> 11) & 0x1f, (dostime >> 5) & 0x3f, (dostime & 0x1f) << 1);
    }
  };
  module.exports = DataReader;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/stringReader", ["npm:jszip@2.5.0/lib/dataReader", "npm:jszip@2.5.0/lib/utils"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var DataReader = require("npm:jszip@2.5.0/lib/dataReader");
  var utils = require("npm:jszip@2.5.0/lib/utils");
  function StringReader(data, optimizedBinaryString) {
    this.data = data;
    if (!optimizedBinaryString) {
      this.data = utils.string2binary(this.data);
    }
    this.length = this.data.length;
    this.index = 0;
  }
  StringReader.prototype = new DataReader();
  StringReader.prototype.byteAt = function(i) {
    return this.data.charCodeAt(i);
  };
  StringReader.prototype.lastIndexOfSignature = function(sig) {
    return this.data.lastIndexOf(sig);
  };
  StringReader.prototype.readData = function(size) {
    this.checkOffset(size);
    var result = this.data.slice(this.index, this.index + size);
    this.index += size;
    return result;
  };
  module.exports = StringReader;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/uint8ArrayReader", ["npm:jszip@2.5.0/lib/dataReader"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var DataReader = require("npm:jszip@2.5.0/lib/dataReader");
  function Uint8ArrayReader(data) {
    if (data) {
      this.data = data;
      this.length = this.data.length;
      this.index = 0;
    }
  }
  Uint8ArrayReader.prototype = new DataReader();
  Uint8ArrayReader.prototype.byteAt = function(i) {
    return this.data[i];
  };
  Uint8ArrayReader.prototype.lastIndexOfSignature = function(sig) {
    var sig0 = sig.charCodeAt(0),
        sig1 = sig.charCodeAt(1),
        sig2 = sig.charCodeAt(2),
        sig3 = sig.charCodeAt(3);
    for (var i = this.length - 4; i >= 0; --i) {
      if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
        return i;
      }
    }
    return -1;
  };
  Uint8ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if (size === 0) {
      return new Uint8Array(0);
    }
    var result = this.data.subarray(this.index, this.index + size);
    this.index += size;
    return result;
  };
  module.exports = Uint8ArrayReader;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/nodeBufferReader", ["npm:jszip@2.5.0/lib/uint8ArrayReader"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var Uint8ArrayReader = require("npm:jszip@2.5.0/lib/uint8ArrayReader");
  function NodeBufferReader(data) {
    this.data = data;
    this.length = this.data.length;
    this.index = 0;
  }
  NodeBufferReader.prototype = new Uint8ArrayReader();
  NodeBufferReader.prototype.readData = function(size) {
    this.checkOffset(size);
    var result = this.data.slice(this.index, this.index + size);
    this.index += size;
    return result;
  };
  module.exports = NodeBufferReader;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/zipEntry", ["npm:jszip@2.5.0/lib/stringReader", "npm:jszip@2.5.0/lib/utils", "npm:jszip@2.5.0/lib/compressedObject", "npm:jszip@2.5.0/lib/object", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var StringReader = require("npm:jszip@2.5.0/lib/stringReader");
    var utils = require("npm:jszip@2.5.0/lib/utils");
    var CompressedObject = require("npm:jszip@2.5.0/lib/compressedObject");
    var jszipProto = require("npm:jszip@2.5.0/lib/object");
    var MADE_BY_DOS = 0x00;
    var MADE_BY_UNIX = 0x03;
    function ZipEntry(options, loadOptions) {
      this.options = options;
      this.loadOptions = loadOptions;
    }
    ZipEntry.prototype = {
      isEncrypted: function() {
        return (this.bitFlag & 0x0001) === 0x0001;
      },
      useUTF8: function() {
        return (this.bitFlag & 0x0800) === 0x0800;
      },
      prepareCompressedContent: function(reader, from, length) {
        return function() {
          var previousIndex = reader.index;
          reader.setIndex(from);
          var compressedFileData = reader.readData(length);
          reader.setIndex(previousIndex);
          return compressedFileData;
        };
      },
      prepareContent: function(reader, from, length, compression, uncompressedSize) {
        return function() {
          var compressedFileData = utils.transformTo(compression.uncompressInputType, this.getCompressedContent());
          var uncompressedFileData = compression.uncompress(compressedFileData);
          if (uncompressedFileData.length !== uncompressedSize) {
            throw new Error("Bug : uncompressed data size mismatch");
          }
          return uncompressedFileData;
        };
      },
      readLocalPart: function(reader) {
        var compression,
            localExtraFieldsLength;
        reader.skip(22);
        this.fileNameLength = reader.readInt(2);
        localExtraFieldsLength = reader.readInt(2);
        this.fileName = reader.readString(this.fileNameLength);
        reader.skip(localExtraFieldsLength);
        if (this.compressedSize == -1 || this.uncompressedSize == -1) {
          throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory " + "(compressedSize == -1 || uncompressedSize == -1)");
        }
        compression = utils.findCompression(this.compressionMethod);
        if (compression === null) {
          throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
        }
        this.decompressed = new CompressedObject();
        this.decompressed.compressedSize = this.compressedSize;
        this.decompressed.uncompressedSize = this.uncompressedSize;
        this.decompressed.crc32 = this.crc32;
        this.decompressed.compressionMethod = this.compressionMethod;
        this.decompressed.getCompressedContent = this.prepareCompressedContent(reader, reader.index, this.compressedSize, compression);
        this.decompressed.getContent = this.prepareContent(reader, reader.index, this.compressedSize, compression, this.uncompressedSize);
        if (this.loadOptions.checkCRC32) {
          this.decompressed = utils.transformTo("string", this.decompressed.getContent());
          if (jszipProto.crc32(this.decompressed) !== this.crc32) {
            throw new Error("Corrupted zip : CRC32 mismatch");
          }
        }
      },
      readCentralPart: function(reader) {
        this.versionMadeBy = reader.readInt(2);
        this.versionNeeded = reader.readInt(2);
        this.bitFlag = reader.readInt(2);
        this.compressionMethod = reader.readString(2);
        this.date = reader.readDate();
        this.crc32 = reader.readInt(4);
        this.compressedSize = reader.readInt(4);
        this.uncompressedSize = reader.readInt(4);
        this.fileNameLength = reader.readInt(2);
        this.extraFieldsLength = reader.readInt(2);
        this.fileCommentLength = reader.readInt(2);
        this.diskNumberStart = reader.readInt(2);
        this.internalFileAttributes = reader.readInt(2);
        this.externalFileAttributes = reader.readInt(4);
        this.localHeaderOffset = reader.readInt(4);
        if (this.isEncrypted()) {
          throw new Error("Encrypted zip are not supported");
        }
        this.fileName = reader.readString(this.fileNameLength);
        this.readExtraFields(reader);
        this.parseZIP64ExtraField(reader);
        this.fileComment = reader.readString(this.fileCommentLength);
      },
      processAttributes: function() {
        this.unixPermissions = null;
        this.dosPermissions = null;
        var madeBy = this.versionMadeBy >> 8;
        this.dir = this.externalFileAttributes & 0x0010 ? true : false;
        if (madeBy === MADE_BY_DOS) {
          this.dosPermissions = this.externalFileAttributes & 0x3F;
        }
        if (madeBy === MADE_BY_UNIX) {
          this.unixPermissions = (this.externalFileAttributes >> 16) & 0xFFFF;
        }
        if (!this.dir && this.fileName.slice(-1) === '/') {
          this.dir = true;
        }
      },
      parseZIP64ExtraField: function(reader) {
        if (!this.extraFields[0x0001]) {
          return;
        }
        var extraReader = new StringReader(this.extraFields[0x0001].value);
        if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
          this.uncompressedSize = extraReader.readInt(8);
        }
        if (this.compressedSize === utils.MAX_VALUE_32BITS) {
          this.compressedSize = extraReader.readInt(8);
        }
        if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
          this.localHeaderOffset = extraReader.readInt(8);
        }
        if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
          this.diskNumberStart = extraReader.readInt(4);
        }
      },
      readExtraFields: function(reader) {
        var start = reader.index,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;
        this.extraFields = this.extraFields || {};
        while (reader.index < start + this.extraFieldsLength) {
          extraFieldId = reader.readInt(2);
          extraFieldLength = reader.readInt(2);
          extraFieldValue = reader.readString(extraFieldLength);
          this.extraFields[extraFieldId] = {
            id: extraFieldId,
            length: extraFieldLength,
            value: extraFieldValue
          };
        }
      },
      handleUTF8: function() {
        if (this.useUTF8()) {
          this.fileName = jszipProto.utf8decode(this.fileName);
          this.fileComment = jszipProto.utf8decode(this.fileComment);
        } else {
          var upath = this.findExtraFieldUnicodePath();
          if (upath !== null) {
            this.fileName = upath;
          }
          var ucomment = this.findExtraFieldUnicodeComment();
          if (ucomment !== null) {
            this.fileComment = ucomment;
          }
        }
      },
      findExtraFieldUnicodePath: function() {
        var upathField = this.extraFields[0x7075];
        if (upathField) {
          var extraReader = new StringReader(upathField.value);
          if (extraReader.readInt(1) !== 1) {
            return null;
          }
          if (jszipProto.crc32(this.fileName) !== extraReader.readInt(4)) {
            return null;
          }
          return jszipProto.utf8decode(extraReader.readString(upathField.length - 5));
        }
        return null;
      },
      findExtraFieldUnicodeComment: function() {
        var ucommentField = this.extraFields[0x6375];
        if (ucommentField) {
          var extraReader = new StringReader(ucommentField.value);
          if (extraReader.readInt(1) !== 1) {
            return null;
          }
          if (jszipProto.crc32(this.fileComment) !== extraReader.readInt(4)) {
            return null;
          }
          return jszipProto.utf8decode(extraReader.readString(ucommentField.length - 5));
        }
        return null;
      }
    };
    module.exports = ZipEntry;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/zipEntries", ["npm:jszip@2.5.0/lib/stringReader", "npm:jszip@2.5.0/lib/nodeBufferReader", "npm:jszip@2.5.0/lib/uint8ArrayReader", "npm:jszip@2.5.0/lib/utils", "npm:jszip@2.5.0/lib/signature", "npm:jszip@2.5.0/lib/zipEntry", "npm:jszip@2.5.0/lib/support", "npm:jszip@2.5.0/lib/object", "github:jspm/nodelibs-buffer@0.1.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Buffer) {
    'use strict';
    var StringReader = require("npm:jszip@2.5.0/lib/stringReader");
    var NodeBufferReader = require("npm:jszip@2.5.0/lib/nodeBufferReader");
    var Uint8ArrayReader = require("npm:jszip@2.5.0/lib/uint8ArrayReader");
    var utils = require("npm:jszip@2.5.0/lib/utils");
    var sig = require("npm:jszip@2.5.0/lib/signature");
    var ZipEntry = require("npm:jszip@2.5.0/lib/zipEntry");
    var support = require("npm:jszip@2.5.0/lib/support");
    var jszipProto = require("npm:jszip@2.5.0/lib/object");
    function ZipEntries(data, loadOptions) {
      this.files = [];
      this.loadOptions = loadOptions;
      if (data) {
        this.load(data);
      }
    }
    ZipEntries.prototype = {
      checkSignature: function(expectedSignature) {
        var signature = this.reader.readString(4);
        if (signature !== expectedSignature) {
          throw new Error("Corrupted zip or bug : unexpected signature " + "(" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
        }
      },
      readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2);
        this.diskWithCentralDirStart = this.reader.readInt(2);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
        this.centralDirRecords = this.reader.readInt(2);
        this.centralDirSize = this.reader.readInt(4);
        this.centralDirOffset = this.reader.readInt(4);
        this.zipCommentLength = this.reader.readInt(2);
        this.zipComment = this.reader.readString(this.zipCommentLength);
        this.zipComment = jszipProto.utf8decode(this.zipComment);
      },
      readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8);
        this.versionMadeBy = this.reader.readString(2);
        this.versionNeeded = this.reader.readInt(2);
        this.diskNumber = this.reader.readInt(4);
        this.diskWithCentralDirStart = this.reader.readInt(4);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
        this.centralDirRecords = this.reader.readInt(8);
        this.centralDirSize = this.reader.readInt(8);
        this.centralDirOffset = this.reader.readInt(8);
        this.zip64ExtensibleData = {};
        var extraDataSize = this.zip64EndOfCentralSize - 44,
            index = 0,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;
        while (index < extraDataSize) {
          extraFieldId = this.reader.readInt(2);
          extraFieldLength = this.reader.readInt(4);
          extraFieldValue = this.reader.readString(extraFieldLength);
          this.zip64ExtensibleData[extraFieldId] = {
            id: extraFieldId,
            length: extraFieldLength,
            value: extraFieldValue
          };
        }
      },
      readBlockZip64EndOfCentralLocator: function() {
        this.diskWithZip64CentralDirStart = this.reader.readInt(4);
        this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
        this.disksCount = this.reader.readInt(4);
        if (this.disksCount > 1) {
          throw new Error("Multi-volumes zip are not supported");
        }
      },
      readLocalFiles: function() {
        var i,
            file;
        for (i = 0; i < this.files.length; i++) {
          file = this.files[i];
          this.reader.setIndex(file.localHeaderOffset);
          this.checkSignature(sig.LOCAL_FILE_HEADER);
          file.readLocalPart(this.reader);
          file.handleUTF8();
          file.processAttributes();
        }
      },
      readCentralDir: function() {
        var file;
        this.reader.setIndex(this.centralDirOffset);
        while (this.reader.readString(4) === sig.CENTRAL_FILE_HEADER) {
          file = new ZipEntry({zip64: this.zip64}, this.loadOptions);
          file.readCentralPart(this.reader);
          this.files.push(file);
        }
      },
      readEndOfCentral: function() {
        var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
        if (offset === -1) {
          var isGarbage = true;
          try {
            this.reader.setIndex(0);
            this.checkSignature(sig.LOCAL_FILE_HEADER);
            isGarbage = false;
          } catch (e) {}
          if (isGarbage) {
            throw new Error("Can't find end of central directory : is this a zip file ? " + "If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html");
          } else {
            throw new Error("Corrupted zip : can't find end of central directory");
          }
        }
        this.reader.setIndex(offset);
        this.checkSignature(sig.CENTRAL_DIRECTORY_END);
        this.readBlockEndOfCentral();
        if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
          this.zip64 = true;
          offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
          if (offset === -1) {
            throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
          }
          this.reader.setIndex(offset);
          this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
          this.readBlockZip64EndOfCentralLocator();
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
          this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
          this.readBlockZip64EndOfCentral();
        }
      },
      prepareReader: function(data) {
        var type = utils.getTypeOf(data);
        if (type === "string" && !support.uint8array) {
          this.reader = new StringReader(data, this.loadOptions.optimizedBinaryString);
        } else if (type === "nodebuffer") {
          this.reader = new NodeBufferReader(data);
        } else {
          this.reader = new Uint8ArrayReader(utils.transformTo("uint8array", data));
        }
      },
      load: function(data) {
        this.prepareReader(data);
        this.readEndOfCentral();
        this.readCentralDir();
        this.readLocalFiles();
      }
    };
    module.exports = ZipEntries;
  })(require("github:jspm/nodelibs-buffer@0.1.0").Buffer);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/load", ["npm:jszip@2.5.0/lib/base64", "npm:jszip@2.5.0/lib/zipEntries"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var base64 = require("npm:jszip@2.5.0/lib/base64");
  var ZipEntries = require("npm:jszip@2.5.0/lib/zipEntries");
  module.exports = function(data, options) {
    var files,
        zipEntries,
        i,
        input;
    options = options || {};
    if (options.base64) {
      data = base64.decode(data);
    }
    zipEntries = new ZipEntries(data, options);
    files = zipEntries.files;
    for (i = 0; i < files.length; i++) {
      input = files[i];
      this.file(input.fileName, input.decompressed, {
        binary: true,
        optimizedBinaryString: true,
        date: input.date,
        dir: input.dir,
        comment: input.fileComment.length ? input.fileComment : null,
        unixPermissions: input.unixPermissions,
        dosPermissions: input.dosPermissions,
        createFolders: options.createFolders
      });
    }
    if (zipEntries.zipComment.length) {
      this.comment = zipEntries.zipComment;
    }
    return this;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/deprecatedPublicUtils", ["npm:jszip@2.5.0/lib/utils"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var utils = require("npm:jszip@2.5.0/lib/utils");
  exports.string2binary = function(str) {
    return utils.string2binary(str);
  };
  exports.string2Uint8Array = function(str) {
    return utils.transformTo("uint8array", str);
  };
  exports.uint8Array2String = function(array) {
    return utils.transformTo("string", array);
  };
  exports.string2Blob = function(str) {
    var buffer = utils.transformTo("arraybuffer", str);
    return utils.arrayBuffer2Blob(buffer);
  };
  exports.arrayBuffer2Blob = function(buffer) {
    return utils.arrayBuffer2Blob(buffer);
  };
  exports.transformTo = function(outputType, input) {
    return utils.transformTo(outputType, input);
  };
  exports.getTypeOf = function(input) {
    return utils.getTypeOf(input);
  };
  exports.checkSupport = function(type) {
    return utils.checkSupport(type);
  };
  exports.MAX_VALUE_16BITS = utils.MAX_VALUE_16BITS;
  exports.MAX_VALUE_32BITS = utils.MAX_VALUE_32BITS;
  exports.pretty = function(str) {
    return utils.pretty(str);
  };
  exports.findCompression = function(compressionMethod) {
    return utils.findCompression(compressionMethod);
  };
  exports.isRegExp = function(object) {
    return utils.isRegExp(object);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0/lib/index", ["npm:jszip@2.5.0/lib/base64", "npm:jszip@2.5.0/lib/object", "npm:jszip@2.5.0/lib/load", "npm:jszip@2.5.0/lib/support", "npm:jszip@2.5.0/lib/defaults", "npm:jszip@2.5.0/lib/deprecatedPublicUtils", "npm:jszip@2.5.0/lib/compressions"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var base64 = require("npm:jszip@2.5.0/lib/base64");
  function JSZip(data, options) {
    if (!(this instanceof JSZip))
      return new JSZip(data, options);
    this.files = {};
    this.comment = null;
    this.root = "";
    if (data) {
      this.load(data, options);
    }
    this.clone = function() {
      var newObj = new JSZip();
      for (var i in this) {
        if (typeof this[i] !== "function") {
          newObj[i] = this[i];
        }
      }
      return newObj;
    };
  }
  JSZip.prototype = require("npm:jszip@2.5.0/lib/object");
  JSZip.prototype.load = require("npm:jszip@2.5.0/lib/load");
  JSZip.support = require("npm:jszip@2.5.0/lib/support");
  JSZip.defaults = require("npm:jszip@2.5.0/lib/defaults");
  JSZip.utils = require("npm:jszip@2.5.0/lib/deprecatedPublicUtils");
  JSZip.base64 = {
    encode: function(input) {
      return base64.encode(input);
    },
    decode: function(input) {
      return base64.decode(input);
    }
  };
  JSZip.compressions = require("npm:jszip@2.5.0/lib/compressions");
  module.exports = JSZip;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jszip@2.5.0", ["npm:jszip@2.5.0/lib/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:jszip@2.5.0/lib/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:gametime-nointro@1.1.1/nointro", ["github:jspm/nodelibs-url@0.1.0", "github:jspm/nodelibs-path@0.1.0", "npm:hctef@0.3.2", "npm:jszip@2.5.0"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function() {
    var JSZip,
        consoles,
        fetch,
        getROM,
        getURL,
        hasROM,
        path,
        url;
    url = require("github:jspm/nodelibs-url@0.1.0");
    path = require("github:jspm/nodelibs-path@0.1.0");
    fetch = require("npm:hctef@0.3.2");
    JSZip = require("npm:jszip@2.5.0");
    consoles = {
      '32X': 'Sega - 32X',
      '5200': 'Atari - 5200',
      '7800': 'Atari - 7800',
      'ColecoVision': 'Coleco - ColecoVision',
      'FDS': 'Nintendo - Famicom Disk System',
      'GB': 'Nintendo - Game Boy',
      'GBC': 'Nintendo - Game Boy Color',
      'GBA': 'Nintendo - Game Boy Advance',
      'GG': 'Sega - Game Gear',
      'Jaguar': 'Atari - Jaguar',
      'Lynx': 'Atari - Lynx',
      'MD': 'Sega - Mega Drive - Genesis',
      'N64': 'Nintendo - Nintendo 64',
      'NES': 'Nintendo - Nintendo Entertainment System',
      'NGP': 'SNK - Neo Geo Pocket',
      'NGPC': 'SNK - Neo Geo Pocket Color',
      'PCE': 'NEC - PCE Engine - TurboGrafx 16',
      'SG1000': 'Sega - SG 1000',
      'SMS': 'Sega - Master System - Mark III',
      'SNES': 'Nintendo - Super Nintendo Entertainment System',
      'SuperGrafx': 'NEC - Super Grafx',
      'VB': 'Nintendo - Virtual Boy',
      'Vectrex': 'GCE - Vectrex',
      'WonderSwan': 'Bandai - WonderSwan',
      'WonderSwan Color': 'Bandai - WonderSwan Color',
      'PCECD': 'NEC - PC Engine - TurboGrafx 16',
      'Odyssey2': 'Magnavox - Odyssey2'
    };
    getURL = function(game, date) {
      var collection,
          console;
      if (date == null) {
        date = '2015-03-03';
      }
      collection = "No-Intro-Collection_" + date;
      console = consoles[game.systemShortName];
      return 'https://crossorigin.herokuapp.com/' + url.format({
        protocol: 'https',
        hostname: 'ia800500.us.archive.org',
        pathname: "zipview.php",
        query: {
          zip: "/33/items/" + collection + "/" + console + ".zip",
          file: console + "/" + game.romExtensionlessFileName + ".zip"
        }
      });
    };
    getROM = function(game) {
      return fetch(getURL(game)).then(function(res) {
        return res.arrayBuffer();
      }).then(function(data) {
        var file,
            zip;
        zip = new JSZip(data);
        file = zip.file(game.romFileName);
        if (file === null) {
          throw new Error('Cannot find rom.');
        }
        return file.asArrayBuffer();
      });
    };
    hasROM = function(rom) {
      return new Promise(function(resolve, reject) {
        return resolve(true);
      });
    };
    module.exports = {
      getURL: getURL,
      getROM: getROM,
      hasROM: hasROM
    };
  }).call(this);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:gametime-nointro@1.1.1", ["npm:gametime-nointro@1.1.1/nointro"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:gametime-nointro@1.1.1/nointro");
  global.define = __define;
  return module.exports;
});

System.register('game-view.js', ['npm:babel-runtime@5.8.25/helpers/get', 'npm:babel-runtime@5.8.25/helpers/inherits', 'npm:babel-runtime@5.8.25/helpers/create-class', 'npm:babel-runtime@5.8.25/helpers/class-call-check', 'github:jspm/nodelibs-querystring@0.1.0'], function (_export) {
  var _get, _inherits, _createClass, _classCallCheck, querystring;

  return {
    setters: [function (_npmBabelRuntime5825HelpersGet) {
      _get = _npmBabelRuntime5825HelpersGet['default'];
    }, function (_npmBabelRuntime5825HelpersInherits) {
      _inherits = _npmBabelRuntime5825HelpersInherits['default'];
    }, function (_npmBabelRuntime5825HelpersCreateClass) {
      _createClass = _npmBabelRuntime5825HelpersCreateClass['default'];
    }, function (_npmBabelRuntime5825HelpersClassCallCheck) {
      _classCallCheck = _npmBabelRuntime5825HelpersClassCallCheck['default'];
    }, function (_githubJspmNodelibsQuerystring010) {
      querystring = _githubJspmNodelibsQuerystring010['default'];
    }],
    execute: function () {
      'use strict';

      _export('default', document.registerElement('x-game', (function (_HTMLElement) {
        _inherits(_class, _HTMLElement);

        function _class() {
          _classCallCheck(this, _class);

          _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(_class, [{
          key: 'attachedCallback',
          value: function attachedCallback() {
            this.classList.add('card');
            this.setAttribute('href', 'play?' + querystring.stringify(this.game));
            this.addEventListener('click', (function () {
              location.href = this.getAttribute('href');
            }).bind(this));

            var cover = document.createElement('img');
            cover.classList.add('cover');
            cover.setAttribute('src', this.game.releaseCoverFront);
            this.appendChild(cover);

            var title = document.createElement('span');
            title.classList.add('title');
            title.textContent = this.game.releaseTitleName;
            this.appendChild(title);
          }
        }]);

        return _class;
      })(HTMLElement)));
    }
  };
});
System.register('games-view.js', ['npm:babel-runtime@5.8.25/helpers/get', 'npm:babel-runtime@5.8.25/helpers/inherits', 'npm:babel-runtime@5.8.25/helpers/create-class', 'npm:babel-runtime@5.8.25/helpers/class-call-check', 'game-view.js', 'games-view.css!github:systemjs/plugin-css@0.1.17'], function (_export) {
  var _get, _inherits, _createClass, _classCallCheck, GameView;

  return {
    setters: [function (_npmBabelRuntime5825HelpersGet) {
      _get = _npmBabelRuntime5825HelpersGet['default'];
    }, function (_npmBabelRuntime5825HelpersInherits) {
      _inherits = _npmBabelRuntime5825HelpersInherits['default'];
    }, function (_npmBabelRuntime5825HelpersCreateClass) {
      _createClass = _npmBabelRuntime5825HelpersCreateClass['default'];
    }, function (_npmBabelRuntime5825HelpersClassCallCheck) {
      _classCallCheck = _npmBabelRuntime5825HelpersClassCallCheck['default'];
    }, function (_gameViewJs) {
      GameView = _gameViewJs['default'];
    }, function (_gamesViewCssGithubSystemjsPluginCss0117) {}],
    execute: function () {
      'use strict';

      _export('default', document.registerElement('x-games', (function (_HTMLElement) {
        _inherits(_class, _HTMLElement);

        function _class() {
          _classCallCheck(this, _class);

          _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(_class, [{
          key: 'attachedCallback',
          value: function attachedCallback() {
            this.classList.add('cards');
          }
        }]);

        return _class;
      })(HTMLElement)));
    }
  };
});
System.register('index.js', ['npm:openvgdb@1.0.0', 'games-view.js'], function (_export) {
  'use strict';

  var games, GamesView, gamesView;
  return {
    setters: [function (_npmOpenvgdb100) {
      games = _npmOpenvgdb100['default'];
    }, function (_gamesViewJs) {
      GamesView = _gamesViewJs['default'];
    }],
    execute: function () {

      if (navigator.serviceWorker) navigator.serviceWorker.register('worker.js');

      gamesView = new GamesView();

      games.filter(function (game) {
        return game.systemShortName === 'SNES' && game.releaseCoverFront && game.releaseDescription;
      }).forEach(function (game) {
        var view = new GameView();
        view.game = game;
        gamesView.appendChild(view);
      });
      document.body.appendChild(view);
    }
  };
});
System.register('github:matthewbauer/window@0.0.3/window', ['github:mohayonao/web-audio-api-shim@0.3.0'], function (_export) {
	'use strict';

	var __global, JSON, Math, Reflect, encodeURIComponent, encodeURI, decodeURIComponent, decodeURI, parseInt, parseFloat, isNaN, isFinite, ArrayBuffer, DataView, Error, EvalError, Float32Array, Float64Array, Int8Array, Int16Array, Int32Array, Map, Proxy, Promise, RangeError, ReferenceError, Set, Symbol, SyntaxError, TypeError, Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array, URIError, WeakMap, WeakSet, navigator, document, history, location, external, requestAnimationFrame, cancelAnimationFrame, applicationCache, postMessage, setTimeout, clearTimeout, setInterval, clearInterval, btoa, atob, sessionStorage, localStorage, URL, URLSearchParams, XMLHttpRequest, FormData, Notification, FileReader, Blob, File, FileList, Gamepad, GamepadEvent, GamepadButton, AudioContext, AudioBuffer, fetch, Body, Request, Response, Headers, HTMLCanvasElement;

	function fill(name) {
		if (__global[name]) {
			return __global[name];
		}
	}

	/*
 	http://www.ecma-international.org/ecma-262/6.0/#sec-global-object
 */
	return {
		setters: [function (_githubMohayonaoWebAudioApiShim030) {}],
		execute: function () {
			__global = undefined;

			if (typeof window !== 'undefined') {
				__global = window;
			} else if (typeof global !== 'undefined') {
				__global = global;
			} else if (typeof self !== 'undefined') {
				__global = self;
			} else if (typeof undefined !== 'undefined') {
				__global = undefined;
			} else {
				__global = {};
			}

			JSON = fill('JSON');
			Math = fill('Math');
			Reflect = fill('Reflect');

			_export('JSON', JSON);

			_export('Math', Math);

			_export('Reflect', Reflect);

			encodeURIComponent = fill('encodeURIComponent');
			encodeURI = fill('encodeURI');
			decodeURIComponent = fill('decodeURIComponent');
			decodeURI = fill('decodeURI');
			parseInt = fill('parseInt');
			parseFloat = fill('parseFloat');
			isNaN = fill('isNaN');
			isFinite = fill('isFinite');

			_export('encodeURIComponent', encodeURIComponent);

			_export('encodeURI', encodeURI);

			_export('decodeURIComponent', decodeURIComponent);

			_export('decodeURI', decodeURI);

			_export('parseInt', parseInt);

			_export('parseFloat', parseFloat);

			_export('isNaN', isNaN);

			_export('isFinite', isFinite);

			ArrayBuffer = fill('ArrayBuffer');
			DataView = fill('DataView');
			Error = fill('Error');
			EvalError = fill('EvalError');
			Float32Array = fill('Float32Array');
			Float64Array = fill('Float64Array');
			Int8Array = fill('Int8Array');
			Int16Array = fill('Int16Array');
			Int32Array = fill('Int32Array');
			Map = fill('Map');
			Proxy = fill('Proxy');
			Promise = fill('Promise');
			RangeError = fill('RangeError');
			ReferenceError = fill('ReferenceError');
			Set = fill('Set');
			Symbol = fill('Symbol');
			SyntaxError = fill('SyntaxError');
			TypeError = fill('TypeError');
			Uint8Array = fill('Uint8Array');
			Uint8ClampedArray = fill('Uint8ClampedArray');
			Uint16Array = fill('Uint16Array');
			Uint32Array = fill('Uint32Array');
			URIError = fill('URIError');
			WeakMap = fill('WeakMap');
			WeakSet = fill('WeakSet');

			_export('ArrayBuffer', ArrayBuffer);

			_export('DataView', DataView);

			_export('Error', Error);

			_export('EvalError', EvalError);

			_export('Float32Array', Float32Array);

			_export('Float64Array', Float64Array);

			_export('Int8Array', Int8Array);

			_export('Int16Array', Int16Array);

			_export('Int32Array', Int32Array);

			_export('Map', Map);

			_export('Proxy', Proxy);

			_export('Promise', Promise);

			_export('RangeError', RangeError);

			_export('ReferenceError', ReferenceError);

			_export('Set', Set);

			_export('Symbol', Symbol);

			_export('SyntaxError', SyntaxError);

			_export('TypeError', TypeError);

			_export('Uint8Array', Uint8Array);

			_export('Uint8ClampedArray', Uint8ClampedArray);

			_export('Uint16Array', Uint16Array);

			_export('Uint32Array', Uint32Array);

			_export('URIError', URIError);

			_export('WeakMap', WeakMap);

			_export('WeakSet', WeakSet);

			/*
   	https://html.spec.whatwg.org/#window
   */
			navigator = fill('navigator');
			document = fill('document');
			history = fill('history');
			location = fill('location');
			external = fill('external');
			requestAnimationFrame = fill('requestAnimationFrame');
			cancelAnimationFrame = fill('cancelAnimationFrame');
			applicationCache = fill('applicationCache');
			postMessage = fill('postMessage');

			_export('navigator', navigator);

			_export('document', document);

			_export('history', history);

			_export('location', location);

			_export('external', external);

			_export('requestAnimationFrame', requestAnimationFrame);

			_export('cancelAnimationFrame', cancelAnimationFrame);

			_export('applicationCache', applicationCache);

			_export('postMessage', postMessage);

			/*
   	https://html.spec.whatwg.org/#windowtimers
   */
			setTimeout = fill('setTimeout');
			clearTimeout = fill('clearTimeout');
			setInterval = fill('setInterval');
			clearInterval = fill('clearInterval');

			_export('setTimeout', setTimeout);

			_export('clearTimeout', clearTimeout);

			_export('setInterval', setInterval);

			_export('clearInterval', clearInterval);

			/*
   	https://html.spec.whatwg.org/#windowbase64
   */
			btoa = fill('btoa');
			atob = fill('atob');

			_export('btoa', btoa);

			_export('atob', atob);

			/*
   	https://w3c.github.io/webstorage/
   */
			sessionStorage = fill('sessionStorage');
			localStorage = fill('localStorage');

			_export('sessionStorage', sessionStorage);

			_export('localStorage', localStorage);

			/*
   	https://url.spec.whatwg.org/
   */
			URL = fill('URL');
			URLSearchParams = fill('URLSearchParams');

			_export('URL', URL);

			_export('URLSearchParams', URLSearchParams);

			/*
   	https://xhr.spec.whatwg.org/
   */
			XMLHttpRequest = fill('XMLHttpRequest');
			FormData = fill('FormData');

			_export('XMLHttpRequest', XMLHttpRequest);

			_export('FormData', FormData);

			/*
   	https://notifications.spec.whatwg.org/
   */
			Notification = fill('Notification');

			_export('Notification', Notification);

			/*
   	https://w3c.github.io/FileAPI/
   */
			FileReader = fill('FileReader');
			Blob = fill('Blob');
			File = fill('File');
			FileList = fill('FileList');

			_export('FileReader', FileReader);

			_export('Blob', Blob);

			_export('File', File);

			_export('FileList', FileList);

			/*
   	https://w3c.github.io/gamepad/
   */
			Gamepad = fill('Gamepad');
			GamepadEvent = fill('GamepadEvent');
			GamepadButton = fill('GamepadButton');

			_export('Gamepad', Gamepad);

			_export('GamepadEvent', GamepadEvent);

			_export('GamepadButton', GamepadButton);

			/*
   	http://webaudio.github.io/web-audio-api/
   */
			AudioContext = fill('AudioContext');
			AudioBuffer = fill('AudioBuffer');

			_export('AudioContext', AudioContext);

			_export('AudioBuffer', AudioBuffer);

			fetch = fill('fetch');
			Body = fill('Body');
			Request = fill('Request');
			Response = fill('Response');
			Headers = fill('Headers');

			_export('fetch', fetch);

			_export('Body', Body);

			_export('Request', Request);

			_export('Response', Response);

			_export('Headers', Headers);

			HTMLCanvasElement = fill('HTMLCanvasElement');

			_export('HTMLCanvasElement', HTMLCanvasElement);

			_export('default', __global);
		}
	};
});
System.register("github:matthewbauer/window@0.0.3", ["github:matthewbauer/window@0.0.3/window"], function (_export) {
  "use strict";

  return {
    setters: [function (_githubMatthewbauerWindow003Window) {
      var _exportObj = {};

      for (var _key in _githubMatthewbauerWindow003Window) {
        if (_key !== "default") _exportObj[_key] = _githubMatthewbauerWindow003Window[_key];
      }

      _exportObj["default"] = _githubMatthewbauerWindow003Window["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});
System.register('github:matthewbauer/document@0.0.4/document', ['github:webcomponents/webcomponentsjs@0.7.12'], function (_export) {
	'use strict';

	var __global, registerElement;

	function fill(name) {
		if (__global[name]) {
			return __global[name].bind(__global);
		}
	}

	return {
		setters: [function (_githubWebcomponentsWebcomponentsjs0712) {}],
		execute: function () {
			__global = undefined;

			if (typeof window !== 'undefined') {
				__global = window.document;
			} else {
				__global = {};
			}

			registerElement = fill('registerElement');

			_export('registerElement', registerElement);

			_export('default', __global);
		}
	};
});
System.register("github:matthewbauer/document@0.0.4", ["github:matthewbauer/document@0.0.4/document"], function (_export) {
  "use strict";

  return {
    setters: [function (_githubMatthewbauerDocument004Document) {
      var _exportObj = {};

      for (var _key in _githubMatthewbauerDocument004Document) {
        if (_key !== "default") _exportObj[_key] = _githubMatthewbauerDocument004Document[_key];
      }

      _exportObj["default"] = _githubMatthewbauerDocument004Document["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});
System.register('github:matthewbauer/x-retro@master/x-retro', ['npm:babel-runtime@5.8.25/core-js/object/create', 'github:matthewbauer/window@0.0.3', 'github:matthewbauer/document@0.0.4', 'github:matthewbauer/x-retro@master/player.coffee!github:forresto/system-coffee@0.1.2'], function (_export) {
  var _Object$create, AudioContext, HTMLCanvasElement, registerElement, Player, PlayerElement;

  return {
    setters: [function (_npmBabelRuntime5825CoreJsObjectCreate) {
      _Object$create = _npmBabelRuntime5825CoreJsObjectCreate['default'];
    }, function (_githubMatthewbauerWindow003) {
      AudioContext = _githubMatthewbauerWindow003.AudioContext;
      HTMLCanvasElement = _githubMatthewbauerWindow003.HTMLCanvasElement;
    }, function (_githubMatthewbauerDocument004) {
      registerElement = _githubMatthewbauerDocument004.registerElement;
    }, function (_githubMatthewbauerXRetroMasterPlayerCoffeeGithubForrestoSystemCoffee012) {
      Player = _githubMatthewbauerXRetroMasterPlayerCoffeeGithubForrestoSystemCoffee012['default'];
    }],
    execute: function () {
      'use strict';

      PlayerElement = _Object$create(HTMLCanvasElement.prototype);

      PlayerElement.inputs = [];
      PlayerElement.attachedCallback = function () {
        if (this.hasAttribute('core')) {
          System['import'](this.getAttribute('core')).then((function (core) {
            this.core = core;
          }).bind(this)).then((function () {
            if (this.hasAttribute('src')) {
              return System['import'](this.getAttribute('src') + '!raw').then((function (rom) {
                this.game = new Uint8Array(rom);
                if (this.hasAttribute('save')) {
                  return System['import'](this.getAttribute('save') + '!raw').then((function (save) {
                    this.save = save;
                  }).bind(this));
                }
              }).bind(this));
            }
          }).bind(this)).then((function () {
            if (this.hasAttribute('autostart')) {
              this.start();
            }
          }).bind(this));
        }
      };

      Object.defineProperty(PlayerElement, 'core', {
        set: function set(core) {
          this.player = new Player(this.getContext('webgl') || this.getContext('experimental-webgl'), new AudioContext(), this.inputs, core);
        },
        get: function get() {
          return this.player.core;
        }
      });

      Object.defineProperty(PlayerElement, 'game', {
        set: function set(game) {
          this.player.game = game;
          this.core.load_game(game);
        },
        get: function get() {
          return this.player.game;
        }
      });

      Object.defineProperty(PlayerElement, 'save', {
        set: function set(data) {
          this.core.unserialize(data);
        },
        get: function get() {
          return this.core.serialize();
        }
      });

      PlayerElement.start = function () {
        this.running = true;
        this.player.start();
      };

      PlayerElement.stop = function () {
        this.running = false;
        this.player.stop();
      };

      _export('default', registerElement('x-retro', {
        prototype: PlayerElement,
        'extends': 'canvas'
      }));
    }
  };
});
System.register("github:matthewbauer/x-retro@master", ["github:matthewbauer/x-retro@master/x-retro"], function (_export) {
  "use strict";

  return {
    setters: [function (_githubMatthewbauerXRetroMasterXRetro) {
      var _exportObj = {};

      for (var _key in _githubMatthewbauerXRetroMasterXRetro) {
        if (_key !== "default") _exportObj[_key] = _githubMatthewbauerXRetroMasterXRetro[_key];
      }

      _exportObj["default"] = _githubMatthewbauerXRetroMasterXRetro["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});
System.register('play.js', ['npm:babel-runtime@5.8.25/helpers/sliced-to-array', 'npm:babel-runtime@5.8.25/core-js/promise', 'play.css!github:systemjs/plugin-css@0.1.17', 'github:jspm/nodelibs-querystring@0.1.0', 'github:matthewbauer/x-retro@master', 'npm:gametime-nointro@1.1.1'], function (_export) {
  var _slicedToArray, _Promise, querystring, retro, nointro;

  function getCore(game) {
    return System['import'](({
      '32X': 'picodrive',
      '5200': 'mess',
      '7800': 'prosystem',
      'ColecoVision': 'colem',
      'FDS': 'snes9x-next',
      'GB': 'gambatte',
      'GBC': 'gambatte',
      'GBA': 'vba-next',
      'GG': 'picodrive',
      'Jaguar': 'virtualjaguar',
      'Lynx': 'handy',
      'MD': 'picodrive',
      'N64': 'mupen64plus',
      'NES': 'nestopia',
      'NGP': 'mame',
      'NGPC': 'mame',
      'PCE': 'pcejin',
      'SG1000': 'picodrive',
      'SMS': 'picodrive',
      'SNES': 'snes9x-next',
      'SuperGrafx': 'pcejin',
      'VB': 'vba-next',
      'Vectrex': 'vecx',
      'WonderSwan': 'oswan',
      'WonderSwan Color': 'oswan',
      'MAME': 'mame',
      'PSX': 'pcsx',
      'SCD': 'picodrive',
      'Saturn': 'yabause',
      'PCECD': 'pcejin',
      'PSP': 'ppsspp',
      'NDS': 'desmume',
      '2600': 'mess',
      'Odyssey2': 'o2em',
      'Intellivision': 'nostalgia'
    })[game.systemShortName]);
  }

  function play(game) {
    return _Promise.all([nointro.getROM(game), getCore(game)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2);

      var buffer = _ref2[0];
      var core = _ref2[1];

      var player = document.createElement('canvas', 'x-retro');
      player.md5 = game.romHashMD5;
      player.inputs = [];
      player.core = core;
      player.game = new Uint8Array(buffer);
      document.body.appendChild(player);
      player.start();
    });
  }

  return {
    setters: [function (_npmBabelRuntime5825HelpersSlicedToArray) {
      _slicedToArray = _npmBabelRuntime5825HelpersSlicedToArray['default'];
    }, function (_npmBabelRuntime5825CoreJsPromise) {
      _Promise = _npmBabelRuntime5825CoreJsPromise['default'];
    }, function (_playCssGithubSystemjsPluginCss0117) {}, function (_githubJspmNodelibsQuerystring010) {
      querystring = _githubJspmNodelibsQuerystring010['default'];
    }, function (_githubMatthewbauerXRetroMaster) {
      retro = _githubMatthewbauerXRetroMaster['default'];
    }, function (_npmGametimeNointro111) {
      nointro = _npmGametimeNointro111['default'];
    }],
    execute: function () {
      'use strict';

      play(querystring.parse(location.search.substr(1)));
    }
  };
});
System.register('games-view.css!github:systemjs/plugin-css@0.1.17', [], false, function() {});
System.register('play.css!github:systemjs/plugin-css@0.1.17', [], false, function() {});
(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
("body,html{margin:0;padding:0;width:100%;height:100%;background-color:#232323;cursor:default}.cards{list-style-type:none}.card{margin:10px;width:200px;display:inline-block}.selected .cover{border:2px solid #00f}.card .cover{width:200px;height:200px;border-radius:4px;box-shadow:0 0 10px;cursor:pointer}.card .hidden{display:none}.card .title{text-overflow:ellipsis;color:#fff;height:32px;margin:6px 0 4px}body,canvas,html{margin:0;padding:0;width:100%;height:100%}");
//# sourceMappingURL=build.js.map