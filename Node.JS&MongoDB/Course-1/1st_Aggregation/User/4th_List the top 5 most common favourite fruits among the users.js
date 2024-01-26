
// MongoDB Playground

// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('Aggregation');

// Create a new document in the collection.

db.getCollection('user').aggregate([
    // List the top 5 most common favourite fruits among the users?

    // Stage 1 : I need to group all the document based on "$favoriteFruit".
    // We have three different fruit in our whole database so it will give us three group of data for respective fruit.
    {
        $group: {
          _id: "$favoriteFruit",
        }
    }
])


/* --------------------------------------------- */

db.getCollection('user').aggregate([
    // Stage 1 : 
    // Now we need to calculate the total count of each fruit.
    // For that we need to count the fruit with the help of "$sum" with 1 value key in the stage1. Because we are doing the unique fruit group in stage 1.
    // But why we are using "$sum" with 1 value because suppose if mongoDB try to group each document based on fruit name then it will add 1 whenever it will find the same fruit.
    // Suppose first it found banana so it will add 1 into count and count is our "fieldN" again it will find banana then it will add 1 into count and that count present in banana group and each group have it respective count.
    {
        
        $group: {
          _id: "$favoriteFruit",
          count : {
            $sum : 1
          }
        }
    }
])


/* --------------------------------------------- */

db.getCollection('user').aggregate([
    // Stage 1 : 
    // Now we need to sort it because we need to find top 5 fruit which is favorite of user but we have three fruit so we will find top 2 fruit.
    // We will sort based on count of fruits.
    // We will do this sort operation in another stage which will stage 2 because in stage 1 we are grouping data based
    // on need and that grouping or filtered data we will use in stage 2
    {

        $group: {
          _id: "$favoriteFruit",
          count : {
            $sum : 1
          }
        }
    },

    // Stage 2 :

    {
        // $sort: {
        //   field1: sortOrder
        // }
        // Now here we are using field1 is count but count field is not present in out original data so How 
        // MongoDB sort the grouped data based on count.
        // That's by we are using aggregation because each stage use it's previous stage data so stage 2 will use
        // Only stage 1 data and in stage 1 we were using count as out fieldN
        // -1 for arange the data in higher to lower order .

        $sort: {
          count: -1

        }
    }
])

/* ------------------------------------------------------------- */


db.getCollection('user').aggregate([
    // Stage 1 : 
    // We have sorted our grouped data based on fruit.
    // Now we want top 2 data as we have only three different fruit in our original database.
    // So for that we will use $limit key for taking the top 2 grouped data.
    // We will do this operation in stage 3 because we have to use Stage 2 sorted data.
    // If we will do this "$limit" operation in Stage 2 then Stage 2 will use previous Stage 1 data and Stage 1 don't have sorted data that's why we are doing this in new Stage 3.
    // Also the another reason is we can't do more than one operation in one stage we can only do one operation in one stage orther wise
    // We will get error like : "A pipeline stage specification object must contain exactly one field."

    {
        $group: {
          _id: "$favoriteFruit",
          count : {
            $sum : 1
          }
        }
    },


    // Stage 2 :
    {
        $sort: {
          count: -1
        }
    },

    // Stage 3 :
    {

        $limit: 2
    }

])