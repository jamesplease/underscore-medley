'use strict';

module.exports = function( grunt ) {

  grunt.initConfig({

    nodeunit: {
      test: [ 'tests/*_test.js' ]
    },
    processor: {
      options: {
        data: {
          mixins: 'underscore-medley.js'
        }
      },
      bookmarklet: {
        src: 'tests/test-script.js',
        dest: 'tmp/test-script.built.js'
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerMultiTask('processor', 'Ad hoc task that processes a JS file as a Lo Dash template', function() {

    // Note: It isn't really a multitask just yet.
    var
    options   = this.options(),
    template  = grunt.file.read(this.data.src),
    mixins    = grunt.file.read(options.data.mixins),
    variables = {
      mixins: mixins.replace(/\'use strict\';\n\n/, '')
    };
    template = grunt.template.process(template, { data: variables });
    grunt.file.write(this.data.dest, template);

  });

  grunt.registerTask('default', ['processor', 'nodeunit']);

};

