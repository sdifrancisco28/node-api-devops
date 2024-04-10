const { createServer } = require('node:http');
const hostname = '0.0.0.0';
const port = 3000;
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello World');
});

app.listen(port, hostname, () => {
  console.log(`The server is running at http://${hostname}:${port}`);
});