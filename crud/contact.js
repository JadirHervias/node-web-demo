const { write } = require('../data/fileMapper');
const randomId = require('../utils/randomId');

const newContactHtml = (contact) => {
  const newContact = {
    ...contact,
    id: randomId(),
  };

  write(newContact, 'contacts');
  return Buffer.from(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nuevo contacto</title>
  </head>
  <body>
    <h3>ID: ${newContact.id}</h3>
    <h3>NOMBRE: ${newContact.nombre}</h3>
    <h3>APELLIDO: ${newContact.apellido}</h3>
    <h3>CORREO: ${newContact.correo}</h3>
    <h3>TEL&EacuteFONO: ${newContact.telefono}</h3>
    <h3>FECHA DE NACIMIENTO: ${newContact.fechaNacimiento}</h3>
    <h3>MENSAJE: ${newContact.mensaje}</h3>
  </body>
</html>
`);
};

module.exports = newContactHtml;
