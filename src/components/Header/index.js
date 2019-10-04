import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo.svg';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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
            <button type="button" onClick={handleSignOut}>
              Logout
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
