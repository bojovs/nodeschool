var listFiles = require('./6_2');

var dirPath = process.argv[2];
var extName = process.argv[3];

listFiles(dirPath, extName, function(err, files) {
  files.forEach(function(fileName) {
    console.log(fileName);
  });
});


// solution.js:
//
//     var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]
//
//     filterFn(dir, filterStr, function (err, list) {
//       if (err)
//         return console.error('There was an error:', err)
//
//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })
//
// ────────────────────────────────────────────────────────────────────────────────
// solution_filter.js:
//
//     var fs = require('fs')
//     var path = require('path')
//
//     module.exports = function (dir, filterStr, callback) {
//
//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)
//
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
//
//         callback(null, list)
//       })
//     }
