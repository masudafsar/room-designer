const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const dependents = require('gulp-dependents');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename')
const fs = require('fs');

const src_folder = './src/';
const src_assets_folder = src_folder + 'assets/';
const src_statics_folder = src_folder + 'statics/';
const dist_folder = './dist/';
const dist_assets_folder = dist_folder + 'assets/';
const dist_statics_folder = dist_folder + 'statics/';

gulp.task('clear', () => {
    return del([
        dist_folder,
    ]);
});

gulp.task('statics', () => {
    return gulp.src([
        src_statics_folder + '**/*.*',
    ], {
        base: src_statics_folder,
        since: gulp.lastRun('statics')
    })
        .pipe(gulp.dest(dist_statics_folder))
        .pipe(browserSync.stream());
});

gulp.task('html', () => {
    return gulp.src([
        src_folder + '**/*.html',
    ], {
        base: src_folder,
        since: gulp.lastRun('html')
    })
        .pipe(gulp.dest(dist_folder))
        .pipe(browserSync.stream());
});

gulp.task('js', () => {
    return gulp.src([
        src_assets_folder + 'js/**/*.js',
    ], {
        base: src_assets_folder,
        since: gulp.lastRun('js')
    })
        .pipe(gulp.dest(dist_assets_folder))
        .pipe(browserSync.stream());
});

gulp.task('fonts', () => {
    return gulp.src([
        src_assets_folder + 'fonts/**/*.*',
    ], {
        base: src_assets_folder,
        since: gulp.lastRun('fonts')
    })
        .pipe(gulp.dest(dist_assets_folder))
        .pipe(browserSync.stream());
});

gulp.task('ejs', () => {
    const siteData = JSON.parse(fs.readFileSync('./data.json'));
    return gulp.src([
        src_folder + '*.ejs',
    ])
        .pipe(ejs({data: siteData}))
        .pipe(rename({extname: '.html'}))
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

gulp.task('build', gulp.series('clear', 'statics', 'html', 'fonts', 'js', 'ejs', 'sass'));

gulp.task('dev', gulp.series('statics', 'html', 'fonts', 'js', 'ejs', 'sass'));

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
        src_folder + '**/*.ejs',
        src_assets_folder + '**/*.*',
        src_statics_folder + '**/*.*',
        'data.json',
    ];

    gulp.watch(watch, gulp.series('dev'))
        .on('change', browserSync.reload);
});

gulp.task('default', gulp.series('build', gulp.parallel('serve', 'watch')));
