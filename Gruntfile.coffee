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
        
    mocha_phantomjs:
      options:
        reporter: 'spec'
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
  grunt.registerTask 'test', ['stylus:compile', 'bower_concat', 'mocha_phantomjs']