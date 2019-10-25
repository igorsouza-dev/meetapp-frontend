import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import {
  createMeetupSuccess,
  meetupFailure,
  updateMeetupSuccess,
  cancelMeetupSuccess,
} from './actions';

export function* createMeetup({ payload }) {
  const { title, description, date, localization, file_id } = payload.data;
  const meetup = {
    title,
    description,
    date,
    localization,
    file_id,
  };
  try {
    const response = yield call(api.post, 'meetups', meetup);
    toast.success('Meetup created successfully');
    yield put(createMeetupSuccess(response.data));
    history.push(`/details/${response.data.id}`);
  } catch (err) {
    let { message } = err;
    if (err.response) {
      if (err.response.data) {
        const { data } = err.response;
        if (data.error) {
          message = data.error;
        }
      }
    }
    toast.error(message);
    yield put(meetupFailure());
  }
}
export function* updateMeetup({ payload }) {
  const { id, title, description, date, localization, file_id } = payload.data;
  const meetup = {
    title,
    description,
    date,
    localization,
    file_id,
  };
  try {
    const response = yield call(api.put, `meetups/${id}`, meetup);
    toast.success('Meetup updated successfully');
    history.push(`/details/${id}`);
    yield put(updateMeetupSuccess(response.data));
  } catch (err) {
    let { message } = err;
    if (err.response) {
      if (err.response.data) {
        const { data } = err.response;
        if (data.error) {
          message = data.error;
        }
      }
    }
    toast.error(message);
    yield put(meetupFailure());
  }
}

export function* cancelMeetup({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(api.delete, `meetups/${id}`);
    toast.success('Meetup cancelled successfully');
    yield put(cancelMeetupSuccess(response.data));
    history.push('/dashboard');
  } catch (err) {
    let { message } = err;
    if (err.response) {
      if (err.response.data) {
        if (err.response.data.error) {
          message = err.response.data.error;
        }
      }
    }
    toast.error(`There was an error while canceling the meetup: ${message}`);
    yield put(meetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', cancelMeetup),
]);
