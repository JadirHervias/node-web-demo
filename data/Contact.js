class Contact {
  constructor(
    id,
    nombre,
    apellido,
    correo,
    telefono,
    fechaNacimiento,
    mensaje
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.telefono = telefono;
    this.fechaNacimiento = fechaNacimiento;
    this.mensaje = mensaje;
  }
}

module.exports = Contact;
