import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import DatePicker from 'react-datepicker';
import { MdSave } from 'react-icons/md';
import { Container } from './styles';
import MeetupImgInput from './MeetupImgInput';

export default function Meetup({ match }) {
  const { id } = match.params;
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Container>
      <Form onSubmit={() => {}}>
        <MeetupImgInput />
        <Input className="inputs" name="title" placeholder="Title" />
        <Input
          className="inputs"
          name="description"
          placeholder="Description"
        />
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          showTimeSelect
          className="inputs"
          timeFormat="HH:mm"
          locale="pt-BR"
          dateFormat="MMMM d, yyyy HH:mm"
        />
        <Input className="inputs" name="localization" placeholder="Location" />
        <div className="footer">
          <button type="submit">
            <MdSave color="#fff" size={20} />
            Save
          </button>
        </div>
      </Form>
    </Container>
  );
}
