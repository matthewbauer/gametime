path = require 'path'

module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)
  grunt.loadTasks 'tasks'
  grunt.initConfig
    pkg: require './package.json'
    app:
      dir: 'app'
      dist: 'dist'
      icon: 'resources/app.png'
      ico: 'resources/win/app.ico'
      icns: 'resources/mac/app.icns'
      dependencies: "<%= Object.keys(pkg.dependencies) %>"
      electron:
        version: '<%= pkg.devDependencies["electron-prebuilt"] %>'
        dir: '<%= app.dist %>/electron'
        resourcePath: '<%= app.electron.dir %>/Electron.app/Contents/Resources/'
    'create-windows-installer':
      appDirectory: '<%= app.dist %>/electron'
      outputDirectory: '<%= app.dist %>'
      setupIcon: '<%= app.ico %>'
    electron:
      'darwin-x64':
        options:
          name: '<%= pkg.productName %>'
          dir: "#{__dirname}"
          out: '<%= app.dist %>'
          version: '<%= app.electron.version %>'
          platform: 'darwin'
          arch: 'x64'
          sign: '"Mac Developer: Matthew Bauer (86DMNNXPP9)"'
          prune: true
          asar: true
          icon: '<%= app.icns %>'
          'app-bundle-id': 'com.gametime'
          'helper-bundle-id': 'com.gametime.helper'
          'app-version': '<%= pkg.version %>'
      'win32-ia32':
        options:
          name: '<%= pkg.productName %>'
          dir: '<%= app.dir %>'
          out: '<%= app.dist %>'
          version: '<%= app.electron.version %>'
          platform: 'win32'
          arch: 'ia32'
          prune: true
          asar: true
          icon: '<%= app.icn %>'
      'win32-x64':
        options:
          name: '<%= pkg.productName %>'
          dir: '<%= app.dir %>'
          out: '<%= app.dist %>'
          version: '<%= app.electron.version %>'
          platform: 'win32'
          arch: 'x64'
          prune: true
          asar: true
          icon: '<%= app.ico %>'
    'download-electron':
      version: '<%= app.electron.version %>'
      outputDir: '<%= app.electron.dir %>'
      rebuild: false
    asar:
      app:
        cwd: '<%= app.dir %>'
        src: ['**/*']
        expand: true
        dest: '<%= app.dist %>/app.asar'
    copy:
      app:
        src: ['package.json', 'index.js', 'static/**']
        dest: '<%= app.dir %>'
        expand: true
      dependencies:
        cwd: 'node_modules'
        src: '{<%= app.dependencies %>}/**'
        dest: '<%= app.dir %>/node_modules'
        expand: true
      asar:
        src: '<%= app.dist %>/app.asar'
        dest: '<%= app.electron.dir %>/resources/app.asar'
    rename:
      exe:
        src: '<%= app.electron.dir %>/electron.exe'
        dest: '<%= app.electron.dir %>/gametime.exe'
    appdmg:
      options:
        title: 'GameTime'
        icon: 'resources/mac/app.icns'
        background: 'resources/mac/bg.png'
        'icon-size': 80
        contents: [
          {x: 448, y: 344, type: 'link', path: '/Applications'}
          {x: 192, y: 344, type: 'file', path: '<%= app.dist %>/GameTime.app'}
        ]
      target:
        dest: '<%= app.dist %>/GameTime.dmg'
    cson:
      app:
        expand: true
        src: ['menus/**/*.cson', 'keymaps/**/*.cson', 'cores/**/*.cson']
        dest: '<%= app.dir %>'
        ext: '.json'
    coffee:
      app:
        expand: true
        src: [
          'src/**/*.coffee'
        ]
        dest: '<%= app.dir %>'
        ext: '.js'
    clean: [
      'dist'
      'app'
    ]
    mochaTest:
      test:
        options:
          require: [
            'coffee-script/register'
            'coffee-coverage/register-istanbul'
          ]
        src: 'spec/*'
    shell:
      run: command: 'electron .'
  grunt.registerTask 'run', ['shell:run']
  grunt.registerTask 'package-osx', ['app.asar', 'electron:darwin-x64']
  grunt.registerTask 'package-win', ['electron:win32-x64']
  grunt.registerTask 'install', ['electron-rebuild']
  grunt.registerTask 'app', ['coffee:app', 'cson:app', 'copy:app', 'copy:dependencies']
  grunt.registerTask 'app.asar', ['app', 'asar']
  grunt.registerTask 'default', ['run']
