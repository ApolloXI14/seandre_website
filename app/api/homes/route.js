//import { app } from '../server.js';
require('dotenv').config()
// import  db  from '../../../server2.mjs'
import  {makeMongoDBConnection}  from '../../../server3.js'

// (async function(){
//
//   var foo = await require('../../../server3.js');
//   console.log(foo);
// })();


export const dynamic = 'force-static';
export async function GET() {
  const db = await makeMongoDBConnection();

  const journalCollection = db.collection("homes");
  async function getHome() {
          return await journalCollection.find({}, {"title": true, "date": true, "content": true}).sort({date: -1}).toArray();
        }
  try {
        var home = await getHome();
        return Response.json(home);
    } catch (err) {
        return new Response('Webhook error: ', err.message, {
          status: 500
        });
    }

}
