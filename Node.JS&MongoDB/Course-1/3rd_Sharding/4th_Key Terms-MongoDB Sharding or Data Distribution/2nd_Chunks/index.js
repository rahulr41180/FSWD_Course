
// Chunks :

/* 
Chunks contains partitioned data.
That consists of a subset of sharded data.
*/

// How Data are stored in Shard :

/* 
So data are stored in chunks in the single shard means :

*/

// We have selected the shard key based on the shard key how data are stored in chunks in a single shard.

/* 
In one shard there are multiple chunks and one chunks could be of 64MB size means by default it is 64MB of size not more then but we can configured.

Cluster have multiple nodes and one nodes can have multiple chunks.
*/

// Example :

/* 
Suppose there are three nodes.

Node 1 have three chunks
Node 2 have three chunks
Node 3 have only one chunk

then chunks will have migrate from Node 2 or Node 1 to Node 3.
Migration of chunks to different shard can be done by "Balancer".
*/

/* 
If one chunk is having more than the specify size in terms of MB or in terms of number of documents then it should be split.
This will be done by an automated process which can be trigered based upon that size of chunks(let considered that if size of chunk goes up then
chunk should split in two chunks) same way if there are number of document goes higher then we decided then chunk should split in two chunks.
*/