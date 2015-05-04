url = require('url')
fs = require('fs')
request = require('request')
unzip = require('unzip')
streamBuffers = require('stream-buffers')

module.exports.getROM = (consoleName, longName, cb) ->
  date = '2015-03-03'
  romURL = url.format
    protocol: 'https:'
    hostname: 'archive.org'
    pathname: [
      'download'
      'No-Intro-Collection_' + date
      consoleName + '.zip'
      consoleName + '%2F' + longName + '.zip'
    ].join('/')
  request(romURL).pipe(unzip.Parse()).on 'entry', (entry) ->
    if entry.type == 'File'
      writableStream = new streamBuffers.WritableStreamBuffer()
      entry.pipe(writableStream).on 'close', ->
        cb writableStream.getContents(), entry.uncompressedSize
        return
    else
      entry.autodrain()
    return
  return
