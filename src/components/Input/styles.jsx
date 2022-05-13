import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 20rem;
  height: min-content;

  & span {
    flex-basis: 100%;
    flex-shrink: 0;
    font-size: 1.1rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    & input {
      height: 2rem;
      flex-grow: 1;
      color: ${({ theme }) => theme.colors.mainContrast};
      box-shadow: ${({ theme }) => theme.effects.boxShadow};
      font-family: ${({ theme }) => theme.fonts.sansSerif};
      font-size: 1.1rem;
      border-radius: 0.4rem;
      border: none;
      padding: 0.5rem;
      transition: color 0.3s, background-color 0.3s;

      &:focus {
        outline: none;
        color: ${({ theme }) => theme.colors.main};
        background-color: ${({ theme }) => theme.colors.action};
      }
    }
  }

  & p {
    flex-basis: 100%;
    flex-shrink: 0;
  }
`;
