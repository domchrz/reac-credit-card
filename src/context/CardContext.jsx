import { createContext, useReducer, useState } from 'react';
import {
  createCardReducer,
  CARD_ACTION,
} from '../components/reducers/createCardReducer';
import createReducerHelpers from '../components/reducers/createFormReducer';
import CARD_INPUTS from '../constants/cardInputs';

export const CardContext = createContext();

export default function CardProvider({ children }) {
  const [[initState, actions, reducer]] = useState(
    createReducerHelpers(CARD_INPUTS)
  );
  const [card, dispatch] = useReducer(createCardReducer(reducer), {
    ...initState,
    cardInfo: {},
  });

  const setCardType = payload => dispatch({ type: CARD_ACTION, payload });

  return (
    <CardContext.Provider value={{ dispatch, actions, card, setCardType }}>
      {children}
    </CardContext.Provider>
  );
}
