module.exports = (grunt) ->
  pkg = grunt.file.readJSON('package.json')
  grunt.initConfig(
    pkg: pkg
    'build-atom-shell':
      buildDir: 'build'
      tag: 'master'
      projectName: 'gametime'
      productName: 'GameTime'
    copy:
      app:
        files: [
          {
            expand: true
            src: ['index.html', 'index.css', 'package.json', 'db/gametime.db']
            dest: 'app/'
          }
          {
            expand: true
            cwd: 'build/js/'
            src: ['*.js']
            dest: 'app/'
          }
          {
            expand: true
            cwd: 'node_modules'
            src: Object.keys(pkg.dependencies).map((pkg) -> pkg + '/**')
            dest: 'app/node_modules/'
          }
        ]
    coffee:
      compile:
        files: [
          expand: true
          cwd: 'src'
          src: ['**/*.coffee']
          dest: 'build/js/'
          ext: '.js'
        ]
    shell:
      electron:
        command: 'electron app'
      nw:
        command: 'nw .'
      db:
        command: 'cd db; sh mkdb.sh'
  )
  grunt.loadNpmTasks('grunt-electron-app-builder')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-shell')
  grunt.registerTask('run', ['coffee:compile', 'copy:app', 'shell:nw'])
  grunt.registerTask('package', ['coffee:compile',
                                  'copy:app', 'build-atom-shell'])
  grunt.registerTask('default', ['run'])
