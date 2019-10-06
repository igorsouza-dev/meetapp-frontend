import React, { useEffect, useState } from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';

import { Container, MeetupList, Meetup } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadMeetups() {
      setLoading(true);
      const response = await api.get('/organizer');
      setLoading(false);
      const { data } = response;
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const responseMeetups = data.map(meetup => {
        const formattedDate = format(
          utcToZonedTime(meetup.date, timezone),
          "d 'de' MMMM 'de' yyyy, HH:mm",
          { locale: pt }
        );
        const newMeetup = { ...meetup, formattedDate };
        return newMeetup;
      });
      setMeetups(responseMeetups);
    }
    loadMeetups();
  }, []);

  return (
    <Container>
      <div>
        <h1>My MeetUps</h1>
        <Link className="btn" to="/meetup">
          <MdAddCircleOutline color="#fff" size={18} />
          New Meetup
        </Link>
      </div>

      {meetups.length > 0 ? (
        <MeetupList>
          {meetups.map(meetup => (
            <Meetup to={`/details/${meetup.id}`} key={meetup.id}>
              <strong>{meetup.title}</strong>
              <div>
                <span>{meetup.formattedDate}</span>
                <MdChevronRight color="#fff" size={20} />
              </div>
            </Meetup>
          ))}
        </MeetupList>
      ) : (
        <strong>
          {loading ? 'Loading' : 'You don&apos;t have any meetups'}
        </strong>
      )}
    </Container>
  );
}
