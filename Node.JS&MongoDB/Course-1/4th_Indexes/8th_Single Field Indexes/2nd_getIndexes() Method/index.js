
// getIndexes() to get the list of created indexes for property

use("Indexes");

db.getCollection("users").getIndexes();

/* 
We will get this type of answer :
*/

[

    {
        "v": 2,
        "key": {
            "_id": 1
        },
        "name": "_id_"
    },
    {
        "v": 2,
        "key": {
            "age": 1
        },
        "name": "age_1"
    }
]

/* 
Here we can see that MongoDB has created the indexes for age property like with : age_1

Note : MongoDB has already being created the indexes for _id property for all the collection
in respective collection.

We can't see how Indexes for property look like because MongoDB does not provide this feature
But MongoDB is providing the name of indexes property.
In our condition the indexes of age property is age_1
*/