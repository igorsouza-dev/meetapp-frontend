import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('This is not a valid e-mail address.')
    .required('The e-mail is required.'),
  password: Yup.string().required('The password is required.'),
});

export default function SignIn() {
  function handleSubmit({ email, password }) {
    console.tron.log('is valid');
  }
  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Type in your e-mail address"
        />
        <Input
          type="password"
          name="password"
          placeholder="Type in your password"
        />
        <button type="submit">Login</button>
        <Link to="/register">Create free account</Link>
      </Form>
    </>
  );
}
