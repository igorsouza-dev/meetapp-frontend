import React, { useEffect, useState } from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { Container, MeetupList, Meetup, NewMeetupButton } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/organizer');
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
      console.tron.log(responseMeetups);
    }
    loadMeetups();
  }, []);

  return (
    <Container>
      <div>
        <h1>My MeetUps</h1>
        <NewMeetupButton to="/meetup">
          <MdAddCircleOutline color="#fff" size={18} />
          New Meetup
        </NewMeetupButton>
      </div>
      {meetups.length > 0 ? (
        <MeetupList>
          {meetups.map(meetup => (
            <Meetup to={`/details/${meetup.id}`}>
              <strong>{meetup.title}</strong>
              <div>
                <span>{meetup.formattedDate}</span>
                <MdChevronRight color="#fff" size={20} />
              </div>
            </Meetup>
          ))}
        </MeetupList>
      ) : (
        <strong>You don&apos;t have any meetups</strong>
      )}
    </Container>
  );
}
