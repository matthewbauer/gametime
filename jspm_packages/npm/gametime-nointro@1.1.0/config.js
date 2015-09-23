/* */ 
(function(process) {
  System.config({
    defaultJSExtensions: true,
    transpiler: "babel",
    babelOptions: {"optional": ["runtime", "optimisation.modules.system"]},
    paths: {
      "github:*": "jspm_packages/github/*",
      "npm:*": "jspm_packages/npm/*"
    },
    map: {
      "babel": "npm:babel-core@5.8.25",
      "babel-runtime": "npm:babel-runtime@5.8.25",
      "coffee": "github:forresto/system-coffee@0.1.2",
      "core-js": "npm:core-js@1.1.4",
      "hctef": "npm:hctef@0.2.0",
      "jszip": "npm:jszip@2.5.0",
      "traceur": "github:jmcriffey/bower-traceur@0.0.91",
      "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.91",
      "github:jspm/nodelibs-assert@0.1.0": {"assert": "npm:assert@1.3.0"},
      "github:jspm/nodelibs-buffer@0.1.0": {"buffer": "npm:buffer@3.5.0"},
      "github:jspm/nodelibs-events@0.1.1": {"events": "npm:events@1.0.2"},
      "github:jspm/nodelibs-http@1.7.1": {
        "Base64": "npm:Base64@0.2.1",
        "events": "github:jspm/nodelibs-events@0.1.1",
        "inherits": "npm:inherits@2.0.1",
        "stream": "github:jspm/nodelibs-stream@0.1.0",
        "url": "github:jspm/nodelibs-url@0.1.0",
        "util": "github:jspm/nodelibs-util@0.1.0"
      },
      "github:jspm/nodelibs-https@0.1.0": {"https-browserify": "npm:https-browserify@0.0.0"},
      "github:jspm/nodelibs-process@0.1.1": {"process": "npm:process@0.10.1"},
      "github:jspm/nodelibs-querystring@0.1.0": {"querystring": "npm:querystring@0.2.0"},
      "github:jspm/nodelibs-stream@0.1.0": {"stream-browserify": "npm:stream-browserify@1.0.0"},
      "github:jspm/nodelibs-url@0.1.0": {"url": "npm:url@0.10.3"},
      "github:jspm/nodelibs-util@0.1.0": {"util": "npm:util@0.10.3"},
      "npm:assert@1.3.0": {"util": "npm:util@0.10.3"},
      "npm:babel-runtime@5.8.25": {"process": "github:jspm/nodelibs-process@0.1.1"},
      "npm:buffer@3.5.0": {
        "base64-js": "npm:base64-js@0.0.8",
        "ieee754": "npm:ieee754@1.1.6",
        "is-array": "npm:is-array@1.0.1"
      },
      "npm:core-js@1.1.4": {
        "fs": "github:jspm/nodelibs-fs@0.1.2",
        "process": "github:jspm/nodelibs-process@0.1.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      },
      "npm:core-util-is@1.0.1": {"buffer": "github:jspm/nodelibs-buffer@0.1.0"},
      "npm:hctef@0.2.0": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "fs": "github:jspm/nodelibs-fs@0.1.2",
        "http": "github:jspm/nodelibs-http@1.7.1",
        "https": "github:jspm/nodelibs-https@0.1.0",
        "process": "github:jspm/nodelibs-process@0.1.1",
        "querystring": "github:jspm/nodelibs-querystring@0.1.0",
        "url": "github:jspm/nodelibs-url@0.1.0"
      },
      "npm:https-browserify@0.0.0": {"http": "github:jspm/nodelibs-http@1.7.1"},
      "npm:inherits@2.0.1": {"util": "github:jspm/nodelibs-util@0.1.0"},
      "npm:jszip@2.5.0": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "pako": "npm:pako@0.2.8",
        "process": "github:jspm/nodelibs-process@0.1.1"
      },
      "npm:pako@0.2.8": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "process": "github:jspm/nodelibs-process@0.1.1"
      },
      "npm:punycode@1.3.2": {"process": "github:jspm/nodelibs-process@0.1.1"},
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
      "npm:stream-browserify@1.0.0": {
        "events": "github:jspm/nodelibs-events@0.1.1",
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.1.13"
      },
      "npm:string_decoder@0.10.31": {"buffer": "github:jspm/nodelibs-buffer@0.1.0"},
      "npm:url@0.10.3": {
        "assert": "github:jspm/nodelibs-assert@0.1.0",
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0",
        "util": "github:jspm/nodelibs-util@0.1.0"
      },
      "npm:util@0.10.3": {
        "inherits": "npm:inherits@2.0.1",
        "process": "github:jspm/nodelibs-process@0.1.1"
      }
    }
  });
})(require("process"));
