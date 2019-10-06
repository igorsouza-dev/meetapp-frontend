import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import { MdImage } from 'react-icons/md';
import { Container } from './styles';
import api from '~/services/api';

export default function MeetupImgInput({ fileObj }) {
  const { defaultValue, registerField, error } = useField('file_id');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();
  useEffect(() => {
    if (fileObj) {
      setFile(fileObj.id);
      setPreview(fileObj.url);
    }
  }, [fileObj]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    // eslint-disable-next-line
  }, [ref]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    try {
      const response = await api.post('files', data);

      const { id, url } = response.data;

      setFile(id);
      setPreview(url);
    } catch (err) {}
  }
  return (
    <Container>
      <label htmlFor="file_id">
        {!preview && (
          <div>
            <MdImage color="rgba(255,255,255,0.3)" size={48} />
            <span>Select an image</span>
          </div>
        )}
        <img src={preview || ''} alt="" />
        <input
          type="file"
          name="file_id"
          id="file_id"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
      {error && <span>{error}</span>}
    </Container>
  );
}

MeetupImgInput.propTypes = {
  fileObj: PropTypes.shape({
    url: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
