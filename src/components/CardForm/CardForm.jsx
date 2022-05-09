import validateCard, {
  validateCardLength,
  validateCvvLength,
  getCardInfo,
  validateOwnerField,
} from '../../helpers/cardValidators';
import useCard from '../../hooks/useCard';
import CardInput from '../CardInput/CardInput';
import { StyledButton, StyledContainer } from './styles';

export default function CardForm() {
  const { dispatch, actions, card, setCardType } = useCard();

  const onSubmit = e => {
    e.preventDefault();
    const isFormInvalid = Object.keys(card)
      .filter(key => card[key].name)
      .some(input => !card[input].isValid);
    const message = {};
    if (isFormInvalid) {
      Object.keys(card).map(key => {
        if (key !== 'cardInfo') {
          message[key] = { isValid: card[key].isValid };
        } else {
          message[key] = { ...card[key] };
        }
      });
    } else {
      message.submitted = 'Form submitted!';
      message.cardInfo = {
        owner: card.Name.value + ' ' + card.Surname.value,
        number: card.Number.value,
        cvv: card.CVV.value,
        expires: card.Expires.value
      };
    }
    alert(JSON.stringify(message, null, 1));
  };

  const onFocus = inputName => () => {
    dispatch(actions[inputName]({ isFocused: true }));
  };

  const onBlur = inputName => e => {
    const { value } = e.target;
    const isValid = validateCard(value, inputName);
    dispatch(
      actions[inputName]({
        isFocused: false,
        touched: true,
        isValid,
      })
    );
  };

  const onChange = inputName => e => {
    let { value } = e.target;
    const input = card[inputName].name.toLowerCase();
    switch (input) {
      case 'number':
        value = validateCardLength(card.cardInfo, value);
        break;
      case 'cvv':
        value = validateCvvLength(card.cardInfo, value);
        break;
      case 'name':
      case 'surname':
        value = validateOwnerField(value);
        break;
    }

    dispatch(actions[inputName]({ value }));
    if (inputName.toLowerCase().includes('number'))
      setCardType({ ...getCardInfo(value).card });
  };

  const toggleVisibility = inputName => {
    if (card[inputName].isVisible === undefined) return;
    return () =>
      dispatch(actions[inputName]({ isVisible: !card[inputName].isVisible }));
  };

  return (
    <StyledContainer onSubmit={onSubmit}>
      {Object.keys(card)
        .filter(item => card[item].name)
        .sort(a => (card[a].type === 'text' ? -1 : 0))
        .map(input => (
          <CardInput
            key={input}
            cvv={input === 'CVV' ? card.cardInfo.code?.name : undefined}
            toggleVisibility={toggleVisibility(input)}
            input={card[input]}
            onFocus={onFocus(input)}
            onBlur={onBlur(input)}
            onChange={onChange(input)}
          />
        ))}
      <StyledButton>SUBMIT</StyledButton>
    </StyledContainer>
  );
}
