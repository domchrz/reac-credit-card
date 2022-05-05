import IconButton from '../IconButton';
import InputError from '../InputError';
import { StyledLabel } from './styles';

export default function CardInput({
  onChange,
  onBlur,
  onFocus,
  input,
  cvv,
  toggleVisibility,
}) {
  return (
    <>
      <StyledLabel>
        <span className='input-name'>{cvv || input.name}</span>
        <span className="input-container">
          <input
            type={input.isVisible === false ? 'hidden' : input.type}
            required={input.required}
            min={input.min}
            max={input.max}
            step={input.step}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            value={input.isVisible === false ? '****' : input.value}
          />
          {input.isVisible !== undefined && (
            <IconButton
              icon={input.isVisible ? 'visibility' : 'visibility_off'}
              handleClick={toggleVisibility}
            />
          )}
        </span>
        {!input.isValid && input.touched && <InputError>Invalid {cvv ? cvv.toLowerCase() : input.name.toLowerCase()}.</InputError>}
        
      </StyledLabel>
    </>
  );
}
