// *** Плагины ***
const gulp 			    = require('gulp');

// Переименование
const rename 			  = require('gulp-rename');

// SCSS
const sass 			    = require('gulp-sass');

// Префиксы к css
const autoprefixer	= require('gulp-autoprefixer');

// Source map
const sourcemaps		= require('gulp-sourcemaps');

// Синхронизация браузера
const browserSync 	= require('browser-sync').create();

// Улучшение структуры css кода
const csscomb       = require('gulp-csscomb');

// Минификация html кода
const htmlmin       = require('gulp-htmlmin');

// Minification of css
const csso          = require('gulp-csso');

// Оптимизация css кода
const uncss         = require('gulp-uncss');

// Минификация JS кода
const uglify        = require('gulp-uglify');

// Исправление примитивных ошибок в коде
const fixmyjs       = require("gulp-fixmyjs");

// Проверка и корректрировка читабельности JS кода
const jscs          = require('gulp-jscs');

// Очистка
const clean         = require('gulp-clean');

// Удаление файлов
const del           = require('del');

// Сжатие изображений (всех, кроме PNG)
const imagemin      = require('gulp-imagemin');

// Обработка scss ошибок
const plumber       = require('gulp-plumber');
const notify        = require('gulp-notify');
// Параметры

// Дирректории проэктов
var javascript_dir = 'js';
var js_dir         = javascript_dir;
var js_main_file   = 'script.js'

var styles_dir     = 'styles'
var css_dir        = `${styles_dir}/css`;
var css_main_file  = 'style.css'
var css_min_file   = 'style.min.css'

var scss_dir       = `${styles_dir}/scss`;
var scss_main_file = 'style.scss'

var fonts_dir      = `${styles_dir}/fonts`

var php_dir        = 'php';
var img_dir        = 'img';

var main_file = 'index.php';

// Работает!
// Функции для выполнения
function scss(event) {
  // Выборка файла для работы 
  return gulp.src(`./src/${scss_dir}/${scss_main_file}`)
  	// Инициализация Source Map
  	.pipe( sourcemaps.init() )

    // Компилирование css -> scss(sass)
    .pipe( sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }) )

    // Улучшение структуры CSS файла
    .pipe( csscomb() )
    .pipe( gulp.dest(`./src/${css_dir}/`) )

  	// Проверка на ошибки (Если ошибка, то код дальше не пойдет!)
  	.pipe( plumber({
      errorHandler: notify.onError("Error: <%= error.message %>"), title: "Ошибка"
    }))
  	
  	// Добавление префиксов и их поддержки для последних 2-х версий
  	.pipe( autoprefixer({
  		supports: true,
  		overrideBrowserslist: ['last 2 versions'],
  		cascade: false
  	}) )

    // Минификация CSS кода
    .pipe( csso() )

  	// Добавление префиксов в название файла, запись изменений в source map файл, выгрузка, запись в 
  	.pipe( rename({suffix: '.min'}) )
  	.pipe( sourcemaps.write('./') )
  	.pipe( gulp.dest(`./src/${css_dir}/`) )
  	.pipe( browserSync.stream() );
}

// Перезагрузка браузера (для обновление HTML)
function browserReload() {
	browserSync.reload();
}

// Работает!
function html(event) {
  return gulp.src(`./src/${main_file}`)
    .pipe( browserSync.stream() );
}

// Работает!
function javascript(event) {
  return gulp.src(`./src/${js_dir}/${js_main_file}`)
    .pipe( fixmyjs({}) )
    .pipe( browserSync.stream() );
}

function php(event) {
  // PHP code...
  return gulp.src(`./**/*.php`)
    .pipe( browserSync.stream() );
}

// Работает! ( сжимает все фотки, кроме .png )
function img(event) {
  return gulp.src([
    `./src/${img_dir}/**/*.png`,
    `./src/${img_dir}/**/*.jpg`,
    `./src/${img_dir}/**/*.jpeg`,
    `./src/${img_dir}/**/*.webp`,
    `./src/${img_dir}/**/*.svg`,

    `!./src/${img_dir}/**/*.min.png`,
    `!./src/${img_dir}/**/*.min.jpg`,
    `!./src/${img_dir}/**/*.min.jpeg`,
    `!./src/${img_dir}/**/*.min.webp`,
    `!./src/${img_dir}/**/*.min.svg`,
    ])
    .pipe(imagemin({
      optimizationLevel: 3,
      quality: 100,
      progressive: true
    }))
    .pipe( rename({suffix: '.min'}))
    .pipe( gulp.dest(`./src/${img_dir}/`) );
  event();
}

function del_min_dirs(event) {
  del(`./src/${img_dir}/**/*.min`);
}

function fonts(event) {
  // ?
}

// Наблюдание за изменениями в файлах
async function fileWatcher() {
  scss();
  javascript();
  php();
  img();
  del_min_dirs();

  gulp.watch(`./src/${scss_dir}/*.scss`, scss);
  gulp.watch(`./src/*.html`, html);
  gulp.watch(`./src/${js_dir}/*.js`, javascript);

  gulp.watch(`./src/${php_dir}/**/*.php`, php);
  gulp.watch(`./src/${main_file}`, php);
}

// Создание Localhost сервера
function browser(event) {
	browserSync.init({
		proxy: 'https://Fesco',
    port: 8282
	});
	event();
}

function build(event) {
	// Сборка
  del(`./dist/`);

  img();
  del_min_dirs();
  fonts();

    // CSS
  // min
	gulp.src(`./src/${css_dir}/${css_min_file}`)
    .pipe( gulp.dest(`./dist/${css_dir}/`) );

  // normal
  gulp.src(`./src/${css_dir}/${css_main_file}`)
    .pipe( gulp.dest(`./dist/${css_dir}/`) );

    // JS
  // min
  gulp.src(`./src/${js_dir}/${js_main_file}`)
    .pipe( uglify() )
    .pipe( rename({suffix: '.min'}) )
    .pipe( gulp.dest(`./dist/${js_dir}/`) );

  // normal
  gulp.src(`./src/${js_dir}/${js_main_file}`)
    .pipe( gulp.dest(`./dist/${js_dir}/`) );

  // Folder with plugins
  gulp.src(`./src/${js_dir}/**`)
    .pipe( gulp.dest(`./dist/${js_dir}/`) );

  // Php
  gulp.src(`./src/${php_dir}/**`)
    .pipe( gulp.dest(`./dist/${php_dir}/`) );
    
  // Img
  gulp.src(`./src/${img_dir}/**`)
    .pipe( gulp.dest(`./dist/${img_dir}/`) );

  // Html
  gulp.src(`./src/${main_file}`)
    .pipe( htmlmin ({
      collapseWhitespace: true,
      html5: true,
      removeComments: true,
      removeScriptTypeAttributes: true,
      useShortDoctype: true
    }))
    // .pipe( rename({suffix: '.min'}) )
    .pipe( gulp.dest(`./dist/`) );

	event();
}

// Стандартные функции, выполняющиеся последовательно
gulp.task('default', gulp.parallel(browser, fileWatcher));
gulp.task(build, gulp.series(build, build));
gulp.task('img', gulp.series(img, del_min_dirs));
gulp.task(fonts);

// Первый вызов build удаляет папку dist, а второй создает