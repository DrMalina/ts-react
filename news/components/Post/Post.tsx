import React, { FC } from 'react';
import Link from 'next/link';
import { Card, Figure, Title, Content } from './style';

export const Post: FC = () => {
  return (
    <Link href="/post/[id]" as="/post/example" passHref>
      <Card>
        <Figure>
          <img alt="Post photo" src="/image1.jpg" />
        </Figure>
        <Title>Post title!</Title>
        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Content>
      </Card>
    </Link>
  );
};
