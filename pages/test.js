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
// console.log(classes)

finder.on('directory', function (dir, stat, stop) {
    // if (dir.match(/\*.css$/)) {
    //   console.log(dir)
    //   console.log('inside')
    // }
    //console.log('dir', dir)
    // console.log('hello')

    var base = path.basename(dir);
    if (base === '.git' || base === 'node_modules') stop()
    // else console.log(dir + '/')
});

let i = 0
finder.on('file', function (file, stat) {
  //console.log('file', file)

    if (file.match(/css$/)) {
      let endpoint = file.match(/(?<=\/)[\w\-_]*.css$/g) === null ? false : file.match(/(?<=\/)[\w\-_]*.css$/g)[0]
      
      if(endpoint && classes.includes(endpoint)) {
        let regex = /(?<=\/)\w*(?=\.)/
        console.log('file', file)
        console.log(regex.test(file))
        if (regex.test(file)) {
          let mediaType = file.match(regex)[0]
          console.log(mediaType)
          try {
            var data = fs.readFileSync(file, 'utf8')
            var type;
            
          } catch (err) {
            console.error(err)
          }
          switch (mediaType) {
            case 'mobile':
              type = "@media (max-width: 689px) {"
              attachCSS(data, type)
            break
            case 'tablet':
              type = "@media (min-width: 690px) {"
              attachCSS(data, type)
            break
            case 'desktop':
              type = "@media (min-width: 1120px) {"
              attachCSS(data, type)
            break
            default:
              fs.appendFile('test.css', data + '\n\n', err => {
                if (err) {
                  console.error(err)
                }
                  return
            })

          }
          // fs.appendFile('test.css', data, err => {
          //   if (err) {
          //     console.error(err)
          //     return
          //   }
          //   //done!
          // })
        }
        
          //console.log(file, i); 
      }

      
    }
    
});






///(?<!\w)[a-z._-]+css$/

