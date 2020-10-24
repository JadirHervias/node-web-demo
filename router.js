const { getFilePath, getContentType } = require('./utils/mimeType');
const fs = require('fs');
const newContactHtml = require('./crud/contact');

/**
 * Application router
 * @param {Request} req Endpoint request object.
 * @param {Response} res Endpoint response.
 */
const router = (req, res) => {
  const filePath = getFilePath(req);
  const contentType = getContentType(filePath);
  if (req.url === '/contactos/nuevo' && req.method === 'POST') {
    let body = '';
    req.on('data', (data) => {
      body += data;
    });

    req.on('end', () => {
      let payload = {};
      body.split('&').forEach((c) => ([key, payload[key]] = c.split('=')));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(newContactHtml(payload));
    });
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code == 'ENOENT') {
        fs.readFile('./404.html', (error, content) => {
          res.writeHead(404, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
        });
      }
      res.writeHead(500);
      res.end(
        'Lo sentimos, comunicate con el administrador de la pagina para evaluar este error: ' +
          error.code +
          ' ...\n'
      );
      res.end();
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content, 'utf-8');
  });
};

module.exports = router;
