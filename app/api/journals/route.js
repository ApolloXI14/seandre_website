'use server';

require('dotenv').config()
// import  db  from '../../../server2.mjs'
import  { getJournals }  from '../../../serverFunctions.js'

const dynamic = 'force-static';

export async function GET(req) {
  const dateSort = req?.dateSort || -1;
  try {
        const journals = await getJournals(dateSort);
        // console.log('JOURNALS: ', journals);
        return Response.json(journals);
    } catch (err) {
        return new Response('Webhook error: ', err.message, {
          status: 500
        });
    }
}

