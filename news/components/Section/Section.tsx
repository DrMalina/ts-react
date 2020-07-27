import React, { FC } from 'react';
import Link from 'next/link';
import { Grid, Title, MoreLink } from './style';
import { PostCard } from '../Post';
import { Post as PostType } from '../../shared/types';

interface SectionProps {
  title: string;
  posts: PostType[];
  isCompact?: boolean;
}

export const Section: FC<SectionProps> = ({ title, posts, isCompact = false }) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
      {isCompact && (
        <Link href={`/category/${title}`} passHref>
          <MoreLink>More in {title}</MoreLink>
        </Link>
      )}
    </section>
  );
};
