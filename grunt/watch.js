module.exports = function(grunt) {

  return {
    options: {
      livereload: true
    },

    main: {
      files: ['html/*.html', 'css/*.less', 'js/*.js'],
      tasks: ['less:main', 'uglify:main', 'includes:main', 'includes:js', 'concat:main']
    }

  }
};