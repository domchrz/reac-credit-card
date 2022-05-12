import validate from 'card-validator';

const validateCardNumber = value => validate.number(value).isValid;
const validateCvvNumber = value => validate.cvv(value).isValid;
const validateExpirationDate = value => validate.expirationDate(value).isValid;
const validateOwnerFields = value => !!value.trim() && !/\d/.test(value);

const validateFrom = values => {
  const errors = {};
  for (const value in values) {
    switch (value.toLowerCase()) {
      case 'number':
        if (!validateCardNumber(values[value])) {
          errors.number = 'Invalid card number.';
        } else {
          delete errors.number;
        }
        break;
      case 'cvv':
        if (!validateCvvNumber(values[value])) {
          errors.cvv = 'Invalid CVV number.';
        } else {
          delete errors.cvv;
        }
        break;
      case 'expires':
        if (!validateExpirationDate(values[value])) {
          errors.expires = 'Invalid card expiration date.';
        } else {
          delete errors.expires;
        }
        break;
      case 'name':
        if (!validateOwnerFields(values[value])) {
          errors.name = 'Invalid name.';
        } else {
          delete errors.name;
        }
        break;
      case 'surname':
        if (!validateOwnerFields(values[value])) {
          errors.surname = 'Invalid surname.';
        } else {
          delete errors.surname;
        }
        break;
    }
  }
  return errors;
};

export default validateFrom;
