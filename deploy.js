var fs = require('fs-extra');


fs.removeSync('dist');
fs.copy('task_00', 'dist/task_00', errorHandler());
fs.copy('task_01', 'dist/task_01', errorHandler());
fs.copy('task_02', 'dist/task_02', errorHandler());
fs.copy('task_03', 'dist/task_03', errorHandler());
fs.copy('task_04', 'dist/task_04', errorHandler());
fs.copy('task_05', 'dist/task_05', errorHandler());
fs.copy('task_06', 'dist/task_06', errorHandler());
fs.copy('task_07', 'dist/task_07', errorHandler());
fs.copy('index.html', 'dist/index.html', errorHandler());
fs.copy('reset.css', 'dist/reset.css', errorHandler());
fs.copy('style.css', 'dist/style.css', errorHandler());


function errorHandler() {
    return function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('done!');
    };
}
