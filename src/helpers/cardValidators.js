import validate from 'card-validator';

const validateCard = (value, input) => {
  let isValid;
  switch (input) {
    case 'Number':
      isValid = validate.number(value).isValid;
      return isValid;
    case 'CVV':
      isValid = validate.cvv(value).isValid;
      return isValid;
    case 'Expires':
      isValid = validate.expirationDate(value).isValid;
      return isValid;
    default:
      isValid = !!value.trim() && !/\d/.test(value);
      return isValid;
  }
};

export default validateCard;

export const getCardType = value => validate.number(value).card?.type || '';
export const getCardInfo = value => validate.number(value);

export const getCardExpires = value => {
  const cardExpires = { ...validate.expirationDate(value) };
  if (cardExpires.month && cardExpires.year) {
    return { month: cardExpires.month, year: cardExpires.year };
  }
};

export const validateCardLength = (cardInfo = {}, cardNumber = '') => {
  const cardLengths = (cardInfo.lengths && cardInfo.lengths) || [16];

  const validCardNumber = cardNumber.replace(/\D/g, '').split('');

  if (cardLengths.every(length => validCardNumber.length > length)) {
    validCardNumber.splice(cardLengths.reduce((a, b) => (a > b ? a : b)));
    return validCardNumber.join('');
  } else {
    return validCardNumber.join('');
  }
};

export const validateCvvLength = (cardInfo = {}, cvv = '') => {
  const cvvSize = cardInfo.code?.size || 3;

  const validCvv = cvv.replace(/\D/g, '').split('');

  if (validCvv.length > cvvSize) {
    validCvv.splice(cvvSize);
  }

  return validCvv.join('');
};

export const validateOwnerField = (value) => value.replace(/[^a-zA-Z]+/g, '');
