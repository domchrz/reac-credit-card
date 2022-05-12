import Input from '../Input';
import withConcealment from '../withConcealment';
import { StyledForm, StyledButton } from './styles';

const InputWithConcealment = withConcealment(Input);

export default function Form({ cvvLabel, ...props }) {
  return (
    <StyledForm>
      <Input
        type="text"
        name="name"
        label="Name"
        {...props}
        required={true}
      />
      <Input
        type="text"
        name="surname"
        label="Surname"
        {...props}
        required={true}
      />
      <InputWithConcealment
        type="text"
        name="number"
        label="Number"
        {...props}
        required={true}
      />
      <InputWithConcealment
        type="text"
        name="cvv"
        label={cvvLabel}
        {...props}
        required={true}
      />
      <Input
        type="month"
        name="expires"
        label="Name"
        {...props}
        required={true}
      />
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
