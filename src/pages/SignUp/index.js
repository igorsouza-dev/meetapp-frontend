import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { signUpRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('The name is required'),
  email: Yup.string()
    .email('This is not a valid e-mail address')
    .required('Your e-mail is required'),
  password: Yup.string()
    .required('Your password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="name" name="name" placeholder="Your full name" />
        <Input type="email" name="email" placeholder="Your e-mail address" />
        <Input
          type="password"
          name="password"
          placeholder="Your secret password"
        />
        <button type="submit">Create account</button>
        <Link to="/">Already have an account</Link>
      </Form>
    </>
  );
}
