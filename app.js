const { createServer } = require('node:http');
require('newrelic');
const hostname = '0.0.0.0';
const port = 3000;
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello World, How are u?');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});