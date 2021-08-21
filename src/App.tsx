import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client'
import { Button, createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import './App.css'

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

const theme = createTheme({
  palette: {
    primary: {
      light: '#80e27e',

      main: '#4caf50',

      dark: '#087f23',

      contrastText: '#fff'
    },

    secondary: {
      light: '#cfcfcf',

      main: '#9e9e9e',

      dark: '#707070',

      contrastText: '#000'
    }
  }
})

function App() {
  const client = createApolloClient()

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <div className='App' />

        <Test />
      </ThemeProvider>
    </ApolloProvider>
  )
}

const Test = () => {
  return (
    <div>
      <Button color='secondary' variant='contained'>
        Boton
      </Button>
    </div>
  )
}

export default App
