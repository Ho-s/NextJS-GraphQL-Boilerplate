'use client';

import { useQuery } from '@apollo/client/react';

import { GET_LANDPADS } from '~/graphql/query/landpad';

import LandpadsUIPage, { Landpad } from './page-ui';

const LandpadsPage = () => {
  const { data, loading } = useQuery<
    { landpads: Landpad[] },
    { options: { paginate: { page: number; limit: number } } }
  >(GET_LANDPADS, {
    variables: { options: { paginate: { page: 1, limit: 10 } } },
  });

  return <LandpadsUIPage data={data?.landpads} loading={loading} />;
};

export default LandpadsPage;
