import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  img {
    width: 940px;
    min-height: 300px;
    background: rgba(0, 0, 0, 0.3);
    margin-top: 25px;
    border-radius: 4px;
  }
`;
export const MeetupHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: #fff;
    display: inline;
  }
  div {
    display: flex;
    flex-direction: row;

    button {
      margin-left: 10px;
    }
  }
`;

export const MeetupDescription = styled.div`
  p {
    color: #fff;
    line-height: 25px;
    font-size: 18px;
    margin-top: 15px;
    text-align: justify;
  }
  div {
    margin-top: 10px;
    display: flex;
    flex-direction: row;

    span {
      color: rgba(255, 255, 255, 0.6);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
      margin-right: 15px;
      svg {
        margin-right: 10px;
      }
    }
  }
`;
