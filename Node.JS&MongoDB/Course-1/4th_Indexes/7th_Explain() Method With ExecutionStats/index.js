
// Explain() Method With ExecutionStats


use("Indexes");

db.getCollection("users").find({ age : { $lte : 35 }}).explain("executionStats");

/*
In the executionStats we can see that how many document are scanned and how many document find.
Suppose if there are 25 document and according to query there are only 2 document
So what MongoDB do it will scanned all document to find the query

This is called COLLSCAN.
This will create problem to us.

To resolve this issue we have to do indexed for age property if write operation is not happening that much.
*/