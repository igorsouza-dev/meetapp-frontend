import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  > div {
    display: flex;
    justify-content: space-between;

    h1 {
      color: #fff;
      display: inline;
    }
  }
  > strong {
    margin-top: 10px;
    color: #fff;
    display: block;
    font-size: 24px;
    text-align: center;
    align-self: stretch;
  }
`;

export const MeetupList = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const Meetup = styled(Link)`
  margin: 10px 0;
  border: 0;
  background: rgba(0, 0, 0, 0.2);
  padding: 15px 25px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  transition: background 0.5s;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }

  strong {
    color: #fff;
    font-size: 18px;
    display: block;
  }
  div {
    span {
      margin-right: 10px;
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
    }
  }
`;
