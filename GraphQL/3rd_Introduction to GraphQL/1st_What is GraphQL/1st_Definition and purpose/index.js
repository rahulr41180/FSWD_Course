
// Definition :

/* 
GraphQL: A query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.
*/

// Purpose :

/* 
GraphQL's primary purpose is to provide a more efficient, powerful, and flexible way to interact with APIs. 
Here are some key points that highlight its purpose:

*/

// Client-Specified Queries :

/* 
Clients can request exactly the data they need and nothing more, which reduces over-fetching and under-fetching of data.

In a single request, clients can retrieve multiple resources, avoiding multiple round trips to the server that are common with REST APIs.
*/

// Real-Time Data :

/* 
GraphQL supports real-time updates through subscriptions, allowing clients to receive updates as soon as data changes.
*/

// Comparison with REST :

/* 
REST :

Endpoints: Multiple endpoints for different resources.
Data Retrieval: Clients might over-fetch or under-fetch data.
Versioning: Often requires versioning to manage changes.
Fixed Data Structure: Each endpoint returns a fixed data structure.

GraphQL :

Single Endpoint: Typically a single endpoint for all queries.
Flexible Data Retrieval: Clients specify exactly what data they need.
No Versioning Needed: Schema evolves without breaking changes.
Dynamic Data Structure: Returns only the requested fields.
*/

// Example :

/* 
With REST, you might have to make multiple requests to different endpoints to fetch related data:

GET /users/1
GET /users/1/posts
GET /posts/1/comments

With GraphQL, you can retrieve all the needed data in a single request :

{
  user(id: 1) {
    id
    name
    posts {
      id
      title
      comments {
        id
        content
      }
    }
  }
}

This query will return the user with their posts and comments in a single response.
*/