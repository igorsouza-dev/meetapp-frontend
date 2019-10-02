import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  img {
    width: 940px;
    height: 300px;
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
      border: 0;
      background: #f94d6a;
      color: #fff;
      font-weight: bold;
      border-radius: 4px;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
      margin-left: 10px;
      &:hover {
        background: ${darken(0.03, '#F94D6A')};
      }
      svg {
        margin-right: 10px;
      }
    }
  }
`;
export const EditMeetupButton = styled(Link)`
  border: 0;
  background: #4dbaf9;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#4DBAF9')};
  }
  svg {
    margin-right: 10px;
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
