import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: min-content;
  background-color: cyan;
  padding: 1rem;
  margin: 8.5rem 0 2rem;
  background-color: ${({ theme }) => theme.colors.secondaryContrast};
  border-radius: ${({ theme }) => theme.effects.borderRadius};
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
`;