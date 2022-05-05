const createState = items => {
  let state = {};
  items.forEach(item => {
    state = {
      ...state,
      [item.name]: {
        ...item,
        isValid: false,
        isFocused: false,
        touched: false,
        value: '',
      },
    };
  });
  return state;
};

const createActions = state => {
  let actions = {};
  for (const key in state) {
    actions[key] = payload => ({
      type: `UPDATE_${key.toUpperCase()}_INPUT`,
      payload,
    });
  }
  // actions['updateCardType'] = payload => ({
  //   type: 'UPDATE_CARD_TYPE',
  //   payload,
  // });
  return actions;
};

const createReducer = initState =>
  (state = { ...initState, cardType: '' }, action) => {
    let updatedState = state;
    for (const key in initState) {
      if (action.type === `UPDATE_${key.toUpperCase()}_INPUT`) {
        updatedState = {
          ...updatedState,
          [key]: { ...updatedState[key], ...action.payload },
        };
      }  
      // } else if (action.type === `UPDATE_CARD_TYPE`) {
      //   updatedState = { ...updatedState, ...action.payload };
      // }
    }
    return updatedState;
  };

const createReducerHelpers = formInputs => {
  let helpers = [];
  helpers.push(createState(formInputs));
  helpers.push(createActions(helpers[0]));
  helpers.push(createReducer(helpers[0]));
  return helpers;
};

export default createReducerHelpers;
