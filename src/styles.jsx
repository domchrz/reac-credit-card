import styled, { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
& *, & *::after, & *::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}  

& body {
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  background-color: ${({ theme }) => theme.colors.secondary};
}

& #root{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

& a {
  display: inline-block;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.secondaryContrast};
  padding: 1.5rem;
  transition: color .3s;

  &:hover {
    color: ${({ theme }) => theme.colors.mainContrast};
  }
}
`;

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  background-color: cyan;
  padding: 1rem;
  margin: 8.5rem 0 2rem;
  background-color: ${({ theme }) => theme.colors.secondaryContrast};
  border-radius: ${({ theme }) => theme.effects.borderRadius};
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
`;

export default StyledGlobal;
