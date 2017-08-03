module.exports = function(grunt) {
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    hjson: {
      cvt: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/**/*.hjson'],
            dest: './',
            ext: '.json',
          },
        ],
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-hjson');
 
  grunt.registerTask('default', ['hjson']);
};