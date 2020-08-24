import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// apollo
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

// router 
import { BrowserRouter as Router } from 'react-router-dom'

const client = new ApolloClient({
  uri: "http://spacexdata.herokuapp.com/graphql",
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {/* <Router> */}
        <App />
      {/* </Router> */}
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
