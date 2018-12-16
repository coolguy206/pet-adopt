module.exports = function(grunt) {

  return {

    options: {
      flatten: true
    },

    main: {
      files: [{
        cwd: 'html/',
        src: ['*.html'],
        dest: 'includes/',
      }]
    },

    js: {
      files: [{
        cwd: 'js/includes',
        src: ['*.js'],
        dest: 'js/output',
      }]
    }

  }
};