const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const Validation = (userData) => {
  let errors = {};
  if (!regexEmail.test(userData.username)) {
    errors.username = "El email es invalido";
  }
  if (!userData.username) {
    errors.username = "el email no puede estar vacio ";
  }
  if (userData.username.length > 35) {
    errors.username = "el email no puede ser mayor a 35 carecteres";
  }
  if (!userData.password.match(/\d/)) {
    errors.password = "debe contener un numero";
  }

  // if (userData.password.length > 6 || userData.password.length < 10) {
  //  errors.password =
  //  "la contraseña tiene que tener una longitud entre 6 y 10 caracteres";
  //}
  return errors;
};
export default Validation;
