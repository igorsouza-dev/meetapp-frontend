import styled from 'styled-components';

export const Container = styled.div`
  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      max-width: 940px;
      height: 300px;
      background: rgba(0, 0, 0, 0.3);
      margin-bottom: 10px;
    }
    input {
      display: none;
    }
    div {
      position: relative;
      top: 50%;
      left: 40%;
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        color: rgba(255, 255, 255, 0.3);
        font-weight: bold;
        margin-top: 10px;
        font-size: 20px;
      }
    }
  }
`;
