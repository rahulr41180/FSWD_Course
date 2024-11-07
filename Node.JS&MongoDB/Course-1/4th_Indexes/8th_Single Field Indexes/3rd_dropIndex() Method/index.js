
// dropIndex() Method

use("Indexes");

/* 
First Method
db.getCollection("users").dropIndex("indexed property name to drop");

Second Method
db.getCollection("users").dropIndex("{ same json that we had gave at the time of index creation}")
*/

// Drop with first method
db.getCollection("users").dropIndex("age_1");

// getIndexes();
db.getCollection("users").getIndexes();

// createIndex();
db.getCollection("users").createIndex({ "age" : 1 });

// Drop with second method
db.getCollection("users").dropIndex({ "age" : 1 });

// getIndexes();
db.getCollection("users").getIndexes();