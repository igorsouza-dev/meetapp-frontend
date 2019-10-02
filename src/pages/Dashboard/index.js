import React from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Container, MeetupList, Meetup, NewMeetupButton } from './styles';

export default function Dashboard() {
  const meetups = [
    { id: 1, name: 'React native Meetup', date: 'June 20th, 20h' },
    { id: 2, name: 'NodeJS Meetup', date: 'June 21th, 20h' },
    { id: 3, name: 'PHP Meetup', date: 'June 22th, 20h' },
  ];

  return (
    <Container>
      <div>
        <h1>My MeetUps</h1>
        <NewMeetupButton to="/new">
          <MdAddCircleOutline color="#fff" size={18} />
          New Meetup
        </NewMeetupButton>
      </div>
      <MeetupList>
        {meetups.map(meetup => (
          <Meetup to={`/details/${meetup.id}`}>
            <strong>{meetup.name}</strong>
            <div>
              <span>{meetup.date}</span>
              <MdChevronRight color="#fff" size={20} />
            </div>
          </Meetup>
        ))}
      </MeetupList>
    </Container>
  );
}
