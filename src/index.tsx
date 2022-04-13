import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
//import { AudioPlayer } from '@kl-engineering/kidsloop-media-hooks'
import { AudioPlayer } from './AudioPlayer'
// import AudioMetadataList from './AudioMetadataList'
// import KidsLoopImage from './KidsLoopImage'

const link = createHttpLink({
  uri: '/media-storage/graphql',
  credentials: 'include',
})
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
// const client2 = new ApolloClient({
//   link,
//   cache: new InMemoryCache(),
// })

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <AudioMetadataList
    h5pId='6217658d9082755e3a68b56e'
    roomId='62181812fcb588c47666c0fe'
    userId='10b74790-9528-45be-b44f-9e341105c1e9'
    client={client2}
  /> */}
    <AudioPlayer
      mediaId="77bdb28a-95ce-4e53-bf73-c71e3b71c177"
      roomId="623415476c917ae1971875b9"
      mimeType="audio/webm"
    />
    {/* <KidsLoopImage
      mediaId="cd08d598-da26-4915-863c-ca95bd962006"
      roomId="no-room-id"
      mimeType="image/jpeg"
    /> */}
  </ApolloProvider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
