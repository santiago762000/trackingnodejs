var http=require('http');
var https = require('https');
var server=http.createServer();
server.on('request', function (req, res, https) {
var options = {
  hostname: '131940.qld.gov.au',
  path: '/api/json/v1/events/incident',
  method: 'GET'
};

//http://whateverorigin.org/get?url=http%3A%2F%2F131940.qld.gov.au%2Fapi%2Fjson%2Fv1%2Fevents%2Froadworks&callback=JSON_CALLBACK&state=qld&when=now

var https = require('http');
var req1 = https.request(options, function(res1) {
  res1.on('data', function(d) {
  //To print it on browser
  res.writeHead(200, {'Content-Type': 'text/plain'});
           res.end(d);
	//To print it on console
    process.stdout.write(d);
  });
});
req1.end();
req1.on('error', function(e) {
  console.error(e);
});


           
});
         
server.listen(5555);
console.log('This server is running in port 5555');





