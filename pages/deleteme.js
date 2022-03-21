fs = require('fs');

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
 

function attachCSS(content, type) {
  fs.appendFile('test.css', type + '\n\n\t', err => {
    if (err) {
      console.log(err)
      return
    }
  })

  fs.appendFile('test.css', content + '\n', err => {
    if (err) {
      console.error(err)
      return
    }
    //done!
  })

  fs.appendFile('test.css', '}' + '\n\n', err => {
    if (err) {
      console.log(err)
      return
    }
  })
}





const allFileContents = fs.readFileSync('./web-design/web-design.html', 'utf-8');
const regex = /(?<=class=")([\w\d\W]+?)\"|\w$/;
let linesArray = []
let classes = []


allFileContents.split(/\r?\n/).forEach(line =>  {
  linesArray.push(line);
});

for (let line of linesArray) {
  if (regex.test(line)) {
    let match = line.match(regex)[1]
    let classGroup = match === undefined ? undefined : match.split(' ')
    if (classGroup) {
      for (let name of classGroup) {
        if (!(classes.includes(name))) {
          classes.push(name + ".css")
        }
      }
      
      //console.log(typeof match)
    }
  }
  
}
let content = classes

fs.appendFile('test2.css', content + '\n', err => {
    if (err) {
      console.error(err)
      return
    }
    //done!
  })