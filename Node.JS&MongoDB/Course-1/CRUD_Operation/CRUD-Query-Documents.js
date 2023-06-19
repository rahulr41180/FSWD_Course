
const { MongoClient } = require("mongodb");

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const uri = "mongodb+srv://rahulr41180:Rahul12345@cluster0.smrdbvx.mongodb.net/crudoperations?retryWrites=true&w=majority";

// const client = new MongoClient(uri);
// const database = client.db("crudoperations");

const Schema = new mongoose.Schema({
    item: {
        type: String
    },

    qty: {

        type: String
    },
    tags: {
        type: [
            {
                type: String
            }
        ]
    },

    size: {
        h: {
            type: Number
        },
        w: {
            type: Number
        },
        uom: {
            type: String
        }
    },
    status: {
        type: String
    }
});

const inventorySchema = mongoose.model("inventory", Schema);

// ------------------- Insert Many Documents -----------------------

app.post("/api/insertMultiple", async (req, res) => {
    try {
        // const collection = database.collection("inventory");


        const inventory = await inventorySchema.insertMany([{
                item: 'journal',
                qty: 25,
                size: { h: 14, w: 21, uom: 'cm' },
                status: 'A'
            },{
                item: 'notebook',
                qty: 50,
                size: { h: 8.5, w: 11, uom: 'in' },
                status: 'A'
            },{
                item: 'paper',
                qty: 100,
                size: { h: 8.5, w: 11, uom: 'in' },
                status: 'D'
            },{
                item: 'planner',
                qty: 75,
                size: { h: 22.85, w: 30, uom: 'cm' },
                status: 'D'
            },{
                item: 'postcard',
                qty: 45,
                size: { h: 10, w: 15.25, uom: 'cm' },
                status: 'A'
            }]);

        return res.status(200).send({
            status: true,
            inventory: inventory
        })

    } catch (error) {
        return res.status(505).send({
            status: false,
            error: error.message
        })
    }
});




// --------------------------- Select All Documents in a Collection --------------------

/* 
To select all documents in the collection, 
pass an empty document as the query filter parameter to the find method. 
The query filter parameter determines the select criteria:
*/

app.get("/api/insertAllDocument", async (req, res) => {
    try {

        const result = await inventorySchema.find({});

        return res.status(200).send({
            result : result
        })

    } catch(error) {
        return res.status(500).send({
            error : error.message
        })
    }
})

// ------------------------ Specify Equality Condition --------------------------

/*
To specify equality conditions, 
use <field>:<value> expressions in the query filter document:
{ <field1>: <value1>, ... }
*/

/*
The following example selects from the inventory collection all documents 
where the status equals "D":
*/

app.get("/api/EqualityCondition_1", async (req, res) => {
    try {
        /*
        Here : 

        Field : status
        Value : "D"
        */
        const result = await inventorySchema.find({status : "D"});

        return res.status(200).send({
            result : result
        })

    } catch(error) {
        return res.status(500).send({
            error : error.message
        })
    }
})

// ------------------------- Specify Conditions Using Query Operators ----------------------

/*

A query filter document can use the query operators to specify conditions in the following form:
{ <field1>: { <operator1>: <value1> }, ... }
*/

/*
The following example retrieves all documents from the inventory collection 
where status equals either "A" or "D":
*/


app.get("/api/EqualityCondition_2", async (req, res) => {
    try {
        /*
        Here : 
        Field : status,
        Operator : $in,
        Value : ["A", "D"],
        $in : Either collection field value is matching with any one from value, That collection will return
        */
        const result = await inventorySchema.find({ status : { $in : ["A", "D"] } })

        return res.status(200).send({
            result : result
        })

    } catch(error) {
        return res.status(500).send({
            error : error.message
        })
    }
})

app.get("/api/getAll", async (req, res) => {
    try {
        const result = await inventorySchema.find({});

        return res.status(200).send({
            result : result
        })
    } catch(error) {
        return res.status(500).send({
            error : error.message
        })
    }
})

const connectDB = async () => {
    try {
        const db = await mongoose.connect(uri);
        console.log("Successfully database has been connected");
    } catch (error) {
        console.log("Error in database connection : ", error.message);
    }
}

app.listen(5000, async () => {
    try {
        console.log("Server listening on port 5000");
        await connectDB();

    } catch (error) {
        console.log(`Error in server connection on port 5000 :`, error.message);
    }
})