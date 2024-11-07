
// Key Strategies :

// High Cardinality :
/* 
A shard key should high cardinality key
Means a key which is not common in every document means a key which is not common for all or only present in one document that key will be
considered as high cardinality key.

Like : user email, phone, user_id
*/


// Low Cardinality :
/* 
A shard key should low cardinality key
Means a key which is commonaly using in multiple document and this type of key we won't use as shard key

Like : user's state, country, city
*/