
// What is the advantages of Sharding :

/* 
1. Scalable reads/ writes workload :
We can add new shard using chunk migration and balancer will be balanced the shards accross the new added shards so reads can happen parallel 
then single nodes.

2. Increased Storage Capacity :
Storage capacity increased without disturbing the existing cluster.

3. High Availability :

High availability there means In case one shard goes down we have other shards which have backup of our existing cluster.
Means suppose we have distributed the data in four shards and one shard has gone down then we have 75% of our existing cluster data as backup data.
*/