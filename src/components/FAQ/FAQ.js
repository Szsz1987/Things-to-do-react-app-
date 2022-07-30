import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQContent} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero
      titleText={FAQContent.title}
      imageSource={FAQContent.imageSource}
    />
    <div>
      {FAQContent.content}
    </div>
  </Container>
);

export default FAQ;