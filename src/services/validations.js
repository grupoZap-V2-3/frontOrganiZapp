export const validatePassword = (passwordValue) => {
  const validCharacters = {
    lowerCaseLetters: /[a-z]+/,
    upperCaseLetters: /[A-Z]+/,
    numbers: /[0-9]+/,
    minLength: 7,
  }
  const hasValidLength = passwordValue.length > validCharacters.minLength;
  const hasNumber = passwordValue.match(validCharacters.numbers);
  const hasUpperCaseLetter = passwordValue.match(validCharacters.upperCaseLetters);
  const hasLowerCaseLetter = passwordValue.match(validCharacters.lowerCaseLetters);
  const isValid = hasValidLength && hasNumber && hasUpperCaseLetter && hasLowerCaseLetter;
  const errorMessage = 'La contraseña debe contener al menos: 8 digitos, una letra minúscula, una mayúscula y un número';
  const validMessage = 'Formato Válido';
  return isValid ? { valid: true, validMessage } : { valid: false, errorMessage };
}

export const validateEmail = (emailValue) => {
  // eslint-disable-next-line no-useless-escape
  const validMailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValid = emailValue.match(validMailPattern);
  const errorMessage = 'Verifique su Correo/Formato Inválido';
  return isValid ? { valid: true } : { valid: false, errorMessage };
}