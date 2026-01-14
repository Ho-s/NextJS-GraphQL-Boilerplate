import { useQuery } from '@apollo/client/react';
import { render } from '@testing-library/react';

import { GET_LANDPADS } from '~/graphql/query/landpad';

import LandPadsPage from './page';

jest.mock('@apollo/client/react', () => ({
  useQuery: jest.fn(),
}));

const mockUseQuery = jest.mocked(useQuery);

describe('LandPadsPage', () => {
  it('should call useQuery with correct variables', () => {
    const response = {
      data: {
        landpads: [
          {
            attempted_landings: null,
            details: 'details',
            full_name: 'full_name',
            id: 'id',
            landing_type: null,
            location: { latitude: 0, longitude: 0, name: 'name', region: 'region' },
            status: 'status',
            successful_landings: null,
            wikipedia: 'wikipedia',
          },
        ],
      },
      loading: false,
    };

    mockUseQuery.mockReturnValue(response as ReturnType<typeof useQuery>);

    render(<LandPadsPage />);

    expect(mockUseQuery).toHaveBeenCalledWith(
      GET_LANDPADS,
      expect.objectContaining({
        variables: { options: { paginate: { page: 1, limit: 10 } } },
      }),
    );
  });
});
