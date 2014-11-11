module.exports = function(grunt) {
  grunt.initConfig({
    assemble: {
      options: {
        flatten: true,
        layout: 'default.hbs',
        layoutdir: 'src/templates/layouts',
        data: 'data/**/*.json'
      },
      static: {
        options: {
          layout: 'default.hbs',
          partials: ['src/templates/partials/*.hbs']
        },
        src: ['src/templates/pages/*.hbs'],
        dest: 'dist/'
      }
    },
    sass: { 
      dist: { 
        files: { 
          'dist/css/main.css': 'sass/main.scss'
        }
      }
    },
    connect: {
        server: {
        options: {
            port: 9000,
            base: './',
            hostname:'*',
            }
        }
    },    
    watch: {
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: 1337,
        }
      },
      assemble: {
          files: ['**/*.hbs'],
          tasks: ['assemble'],
          options: {
              livereload: 1337,
          }
      }      
    }
  });
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['assemble','sass','connect','watch']);
};