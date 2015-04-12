var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var ext = process.argv[3];

fs.readdir(dirPath, function(err, list) {
  list.forEach(function(fileName) {
    var extName = path.extname(fileName).replace('.', '');

    if (extName === ext) {
      console.log(fileName);
    }
  });
});

// var fs = require('fs')
// var path = require('path')
//
// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })
