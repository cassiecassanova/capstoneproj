// mongodb client driver
const {MongoClient} = require('mongodb');
var url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);
const dbName = 'fluff';
const collectionName = "fluff";

module.exports.call = async function call(operation, parameters, callback) {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    switch(operation) {
        case "findAllProducts":
            const products = await collection.find({}).toArray();
            console.log('hello')
            console.log(products)
            callback({ products });
            break;
    }
  console.log("call complete: " + operation);
  client.close();
  return "call complete";
}

// let products = {}; //In-memory database
// products[6] = { "name": "Dog Brush", "price": 5.99, "description": "A brush perfect for dog hair.", "animal_category": "dog", "popularity": 0.7, "id": 1 }

// module.exports.findProduct = function(id) {
//   return products[id];
// };

// module.exports.updateProduct = function(id, product) {
//   products[id] = product;
// };