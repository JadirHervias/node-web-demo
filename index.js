const http = require('http');
const router = require('./router');

const port = 4000;

http.createServer(router).listen(port, () => {
  console.log(`Server listening on ${port}`);
});
