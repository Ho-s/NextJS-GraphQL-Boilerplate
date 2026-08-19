'use client';

import { deleteCookie } from 'cookies-next/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '~/components/Button';

import { RootPageStyled } from './styled';

interface HomePageUIProps {
  isLoggedIn: boolean;
}

const HomePageUI = ({ isLoggedIn }: HomePageUIProps) => {
  const router = useRouter();

  const onSignOut = () => {
    deleteCookie('token');
    router.refresh();
  };

  return (
    <RootPageStyled>
      {isLoggedIn ? (
        <>
          <Link href={'/cars'}>
            <Button>Go to cars page(REST-API)</Button>
          </Link>
          <Link href={'/landpads'}>
            <Button>Go to landpads page(GRAPHQL)</Button>
          </Link>
          <Button onClick={onSignOut}>Sign Out</Button>
        </>
      ) : (
        <Link href={'/sign/in'}>
          <Button>Sign in needed</Button>
        </Link>
      )}
    </RootPageStyled>
  );
};

export default HomePageUI;
