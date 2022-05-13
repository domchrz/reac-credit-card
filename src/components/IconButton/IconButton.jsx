import { StyledButton } from './styles';

export default function IconButton({ icon, handleClick }) {
  return (
    <StyledButton type="button" onClick={handleClick}>
      {icon}
    </StyledButton>
  );
}
