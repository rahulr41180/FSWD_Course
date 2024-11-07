
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('Aggregation');

// Create a new document in the collection.
db.getCollection('user').aggregate([
    // Stage 1 : What is the average age of all users?.
    {
        // $group: {

        //   _id: expression,
        //   fieldN: {
        //     accumulatorN: expressionN
        //   }
        // }

        /* -------------------------------- */
        // $group: {
            // Based on the _id we can group the document like : based on age, gender but here we want to group all in one group so for that we will use "null" value because if

            // we group it on the basis of gender so it will create two group one for male and one female same for age it will create different group on the basis of different age

        //   _id: null,
            // fieldN could be any name which we want
            // So here we are doing average of age so we will use
            // averageAge : {
                // accumulatorN : we are doing here average so will use $avg for find the average of age
                // $avg : "$age"
            // }

        // },
        /* ------------------------------------ */

        // If we will group it based on gender than it will give us two group of document because gender have two different value one is male and another is female.
        $group: {
          _id: "$gender",
          averageAgeBasedOnGender: {
            $avg: "$age"
          }
        }
    }

])
