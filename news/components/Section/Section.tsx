import React, { FC } from 'react';
import { Grid, Title } from './style';
import { Post } from '../Post';

interface SectionProps {
  title: string;
}

export const Section: FC<SectionProps> = ({ title }) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        <Post />
        <Post />
        <Post />
      </Grid>
    </section>
  );
};
