const { src, dest, series, parallel } = require("gulp");
const sass = require("gulp-sass");
const clean = require("gulp-clean");
const rename = require("gulp-rename");
const cssnano = require("gulp-cssnano");
const maps = require("gulp-sourcemaps");

sass.compiler = require("node-sass");

function cleanDir() {
  return src("theme/css/*", { read: false, allowEmpty: true }).pipe(clean());
}

function css() {
  return src("theme/scss/mcl-theme.scss")
    .pipe(sass({ includePaths: ["node_modules"] }))
    .pipe(maps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(maps.write("./"))
    .pipe(dest("theme/css"));
}

function nano() {
  return src("theme/css/mcl-theme.css")
    .pipe(rename("mcl-theme.min.css"))
    .pipe(maps.init())
    .pipe(cssnano())
    .pipe(maps.write("/"))
    .pipe(dest("theme/css"));
}

exports.cleanDir = cleanDir;
exports.css = css;
exports.nano = nano;
exports.default = series(cleanDir, css, nano);
