
// What is Sharding :

/* 
Sharding is a method to distributed data over multiple node or multiple collection.

Distributed to one or more collections or to one or more nodes.

Example :

Different data value could be distributed to different nodes
Collection(1TB Data) -- Distributed to multiple nodes or collections --> Shard 1(206GB) + Shard 2(306GB) + Shard 3(106GB) + Shard 4(456GB)

Data could be equaly distributed to different nodes
Collection(1TB Data) -- Distributed to multiple nodes or collections --> Shard 1(256GB) + Shard 2(256GB) + Shard 3(256GB) + Shard 4(256GB)

Distribution depends on how we understood different key terms of MongoDB or how we can implement that.
*/