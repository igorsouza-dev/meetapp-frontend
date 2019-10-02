import React from 'react';
import PropTypes from 'prop-types';
import { MdEdit, MdDeleteForever, MdEvent } from 'react-icons/md';
import {
  Container,
  EditMeetupButton,
  MeetupHeader,
  MeetupDescription,
} from './styles';

export default function Details({ match }) {
  return (
    <Container>
      <MeetupHeader>
        <h1>React Meetup</h1>
        <div>
          <EditMeetupButton to="/meetup/1">
            <MdEdit color="#fff" size={20} />
            Edit
          </EditMeetupButton>
          <button type="button">
            <MdDeleteForever color="#fff" size={20} />
            Cancel
          </button>
        </div>
      </MeetupHeader>

      <img
        src="https://portugalstartups.com/wp-content/uploads/2014/10/meetup.jpg"
        alt="Meetup"
      />

      <MeetupDescription>
        <p>
          O Meetup de React Native é um evento que reúne a comunidade de
          desenvolvimento mobile utilizando React a fim de compartilhar
          conhecimento. Todos são convidados. Caso queira participar como
          palestrante do meetup envie um e-mail para
          organizacao@meetuprn.com.br.
        </p>
        <div>
          <span>
            <MdEvent color="#ccc" size={20} />
            24 de Junho, às 20h
          </span>
          <span>Rua Guilherme Gembala, 260</span>
        </div>
      </MeetupDescription>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.element.isRequired,
};
