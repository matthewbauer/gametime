System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "npm:snes9x-next@0.7.5",
      "npm:snes9x-next@0.7.5/retro",
      "npm:snes9x-next@0.7.5/core",
      "play.js",
      "github:jspm/nodelibs-querystring@0.1.0",
      "github:jspm/nodelibs-querystring@0.1.0/index",
      "npm:querystring@0.2.0",
      "npm:querystring@0.2.0/index",
      "npm:querystring@0.2.0/decode",
      "npm:querystring@0.2.0/encode",
      "play.css!github:systemjs/plugin-css@0.1.18",
      "npm:gametime-nointro@1.1.1",
      "github:matthewbauer/x-game@1.1.2",
      "npm:localforage@1.2.10",
      "npm:babel-runtime@5.8.25/helpers/sliced-to-array",
      "npm:babel-runtime@5.8.25/core-js/promise",
      "github:matthewbauer/x-game@1.1.2/x-retro",
      "npm:localforage@1.2.10/src/localforage",
      "npm:babel-runtime@5.8.25/core-js/get-iterator",
      "npm:gametime-nointro@1.1.1/nointro",
      "npm:core-js@1.2.0/library/fn/promise",
      "npm:babel-runtime@5.8.25/core-js/is-iterable",
      "github:matthewbauer/window@0.0.3",
      "github:matthewbauer/document@0.0.4",
      "npm:babel-runtime@5.8.25/core-js/object/create",
      "npm:promise@5.0.0",
      "npm:localforage@1.2.10/src/drivers/indexeddb",
      "npm:localforage@1.2.10/src/drivers/localstorage",
      "npm:core-js@1.2.0/library/fn/get-iterator",
      "github:jspm/nodelibs-url@0.1.0",
      "npm:localforage@1.2.10/src/drivers/websql",
      "github:jspm/nodelibs-path@0.1.0",
      "npm:hctef@0.3.3",
      "npm:jszip@2.5.0",
      "npm:core-js@1.2.0/library/modules/es6.object.to-string",
      "npm:core-js@1.2.0/library/modules/es6.string.iterator",
      "npm:core-js@1.2.0/library/modules/web.dom.iterable",
      "npm:core-js@1.2.0/library/modules/es6.promise",
      "npm:core-js@1.2.0/library/modules/$.core",
      "npm:core-js@1.2.0/library/fn/is-iterable",
      "github:matthewbauer/window@0.0.3/window",
      "npm:core-js@1.2.0/library/fn/object/create",
      "github:matthewbauer/document@0.0.4/document",
      "npm:promise@5.0.0/index",
      "npm:localforage@1.2.10/src/utils/serializer",
      "npm:core-js@1.2.0/library/modules/core.get-iterator",
      "npm:hctef@0.3.3/fetch",
      "github:jspm/nodelibs-path@0.1.0/index",
      "github:jspm/nodelibs-url@0.1.0/index",
      "npm:jszip@2.5.0/lib/index",
      "npm:core-js@1.2.0/library/modules/$.string-at",
      "npm:core-js@1.2.0/library/modules/$.iter-define",
      "npm:core-js@1.2.0/library/modules/es6.array.iterator",
      "npm:core-js@1.2.0/library/modules/$.iterators",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:core-js@1.2.0/library/modules/$",
      "npm:core-js@1.2.0/library/modules/$.library",
      "npm:core-js@1.2.0/library/modules/$.global",
      "npm:core-js@1.2.0/library/modules/$.ctx",
      "npm:core-js@1.2.0/library/modules/$.classof",
      "npm:core-js@1.2.0/library/modules/$.def",
      "npm:core-js@1.2.0/library/modules/$.is-object",
      "npm:core-js@1.2.0/library/modules/$.an-object",
      "npm:core-js@1.2.0/library/modules/$.a-function",
      "npm:core-js@1.2.0/library/modules/$.strict-new",
      "npm:core-js@1.2.0/library/modules/$.for-of",
      "npm:core-js@1.2.0/library/modules/$.set-proto",
      "npm:core-js@1.2.0/library/modules/$.same",
      "npm:core-js@1.2.0/library/modules/$.species",
      "npm:core-js@1.2.0/library/modules/$.wks",
      "npm:core-js@1.2.0/library/modules/$.uid",
      "npm:core-js@1.2.0/library/modules/$.microtask",
      "npm:core-js@1.2.0/library/modules/$.support-desc",
      "npm:core-js@1.2.0/library/modules/$.mix",
      "npm:core-js@1.2.0/library/modules/$.tag",
      "npm:core-js@1.2.0/library/modules/core.is-iterable",
      "npm:core-js@1.2.0/library/modules/$.iter-detect",
      "github:mohayonao/web-audio-api-shim@0.3.0",
      "github:webcomponents/webcomponentsjs@0.7.13",
      "npm:promise@5.0.0/core",
      "npm:asap@1.0.0",
      "npm:core-js@1.2.0/library/modules/core.get-iterator-method",
      "npm:detect-node@2.0.3",
      "npm:hctef@0.3.3/request",
      "npm:hctef@0.3.3/fetch-xhr",
      "npm:hctef@0.3.3/fetch-node",
      "npm:path-browserify@0.0.0",
      "npm:url@0.10.3",
      "npm:jszip@2.5.0/lib/object",
      "npm:jszip@2.5.0/lib/base64",
      "npm:jszip@2.5.0/lib/load",
      "npm:jszip@2.5.0/lib/support",
      "npm:jszip@2.5.0/lib/defaults",
      "npm:jszip@2.5.0/lib/deprecatedPublicUtils",
      "npm:jszip@2.5.0/lib/compressions",
      "npm:core-js@1.2.0/library/modules/$.to-integer",
      "npm:core-js@1.2.0/library/modules/$.defined",
      "npm:core-js@1.2.0/library/modules/$.redef",
      "npm:core-js@1.2.0/library/modules/$.hide",
      "npm:core-js@1.2.0/library/modules/$.has",
      "npm:core-js@1.2.0/library/modules/$.iter-create",
      "npm:core-js@1.2.0/library/modules/$.unscope",
      "npm:core-js@1.2.0/library/modules/$.iter-step",
      "npm:core-js@1.2.0/library/modules/$.to-iobject",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:core-js@1.2.0/library/modules/$.cof",
      "npm:core-js@1.2.0/library/modules/$.iter-call",
      "npm:core-js@1.2.0/library/modules/$.is-array-iter",
      "npm:core-js@1.2.0/library/modules/$.shared",
      "npm:core-js@1.2.0/library/modules/$.to-length",
      "npm:core-js@1.2.0/library/modules/$.task",
      "npm:core-js@1.2.0/library/modules/$.fails",
      "github:mohayonao/web-audio-api-shim@0.3.0/build/web-audio-api-shim",
      "npm:asap@1.0.0/asap",
      "github:matthewbauer/x-game@1.1.2/player.coffee!github:forresto/system-coffee@0.1.2",
      "npm:detect-node@2.0.3/index",
      "npm:hctef@0.3.3/body",
      "npm:hctef@0.3.3/response",
      "github:jspm/nodelibs-https@0.1.0",
      "npm:hctef@0.3.3/headers",
      "github:webcomponents/webcomponentsjs@0.7.13/webcomponents",
      "github:jspm/nodelibs-http@1.7.1",
      "github:jspm/nodelibs-fs@0.1.2",
      "npm:path-browserify@0.0.0/index",
      "npm:url@0.10.3/url",
      "github:jspm/nodelibs-buffer@0.1.0",
      "npm:jszip@2.5.0/lib/utils",
      "npm:jszip@2.5.0/lib/crc32",
      "npm:jszip@2.5.0/lib/signature",
      "npm:jszip@2.5.0/lib/compressedObject",
      "npm:jszip@2.5.0/lib/stringWriter",
      "npm:jszip@2.5.0/lib/utf8",
      "npm:jszip@2.5.0/lib/nodeBuffer",
      "npm:jszip@2.5.0/lib/uint8ArrayWriter",
      "npm:jszip@2.5.0/lib/zipEntries",
      "npm:jszip@2.5.0/lib/flate",
      "npm:core-js@1.2.0/library/modules/$.property-desc",
      "npm:core-js@1.2.0/library/modules/$.iobject",
      "npm:process@0.10.1",
      "npm:core-js@1.2.0/library/modules/$.invoke",
      "npm:core-js@1.2.0/library/modules/$.html",
      "npm:core-js@1.2.0/library/modules/$.dom-create",
      "github:jspm/nodelibs-https@0.1.0/index",
      "github:jspm/nodelibs-http@1.7.1/index",
      "github:jspm/nodelibs-fs@0.1.2/index",
      "npm:punycode@1.3.2",
      "github:jspm/nodelibs-buffer@0.1.0/index",
      "npm:jszip@2.5.0/lib/stringReader",
      "npm:jszip@2.5.0/lib/nodeBufferReader",
      "npm:jszip@2.5.0/lib/uint8ArrayReader",
      "npm:jszip@2.5.0/lib/zipEntry",
      "npm:pako@0.2.8",
      "npm:process@0.10.1/browser",
      "npm:https-browserify@0.0.0",
      "github:jspm/nodelibs-http@1.7.1/lib/request",
      "github:jspm/nodelibs-events@0.1.1",
      "npm:punycode@1.3.2/punycode",
      "npm:buffer@3.5.0",
      "npm:jszip@2.5.0/lib/dataReader",
      "npm:pako@0.2.8/index",
      "npm:https-browserify@0.0.0/index",
      "github:jspm/nodelibs-stream@0.1.0",
      "npm:Base64@0.2.1",
      "npm:inherits@2.0.1",
      "github:jspm/nodelibs-http@1.7.1/lib/response",
      "github:jspm/nodelibs-events@0.1.1/index",
      "npm:buffer@3.5.0/index",
      "npm:pako@0.2.8/lib/utils/common",
      "npm:pako@0.2.8/lib/deflate",
      "npm:pako@0.2.8/lib/inflate",
      "npm:pako@0.2.8/lib/zlib/constants",
      "github:jspm/nodelibs-stream@0.1.0/index",
      "npm:Base64@0.2.1/base64",
      "npm:inherits@2.0.1/inherits_browser",
      "github:jspm/nodelibs-util@0.1.0",
      "npm:base64-js@0.0.8",
      "npm:events@1.0.2",
      "npm:ieee754@1.1.6",
      "npm:is-array@1.0.1",
      "npm:pako@0.2.8/lib/zlib/deflate",
      "npm:pako@0.2.8/lib/utils/strings",
      "npm:pako@0.2.8/lib/zlib/messages",
      "npm:pako@0.2.8/lib/zlib/zstream",
      "npm:pako@0.2.8/lib/zlib/gzheader",
      "npm:pako@0.2.8/lib/zlib/inflate",
      "npm:stream-browserify@1.0.0",
      "github:jspm/nodelibs-util@0.1.0/index",
      "npm:base64-js@0.0.8/lib/b64",
      "npm:events@1.0.2/events",
      "npm:ieee754@1.1.6/index",
      "npm:pako@0.2.8/lib/zlib/adler32",
      "npm:is-array@1.0.1/index",
      "npm:pako@0.2.8/lib/zlib/trees",
      "npm:pako@0.2.8/lib/zlib/crc32",
      "npm:pako@0.2.8/lib/zlib/inffast",
      "npm:pako@0.2.8/lib/zlib/inftrees",
      "npm:util@0.10.3",
      "npm:stream-browserify@1.0.0/index",
      "npm:readable-stream@1.1.13/readable",
      "npm:util@0.10.3/util",
      "npm:readable-stream@1.1.13/writable",
      "npm:readable-stream@1.1.13/duplex",
      "npm:readable-stream@1.1.13/passthrough",
      "npm:readable-stream@1.1.13/transform",
      "npm:readable-stream@1.1.13/lib/_stream_readable",
      "npm:readable-stream@1.1.13/lib/_stream_writable",
      "npm:readable-stream@1.1.13/lib/_stream_duplex",
      "npm:readable-stream@1.1.13/lib/_stream_transform",
      "npm:util@0.10.3/support/isBufferBrowser",
      "npm:readable-stream@1.1.13/lib/_stream_passthrough",
      "npm:core-util-is@1.0.1",
      "npm:string_decoder@0.10.31",
      "npm:isarray@0.0.1",
      "npm:core-util-is@1.0.1/lib/util",
      "npm:isarray@0.0.1/index",
      "npm:string_decoder@0.10.31/index",
      "index.js",
      "npm:openvgdb-snes@1.0.2",
      "npm:openvgdb-snes@1.0.2/index",
      "games-view.css!github:systemjs/plugin-css@0.1.18",
      "npm:openvgdb-snes@1.0.2/db.json!github:systemjs/plugin-json@0.1.0"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "clean-css": "npm:clean-css@3.4.4",
    "core-js": "npm:core-js@1.2.0",
    "css": "github:systemjs/plugin-css@0.1.18",
    "gametime-nointro": "npm:gametime-nointro@1.1.1",
    "json": "github:systemjs/plugin-json@0.1.0",
    "keypad": "github:matthewbauer/keypad@0.0.2",
    "localforage": "npm:localforage@1.2.10",
    "openvgdb-snes": "npm:openvgdb-snes@1.0.2",
    "querystring": "github:jspm/nodelibs-querystring@0.1.0",
    "snes9x-next": "npm:snes9x-next@0.7.5",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "x-game": "github:matthewbauer/x-game@1.1.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:matthewbauer/document@0.0.4": {
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.7.13"
    },
    "github:matthewbauer/plugin-raw@0.3.1": {
      "fetch": "github:github/fetch@0.9.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "github:matthewbauer/window@0.0.3": {
      "web-audio-api-shim": "github:mohayonao/web-audio-api-shim@0.3.0"
    },
    "github:matthewbauer/x-game@1.1.2": {
      "coffee": "github:forresto/system-coffee@0.1.2",
      "document": "github:matthewbauer/document@0.0.4",
      "jszip": "github:stuk/jszip@2.5.0",
      "raw": "github:matthewbauer/plugin-raw@0.3.1",
      "sparkmd5": "github:satazor/sparkmd5@1.0.0",
      "window": "github:matthewbauer/window@0.0.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asap@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.5.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clean-css@3.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:detect-node@2.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:gametime-nointro@1.1.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "hctef": "npm:hctef@0.3.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "jszip": "npm:jszip@2.5.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hctef@0.3.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "detect-node": "npm:detect-node@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jszip@2.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:localforage@1.2.10": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "promise": "npm:promise@5.0.0"
    },
    "npm:openvgdb-snes@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:promise@5.0.0": {
      "asap": "npm:asap@1.0.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
