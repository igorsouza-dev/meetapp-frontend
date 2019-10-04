import React from 'react';
import { MdImage } from 'react-icons/md';
import { Container } from './styles';

export default function MeetupImgInput() {
  return (
    <Container>
      <label>
        <MdImage color="rgba(255,255,255,0.3)" size={48} />
        <img src={MdImage} alt="" />
        <input type="file" />
      </label>
    </Container>
  );
}
