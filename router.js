const { getFilePath, getContentType } = require('./mimeType');
const fs = require('fs');

/**
 * Application router
 * @param {Request} req Endpoint request object.
 * @param {Response} res Endpoint response.
 */
const router = (req, res) => {
  const filePath = getFilePath(req);
  const contentType = getContentType(filePath);

  console.log(req);
  console.log(filePath);

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code == 'ENOENT') {
        fs.readFile('./404.html', (error, content) => {
          res.writeHead(200, { 'Content-Type': contentType });
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
    switch (filePath) {
      case 'favicon.ico':
        res.write();
        res.end(content, 'utf-8');
        break;
      case 'bienvenido.html':
        res.end(content, 'utf-8');
        break;
      case 'nosotros.html':
        res.end(content, 'utf-8');
        break;
      case 'servicios.html':
        res.end(content, 'utf-8');
        break;
      case 'contactos.html':
        res.end(content, 'utf-8');
        break;
      default:
        res.writeHead(404, { 'Content-Type': 'text/html' });
        // res.write('404');
        res.end(content, 'utf-8');
        break;
    }
  });
};

module.exports = router;
