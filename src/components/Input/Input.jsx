import { useField } from 'formik';
import React from 'react';
import InputError from '../InputError';
import { StyledLabel } from './styles';

export default function Input({ children, onBlur, ...props }) {
  const [field, { error, touched }] = useField(props.name);

  return (
    <>
      <StyledLabel>
        <span>{props.label}</span>
        <div>
          <input
            {...field}
            {...props}
            onBlur={e => onBlur(e, field.onBlur)}
          />
          {children}
        </div>
        {error && touched && <InputError>{error}</InputError>}
      </StyledLabel>
    </>
  );
}
