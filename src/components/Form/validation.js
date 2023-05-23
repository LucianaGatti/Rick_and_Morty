const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/;

const validation = (data) => {
  let errors = {};

  if (!regexEmail.test(data.email)) {
      errors.e1 = 'Ingresa un email válido.'
  }

  if (!data.email) {
      errors.e2 = 'El nombre de usuario no puede estar vacío'
  }

  if (data.email.length > 35) {
      errors.e3 = 'El nombre de usuario no puede tener mas de 35 caracteres'
  }
  if (!/.*\d+.*/.test(data.password)) {
      errors.p1 = 'Al menos un número'
  }
  if (data.password.length < 6 || data.password.length > 10) {
      errors.p2 = 'Tiene que tener una longitud entre 6 y 10 caracteres'
  }
  return errors;

}

export default validation;
