var gulp = require('gulp');
var util = require('gulp-util');
var ts = require('gulp-typescript');
var path = require('path');
var del = require('del');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('typescript', () => {
	return del(tsProject.config.compilerOptions.outDir)
		.then(() => {
			return tsProject.src()
				.pipe(tsProject())
				.js.pipe(gulp.dest(tsProject.config.compilerOptions.outDir));
		});
});

gulp.task('types', () => {
	return del('definitions')
		.then(() => {
			return tsProject.src()
				.pipe(tsProject())
				.dts.pipe(gulp.dest('definitions'));
		})
})

gulp.task('typescript:watch', () => {
	return 	gulp.watch(tsProject.config.include, ['typescript']);
});

gulp.task('build', ['typescript', 'types']);
gulp.task('build:watch', ['typescript:watch']);
