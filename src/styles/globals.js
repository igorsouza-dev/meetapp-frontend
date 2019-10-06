import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { darken } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
    border: 0;
    background: #f94d6a;
    border-radius: 4px;
    transition: background 0.5s;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    padding: 10px 15px;

    &:hover {
      background: ${darken(0.03, '#f94d6a')};
    }
    svg {
      margin-right: 10px;
    }
  }
  .btn-edit {
    background: #4dbaf9;

    &:hover {
      background: ${darken(0.03, '#4dbaf9')};
    }
  }
`;
