//import { app } from '../server.js';
require('dotenv').config()
import  db  from '../../../server2.mjs'
export async function GET() {
  const journalCollection = db.collection("homes");
  async function getHome() {
          return await journalCollection.find({}, {"title": true, "date": true, "content": true}).toArray();
        }
  try {
        var home = await getHome();
        return Response.json(home);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }

}
