import { takeLatest, all, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  const { name, email, ...rest } = payload.data;
  const profile = {
    name,
    email,
    ...(rest.oldPassword ? rest : {}),
  };
  try {
    const response = yield call(api.put, 'users', profile);
    toast.success('Your profile was updated!');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    let { message } = err;
    if (err.response) {
      if (err.response.data) {
        if (err.response.data.error) {
          message = err.response.data.error;
        }
      }
    }
    toast.error(message);
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
