
use("mongodbVSCodePlaygroundDB");

// db.getCollection('inventory').insertMany(
//     [
//         { "item": "journal", "qty": 25, "size": { "h": 14, "w": 21, "uom": "cm" }, "status": "A" },
//         { "item": "notebook", "qty": 50, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "A" },
//         { "item": "paper", "qty": 100, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "D" },
//         { "item": "planner", "qty": 75, "size": { "h": 22.85, "w": 30, "uom": "cm" }, "status": "D" },
//         { "item": "postcard", "qty": 45, "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "A" }
//     ]
// );

// Find All
db.getCollection("inventory").find({});

// The following example retrieves all documents from the inventory collection where status equals either "A" or "D":
db.getCollection('inventory').find({status: { $in: ['A', 'D'] } });

// The following example retrieves all documents in the collection where the status equals "A" or qty is less than ($lt) 30:
db.getCollection('inventory').find({ $or: [{ status: 'A' }, { qty: { $lt: 30 } }]});


// The following example retrieves all documents in the inventory collection where the status equals "A" and qty is less than ($lt) 30:
db.getCollection('inventory').find({ $and: [{ status: 'A' }, { qty: { $lt: 30 } }]});

// In the following example, the compound query document selects all documents in the collection where the status equals "A" 
// and either qty is less than ($lt) 30 or item starts with the character p:
db.getCollection('inventory').find({ status: 'A', $or: [{ qty: { $lt: 30 } }, { item: { $regex: '^p' } }] });