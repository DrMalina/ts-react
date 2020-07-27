import React, { FC } from 'react';
import { Section } from '../Section';
import { Post, Category } from '../../shared/types';

interface FeedProps {
  posts: Post[];
  categories: Category[];
}

export const Feed: FC<FeedProps> = ({ posts, categories }) => {
  return (
    <>
      {categories.map((currentCategory) => {
        const inSection = posts.filter((post) => post.category === currentCategory);

        return <Section key={currentCategory} title={currentCategory} posts={inSection} />;
      })}
    </>
  );
};
