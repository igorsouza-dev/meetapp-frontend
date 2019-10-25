import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { MdSave, MdArrowBack } from 'react-icons/md';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';
import history from '~/services/history';

import api from '~/services/api';

import { Container } from './styles';
import MeetupImgInput from './MeetupImgInput';
import DatePicker from '~/components/DatePicker';

import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
  title: Yup.string().required('The title is required'),
  description: Yup.string()
    .min(25, 'Description must have at least 25 characters.')
    .max(255, 'Description must have at most 255 characters.')
    .required('The description is required'),
  localization: Yup.string()
    .min(5, 'The location must have at least 5 characters')
    .required('The location is required'),
  file_id: Yup.number().required('You need to select an image for the meetup'),
  date: Yup.string().required('The date and time of the meetup is required'),
});

export default function Meetup({ match }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [meetup, setMeetup] = useState({});
  const [file, setFile] = useState();

  useEffect(() => {
    async function getMeetup(id) {
      try {
        setLoading(true);
        const response = await api.get(`/meetups/${id}`);
        setLoading(false);
        if (response.data) {
          const { data } = response;
          if (data.File) {
            setFile(data.File);
          }
          data.date = parseISO(data.date);
          if (!data.past) {
            setMeetup(data);
          } else {
            toast.error("You can't edit a meetup that have already happened!");
            history.push(`/details/${match.params.id}`);
          }
        }
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
    if (match.params.id) {
      getMeetup(match.params.id);
    }
  }, [match.params.id]);

  function handleSubmit(data) {
    if (match.params.id) {
      dispatch(updateMeetupRequest({ ...data, id: match.params.id }));
    } else {
      dispatch(createMeetupRequest(data));
    }
  }

  return (
    <Container>
      <button type="button" className="btn" onClick={() => history.goBack()}>
        <MdArrowBack color="#fff" size={20} />
        Back
      </button>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
            <MeetupImgInput fileObj={file} />
            <Input className="inputs" name="title" placeholder="Title" />
            <Input
              className="inputs"
              name="description"
              multiline
              placeholder="Description"
            />
            <DatePicker name="date" />
            <Input
              className="inputs"
              name="localization"
              placeholder="Location"
            />
            <div className="footer">
              <button type="submit" className="btn">
                <MdSave color="#fff" size={20} />
                Save
              </button>
            </div>
          </Form>
        </>
      )}
    </Container>
  );
}
Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
