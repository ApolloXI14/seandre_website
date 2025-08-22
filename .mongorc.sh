// https://www.mongodb.com/docs/mongodb-shell/write-scripts/#execute-mongodb-code

require("dotenv").config();
db = connect(process.env.MONGODB_URI);

db.clientConnections.insertOne( { connectTime: ISODate() } )

// Load DB scripts to be executed
load('')
