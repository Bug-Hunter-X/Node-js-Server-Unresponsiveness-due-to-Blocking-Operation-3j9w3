const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a long-running task asynchronously
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a 1-second delay
  //Alternatively use async/await with a setImmediate
  //setImmediate(() => {
  //  res.writeHead(200, { 'Content-Type': 'text/plain' });
  //  res.end('Hello World!');
  //});

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});