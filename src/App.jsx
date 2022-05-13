import { Formik } from 'formik';
import { useState } from 'react';
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
          {({ setFieldValue, resetForm, handleSubmit, errors, values }) => (
            <>
              <Card
                isCvvFocused={isCvvFocused}
                cardInfo={cardInfo}
                values={values}
              />
              <Form
                resetForm={resetForm}
                setIsCvvFocused={setIsCvvFocused}
                setFieldValue={setFieldValue}
                setCardInfo={setCardInfo}
                handleSubmit={handleSubmit}
                cardInfo={cardInfo}
                errors={errors}
                required={true}
                values={values}
              />
            </>
          )}
        </Formik>
      </StyledContainer>
    </>
  );
}
