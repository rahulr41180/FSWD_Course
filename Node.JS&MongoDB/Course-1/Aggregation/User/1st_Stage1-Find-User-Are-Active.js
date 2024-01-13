// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('Aggregation');

// Create a new document in the collection.
db.getCollection('user').aggregate([
    // Stage 1 : Find User Who are active
    {
        $match: {
            isActive : true

        }
    }
])
