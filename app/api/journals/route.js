require('dotenv').config()
import  db  from '../../../server2.mjs'

export const dynamic = 'force-static';
export async function GET(req) {
  const dateSort = req?.dateSort || -1;
  async function getJournals(dateSort = -1) {
    return await db.collection("journals").find({}).sort({date: dateSort}).toArray();
  }
  try {
        const journals = await getJournals();
        // console.log('JOURNALS: ', journals);
        return Response.json(journals);
    } catch (err) {
        return new Response('Webhook error: ', err.message, {
          status: 500
        });
    }
}

