import { useState } from 'react';
import IconButton from '../IconButton';

export default function withConcealment(Input) {
  return function WithConcealment(props) {
    const [type, setType] = useState(props.type);
    return (
      <Input {...props} type={type}>
        <IconButton
          icon={type === 'password' ? 'visibility_off' : 'visibility'}
          handleClick={() =>
            setType(type === 'password' ? props.type : 'password')
          }
        />
      </Input>
    );
  };
}
