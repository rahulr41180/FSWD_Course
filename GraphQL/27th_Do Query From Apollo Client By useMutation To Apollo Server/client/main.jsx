import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

/* 
uri specifies the URL of our GraphQL server.
cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
*/


const client = new ApolloClient({  
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
})

/* 
You connect Apollo Client to React with the ApolloProvider component. 
Similar to React's Context.Provider, ApolloProvider wraps your React app and places Apollo Client on the context, 
enabling you to access it from anywhere in your component tree.

In main.jsx, let's wrap our React app with an ApolloProvider. 
We suggest putting the ApolloProvider somewhere high in your app, above any component that might need to access GraphQL data.
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client} >
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)