/* */ 
(function(Buffer) {
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
      if (body instanceof ArrayBuffer) {
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
  })(require("buffer").Buffer);
})(require("buffer").Buffer);
