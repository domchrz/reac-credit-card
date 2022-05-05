import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 20rem;
  height: min-content;

  .input-name {
    flex-basis: 100%;
    flex-shrink: 0;
    font-size: 1.1rem;
  }

  .input-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;


    input {
      height: 2rem;
      flex-grow: 1;
      color: ${({ theme }) => theme.colors.mainContrast};
      box-shadow: ${({ theme }) => theme.effects.boxShadow};
      font-family: ${({ theme }) => theme.fonts.sansSerif};
      font-size: 1.1rem;
      border-radius: .4rem;
      border: none;
      padding: .5rem;
      transition: color .3s, background-color .3s;
    }

    input:focus {
      outline: none;
      color: ${({ theme }) => theme.colors.main};
      background-color: ${({ theme }) => theme.colors.action};
    }
  }

  p {
    flex-basis: 100%;
    flex-shrink: 0;
  }
`;
