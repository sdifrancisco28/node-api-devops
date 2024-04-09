const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello World');
});

app.listen(port, hostname, () => {
  console.log(`Server Running at http://${hostname}:${port}`);
});