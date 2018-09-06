module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      "css":
			{
			    files: "styles/less/**/*.less",
			    tasks: 'styles'
			}
    },
    less:
		{
		  build:
			{
			    options:
				{
				    paths: null,
				    compress: false,
				    ieCompat: true,
				    optimization: null, //number
				    strictImports: false,
				    strictMath: false,
				    strictUnits: false,
				    syncImport: false,
				    dumpLineNumbers: false,
				    relativeUrls: false,
				    sourceMap: false,
				    outputSourceFiles: false
				},
			  files:
				{
					"styles/css/layout.css": "styles/less/layout.less",
				}
			}
		},
    cssmin:
		{
		    options:
			{
			    report: "min",					// min, gzip (slower)
			    advanced: true,					//set to false to disable advanced optimizations - selector & property merging, reduction, etc.
			    aggressiveMerging: true,		//set to false to disable aggressive merging of properties
			    debug: false,					// set to true to get minification statistics under stats property (see test/custom-test.js for examples)
			    keepBreaks: false,				// whether to keep line breaks (default is false)
			    keepSpecialComments: '0',		//* for keeping all (default), 1 for keeping first one only, 0 for removing all
			    processImport: true,			// whether to process @import rules
			    rebase: false,					// set to false to skip URL rebasing
			    relativeTo: '',					// path to resolve relative @import rules and URLs
			    root: '',						// path to resolve absolute @import rules and rebase relative URLs
			    roundingPrecision: -1,			// rounding precision; defaults to 2; -1 disables rounding
			    shorthandCompacting: true,		// set to false to skip shorthand compacting (default is true unless sourceMap is set when it's false)
			    sourceMap: false,				// exposes source map under sourceMap property, e.g. new CleanCSS().minify(source).sourceMap (default is false) If input styles are a product of CSS preprocessor (LESS, SASS) an input source map can be passed as a string.
			    target: '',						// path to a folder or an output file to which rebase all URLs
			},
		    sitefiles:
			{
			  files:
				{
				  'styles/main.min.css':['styles/css/layout.css']
				}
			}
		}
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('styles', ['less', 'cssmin:sitefiles']);
  grunt.registerTask('dev', ['less', 'watch']);

};
