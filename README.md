# seandre_website

## Instructions to build locally

1. Run `npm install` to install all packages

### Dev env instructions
1. Run `npm run start` to both build and run dev server (port 8000 by
   default)
2. If need be, run `npm run dev-build` to perform dev build

### Prod env instructions
1. Run `npm run prod-start` to run prod server (port 8080 by default). 
2. If needed, run `npm run build` to run prod build. (CSS will be minified; ensure less styles still work.)

### Component naming convention
* Single nouns are base/container components (e.g. "Journal")
* Adjective-noun pairs are sub-components (e.g. "JournalMenu")
* Camel case all words (e.g. "Journalmenu" is invalid)
