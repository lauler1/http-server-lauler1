var fs = require('fs'),
    http = require('http');

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
    }else if (req.url.includes(".html")){
      res.writeHead(200, {'Content-Type': 'application/xhtml'});
      console.log('application/xhtml+xml');
    }else{
      res.writeHead(200, {'Content-Type': 'text/plain'});
      console.log('text/plain');
    }


    res.writeHead(200);
    res.end(data);
  });
}).listen(8080); //the server object listens on port 8080

console.log('Server running on port 8080');
