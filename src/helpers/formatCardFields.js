export const formatCardNumber = (cardInfo = {}, cardNumber = '') => {
  const gaps = cardInfo.gaps || [4, 8, 12];
  const lengths = (cardInfo.lengths && cardInfo.lengths) || [16];

  const formattedCardNumber = cardNumber.split('');

  // if (lengths.every(length => formattedCardNumber.length > length)) {
  //   formattedCardNumber.splice(lengths.reduce((a, b) => (a > b ? a : b)));
  // }

  if (!lengths.some(length => length === formattedCardNumber.length)) {
    for (let i = 0; i < lengths[0]; i++) {
      if (!formattedCardNumber[i]) formattedCardNumber.push('*');
    }
  }

  gaps.forEach((gap, idx) => {
    formattedCardNumber.splice(gap + idx, 0, ' ');
  });

  return formattedCardNumber.join('');
};

export const formatCvv = (cardInfo = {}, cvv = '') => {
  const codeSize = cardInfo.code?.size || 3;

  const formattedCvv = cvv.split('');

  if (formattedCvv.length < codeSize) {
    for (let i = 0; i < codeSize; i++) {
      if (!formattedCvv[i]) formattedCvv.push('*');
    }
  }

  return formattedCvv.join('');
};

export const formatExpDate = expDate => {
  if (!expDate) return '**/**';
  const expDateArr = expDate.split('-');
  return `${expDateArr[1]}/${expDateArr[0].slice(2)}`;
};
