import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.materialIcon};
  display: flex;
  background-color: transparent;
  border: none;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.mainContrast};
  transition: color .3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.action};
  }
`;
