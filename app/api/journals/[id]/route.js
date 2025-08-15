require('dotenv').config()
import  db  from '../../../../server2.mjs'

export const dynamic = 'force-static';
export async function GET(req, {params}) {
    const { id } = await params;
    console.log('title test: ', id);
async function getJournalEntry(query) {
      return await db.collection("journals").findOne(query, {title: 1, date: 1, content: 1});
  }
  try {
      const isParamId = /^\d+$/.test(id);
      const searchQuery = !isParamId && id?.replaceAll('-', " ") || Number(id); // if title is in request, find just
      //const title = req?.params?.title.replaceAll('-', " "); // if title is in request, find just that title, otherwise return all
      //const dateSort = req?.dateSort || -1; // sort DESC date by default
      const query = isParamId ? { _id: searchQuery } : {title: new RegExp(searchQuery, 'i')} ;
      const options = {sort: {date: -1}};
      const journalEntry = await getJournalEntry(query);
      return Response.json(journalEntry);
    } catch (err) {
        return new Response('Webhook error: ', err.message, {
          status: 500
        });
    }
}
