import React from 'react';
import Hero from '../Hero/Hero';
import { infoContent } from '../../data/dataStore';
import Container from '../Container/Container';

const info = () => (
  <Container>
    <Hero 
      titleText={infoContent.title}
      imageSource={infoContent.imageSource}
    />
    {infoContent.content}
  </Container>
);

export default info;