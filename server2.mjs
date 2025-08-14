import { MongoClient } from "mongodb";
const connectionString = process.env.MONGODB_URI || "";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log('MongoDB connection successful');
} catch(e) {
  console.error(e);
}
let db = conn.db("journal");
export default db;
