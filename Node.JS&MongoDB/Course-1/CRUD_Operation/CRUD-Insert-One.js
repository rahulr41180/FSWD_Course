
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://rahulr41180:Rahul12345@cluster0.smrdbvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// ----------------- Insert a Single Document -----------------

const run = async () => {
    try {
        const database = client.db("crudoperations");
        const collectionName = database.collection("inventory");

        // Insert One
        const inventory = await collectionName.insertOne({
            item : "canvas",
            qty : 100,
            tags : ["cotton"],
            size : { h : 28, d : 35.5, uom : "cm"}
        })
        console.log("Inverntory : ", inventory);


        // Read with filter
        
        const inventories = await collectionName.find({ item : "canvas" });
        console.log('inventories:', inventories)
    } finally {
        await client.close();
    }
}

run().catch((error) => {
    console.log("Error : ", error.message);
})