module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    clean: ['dist/']
    
    watch:
      stylus:
        files: 'stylus/**/*.styl'
        tasks: 'stylus'
        
    stylus:
      compile: 
        options: 
          compress: false
        src: 'stylus/callisto.styl'
        dest: 'dist/css/callisto.css'

  require('load-grunt-tasks')(grunt)

  grunt.registerTask 'default', ['stylus:compile']