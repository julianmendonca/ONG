import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client'
import React from 'react'
import './App.css'
import { useGetTestQuery } from './generated/graphql'

const createApolloClient = () => {
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

function App() {
  const client = createApolloClient()

  return (
    <ApolloProvider client={client}>
      <div className='App' />
      <Test />
    </ApolloProvider>
  )
}

const Test = () => {
  const { data } = useGetTestQuery()

  return <div>{data?.test.map((i) => i.text)}</div>
}

export default App
