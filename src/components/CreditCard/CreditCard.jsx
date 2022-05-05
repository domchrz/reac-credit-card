import Card from '../Card';
import Form from '../CardForm/CardForm';
import { StyledContainer } from './styles';

export default function CreditCard() {
  return (
    <>
      <StyledContainer>
        <Card />
        <Form />
      </StyledContainer>
    </>
  );
}
