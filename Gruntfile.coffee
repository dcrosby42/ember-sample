module.exports = (grunt) ->

  grunt.initConfig
    pkg: '<json:package.json>'

    watch:
      files: [
        'src/**/*.coffee'
      ]
      tasks: ['shell:browserify_app']

    shell:
      server:
        command: "foreman start"
        options:
          stdout: true

      browserify_app:
        command: "node_modules/.bin/browserify -t coffeeify src/app.coffee > js/app.js"
        options:
          failOnError: true
          stdout: true

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-shell'
  grunt.registerTask 'server', 'shell:server'
  grunt.registerTask 'bundle', ['shell:browserify_app']
