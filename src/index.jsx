import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from './context/Theme';
import StyledGlobal from './styles';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <StyledGlobal />
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
