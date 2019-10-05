import styled from 'styled-components';
import { darken } from 'polished';
import 'react-datepicker/dist/react-datepicker.css';

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  margin-bottom: 10px;

  form {
    display: flex;
    flex-direction: column;

    .inputs {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      width: 100%;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    div.footer {
      display: flex;
      justify-content: flex-end;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
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
    }
  }
`;
