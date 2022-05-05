const CARD_INPUTS = [
  {
    name: 'Number',
    type: 'text',
    step: 1,
    min: 0,
    isValid: false,
    isFocused: false,
    isVisible: true,
    touched: false,
    required: true
  },
  {
    name: 'CVV',
    type: 'text',
    step: 1,
    min: 0,
    isVisible: true,
    required: true
  },
  {
    name: 'Name',
    type: 'text',
    required: true
  },
  {
    name: 'Surname',
    type: 'text',
    required: true
  },
  {
    name: 'Expires',
    type: 'month',
    min: '2022-06',
    required: true,
  }
];

export default CARD_INPUTS;