import { useContext } from 'react';
import { CardContext } from '../context/CardContext';

const useCard = () => {
  const cardContext = useContext(CardContext);

  return cardContext;
};

export default useCard;