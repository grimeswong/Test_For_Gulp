/***** Declare dependencies and create tasks *****/
var gulp = require('gulp');
var sass = require('gulp-sass');	//Requires the gulp-sass plugin
var imagemin = require('gulp-imagemin'); //Requires the gulp-imagemin plugin // npm install gulp-imagemin --save-dev
var changed = require('gulp-changed'); // don't process the unchanged files
var cleanCSS = require('gulp-clean-css'); // Requires the gulp-clean-css plugin // npm install gulp-clean-css --save-dev
var autoprefix = require('gulp-autoprefixer'); // Requires the gulp-autoprefixer plugin // npm install gulp-autoprefixer --save-dev
var concat = require('gulp-concat'); //Requires the gulp-concat plugin // npm install gulp-autoprefixer --save-dev


/***** Sample only *****
gulp.task('task-name', function() {
	return gulp.src('source-files') //Get source files with gulp.src
	.pipe(aGulpPlugin())	          //Sends it through a gulp plugin
	.pipe(gulp.dest('destination')) //Outputs the file in the destination folder
});
/***** Sample only *****/

/***** Combine tasks in Sefault task *****/
gulp.task ('default',['watch','sass'], function() {

});

/***** print out "Hello World" *****/
gulp.task ('hello', function () {
	console.log('Hello Grimes, well done, you make it!!!');
});

/***** Compile sass to css *****/
gulp.task('sass', function () {
	return gulp.src('work/src/styles/**/*') // source in root folder and child folders
  .pipe(changed('work/build/styles')) //do not process the unchnaged files
	.pipe(sass()) //Using gulp-sass
	.pipe(gulp.dest('work/build/styles'))
});

/***** Watch the task change, if any chnage in the folder, the "sass" will be process and outputs css files to the destination folder *****/
gulp.task('watch', function() {

	// gulp.watch('files-to-watch', ['tasks','to','run']); // gulp watch syntax
	gulp.watch('work/src/styles/**/*', ['sass']); //gulp watch
});

/***** Compress the image file and outputs to the dest folder ******/
gulp.task('imagemin', function() {
	var img_src ='work/src/images/**/*', img_dest = 'work/build/images';
	gulp.src(img_src)
	.pipe(changed(img_dest))
	.pipe(imagemin())
	.pipe(gulp.dest(img_dest));
});

/***** Minify the css file *****/
gulp.task ('styles', function() {
  gulp.src('work/src/styles/**/*')
  .pipe(concat('styles.css')) //concatenates the CSS files and 'autopreix' plugin indicates the current and the previous version of all browsers
  .pipe(autoprefix('last 2 versions'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('work/build/styles/minify'));
});
