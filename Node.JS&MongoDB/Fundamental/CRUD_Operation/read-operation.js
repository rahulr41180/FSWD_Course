
const MongoClient = require("mongodb");

const uri = "mongodb+srv://rahulr41180:Rahul12345@cluster0.smrdbvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(uri);

// Aggregate

const run = async () => {
    try {
        const database = client.db("Introduction");
        const orders = database.collection("orders");

        /*
        
        A pizza restaurant wants to run a status report on-demand to summarize 
        pizza orders over the past week. 
        They run the following aggregate() query on the orders collection to 
        fetch the totals for each distinct "status" field:

        */

        const aggregateResult = await orders.aggregate([ {
                $match : {
                    date : {
                        $gte : new Date(new Date().getTime() - 1000 * 3600 * 24 * 7),
                        $lt : new Date(),
                    }
                }
            }, {
                $group : {

                    _id : "$status",
                    count : {
                        $sum : 1,
                    }

                }
            }
        ])

    } finally {
        await client.close();
    }
}

run().catch(console.dir);