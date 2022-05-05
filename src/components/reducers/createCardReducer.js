export const CARD_ACTION = 'UPDATE_CARD_INFO';

export const createCardReducer = reducer => (state, action) => {
  let updatedState = state;
  if (action.type === CARD_ACTION) {
    updatedState = { ...state, cardInfo: { ...action.payload } };
  } else {
    updatedState = reducer(state, action);
  }
  return updatedState;
};
