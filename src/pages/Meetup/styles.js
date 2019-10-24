import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 10px;

  > strong {
    margin-top: 10px;
    color: #fff;
    display: block;
    font-size: 24px;
    text-align: center;
    align-self: stretch;
  }

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

    #description {
      height: 70px;
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    div.footer {
      display: flex;
      justify-content: flex-end;
    }
  }
`;
