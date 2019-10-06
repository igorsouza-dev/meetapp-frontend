export function createMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function createMeetupSuccess(data) {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
    payload: { data },
  };
}
export function meetupFailure() {
  return {
    type: '@meetup/MEETUP_FAILURE',
  };
}

export function updateMeetupRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function updateMeetupSuccess(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: { data },
  };
}
export function cancelMeetupRequest(id) {
  return {
    type: '@meetup/CANCEL_MEETUP_REQUEST',
    payload: { id },
  };
}
export function cancelMeetupSuccess() {
  return {
    type: '@meetup/CANCEL_MEETUP_SUCCESS',
  };
}
