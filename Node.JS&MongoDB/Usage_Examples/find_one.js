
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://rahulr41180:Rahul12345@cluster0.smrdbvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

/* 
A query document that configures the query to return only 
movies with the title of exactly the text 'The Room'.

A sort that organizes matched documents in descending order by rating, 
so if our query matches multiple documents 
the returned document will be the document with the highest rating.

A projection that explicitly excludes the _id 
field from returned documents and explicitly includes only 
the title and imdb object (and its embedded fields).
*/

const client = new MongoClient(uri);

const run = async () => {
  try {

    const database = client.db("Introduction");
    const movies = database.collection("movies");

    // Query for a movie that has the title 'The Room'
    const query = { title: "The Room" };

    const options = {
      // sort matched documents in descending order by rating
      sort: { "imdb.rating": -1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, title: 1, imdb: 1 },
    };

    // const movie = await movies.findOne(query, options);
    const movie = await movies.findOne({title : "The Room"}, {sort : {"imdb.rating" : -1}, projection : {_id : 0, title : 1, imdb : 1}});

    // since this method returns the matched document, not a cursor, print it directly
    console.log(movie);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);