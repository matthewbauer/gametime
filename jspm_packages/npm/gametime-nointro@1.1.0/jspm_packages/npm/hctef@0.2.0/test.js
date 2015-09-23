/* */ 
var chai = require("chai");
var assert = chai.assert;
var test = require("ava");
var fetch = require("./fetch");
var Request = require("./request");
var Headers = require("./headers");
var Response = require("./response");
function suite(name, fn) {
  fn();
}
test('resolves promise on 500 error', function() {
  return fetch('/boom').then(function(response) {
    assert.equal(response.status, 500);
    assert.equal(response.ok, false);
    return response.text();
  }).then(function(body) {
    assert.equal(body, 'boom');
  });
});
test('rejects promise for network error', function() {
  return fetch('/error').then(function(response) {
    assert(false, 'HTTP status ' + response.status + ' was treated as success');
  }).catch(function(error) {
    assert(error instanceof Error, 'Rejected with Error');
  });
});
suite('Headers', function() {
  test('constructor copies headers', function(t) {
    var original = new Headers();
    original.append('Accept', 'application/json');
    original.append('Accept', 'text/plain');
    original.append('Content-Type', 'text/html');
    var headers = new Headers(original);
    assert.deepEqual(['application/json', 'text/plain'], headers.getAll('Accept'));
    assert.deepEqual(['text/html'], headers.getAll('Content-Type'));
    t.end();
  });
  test('headers are case insensitive', function(t) {
    var headers = new Headers({'Accept': 'application/json'});
    assert.equal(headers.get('ACCEPT'), 'application/json');
    assert.equal(headers.get('Accept'), 'application/json');
    assert.equal(headers.get('accept'), 'application/json');
    t.end();
  });
  test('appends to existing', function(t) {
    var headers = new Headers({'Accept': 'application/json'});
    assert.isFalse(headers.has('Content-Type'));
    headers.append('Content-Type', 'application/json');
    assert.isTrue(headers.has('Content-Type'));
    assert.equal(headers.get('Content-Type'), 'application/json');
    t.end();
  });
  test('appends values to existing header name', function(t) {
    var headers = new Headers({'Accept': 'application/json'});
    headers.append('Accept', 'text/plain');
    assert.equal(headers.getAll('Accept').length, 2);
    assert.equal(headers.getAll('Accept')[0], 'application/json');
    assert.equal(headers.getAll('Accept')[1], 'text/plain');
    t.end();
  });
  test('sets header name and value', function(t) {
    var headers = new Headers();
    headers.set('Content-Type', 'application/json');
    assert.equal(headers.get('Content-Type'), 'application/json');
    t.end();
  });
  test('returns null on no header found', function(t) {
    var headers = new Headers();
    assert.isNull(headers.get('Content-Type'));
    t.end();
  });
  test('has headers that are set', function(t) {
    var headers = new Headers();
    headers.set('Content-Type', 'application/json');
    assert.isTrue(headers.has('Content-Type'));
    t.end();
  });
  test('deletes headers', function(t) {
    var headers = new Headers();
    headers.set('Content-Type', 'application/json');
    assert.isTrue(headers.has('Content-Type'));
    headers.delete('Content-Type');
    assert.isFalse(headers.has('Content-Type'));
    assert.isNull(headers.get('Content-Type'));
    t.end();
  });
  test('returns list on getAll when header found', function(t) {
    var headers = new Headers({'Content-Type': 'application/json'});
    assert.isArray(headers.getAll('Content-Type'));
    assert.equal(headers.getAll('Content-Type').length, 1);
    assert.equal(headers.getAll('Content-Type')[0], 'application/json');
    t.end();
  });
  test('returns empty list on getAll when no header found', function(t) {
    var headers = new Headers();
    assert.isArray(headers.getAll('Content-Type'));
    assert.equal(headers.getAll('Content-Type').length, 0);
    t.end();
  });
  test('converts field name to string on set and get', function(t) {
    var headers = new Headers();
    headers.set(1, 'application/json');
    assert.equal(headers.get(1), 'application/json');
    t.end();
  });
  test('converts field value to string on set and get', function(t) {
    var headers = new Headers();
    headers.set('Content-Type', 1);
    headers.set('X-CSRF-Token', undefined);
    assert.equal(headers.get('Content-Type'), '1');
    assert.equal(headers.get('X-CSRF-Token'), 'undefined');
    t.end();
  });
  test('throws TypeError on invalid character in field name', function(t) {
    assert.throws(function() {
      new Headers({'<Accept>': ['application/json']});
    }, TypeError);
    assert.throws(function() {
      new Headers({'Accept:': ['application/json']});
    }, TypeError);
    assert.throws(function() {
      var headers = new Headers();
      headers.set({field: 'value'}, 'application/json');
    }, TypeError);
    t.end();
  });
  test('is iterable with forEach', function(t) {
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Accept', 'text/plain');
    headers.append('Content-Type', 'text/html');
    var results = [];
    headers.forEach(function(value, key, object) {
      results.push({
        value: value,
        key: key,
        object: object
      });
    });
    assert.equal(results.length, 3);
    assert.deepEqual({
      key: 'accept',
      value: 'application/json',
      object: headers
    }, results[0]);
    assert.deepEqual({
      key: 'accept',
      value: 'text/plain',
      object: headers
    }, results[1]);
    assert.deepEqual({
      key: 'content-type',
      value: 'text/html',
      object: headers
    }, results[2]);
    t.end();
  });
  test('forEach accepts second thisArg argument', function(t) {
    var headers = new Headers({'Accept': 'application/json'});
    var thisArg = 42;
    headers.forEach(function() {
      assert.equal(this, thisArg);
    }, thisArg);
    t.end();
  });
});
suite('Request', function() {
  test('construct with url', function(t) {
    var request = new Request('https://fetch.spec.whatwg.org/');
    assert.equal(request.url, 'https://fetch.spec.whatwg.org/');
    t.end();
  });
  test('construct with Request', function() {
    var request1 = new Request('https://fetch.spec.whatwg.org/', {
      method: 'post',
      body: 'I work out',
      headers: {
        accept: 'application/json',
        'Content-Type': 'text/plain'
      }
    });
    var request2 = new Request(request1);
    return request2.text().then(function(body2) {
      assert.equal(body2, 'I work out');
      assert.equal(request2.method, 'POST');
      assert.equal(request2.url, 'https://fetch.spec.whatwg.org/');
      assert.equal(request2.headers.get('accept'), 'application/json');
      assert.equal(request2.headers.get('content-type'), 'text/plain');
      return request1.text().then(function() {
        assert(false, 'original request body should have been consumed');
      }, function(error) {
        assert(error instanceof TypeError, 'expected TypeError for already read body');
      });
    });
  });
  test('construct with Request and override headers', function(t) {
    var request1 = new Request('https://fetch.spec.whatwg.org/', {
      method: 'post',
      body: 'I work out',
      headers: {
        accept: 'application/json',
        'Content-Type': 'text/plain'
      }
    });
    var request2 = new Request(request1, {headers: {'x-test': '42'}});
    assert.equal(request2.headers.get('accept'), undefined);
    assert.equal(request2.headers.get('content-type'), undefined);
    assert.equal(request2.headers.get('x-test'), '42');
    t.end();
  });
  test('construct with Request and override body', function() {
    var request1 = new Request('https://fetch.spec.whatwg.org/', {
      method: 'post',
      body: 'I work out',
      headers: {'Content-Type': 'text/plain'}
    });
    var request2 = new Request(request1, {
      body: '{"wiggles": 5}',
      headers: {'Content-Type': 'application/json'}
    });
    return request2.json().then(function(data) {
      assert.equal(data.wiggles, 5);
      assert.equal(request2.headers.get('content-type'), 'application/json');
    });
  });
  test('construct with used Request body', function() {
    var request1 = new Request('https://fetch.spec.whatwg.org/', {
      method: 'post',
      body: 'I work out'
    });
    return request1.text().then(function() {
      assert.throws(function() {
        new Request(request1);
      }, TypeError);
    });
  });
  suite('BodyInit extract', function() {
    suite('type USVString', function() {
      test('consume as text', function() {
        var request = new Request(null, {
          method: 'POST',
          body: 'hello'
        });
        return request.text().then(function(text) {
          assert.equal(text, 'hello');
        });
      });
    });
  });
});
suite('Response', function() {
  suite('BodyInit extract', function() {
    suite('type USVString', function() {
      test('consume as text', function() {
        var response = new Response('hello');
        return response.text().then(function(text) {
          assert.equal(text, 'hello');
        });
      });
    });
  });
  test('populates response body', function() {
    return fetch('/hello').then(function(response) {
      assert.equal(response.status, 200);
      assert.equal(response.ok, true);
      return response.text();
    }).then(function(body) {
      assert.equal(body, 'hi');
    });
  });
  test('parses response headers', function() {
    return fetch('/headers?' + new Date().getTime()).then(function(response) {
      assert.equal(response.headers.get('Date'), 'Mon, 13 Oct 2014 21:02:27 GMT');
      assert.equal(response.headers.get('Content-Type'), 'text/html; charset=utf-8');
    });
  });
  test('creates Headers object from raw headers', function() {
    var r = new Response('{"foo":"bar"}', {headers: {'content-type': 'application/json'}});
    assert.equal(r.headers instanceof Headers, true);
    return r.json().then(function(json) {
      assert(json.foo, 'bar');
    });
  });
});
suite('Body mixin', function() {
  suite('arrayBuffer', function() {
    test('resolves arrayBuffer promise', function() {
      return fetch('/hello').then(function(response) {
        return response.arrayBuffer();
      }).then(function(buf) {
        assert.equal(buf.byteLength, 2);
      });
    });
    test('arrayBuffer handles binary data', function() {
      return fetch('/binary').then(function(response) {
        return response.arrayBuffer();
      }).then(function(buf) {
        assert.equal(buf.byteLength, 256, 'buf.byteLength is correct');
        var view = new Uint8Array(buf);
        for (var i = 0; i < 256; i++) {
          assert.equal(view[i], i);
        }
      });
    });
    test('arrayBuffer handles utf-8 data', function() {
      return fetch('/hello/utf8').then(function(response) {
        return response.arrayBuffer();
      }).then(function(buf) {
        assert.equal(buf.byteLength, 5, 'buf.byteLength is correct');
        var octets = Array.prototype.slice.call(new Uint8Array(buf));
        assert.deepEqual(octets, [104, 101, 108, 108, 111]);
      });
    });
    test('arrayBuffer handles utf-16le data', function() {
      return fetch('/hello/utf16le').then(function(response) {
        return response.arrayBuffer();
      }).then(function(buf) {
        assert.equal(buf.byteLength, 10, 'buf.byteLength is correct');
        var octets = Array.prototype.slice.call(new Uint8Array(buf));
        assert.deepEqual(octets, [104, 0, 101, 0, 108, 0, 108, 0, 111, 0]);
      });
    });
    test('rejects arrayBuffer promise after body is consumed', function() {
      return fetch('/hello').then(function(response) {
        assert(response.arrayBuffer, 'Body does not implement arrayBuffer');
        assert.equal(response.bodyUsed, false);
        response.blob();
        assert.equal(response.bodyUsed, true);
        return response.arrayBuffer();
      }).catch(function(error) {
        assert(error instanceof TypeError, 'Promise rejected after body consumed');
      });
    });
  });
  suite('json', function() {
    test('parses json response', function() {
      return fetch('/json').then(function(response) {
        return response.json();
      }).then(function(json) {
        assert.equal(json.name, 'Hubot');
        assert.equal(json.login, 'hubot');
      });
    });
    test('rejects json promise after body is consumed', function() {
      return fetch('/json').then(function(response) {
        assert(response.json, 'Body does not implement json');
        assert.equal(response.bodyUsed, false);
        response.text();
        assert.equal(response.bodyUsed, true);
        return response.json();
      }).catch(function(error) {
        assert(error instanceof TypeError, 'Promise rejected after body consumed');
      });
    });
    test('handles json parse error', function() {
      return fetch('/json-error').then(function(response) {
        return response.json();
      }).catch(function(error) {
        assert(error instanceof Error, 'JSON exception is an Error instance');
        assert(error.message, 'JSON exception has an error message');
      });
    });
  });
  suite('text', function() {
    test('handles 204 No Content response', function() {
      return fetch('/empty').then(function(response) {
        assert.equal(response.status, 204);
        return response.text();
      }).then(function(body) {
        assert.equal(body, '');
      });
    });
    test('resolves text promise', function() {
      return fetch('/hello').then(function(response) {
        return response.text();
      }).then(function(text) {
        assert.equal(text, 'hi');
      });
    });
    test('rejects text promise after body is consumed', function() {
      return fetch('/hello').then(function(response) {
        assert(response.text, 'Body does not implement text');
        assert.equal(response.bodyUsed, false);
        response.text();
        assert.equal(response.bodyUsed, true);
        return response.text();
      }).catch(function(error) {
        assert(error instanceof TypeError, 'Promise rejected after body consumed');
      });
    });
  });
});
suite('Methods', function() {
  test('supports HTTP GET', function() {
    return fetch('/request', {method: 'get'}).then(function(response) {
      return response.json();
    }).then(function(request) {
      assert.equal(request.method, 'GET');
      assert.equal(request.data, '');
    });
  });
  test('GET with body throws TypeError', function(t) {
    assert.throw(function() {
      new Request('', {
        method: 'get',
        body: 'invalid'
      });
    }, TypeError);
    t.end();
  });
  test('HEAD with body throws TypeError', function(t) {
    assert.throw(function() {
      new Request('', {
        method: 'head',
        body: 'invalid'
      });
    }, TypeError);
    t.end();
  });
});
suite('Atomic HTTP redirect handling', function() {
  test('handles 301 redirect response', function() {
    return fetch('/redirect/301').then(function(response) {
      assert.equal(response.status, 200);
      assert.equal(response.ok, true);
      assert.match(response.url, /\/hello/);
      return response.text();
    }).then(function(body) {
      assert.equal(body, 'hi');
    });
  });
  test('handles 302 redirect response', function() {
    return fetch('/redirect/302').then(function(response) {
      assert.equal(response.status, 200);
      assert.equal(response.ok, true);
      assert.match(response.url, /\/hello/);
      return response.text();
    }).then(function(body) {
      assert.equal(body, 'hi');
    });
  });
  test('handles 303 redirect response', function() {
    return fetch('/redirect/303').then(function(response) {
      assert.equal(response.status, 200);
      assert.equal(response.ok, true);
      assert.match(response.url, /\/hello/);
      return response.text();
    }).then(function(body) {
      assert.equal(body, 'hi');
    });
  });
  test('handles 307 redirect response', function() {
    return fetch('/redirect/307').then(function(response) {
      assert.equal(response.status, 200);
      assert.equal(response.ok, true);
      assert.match(response.url, /\/hello/);
      return response.text();
    }).then(function(body) {
      assert.equal(body, 'hi');
    });
  });
  test('handles 308 redirect response', function() {
    return fetch('/redirect/308').then(function(response) {
      assert.equal(response.status, 200);
      assert.equal(response.ok, true);
      assert.match(response.url, /\/hello/);
      return response.text();
    }).then(function(body) {
      assert.equal(body, 'hi');
    });
  });
});
