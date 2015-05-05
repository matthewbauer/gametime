module.exports = (grunt) ->
  pkg = grunt.file.readJSON('package.json')
  grunt.initConfig(
    pkg: pkg
    copy:
      app:
        files: [
          {
            expand: true
            cwd: 'src'
            src: ['index.html', 'index.css']
            dest: 'app/'
          }
          {
            expand: true
            src: ['package.json']
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
    mochaTest:
      test:
        options:
          reporter: 'spec',
          require: 'coffee-script/register'
        src: ['test/*.coffee']
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
  )
  grunt.loadNpmTasks('grunt-mocha-test')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-shell')
  grunt.registerTask('test', ['mochaTest'])
  grunt.registerTask('run', ['coffee:compile', 'copy:app', 'shell:nw'])
  grunt.registerTask('prepublish', ['coffee:compile'])
  grunt.registerTask('install', ['package'])
  grunt.registerTask('package', ['coffee:compile', 'copy:app'])
  grunt.registerTask('default', ['run'])
