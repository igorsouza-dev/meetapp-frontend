import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    hr {
      height: 1px;
      border: 0;
      background: rgba(255, 255, 255, 0.2);
      margin: 15px 10px 15px;
      width: 100%;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      width: 100%;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    div {
      align-self: stretch;
      display: flex;

      justify-content: flex-end;
      align-items: flex-end;
    }
  }
`;
