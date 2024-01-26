
import express from "express";

const app = express();

// Using dynamic routes allows us to pass parameters and process based on them.
app.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
});

// Pattern Matched Routes
// We can also use regex to restrict URL parameter matching. Let us assume you need the id to be a 5-digit long number.

app.get('/things/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
});

//  If none of your routes match the request, you'll get a "Cannot GET <your-request-route>" message as response. 
// This message be replaced by a 404 not found page

//Other routes here
app.get('*', function(req, res){

    res.send('Sorry, this is an invalid URL.');
});


app.listen(8080, async () => {
    try {
        console.log("Server is listening on port 8080 from expressjs_url_building");
    } catch(error) {

        console.log(error.message);
    }
})