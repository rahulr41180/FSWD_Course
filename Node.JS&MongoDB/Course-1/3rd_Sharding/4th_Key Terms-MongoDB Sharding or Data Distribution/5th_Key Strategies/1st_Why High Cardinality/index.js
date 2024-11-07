
// Why High Cardenality :

/* 
This will help us to evenly or equaly distribute the data to multiple Shards.

Note : Low frequency of occurrence of shard key in the whole collection data(that is help for evenly distribution of that data across shards);
Means how frequently our data is getting inserted based on the shard key
*/

// Impact of high frequncy of occurrence of shard key in the whole collection data :


/* 
High frequency : will lead to uneven distribution of the data across shards.
*/

// Note :

/* 
Should not be monotonically changing
*/

// Example :

/* 
Example of auto increasing/decreasing : Means sometimes developer do auto increasing and decreasing of that shard key value.
This kind of things we should not do.
*/