var fs = require('fs'),
    http = require('http');

const http_port = 8080

http.createServer(function (req, res) {

  console.log("req.url="+req.url);
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      console.log("err="+err);
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }

    if(req.url.includes(".js")){
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      console.log('text/javascript');
    }else if (req.url.includes(".css")){
      res.writeHead(200, {'Content-Type': 'text/css'});
      console.log('text/css');
    }else{
      res.writeHead(200);
      console.log('text/plain');
    }
    
    res.end(data);
  });
}).listen(http_port); //the server object listens on port

console.log('Server running on port '+http_port);
