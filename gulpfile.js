var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('jasmine', function () {
  exec('npm test', function(err, stdout, stderr) {
    console.log(stdout);
  });
});

gulp.task('watch-jasmine', function() {
  gulp.watch(['lib-cjs/**', 'spec/**'], ['jasmine']);
});

// Compile ES6 syntax to CommonJS
gulp.task('commonjs', function () {
  exec('./node_modules/.bin/traceur --dir lib lib-cjs --modules=commonjs', function(err, stdout, stderr) {
    console.log(stdout);
  });
});

gulp.task('watch-commonjs', function() {
  gulp.watch(['lib/**'], ['commonjs']);
});
