import React, { FC } from 'react';
import { Center } from '../Center';
import { Container } from './style';

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Center>
        <a href="https://newline.co">Newline.co</a> {currentYear}
      </Center>
    </Container>
  );
};
