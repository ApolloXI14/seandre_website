# seandre_website

This is a ReactJS app, with NextJS for SSR, ExpressJS, and MongoDB for content.

## Instructions to build locally

1. Run `npm install` to install all packages

### Dev env instructions
1. Run `sudo npm run mongo` to start mongoDB server
2. Run `npm run mongo-connect` to connect web app to mongoDB server
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

## Solution to "ERR_OSSL_EVP_UNSUPPORTED" error when running "npm run build"
** https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported
** export NODE_OPTIONS=--openssl-legacy-provider
