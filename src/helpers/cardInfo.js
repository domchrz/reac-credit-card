import validate from 'card-validator';

export const getCardInfo = (cardNumber) => (validate.number(cardNumber).card || {});