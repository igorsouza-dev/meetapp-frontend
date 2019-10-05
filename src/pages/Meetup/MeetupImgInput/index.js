import React from 'react';
import { MdImage } from 'react-icons/md';
import { Container } from './styles';

export default function MeetupImgInput() {
  return (
    <Container>
      <label>
        <div>
          <MdImage color="rgba(255,255,255,0.3)" size={48} />
          <span>Select an image</span>
        </div>
        <img src={null} alt="" />
        <input type="file" />
      </label>
    </Container>
  );
}
