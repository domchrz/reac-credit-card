import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Theme from './context/Theme';
import StyledGlobal from './styles';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <StyledGlobal />
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
