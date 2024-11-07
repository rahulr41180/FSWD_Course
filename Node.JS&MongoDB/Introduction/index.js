
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://rahulr41180:Rahul12345@cluster0.smrdbvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// Replace the uri string with your connection string.
const client = new MongoClient(uri);


// Insert One
// const run = async () => {
//     try {
//         const database = client.db("Introduction");
//         const movies = database.collection("movies");

//         // Query for a movie that has the title 'Back to the Future'
//         const query = { title : "Avtar", year : 2000, category : "Action", type : "Hollywood"};
//         const movie = await movies.insertOne(query);
//         console.log("movie :", movie);
//     } 
//     finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }

// Insert Multi

// const run = async () => {
//     try {
//         const database = client.db("Introduction");
//         const movies = database.collection("movies");

//         // Query for a movie that has the title 'Back to the Future'
//         const query = [{ title : "Avenger", year : 2005, category : "Action", type : "Hollywood"},
//                         {title : "Doom", year : 2010, category : "Racing", type : "Bollywood"}];
//         const movie = await movies.insertMany(query);
//         console.log("movie :", movie);
//     } 
//     finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }

// Find a document
// const run = async () => {
//     try {
//         const database = client.db("Introduction");
//         const movies = database.collection("movies");

//         // Query for a movie that has the title 'Back to the Future'

//         const movie = await movies.findOne({type : "Hollywood"});
//         console.log("movie :", movie);
//     } 
//     finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }


// Find Multi Documents
// const run = async () => {
//     try {
//         const database = client.db("Introduction");
//         const movies = database.collection("movies");

//         // Query for a movie that has the title 'Back to the Future'

//         const movie = await movies.find({type : "Hollywood"});
//         console.log("movie :", movie);
//     } 
//     finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }

// Update One
const run = async () => {
    try {
        const database = client.db("Introduction");
        const movies = database.collection("movies");

        // Query for a movie that has the title 'Back to the Future'

        const movie = await movies.updateOne({type : "Hollywood"});
        console.log("movie :", movie);
    } 
    finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch((error) => console.log(error.message));