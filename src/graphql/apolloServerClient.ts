'use server';

import { registerApolloClient } from '@apollo/client-integration-nextjs';
import { cookies } from 'next/headers';

import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import { GRAPHQL_ENDPOINT } from '~/constants/apiRelated';

export const apolloServerClient = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');

  const authLink = setContext(async (_, { headers = {} }) => {
    if (!headers?.Authorization && token) {
      Object.assign(headers, { Authorization: `Bearer ${token}` });
    }

    return {
      headers,
    };
  });

  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    fetchOptions: { cache: 'no-store' },
  });

  const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      const unauthorized = graphQLErrors.some(({ message }) => message === 'Unauthorized');

      if (unauthorized) {
        // Do something
      }
    }
  });

  return registerApolloClient(() => {
    return new ApolloClient({
      link: ApolloLink.from([authLink, errorLink, httpLink]),
      cache: new InMemoryCache(),
    });
  });
};
