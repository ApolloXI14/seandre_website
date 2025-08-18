# seandre_website

This is a ReactJS app, with NextJS for SSR, ExpressJS, and MongoDB for content.

## Instructions to build locally

1. Run `npm install` to install all packages

### Data Caching
NextJS "fetch" API caches data locally
(https://nextjs.org/docs/app/building-your-application/caching), so if cache exists, the
MongoDB server does not need to be ran and dev (npm run dev) or prod
(npm run start) can be ran directly. If cache is empty, then the
server must be started.

### Dev env instructions

1. Run `sudo npm run mongo` to start mongoDB server
2. Run `npm run mongo-connect` to connect web app to mongoDB server; environment variables must be set in the system (USER and PW, optionally HOST) that matches a valid user/pw in the DB otherwise authentication will fail and build/run may be impacted
3. Run `npm run dev` to both build and run dev server (port 3000 by
   default). Hot refresh will be enabled, making changes reflect
   instantly upon save.

### Prod env instructions
1. Run `npm run build` for prod build.
2. Run `npm run start` to run prod server (port 8000 by default). 

### Component naming convention
* Single nouns are base/container components (e.g. "Journal")
* Adjective-noun pairs are sub-components (e.g. "JournalMenu")
* Camel case all words (e.g. "Journalmenu" is invalid)
