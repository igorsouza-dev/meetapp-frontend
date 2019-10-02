import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    aside {
      display: flex;
      align-items: center;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  button {
    border-radius: 4px;
    color: #fff;
    border: 0;
    background: #f94d6a;
    padding: 5px 15px;
    margin-left: 25px;
    font-weight: bold;
    font-size: 12px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#F94D6A')};
    }
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #666;
    }
  }
`;
