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

// var data = fs.readFileSync('index.html');
// console.log("Synchronous read: " + data);

// console.log("Program Ended");

//(?<=class=")[\w\d\W]*(?=")

const allFileContents = fs.readFileSync('index.html', 'utf-8');
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
console.log(classes)



const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`)