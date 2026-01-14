import { registerApolloClient } from '@apollo/client-integration-nextjs';
import { cookies } from 'next/headers';

import {
  ApolloClient,
  ApolloLink,
  CombinedGraphQLErrors,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';
import { ErrorLink } from '@apollo/client/link/error';

import { GRAPHQL_ENDPOINT } from '~/constants/apiRelated';

const authLink = new SetContextLink(async ({ headers = {} }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');

  if (!headers?.Authorization && token) {
    Object.assign(headers, { Authorization: `Bearer ${token.value}` });
  }

  return { headers };
});

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
  fetchOptions: { cache: 'no-store' },
});

const errorLink = new ErrorLink(({ error }) => {
  if (CombinedGraphQLErrors.is(error)) {
    const unauthorized = error.errors.some(({ message }) => message === 'Unauthorized');

    if (unauthorized) {
      // Do something
    }
  }
});

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: ApolloLink.from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache(),
  });
});
