
use("Aggregation");

// --------------------------------------

// db.getCollection("user").aggregate([
//     // Which country has the highest number of registered users?
//     /* 
//         1. First we need grouped all documents based on unique country.
//         2. country is present inside the nested object.
//         3. So to get the country key value we just need go there by using "." dot notation like : $company.location.country
//         4. we will be got group data for respective country
//     */
//    {
//     $group: {
//       _id: "$company.location.country"
//     }
//    }
// ])

// ---------------------------------


// db.getCollection("user").aggregate([
//     // Which country has the highest number of registered users?
//     /* 
//         1. Now we want how many users regitered for respective country.
//         2. Here we will achieve this by using $sum not with $count.
//         3. Because here we need to add 1 whenever respective country will find.
//         4. Here we will get registeredUser count based on their respective country.
//     */
//    {
//     $group: {
//       _id: "$company.location.country",
//       registeredUser : {
//         $sum : 1
//       }
//     }
//    }
// ])

// --------------------------------------

// db.getCollection("user").aggregate([
//     // Which country has the highest number of registered users?
//     /* 
//         1. Here we will use grouped data and based on registeredUser count we will sort them in next stage 2
//         2. Stage 1 will be used actually
//         3. Stage 2 will be used stage 1 gouped data.
//         4. Here we will get highest number of registered users data.
//     */
//    {
//     $group: {
//       _id: "$company.location.country",
//       registeredUser : {
//         $sum : 1
//       }
//     }
//    }, 

//    {
//         $sort: {
//           registeredUser: -1
//         }
//    }
// ])

// --------------------------------------

// db.getCollection("user").aggregate([
//     // Which country has the highest number of registered users?
//     /* 
//         1. Now we want to limit data.
//         2. We will use stage 2 data to apply limit over their.
//     */
//    {
//     $group: {
//       _id: "$company.location.country",
//       registeredUser : {
//         $sum : 1
//       }
//     }
//    }, 

//    {
//         $sort: {
//           registeredUser: -1
//         }
//    },

//    {
//     $limit: 2
//    }
// ])

// -------------------------------------

db.getCollection("user").aggregate([
    // Which country has the highest number of registered users?
   {
    $group: {
      _id: "$company.location.country",
      registeredUser : {
        $sum : 1
      }
    }
   }, 

   {
        $sort: {
          registeredUser: -1
        }
   },

   {
    $limit: 2
   }
])