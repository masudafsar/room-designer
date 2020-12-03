const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const dependents = require('gulp-dependents');

const src_folder = './src/';
const src_assets_folder = src_folder + 'assets/';
const dist_folder = './dist/';
const dist_assets_folder = dist_folder + 'assets/';

gulp.task('clear', () => {
    return del([
        dist_folder,
    ]);
});

gulp.task('html', () => {
    return gulp.src([
        src_folder + '**/*.html'
    ], {
        base: src_folder,
        since: gulp.lastRun('html')
    })
        .pipe(gulp.dest(dist_folder))
        .pipe(browserSync.stream());
});

gulp.task('sass', () => {
    return gulp.src([
        src_assets_folder + 'sass/**/*.sass',
        src_assets_folder + 'scss/**/*.scss'
    ], {since: gulp.lastRun('sass')})
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(dependents())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dist_assets_folder + 'css'))
        .pipe(browserSync.stream());
});

gulp.task('build', gulp.series('clear', 'html', 'sass'));

gulp.task('dev', gulp.series('html', 'sass'));

gulp.task('serve', () => {
    return browserSync.init({
        server: {
            baseDir: ['dist']
        },
        port: 3000,
        open: false
    });
});

gulp.task('watch', () => {
    const watch = [
        src_folder + '**/*.html',
        src_assets_folder + 'sass/**/*.sass',
        src_assets_folder + 'scss/**/*.scss',
        src_assets_folder + 'js/**/*.js',
    ];

    gulp.watch(watch, gulp.series('dev'))
        .on('change', browserSync.reload);
});

gulp.task('default', gulp.series('build', gulp.parallel('serve', 'watch')));
