import { getCardInfo } from '../../helpers/cardInfo';
import normalizeInputValue from '../../helpers/normalizers';
import Input from '../Input';
import withConcealment from '../withConcealment';
import { StyledForm, StyledButton } from './styles';

const InputWithConcealment = withConcealment(Input);

export default function Form({
  resetForm,
  errors,
  cardInfo,
  setCardInfo,
  setFieldValue,
  setIsCvvFocused,
  handleSubmit,
  ...props
}) {
  const onSubmit = e => {
    e.preventDefault();
    if (Object.keys(errors).length) {
      return;
    }
    handleSubmit(e);
    setTimeout(() => {
      resetForm(e);
    }, 0);
  };

  const onChange = e => {
    const { name, value } = e.target;
    setFieldValue(name, normalizeInputValue({ name, value, cardInfo }));
  };

  const onNumberChange = e => {
    const { name, value } = e.target;
    setFieldValue(name, normalizeInputValue({ name, value, cardInfo }));
    setCardInfo(getCardInfo(value));
  };

  const onBlur = (e, cb) => cb(e);

  const onCvvBlur = (e, cb) => {
    setIsCvvFocused(false);
    cb(e);
  };

  const onCvvFocus = () => setIsCvvFocused(true);

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        type="text"
        name="name"
        label="Name"
        {...props}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Input
        type="text"
        name="surname"
        label="Surname"
        {...props}
        onChange={onChange}
        onBlur={onBlur}
      />
      <InputWithConcealment
        type="text"
        name="number"
        label="Number"
        {...props}
        onChange={onNumberChange}
        onBlur={onBlur}
      />
      <InputWithConcealment
        type="text"
        name="cvv"
        label={cardInfo.code?.name || 'CVV'}
        {...props}
        onChange={onChange}
        onBlur={onCvvBlur}
        onFocus={onCvvFocus}
      />
      <Input
        type="month"
        name="expires"
        label="Name"
        {...props}
        onChange={onChange}
        onBlur={onBlur}
      />
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
