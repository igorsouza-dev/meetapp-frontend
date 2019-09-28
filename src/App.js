import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import GlobalStyle from './styles/globals';
import Routes from './routes';
import history from './services/history';

export default function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}
