var http = require('http');

http.get('http://example.com', function(res) {
  // var body = res.setEncoding('utf8');
  // console.log('body', body);
  res.on('data', function(data) {
    // console.log('data', data);

    data.split('\n').forEach(function(d) {
      console.log(d);
    });
  });
});
