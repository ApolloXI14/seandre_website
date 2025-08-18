'use server'

import  { makeMongoDBConnection }  from './server3.js'

const db = await makeMongoDBConnection();

export async function getHomes() {
    const homesCollection = db.collection("homes");
    return await homesCollection.find({}, {"title": true, "date": true, "content": true}).sort({date: -1}).toArray();
}

export async function getJournals(dateSort = -1) {
    const journalsCollection = db.collection("journals");
    return await journalsCollection.find({ "_id": { "$type": "number" } }, {title: 1, date: 1, content: 1}).sort({date: dateSort}).toArray();
}

export async function getJournalEntry(id) {
    const journalsCollection = db.collection("journals");
    const isParamId = /^\d+$/.test(id);
      const searchQuery = !isParamId && id?.replaceAll('-', " ") || Number(id); // if title is in request, find just
      //const title = req?.params?.title.replaceAll('-', " "); // if title is in request, find just that title, otherwise return all
      //const dateSort = req?.dateSort || -1; // sort DESC date by default
      const query = isParamId ? { _id: searchQuery } : {title: new RegExp(searchQuery, 'i')} ;
      const options = {sort: {date: -1}};
      return await journalsCollection.findOne(query, {title: 1, date: 1, content: 1});
}
