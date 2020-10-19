import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes';
import GlobalStyle from './Components/Style/Global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
