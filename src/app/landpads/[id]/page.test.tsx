import { render } from '@testing-library/react';

import { GET_ONE_LANDPAD } from '~/graphql/query/landpad';

import LandpadsIdpage from './page';

const mockQuery = jest.fn();

jest.mock('../../../graphql/apolloServerClient', () => ({
  getClient: () => ({ query: mockQuery }),
}));

describe('LandpadDetailPage', () => {
  it('should call query with correct variables', async () => {
    const response = {
      attempted_landings: null,
      details: 'details',
      full_name: 'full_name',
      id: 'id',
      landing_type: null,
      location: { latitude: 0, longitude: 0, name: 'name', region: 'region' },
      status: 'status',
      successful_landings: null,
      wikipedia: 'wikipedia',
    };

    mockQuery.mockResolvedValue({ data: { landpad: response } });

    const params = { id: '1' };

    render(await LandpadsIdpage({ params: Promise.resolve(params) }));

    expect(mockQuery).toHaveBeenCalledWith({
      query: GET_ONE_LANDPAD,
      variables: params,
    });
  });
});
