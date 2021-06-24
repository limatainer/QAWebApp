import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './services/firebase';
import './styles/global.scss';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //vai chamar o id root que esta no indexhtml e renderizar o que esta em cima
);
