module.exports = function (grunt) {

  grunt.initConfig(
    {
      concat: {
        js: {
          options: {
            process: function (src, filepath) {
              return '// FILE: ' + filepath + '\n' + src + '\n';
            }
          },
          src: getJSPaths(),
          dest: './dist/app.js'
        }
      },
      uglify: {
        options: {
          mangle: false,
          compress: false,
          report: 'min',
          // the banner is inserted at the top of the output
          banner: '/*! <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        dist: {
          files: {
            './dist/app.min.js': getJSPaths()
          }
        }
      },
      watch: {
        pivotal: {
          files: getJSPaths().concat(["GruntFile.js"]),
          tasks: [ /*'jshint',*/ 'concat:js']
        }
      }              
    }
  );

  function getJSPaths() {
    var paths = [ ('./assets/js/**/*.js') ];
    return paths;
  }

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [ /*'jshint',*/ 'concat']);
  grunt.registerTask('uglify', [ /*'jshint',*/ 'uglify']);
};