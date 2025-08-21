//import { app } from '../server.js';
require('dotenv').config()
// import  db  from '../../../server2.mjs'
import  { getDocument }  from '../../../../serverFunctions.js'

// (async function(){
//
//   var foo = await require('../../../server3.js');
//   console.log(foo);
// })();


export const dynamic = 'force-static';
export async function GET(req, {params}) {
  const {collectionName, id} = await params;
  try {
        const home = await getDocument(collectionName, id);
        return Response.json(home);
    } catch (err) {
        return new Response(`Webhook error: , ${err.message}`, {
          status: 500
        });
    }

}

