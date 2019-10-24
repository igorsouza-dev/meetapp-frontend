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
      min-height: 300px;
      background: rgba(0, 0, 0, 0.3);
      margin-bottom: 10px;
    }
    input {
      display: none;
    }
  }
`;
