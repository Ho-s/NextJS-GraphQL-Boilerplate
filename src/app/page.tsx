import 'server-only';

import { cookies } from 'next/headers';

import HomePageUI from './page-ui';

const Home = async () => {
  const cookieStore = await cookies();
  const isLoggedIn = Boolean(cookieStore.get('token'));

  return <HomePageUI isLoggedIn={isLoggedIn} />;
};

export default Home;
