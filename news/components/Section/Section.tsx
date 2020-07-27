import React, { FC } from 'react';
import { Grid, Title } from './style';
import { PostCard } from '../Post';
import { Post as PostType } from '../../shared/types';

interface SectionProps {
  title: string;
  posts: PostType[];
}

export const Section: FC<SectionProps> = ({ title, posts }) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
    </section>
  );
};
