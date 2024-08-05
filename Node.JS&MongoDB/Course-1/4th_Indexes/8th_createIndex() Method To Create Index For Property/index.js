
// createIndex() using for create index for property.

use("Indexes");

// db.getCollection("users").find({ age : { $lte : 35 }}).explain("executionStats");

// db.getCollection("users").createIndex({ "Property Name" : "Value for accending or decending Order"});
/*
Property Name : For which propert
*/


db.getCollection("users").createIndex({ age : 1 });