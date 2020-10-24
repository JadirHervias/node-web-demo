const http = require('http');
const router = require('./router');

const PORT = 4000;

http.createServer(router).listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
