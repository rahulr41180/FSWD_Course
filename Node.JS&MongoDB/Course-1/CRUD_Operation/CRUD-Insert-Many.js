
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
    item : {
        type : String
    },

    qty : {

        type : String
    }, 
    tags : {
        type : [
            {
                type : String
            }
        ]
    },

    size : {
        h : {
            type : Number
        },
        w : {
            type : Number
        }, 
        uom : {
            type : String
        }
    }
});
const inventorySchema = mongoose.model("inventory", Schema);

// ----------------- Insert Multiple Documents -----------------

// const run = async () => {
//     try {
//         const database = client.db("crudoperations");

//         const collectionName = database.collection("inventory");

//         // Insert Many
//         const inventory = await collectionName.insertMany([{
//               item: 'journal',
//               qty: 25,
//               tags: ['blank', 'red'],
//               size: { h: 14, w: 21, uom: 'cm' }
//             },{
//               item: 'mat',
//               qty: 85,
//               tags: ['gray'],
//               size: { h: 27.9, w: 35.5, uom: 'cm' }
//             },{
//               item: 'mousepad',
//               qty: 25,
//               tags: ['gel', 'blue'],
//               size: { h: 19, w: 22.85, uom: 'cm' }
//         }]);

//         console.log("Inverntory : ", inventory);

//         // Read with filter
//         const inventories = await collectionName.find({});
//         console.log('inventories:', inventories);

//     } finally {
//         await client.close();
//     }
// }


// run().catch((error) => {
//     console.log("Error : ", error.message);
// })

app.post("/api/insertMultiple", async (req, res) => {
    try {
        // const collection = database.collection("inventory");

        const inventory = await inventorySchema.insertMany([{
            item: 'journal',
            qty: 25,
            tags: ['blank', 'red'],
            size: { h: 14, w: 21, uom: 'cm' }
        },{
            item: 'mat',
            qty: 85,
            tags: ['gray'],
            size: { h: 27.9, w: 35.5, uom: 'cm' }
        },{
            item: 'mousepad',
            qty: 25,
            tags: ['gel', 'blue'],
            size: { h: 19, w: 22.85, uom: 'cm' }
        },{
            item: 'planner',
            qty: 75,
            size: { h: 22.85, w: 30, uom: 'cm' },
            status: 'D'
        },]);

        return res.status(200).send({
            status : true,
            inventory : inventory
        })

    } catch(error) {
        return res.status(505).send({
            status : false,
            error : error.message
        })
    }
})


const connectDB = async () => {
    try {
        const db = await mongoose.connect(uri);
        console.log("Successfully database has been connected");
    } catch(error) {
        console.log("Error in database connection : ", error.message);
    }
}

app.listen(5000, async () => {
    try {
        console.log("Server listening on port 5000");

        await connectDB();

    } catch(error) {
        console.log(`Error in server connection on port 5000 :`, error.message);
    }
})