import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  margin-top: 8rem;
  display: grid;
  justify-items: center;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;

  & button {
    grid-column: span 2;
  }

  & label:last-of-type {
    grid-column: span 2;
  }

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;

    & button {
      grid-column: span 1;
    }

    & label:last-of-type {
      grid-column: span 1;
    }
  }
`;

export const StyledButton = styled.button`
  position: relative;
  width: 100%;
  padding: 0.5rem;
  margin-top: 1.2rem;
  font-size: 1.4rem;
  letter-spacing: 0.05rem;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  color: transparent;
  background-image: linear-gradient(to top left, #ff512f, #f09819);
  border-radius: ${({ theme }) => theme.effects.borderRadius};
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
  font-weight: 600;
  border: none;
  cursor: pointer;
  z-index: 1;

  &::before {
    content: 'SUBMIT';
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    color: ${({ theme }) => theme.colors.main};
    background-color: transparent;
    transition: background-color 0.7s;
    border-radius: ${({ theme }) => theme.effects.borderRadius};
  }

  &:hover {
    &::before {
      background-color: ${({ theme }) => theme.colors.mainContrast};
    }
  }
`;
