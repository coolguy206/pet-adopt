module.exports = function(grunt) {

  return {

    options: {
      sourceMap: true,
      compress: true,
    },

    main: {
      expand: true,
      cwd: 'css/',
      src: '*.less',
      dest: 'css/',
      ext: '.css',
    }

  }
};