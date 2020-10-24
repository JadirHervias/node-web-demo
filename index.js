const http = require('http');
const router = require('./router');

const port = 4000;

app.use('templates/data_lib', express.static(path.join(__dirname, 'data_lib')));

http.createServer(router).listen(port, () => {
  console.log(`Server listening on ${port}`);
});
