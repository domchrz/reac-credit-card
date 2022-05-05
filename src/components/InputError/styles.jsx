import styled from 'styled-components';

export const StyledError = styled.p`
  margin-top: .3rem;
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.warning};
  /* text-transform: uppercase; */
  font-weight: 600;
  border-radius: ${({ theme }) => theme.effects.borderRadius};
`;
