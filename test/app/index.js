var http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World\n' + process.env.PATH + '\n')
}).listen(process.env.PORT, '127.0.0.1')

console.log('Server running on port', process.env.PORT)
