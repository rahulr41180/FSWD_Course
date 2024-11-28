
// HTTP Error :

/* 
A fetch() promise only rejects when a network error is encountered(which is usually when there is a permission issue or similar).
A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

Means, If request went to server successfully and after that request either send successfully response with status code like 200, 201, 300, 301 etc. 
or either send error response with status code like 404, 500 etc. We will get both in Response() method not in Reject() method of Promise because
request successfully went to server it does not matter that request either sent response or error.
Note : fetch() method will return either value in Response or in Reject.


If request does not went to server means request break or some network issue happened before went to server means at the time of making request to
server that time whatever error happened those we will get in Reject()
*/