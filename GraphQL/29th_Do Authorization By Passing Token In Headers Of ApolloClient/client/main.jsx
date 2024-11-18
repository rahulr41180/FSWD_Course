import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

/* 
  ApolloClient has headers method.
  In the headers we can send the token to ApolloServer for Authorization.
*/


const client = new ApolloClient({  
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem("gqlCourseToken") || ""
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client} >
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)