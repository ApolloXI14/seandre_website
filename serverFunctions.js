'use server'

import  { makeMongoDBConnection }  from './server3.js'

const db = await makeMongoDBConnection();

export async function getViews() {
    try{
        const activeViews = db.collection('activeViews');
        return await activeViews.find({}).toArray();
    } catch(err) {
        throw new Error(`getViews error: ${err}`);
    }
}

// Queries a MongoDB collection to return an array of documents
export async function getDocuments(collectionName, dateSort = -1) {
    try {
        const dbCollection = db.collection(collectionName);
        return await dbCollection.find({ "_id": { "$type": "number" }}, {title: 1, date: 1, content: 1}).sort({date: dateSort}).toArray();
    } catch(err) {
        throw new Error(`Failed to get documents from ${collectionName}: ${err}`);
    }
}

// Queries a MongoDB collection to return a specific document obj by name or _id
export async function getDocument(collectionName, id) {
    try {
        const collection = db.collection(collectionName);
        const isParamId = /^\d+$/.test(id);
        const searchQuery = !isParamId && id?.replaceAll('-', " ") || Number(id); // if title is in request, find just
        //const title = req?.params?.title.replaceAll('-', " "); // if title is in request, find just that title, otherwise return all
        //const dateSort = req?.dateSort || -1; // sort DESC date by default
        const query = isParamId ? { _id: searchQuery } : {title: new RegExp(searchQuery, 'i')} ;
        const options = {sort: {date: -1}};
        return await collection.findOne(query, {title: 1, date: 1, content: 1});
    } catch {
        throw new Error(`Failed to get document ${id} from ${collectionName}: ${err}`);
    }
}

