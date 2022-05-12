import { Formik } from 'formik';
import { useState } from 'react';
import { getCardInfo } from './helpers/cardInfo';
import normalizeInput from './helpers/normalizeInput';
import validateFrom from './helpers/validators';
import { Card, Form } from './components';
import { StyledContainer } from './styles';

export default function App() {
  const [cardInfo, setCardInfo] = useState({});
  const [isCvvFocused, setIsCvvFocused] = useState(false);

  const onSubmit = values => {
    const message = {};
    for (const value in values) {
      message[value] = values[value];
    }
    alert(JSON.stringify(message, null, 1));
  };

  const handleChange = cb => e => {
    let value = e.target.value.trim();
    const name = e.target.name;
    value = normalizeInput(value, name, cardInfo);
    if (name === 'number') setCardInfo(getCardInfo(value));
    cb(name, value);
  };

  const handleFocus = e => {
    if (e.target.name === 'cvv') {
      setIsCvvFocused(true);
    } else {
      return;
    }
  };

  const handleBlur = () => setIsCvvFocused(false);

  return (
    <>
      <a href="https://developers.bluesnap.com/docs/test-credit-cards">
        Link To Test Card Numbers
      </a>
      <StyledContainer>
        <Formik
          initialValues={{
            name: '',
            surname: '',
            number: '',
            cvv: '',
            expires: '',
          }}
          validate={validateFrom}
          onSubmit={onSubmit}>
          {({ setFieldValue, values, resetForm, handleSubmit }) => (
            <>
              <Card
                isCvvFocused={isCvvFocused}
                cardInfo={cardInfo}
                values={values}
              />
              <Form
                onChange={handleChange(setFieldValue)}
                onBlur={handleBlur}
                onFocus={handleFocus}
                required={true}
                resetForm={resetForm}
                handleSubmit={handleSubmit}
                cvvLabel={cardInfo.code?.name || 'CVV'}
              />
            </>
          )}
        </Formik>
      </StyledContainer>
    </>
  );
}
