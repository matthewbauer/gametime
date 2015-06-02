fs = require 'fs'
async = require 'async' # necessary?
child_process = require('child_process')
npm = require.resolve('npm/bin/npm-cli')

module.exports = (grunt) ->
  grunt.registerTask 'electron-rebuild', ->
    done = @async()
    nodeVersion = grunt.config('app.electron.version')
    async.eachSeries grunt.config('app.dependencies').split(','), (dep, callback) ->
      child_process.execFile 'node', [npm, 'install', dep,
        "--target=#{nodeVersion}"
        "--arch=#{process.arch}"
        "--dist-url=https://atom.io/download/atom-shell"], callback
    , done
