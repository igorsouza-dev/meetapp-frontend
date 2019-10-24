import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MdEdit, MdDeleteForever, MdEvent, MdLocationOn } from 'react-icons/md';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import history from '~/services/history';

import { cancelMeetupRequest } from '~/store/modules/meetup/actions';

import api from '~/services/api';

import { Container, MeetupHeader, MeetupDescription } from './styles';

export default function Details({ match }) {
  const [meetup, setMeetup] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMeetup() {
      try {
        setLoading(true);
        const response = await api.get(`/meetups/${match.params.id}`);
        const meetupResponse = response.data;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        meetupResponse.formattedDate = format(
          utcToZonedTime(meetupResponse.date, timezone),
          "d/MM/yyyy, 'às' HH:mm'h'",
          { locale: pt }
        );
        setLoading(false);
        setMeetup(meetupResponse);
      } catch (err) {
        let { message } = err;
        if (err.response) {
          if (err.response.data) {
            if (err.response.data.error) {
              message = err.response.data.error;
            }
          }
        }
        setLoading(false);
        history.push('/');
        toast.error(message);
      }
    }
    getMeetup();
  }, [match.params.id]);

  function handleCancelMeetup() {
    dispatch(cancelMeetupRequest(meetup.id));
  }

  return (
    <Container>
      <MeetupHeader>
        <h1>{meetup.title}</h1>
        {meetup && !meetup.past && !loading && (
          <div>
            <Link className="btn btn-edit" to={`/meetup/${meetup.id}`}>
              <MdEdit color="#fff" size={20} />
              Edit
            </Link>
            <button type="button" className="btn" onClick={handleCancelMeetup}>
              <MdDeleteForever color="#fff" size={20} />
              Cancel
            </button>
          </div>
        )}
      </MeetupHeader>

      <img src={meetup.File ? meetup.File.url : ''} alt="Meetup" />

      <MeetupDescription>
        <p>{meetup.description}</p>
        <div>
          <span>
            <MdEvent color="#ccc" size={20} />
            {meetup.formattedDate}
          </span>
          <span>
            <MdLocationOn color="#ccc" size={20} />
            {meetup.localization}
          </span>
        </div>
      </MeetupDescription>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
