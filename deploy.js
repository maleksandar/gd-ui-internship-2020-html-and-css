var fs = require('fs-extra');

// Must be the same as in Netlify configuration
const outputDir = 'dist';

const filesToCopy = [
    'task_00',
    'task_01',
    'task_02',
    'task_03',
    'task_04',
    'task_05',
    'task_06',
    'task_07',
    'index.html',
    'reset.css',
    'style.css',
];

filesToCopy.forEach(fileName => {
    fs.copy(fileName, `${outputDir}/${fileName}`, copyFinnishHandler(fileName, outputDir));
});

function copyFinnishHandler(fileName, destination) {
    return function (err) {
        if (err) {
            return console.error(err);
        }
        console.log(`Filed copied from '${fileName} to ${destination}/${fileName} successfully.`);
    };
}
