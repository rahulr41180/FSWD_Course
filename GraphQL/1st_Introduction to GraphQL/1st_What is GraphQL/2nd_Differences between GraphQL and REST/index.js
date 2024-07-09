
// Differences between GraphQL and REST :

// Data Fetching :
/* 
GraphQL:

Single Endpoint: Typically uses a single endpoint for all interactions.
Flexible Queries: Clients can request exactly the data they need in a single request.
Avoids Over-fetching and Under-fetching: Reduces the need for multiple round trips to the server, 
as clients can fetch multiple resources in one query.


REST:

Multiple Endpoints: Different endpoints for different resources (e.g., /users, /posts).
Fixed Data Structures: Each endpoint returns a fixed structure, which might lead to over-fetching or under-fetching of data.
Multiple Requests: Often requires multiple requests to fetch related data (e.g., fetching a user and their posts).
*/

// --------------------------------------------

// Response Format :

/* 
GraphQL:
JSON: Always returns JSON.
Customizable Responses: Clients specify the shape and structure of the response by defining the query.

REST:
Various Formats: Can return different formats like JSON, XML, HTML, etc.
Fixed Responses: The server defines the response structure, which is fixed for each endpoint.

*/

// ---------------------------------------------------

// API Versioning :

/* 
GraphQL:
Versionless: No need for versioning. The schema can evolve without breaking existing clients, as clients only request the fields they need.

REST:
Versioning Needed: Often requires versioning to manage changes and ensure backward compatibility (e.g., /v1/users, /v2/users).
*/

// -----------------------------------------------

// Schema and Type System

/* 
GraphQL:
Strongly Typed Schema: Uses a schema to define types and relationships between them. This schema serves as a contract between the client and server.
Introspection: Allows clients to query the schema itself to understand the available data and operations.

REST:
No Schema Required: Does not require a formal schema, though it can be documented using tools like OpenAPI (formerly Swagger).
No Introspection: Clients rely on external documentation to understand the API.
*/

// -----------------------------------------------

// Real-time Capabilities :

/* 
GraphQL:
Subscriptions: Supports real-time updates through subscriptions, allowing clients to receive updates when data changes.

REST:
Polling: Typically relies on polling or WebSockets for real-time updates, which requires additional setup and management.
*/

// -----------------------------------------------

// Error Handling :

/* 
GraphQL:
Unified Error Handling: Errors are part of the response, with both data and errors returned in a single JSON response.
Detailed Errors: Provides detailed error messages and locations in the query.

REST:
HTTP Status Codes: Uses standard HTTP status codes to indicate success or failure.
Separate Error Responses: Errors are returned separately from successful responses, typically with different HTTP status codes.
*/

// -------------------------------------------------

// Batching and Caching :

/* 
GraphQL:
Batching: Can batch multiple queries into a single request.
Client-side Caching: Libraries like Apollo Client offer sophisticated client-side caching.

REST:
Multiple Requests: Typically requires multiple HTTP requests for different resources.
HTTP Caching: Relies on HTTP caching mechanisms like ETag, Last-Modified, and Cache-Control.
*/