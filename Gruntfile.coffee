module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    
    clean: ['dist/']
    
    watch:
      stylus:
        files: 'stylus/**/*.styl'
        tasks: 'stylus'
      js:
        files: 'js/**/*.js'
        tasks: 'js'
        
    stylus:
      compile: 
        options: 
          compress: false
        src: 'stylus/callisto.styl'
        dest: 'dist/css/callisto.css'

    concat:
      options:
        banner:'/*\n  callisto.js authord by steelydylan\n*/\n\n'
      dist:
        src: ['js/**/*.js']
        dest: 'dist/js/callisto.js'
    
    mocha_phantomjs:
      options:
        reporter: 'spec'
        view: '1920x1080'
      all: ['test/**/*.html']
    
    bower_concat:
      test:
        dest: 'test/vendor.js'
        dependencies:
          'chai-jquery': ['jquery','chai']
        bowerOptions:
          relative: false
  
  require('load-grunt-tasks')(grunt)
  grunt.registerTask 'default', ['stylus:compile']
  grunt.registerTask 'js', ['concat:dist']
  grunt.registerTask 'test', ['stylus:compile', 'bower_concat', 'mocha_phantomjs']