module.exports = function(grunt) {
  return {
    options: {
      //sourceMap:true,
    },

    main: {
      files: {
        'index.html': ['includes/header.html', 'includes/content.html', 'includes/footer.html'],
      }
    }

  }
};