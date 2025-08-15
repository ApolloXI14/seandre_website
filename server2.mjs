require("dotenv").config();
import { MongoClient } from "mongodb";
const connectionString = process.env.MONGODB_URI || "";
const client = new MongoClient(connectionString);
let conn;
let db;

export async function makeMongoDBConnection() {
  conn = await client.connect();
  return conn.db("journal");
}

try {
  // conn = await client.connect();
  // db =  conn.db("journal");

  if (typeof(db) === 'undefined') {
    db = await makeMongoDBConnection();
    console.log('MongoDB connection successful');
  } else {
    console.log('Already connected')
  }

} catch(e) {
  console.error(e);
}
//let db = conn.db("journal");
export default db;
