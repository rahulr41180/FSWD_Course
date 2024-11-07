
use("Indexes");

// Query Type 1 :

// db.getCollection("users").find({ age : { $gte : 27 }, gender : "male"}).explain("executionStats");
db.getCollection("users").find({ age : { $gte : 27 }, gender : "female"})