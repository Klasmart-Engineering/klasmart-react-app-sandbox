import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { AudioPlayer } from 'kidsloop-audio-player'

const link = createHttpLink({
  uri: '/audio-storage/graphql',
  credentials: 'include',
})
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <AudioPlayer
      audioId="54b140c0-7703-4a5d-b0c7-ea59a0c4b4eb"
      mimeType="audio/webm"
    />
  </ApolloProvider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
