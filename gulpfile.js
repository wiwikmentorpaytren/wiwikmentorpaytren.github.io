var gulp = require('gulp');
var sass = require('gulp-sass');
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var pkg = require('./package.json');
var browserSync = require('browser-sync').create();
var del = require('del');

/* Gulp Study 
https://github.com/gulpjs/gulp

https://fettblog.eu/gulp-4-parallel-and-series/
https://www.youtube.com/watch?v=jgcfEhiCkG4
https://gulpjs.org/recipes/running-tasks-in-series
https://www.justinmccandless.com/post/a-tutorial-for-getting-started-with-gulp/
*/


var bases = {
  dev: '.',
  dist: './dist',
 };


 function PrepareVendorAssets(bdir)
 {
  // Bootstrap
  gulp.src([
    './node_modules/bootstrap/dist/**/*',
    '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
  ])
  .pipe(gulp.dest( bdir + '/vendor/bootstrap'))

// Font Awesome
gulp.src([
    './node_modules/font-awesome/**/*',
    '!./node_modules/font-awesome/{less,less/*}',
    '!./node_modules/font-awesome/{scss,scss/*}',
    '!./node_modules/font-awesome/.*',
    '!./node_modules/font-awesome/*.{txt,json,md}'
  ])
  .pipe(gulp.dest( bdir + '/vendor/font-awesome'))

// jQuery
gulp.src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
  .pipe(gulp.dest( bdir + '/vendor/jquery'))

// jQuery Easing
gulp.src([
    './node_modules/jquery.easing/*.js'
  ])
  .pipe(gulp.dest( bdir + '/vendor/jquery-easing'))

// Simple Line Icons
gulp.src([
    './node_modules/simple-line-icons/fonts/**',
  ])
  .pipe(gulp.dest( bdir + '/vendor/simple-line-icons/fonts'))

gulp.src([
    './node_modules/simple-line-icons/css/**',
  ])
  .pipe(gulp.dest( bdir + '/vendor/simple-line-icons/css'))
 }

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {
  PrepareVendorAssets( bases.dev )
});

/////// Compile SCSS
function css_compile( bdir ) {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest( bdir + '/css'))
}

gulp.task('css:compile', function() {
  css_compile( bases.dev );
});


////// Minify CSS
function css_minify(bdir) {
  return gulp.src([
      bdir +'/css/*.css',
      '!' + bdir + '/css/*.min.css'
    ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest( bdir + '/css'))
    .pipe(browserSync.stream());
}

gulp.task('css:minify', ['css:compile'], function() {
  css_minify( bases.dev );
});


// CSS
gulp.task('css', ['css:compile', 'css:minify']);

// Default task
gulp.task('default', ['css', 'vendor']);

// Configure the browserSync task
function MybrowserSync(bdir)
{
  browserSync.init({
    server: {
      baseDir:  bdir + "/"
    }
  });
}

gulp.task('browserSync', function() {
  MybrowserSync( bases.dev )
});

////////////// Dev task
function MyWatch(bdir)
{
  console.log( 'Base Dir used [' + bdir + ']' );

  gulp.watch( bdir + '/scss/*.scss', ['css']);
  gulp.watch( bdir + '/*.html', browserSync.reload);
}

gulp.task('dev', ['css', 'browserSync'], function() {
  MyWatch( bases.dev )
});

function CopyDev2Dist(divdir, distdir)
{
  // vendor
  gulp.src( [ divdir + '/vendor/**/*' ])
  .pipe(gulp.dest( distdir + '/vendor'))

  // js
  gulp.src( [ divdir + '/js/**' ])
  .pipe(gulp.dest( distdir + '/js'))  

  // css
  gulp.src( [ divdir + '/css/**' ])
  .pipe(gulp.dest( distdir + '/css'))
  
  // img
  gulp.src( [ divdir + '/img/**' ])
  .pipe(gulp.dest( distdir + '/img'))

  // html
  gulp.src( [ divdir + '/index.html' ])
  .pipe(gulp.dest( distdir + '/'))
}


gulp.task('dist', function() {
  CopyDev2Dist( bases.dev, bases.dist );
});
