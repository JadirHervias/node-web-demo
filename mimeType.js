const getFilePath = ({ url }) => {
  const filePath = '.' + request.url;

  if (filePath == './') {
    filePath = './index.html';
  }

  return filePath;
};

const getContentType = (filePath) => {
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = 'text/html';
  const mimeTypes = {
    '.html': 'text/html',
    '.ico': 'image/x-icon' || 'image/vnd.microsoft.icon',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg': 'application/image/svg+xml',
  };
  contentType = mimeTypes[extname] || 'application/octet-stream';
  return contentType;
};
