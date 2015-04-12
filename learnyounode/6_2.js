var fs = require('fs');
var path = require('path');


module.exports = function(dirPath, extName, callback) {
  fs.readdir(dirPath, function(err, list) {
    if (err) {
      return callback(err);
    }
    var ary = [];
    list.forEach(function(fileName) {
      if (path.extname(fileName) === ('.' + extName)) {
        ary.push(fileName);
      }
    });

    callback(null, ary);
  });
};
