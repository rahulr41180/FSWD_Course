
// The Trade Off

// Storage Space :

/* 
We can't do indexing for many or all property of the collection. 
    Because : It will create seperate B-Tree or seperate space for each property of that collection.
    Therefor our storage space will increase.
*/

// Write Performance :

/* 
If we will do write performance of that collection in which we did indexing for a property.
Means some write operation happening on the collection then what MongoDB will do it will create document in respective collection and also
it will add the indexing of that respective property in B-Tree and B-Tree means Binary tree and Binary tree alway be a sorted tree.
Means it will do again sorting for whole B-Tree for that new  inserted document.

Note : If read intensive task is more then write intensive task then Indexing for property is good for that collection.
Note : If write intensive task is more then read intensive task or both type of task is more then Indexing for property is not good option.
       and it will slow down our performance. Because collection and B-Tree both are updating at same time.
*/