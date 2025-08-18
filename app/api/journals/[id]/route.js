
require('dotenv').config()
// import  db  from '../../../../server2.mjs'
import  {getJournalEntry}  from '../../../../serverFunctions.js'

export const dynamic = 'force-static';
export async function GET(req, {params}) {
    const { id } = await params;
  try {
      const journalEntry = await getJournalEntry(id);
      return Response.json(journalEntry);
    } catch (err) {
        return new Response('Webhook error: ', err.message, {
          status: 500
        });
    }
}
