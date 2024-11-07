
use("Aggregation");

// ----------------------------------------

// db.getCollection("user").aggregate([
//     // Find the total number of males and females.
//     /* 
//         1. Here we would not use $match method because here we need two types of 
//         bundled document first for males and second for females and we won't achieved 
//         this by using $match because we can only use this method whenever we need to 
//         filter a document based on a single value. So in this case we will use $group 
//         method so that we will grouped data based on different type of genders.
//         2. $group method will grouped the data on depends on unique value of gender.
//     */
//     {
//         $group: {
//           _id: "$gender",
//         }
//     }
// ])

// ---------------------------------------------

// db.getCollection("user").aggregate([
//     /* 
//         Now I want to count the number unique gender.
//         we can't use $count accumulator because count is not work like that count the different unique grouped value.
//         But this will not give us accurate answer for every senerio.
//         Instead of this we will use $sum accumulator.
//     */
//     {
//         $group: {
//           _id: "$gender",
//           genderCount : {
//             $count : "$gender"
//           }
//         }
//     }
// ])

// --------------------------------------

// db.getCollection("user").aggregate([
//     /* 
//         Instead of $count we will use $sum accumulator this will sum this like It will add 1 to respective group whenever 
//         it will respective group document.
//     */
//     {
//         $group: {
//           _id: "$gender",
//           genderCount : {
//             $sum : 1
//           }
//         }
//     }
// ])

// -------------------------------------

// db.getCollection("user").aggregate([
//     {
//         $group: {
//           _id: "$gender",
//           genderCount : {
//             $sum : 1
//           }
//         }
//     }
// ])

// -------------------------------------

db.getCollection("user").aggregate([
    {

        $group: {
          _id: "$gender",
          genderCount : {
            $sum : 1
          }
        }
        
    }
])