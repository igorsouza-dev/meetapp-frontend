import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';

export default function Profile() {
  const profile = { name: 'Igor Martins', email: 'igorsouza.dev@gmail.com' };
  function handleSubmit(data) {}
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your full name" />
        <Input type="email" name="email" placeholder="Your e-mail address" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Current password"
        />
        <Input type="password" name="password" placeholder="New password" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm the new password"
        />
        <div>
          <button type="submit">
            <MdAddCircleOutline color="#fff" size={16} />
            Save profile
          </button>
        </div>
      </Form>
    </Container>
  );
}
