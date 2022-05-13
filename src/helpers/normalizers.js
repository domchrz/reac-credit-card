const normalizeNumberInput = (cardInfo = {}, cardNumber = '') => {
  const cardLengths = (cardInfo.lengths && cardInfo.lengths) || [16];

  const validCardNumber = cardNumber.replace(/\D/g, '').split('');

  if (cardLengths.every(length => validCardNumber.length > length)) {
    validCardNumber.splice(cardLengths.reduce((a, b) => (a > b ? a : b)));
    return validCardNumber.join('');
  } else {
    return validCardNumber.join('');
  }
};

const normalizeCvvInput = (cardInfo = {}, cvv = '') => {
  const cvvSize = cardInfo.code?.size || 3;

  const validCvv = cvv.replace(/\D/g, '').split('');

  if (validCvv.length > cvvSize) validCvv.splice(cvvSize);

  return validCvv.join('');
};

const normalizeOwnerInput = (value) => value.replace(/[^a-zA-Z]+/g, '').split('').slice(0, 20).join('');

const normalizeInputValue = (target, cardInfo) => {
  const { name, value } = target;
  switch (name) {
    case 'name':
    case 'surname':
      return normalizeOwnerInput(value);
    case 'cvv':
      return normalizeCvvInput(cardInfo, value);
    case 'number': 
      return normalizeNumberInput(cardInfo, value);
    default:
      return value;
  }
};

export default normalizeInputValue;
