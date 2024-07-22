
// CollScan :

/* 
db.user.findOne({user : "user1"});
Suppose we have a mutliple documents in user collections and I want to search a document by a user name like : user1
Then what MongoDB will do MongoDB would scan all the documents by name from first to last document once It has found the one document by name.
This process is called CollScan. 
*/