// require("dotenv").config();
//const { MongoClient, ServerApiVersion } = require('mongodb');
import * as dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from 'mongodb';
// import * as mongodb from 'mongodb';

export async function makeMongoDBConnection() {
  let connection;
  const client = new MongoClient("mongodb://myUserAdmin:CA0ABEB4C4F9BD2A62F53FAE2A3A4EA772CB5E5C28B87611A7760E8F15D48B1B@localhost:27017/admin?replicaSet=rs0", {
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
const client = new MongoClient("mongodb://myUserAdmin:CA0ABEB4C4F9BD2A62F53FAE2A3A4EA772CB5E5C28B87611A7760E8F15D48B1B@localhost:27017/admin?replicaSet=rs0", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// export const viteNodeApp = makeMongoDBConnection;
export default makeMongoDBConnection;
