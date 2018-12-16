module.exports = function(grunt) {
  return {
    options: {
      compress: true,
      sourceMap: true
    },

    main: {
      expand: true,
      cwd: 'js/',
      src: ['*.js'],
      dest: 'js/output/',
      ext: '.min.js',
    }

  }
};