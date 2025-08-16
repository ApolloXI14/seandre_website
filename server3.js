require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');

export async function makeMongoDBConnection() {
  let connection;
  const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
  connection = await client.connect();
  console.log('makeMongoDBConnection success');
  return connection.db("journal");
}



//Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

/*
async function run() {
    let db;
  try {
    // Connect the client to the server	(optional starting in v4.7)
    db = await makeMongoDBConnection();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    //console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/


//let db = conn.db("journal");

module.exports.makeMongoDBConnection = makeMongoDBConnection;

// export default makeMongoDBConnection;

// module.exports = (async function(){
//  //some async initiallizers
//  //e.g. await the db module that has the same structure like this
//   var db = await makeMongoDBConnection();
//   //resolve the export promise
//   return db;
//   // return {
//   //   db
//   // };
// })()
