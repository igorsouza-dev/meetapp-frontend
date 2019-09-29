import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="MeetApp" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Igor Martins</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <button type="button">Logout</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
