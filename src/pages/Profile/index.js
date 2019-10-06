import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdSave } from 'react-icons/md';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  oldPassword: Yup.string()
    .notRequired()
    .test(
      'oldPassword',
      'Old password must be at least 6 characters',
      value => {
        if (value) {
          return value.length >= 6;
        }
        return true;
      }
    ),
  password: Yup.string()
    .test(
      'password',
      'The new password must be at least 6 characters',
      value => {
        if (value) {
          return value.length >= 6;
        }
        return true;
      }
    )
    .when('oldPassword', (oldPassword, password) =>
      oldPassword ? password.required() : password
    ),
  confirmPassword: Yup.string()
    .test(
      'confirmPassword',
      'The confirmation password must be at least 6 characters',
      value => {
        if (value) {
          return value.length >= 6;
        }
        return true;
      }
    )
    .when('password', (password, confirmPassword) =>
      password
        ? confirmPassword
            .required('Confirmation password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
        : confirmPassword
    ),
});

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
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
          <button className="btn" type="submit">
            <MdSave color="#fff" size={16} />
            Save profile
          </button>
        </div>
      </Form>
    </Container>
  );
}
