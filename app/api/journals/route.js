require('dotenv').config()
import  db  from '../../../server2.mjs'
export async function GET(req) {
  const dateSort = req?.dateSort || -1;
  async function getJournals(dateSort = -1) {
    return await db.collection("journals").find({}).sort({date: dateSort}).toArray();
  }
  try {
        const journals = await getJournals();
        return Response.json(journals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

