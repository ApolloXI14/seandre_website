// 1. Create a unified collection of all content between "homesMaster", "journalsMaster", and "storiesMaster"
// unsetting old IDs

const createContentCollectionPL = [
  { '$match': {} },
  { '$set': { category: 'homes' } },
  { '$unset': [ 'match', '_id' ] },
  {
    '$unionWith': {
      coll: 'journalsMaster',
      pipeline: [
        { '$match': {} },
        { '$set': { category: 'journals' } },
        { '$unset': '_id' }
      ]
    }
  },
  {
    '$unionWith': {
      coll: 'storiesMaster',
      pipeline: [
        { '$match': {} },
        { '$set': { category: 'stories' } },
        { '$unset': '_id' }
      ]
    }
  },
  {$out: "contentCollection"}
]

db.homesMaster.aggregate(createContentCollectionPL);


// 2. Make new views that will reference "contentCollection" by new category instead of old individual "master" collections

db.activeViews.drop();
db.homes.drop();
db.journals.drop();
db.stories.drop();

const newActiveViewsPL = [ {$match: {isActive: true}}, {$group: {_id: "$category", active: {$count: {}}}  } ]
const newHomesViewPL = [{$match: {category: "homes", isActive: true} }, {$set: {    baseCase: { $toLower: { $replaceAll: { input: "$title", find: " ", replacement: "-" } } } }}, {$set: { realPath: {$concat: ["homes", "/", "$baseCase"]} }}, {$unset: ["_id", "category", "isActive"]}];
const newJournalsViewPL = [ { '$match': { category: 'journals', isActive: true, title: { '$ne': null } } }, { '$set': { baseCase: { '$toLower': { '$replaceAll': { input: '$title', find: ' ', replacement: '-' } } } } }, { '$set': { realPath: { '$concat': ['journals', '/', '$baseCase'] } } }, { '$unset': ['_id', 'category', 'isActive'] }];
const newStoriesViewPL = [{$match: {category: "stories", isActive: true} }, {$set: {    baseCase: { $toLower: { $replaceAll: { input: "$title", find: " ", replacement: "-" } } } }}, {$set: { realPath: {$concat: ["stories", "/", "$baseCase"]} }}, {$unset: ["_id", "category", "isActive"]}];

[{$match: {category: "journals", isActive: true, title: 1} }, {$set: {    baseCase: { $toLower: { $replaceAll: { input: "$title", find: " ", replacement: "-" } } } }}, {$set: { realPath: {$concat: ["journals", "/", "$baseCase"]} }}, {$unset: ["_id", "category", "isActive"]}]

db.createView("activeViews", "contentCollection", newActiveViewsPL);
db.createView("homes", "contentCollection", newHomesViewPL);
db.createView("journals", "contentCollection", newJournalsViewPL);
db.createView("stories", "contentCollection", newStoriesViewPL);

// 3. Drop old "master" collections

db.storiesMaster.drop();
db.homesMaster.drop();
db.journalsMaster.drop();
