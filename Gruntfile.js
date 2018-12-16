module.exports = function(grunt) {


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-copy');

  var gruntConfig = {

  };


  // load all external grunt plugins
  var tasks = ['watch', 'less', 'concat', 'uncss', 'cssmin', 'uglify', 'execute', 'connect', 'concurrent', 'includes', 'copy'];

  tasks.forEach(function(fileName) {
    gruntConfig[fileName] = require('./grunt/' + fileName + '.js')(grunt);
  });

  grunt.initConfig(gruntConfig);


};