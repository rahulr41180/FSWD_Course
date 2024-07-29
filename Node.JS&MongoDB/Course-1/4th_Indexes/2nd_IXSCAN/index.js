
// IXSCAN :

/* 
If we did indexing for collection property and then if we will do query for that indexed propert then MongoDB will do index scaning 
for that perticular collection property.

Index scaning is faster then collection secaning.
Index scaning is following the binary search : Means whenever we did indexing for collection property then MongoDB create a seperate collection and 
there MongoDB store all the different value of that collection property in an array in sort manner and it keep the collection property as property 
of that new seperate collection and also it store the reference of that document in that new seperate collection.


Indexing of collection property are stored in B-Tree data structure.
*/

// It Stores :

/* 
1. Index Keys
2. Pointers to the documents in the collection
*/