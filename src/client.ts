import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.HASURA_ENDPOINT,
      headers: {
        'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET
      }
    }),
    cache: new InMemoryCache()
  })
}
