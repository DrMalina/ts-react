import React, { FC } from 'react';
import Link from 'next/link';
import { Post } from '../../shared/types';
import { Container } from './style';

interface BreadcrumbsProps {
  post: Post;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ post }) => {
  return (
    <Container>
      <Link href="/">
        <a>Front</a>
      </Link>
      <span>▸</span>
      <Link href="/category/[id]" as={`/category/${post.category}`}>
        <a>{post.category}</a>
      </Link>
    </Container>
  );
};
