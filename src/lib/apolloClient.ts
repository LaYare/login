import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://hanstaging.cuidadoconelperro.com.mx/graphql',
  credentials: 'include',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Store: 'cuidadoconelperro_mx_store_view',
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

export default client;
