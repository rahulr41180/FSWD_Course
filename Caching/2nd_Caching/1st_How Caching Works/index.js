
// How Caching Works :

/* 
Request Handling:

When a request for data is made, the cache is checked first to see if the data is available.
If the data is found in the cache (a cache hit), it is returned immediately, bypassing the need to access the primary data source.
If the data is not found in the cache (a cache miss), the request is sent to the primary data source, the data is retrieved, 
and then it is stored in the cache for future requests and then sent to 
client(this is happened for unique request, update data in cache and data is not present for requested query).
*/