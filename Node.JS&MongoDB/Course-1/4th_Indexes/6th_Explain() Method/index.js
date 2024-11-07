
// Explain Method :

db.collection.find({ field : "value" }).explain();

/* 
Explain will always work with queries method not with write, update, put, patch and delete methods.
*/

// How it will work :

/* 

Explain() method show us all information about the queries operation means how it is working means how .find() method is working.
*/


use("Indexes");
db.getCollection("users").find({ age : { $lte : 35 }}).explain();

/*
We haven't did index for age so it will find age by COLLSCAN
*/