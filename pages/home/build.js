// fs = require('fs');

// fs.readdir(process.cwd(), function (err, files) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(files);
// });

// var finder = require('findit').find(__dirname);

// //This listens for directories found
// finder.on('directory', function (dir) {
//   console.log('Directory: ' + dir + '/');
// });

// //This listens for files found
// finder.on('file', function (file) {
//   console.log('File: ' + file);
// });

var finder = require('findit')(process.argv[2] || '.');
var path = require('path');
 



finder.on('directory', function (dir, stat, stop) {
    // if (dir.match(/\*.css$/)) {
    //   console.log(dir)
    //   console.log('inside')
    // }
    // console.log(dir)
    // console.log('hello')

    var base = path.basename(dir);
    if (base === '.git' || base === 'node_modules') stop()
    // else console.log(dir + '/')
});

let i = 0
finder.on('file', function (file, stat) {
  

    if (file.match(/css$/)) {
      i++
      console.log(file, i);
    }
    
});
 
// finder.on('link', function (link, stat) {
//     console.log(link);
// });