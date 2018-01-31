const gulp = require('gulp');
const ts = require('gulp-typescript');
const gulpSequence = require('gulp-sequence');

const package = ts.createProject('tsconfig.json');
const source = 'src';
const distId = process.argv.indexOf('--dist');
const dist = distId < 0 ? 'node_modules/nest-router' : process.argv[distId + 1];

gulp.task('default', function() {
  modules.forEach(module => {
    gulp.watch([`${source}/${module}/**/*.ts`, `${source}/${module}/*.ts`], [module]);
  });
});

gulp.task('build', () => {
  return package
    .src()
    .pipe(package())
    .pipe(gulp.dest(dist));
});

gulp.task('move', function() {
  gulp.src(['node_modules/nest-router/**/*']).pipe(gulp.dest('example/node_modules/nest-router'));
});
