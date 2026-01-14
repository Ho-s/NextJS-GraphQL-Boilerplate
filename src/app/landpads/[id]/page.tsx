import 'server-only';

import { notFound } from 'next/navigation';

import { getClient } from '~/graphql/apolloServerClient';
import { GET_ONE_LANDPAD } from '~/graphql/query/landpad';

import { Landpad } from '../page-ui';
import LandpadsIdUIPage from './page-ui';

const LandpadsIdpage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  try {
    const { data } = await getClient().query<{ landpad: Landpad }, { id: string }>({
      query: GET_ONE_LANDPAD,
      variables: { id },
    });

    if (!data) return;

    return <LandpadsIdUIPage data={data.landpad} />;
  } catch {
    notFound();
  }
};

export default LandpadsIdpage;
