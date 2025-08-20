# seandre_website

This is a ReactJS app, with NextJS for SSR, ExpressJS, and MongoDB for content.

## Instructions to build locally

1. Run `npm install` to install all packages

### Data Caching
NextJS "fetch" API caches data locally
(https://nextjs.org/docs/app/building-your-application/caching), so if cache exists, the
MongoDB server does not need to be ran and dev (npm run dev) or prod
(npm run start) can be ran directly. If the cache is empty, then a server connection must be made.

### MongoDB connection instructions
The "MONGODB_URI" environment variable must be set in ".env.local" in the project root. Do *NOT* commit or push .env.local.
"MONGODB_URI" is the connection string to connect to the mongoDB server.
      `mongodb+srv://<db_username>:<db_password>@<db_host>/?retryWrites=true&w=majority`
      optionally `&appName=<appName>`
The connection string must have a valid username, password, and host.
If working in dev for a database bug or feature:
1. Connect to a localhost copy of the DB instead of the remote. If one doesn't exist run `mongodump` to create one.
      `mongodump --host="<db_host>" --username <db_username> --password <db_password>`
2. Run `npm run mongo` to start the mongo server.
   - Ensure the mongodb.conf "dbPath" matches where `mongodump` dumped the DB
   - Run `chmod 400` on the "keyFile" if a "permissions are too open" error occurs when attempting to start
2. Make the needed changes in the DB.
3. Run `mongorestore` to "restore" the remote DB with the new local DB.
      `mongorestore --uri mongodb+srv://<db_username>:<db_password>@<db_host>`

### Dev env instructions
1. Run `npm run dev` to both build and run dev server (port 3000 by
   default). Hot refresh will be enabled, making changes reflect
   instantly upon save.

### Prod env instructions
1. Run `npm run build` for prod build.
2. Run `npm run start` to run prod server (port 8000 by default). 

### Component naming convention
* Single nouns are base/container components (e.g. "Journal")
* Adjective-noun pairs are sub-components (e.g. "JournalMenu")
* Camel case all words (e.g. "Journalmenu" is invalid)
