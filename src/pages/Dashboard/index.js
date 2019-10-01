import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Container, MeetupList, Meetup } from './styles';

export default function Dashboard() {
  const meetups = [
    { name: 'React native Meetup', date: 'June 20th, 20h' },
    { name: 'NodeJS Meetup', date: 'June 21th, 20h' },
    { name: 'PHP Meetup', date: 'June 22th, 20h' },
  ];
  return (
    <Container>
      <div>
        <h1>My MeetUps</h1>
        <button type="button">
          <MdAddCircleOutline color="#fff" size={18} />
          New Meetup
        </button>
      </div>
      <MeetupList>
        {meetups.map(meetup => (
          <Meetup>
            <strong>{meetup.name}</strong>
            <div>
              <span>{meetup.date}</span>
              <Link to="/edit">
                <MdChevronRight color="#fff" size={20} />
              </Link>
            </div>
          </Meetup>
        ))}
      </MeetupList>
    </Container>
  );
}
