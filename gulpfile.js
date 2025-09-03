import gulp from 'gulp';
import sass from 'gulp-sass';
import * as dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';

const sassCompiler = sass(dartSass);
const sassOptions = {
  outputStyle: 'expanded'
};

// Compile SASS
function compileSass() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassCompiler(sassOptions).on('error', sassCompiler.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
}

// Watch files
function watchFiles() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  
  gulp.watch('src/styles/**/*.scss', compileSass);
  gulp.watch('*.html').on('change', browserSync.reload);
}

// Define complex tasks
const build = gulp.series(compileSass);
const watch = gulp.parallel(watchFiles);

// Export tasks
export { compileSass, watch, build };
export default build; 