'use client';

import { ReactNode } from 'react';

import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink,
} from '@apollo/client-integration-nextjs';
import { getCookie } from 'cookies-next/client';

import { ApolloLink, CombinedGraphQLErrors } from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';
import { ErrorLink } from '@apollo/client/link/error';
import UploadHttpLink from 'apollo-upload-client/UploadHttpLink.mjs';

import { GRAPHQL_ENDPOINT } from '~/constants/apiRelated';

const defaultHeader = {
  'Content-Type': 'application/json',
};

const makeClient = () => {
  const authLink = new SetContextLink(async ({ headers }) => {
    const token = getCookie('token');

    return {
      headers: {
        ...headers,
        ...defaultHeader,
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };
  });

  const httpLink = new UploadHttpLink({
    uri: GRAPHQL_ENDPOINT,
  });

  const errorLink = new ErrorLink(({ error }) => {
    if (CombinedGraphQLErrors.is(error)) {
      const unauthorized = error.errors.some(({ message }) => message === 'Unauthorized');
      if (unauthorized) {
        // Do something
      }
    }
  });

  const linkList = ApolloLink.from([authLink, errorLink, httpLink]);

  return new ApolloClient({
    cache: new InMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            linkList,
          ])
        : linkList,
  });
};

export const CustomApolloProvider = ({ children }: { children: ReactNode }) => {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
};
