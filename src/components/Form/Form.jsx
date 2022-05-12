import Input from '../Input';
import withConcealment from '../withConcealment';
import { StyledForm, StyledButton } from './styles';

const InputWithConcealment = withConcealment(Input);

export default function Form({ cvvLabel, resetForm, handleSubmit, ...props }) {
  return (
    <StyledForm
      onSubmit={e => {
        handleSubmit(e);
        setTimeout(() => {
          resetForm(e);
        }, 0);
      }}>
      <Input type="text" name="name" label="Name" {...props} />
      <Input type="text" name="surname" label="Surname" {...props} />
      <InputWithConcealment
        type="text"
        name="number"
        label="Number"
        {...props}
      />
      <InputWithConcealment
        type="text"
        name="cvv"
        label={cvvLabel}
        {...props}
      />
      <Input type="month" name="expires" label="Name" {...props} />
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
