import React, { FC } from 'react';
import Link from 'next/link';
import { Center } from '../Center';
import { Container, Logo } from './style';

export const Header: FC = () => {
  return (
    <Container>
      <Center>
        <Logo>
          <Link href="/">
            <a>What's Next?!</a>
          </Link>
        </Logo>
      </Center>
    </Container>
  );
};
