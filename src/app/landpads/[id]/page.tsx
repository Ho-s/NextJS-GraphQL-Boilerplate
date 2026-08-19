import 'server-only';

import { notFound } from 'next/navigation';

import { getClient } from '~/graphql/apolloServerClient';
import { GET_ONE_LANDPAD } from '~/graphql/query/landpad';

import { Landpad } from '../page-ui';
import LandpadsIdUIPage from './page-ui';

const LandpadsIdpage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  let landpad: Landpad | undefined;

  try {
    const { data } = await getClient().query<{ landpad: Landpad }, { id: string }>({
      query: GET_ONE_LANDPAD,
      variables: { id },
    });

    landpad = data?.landpad;
  } catch {
    notFound();
  }

  if (!landpad) return;

  return <LandpadsIdUIPage data={landpad} />;
};

export default LandpadsIdpage;
