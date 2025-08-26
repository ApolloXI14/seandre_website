use journal
// TODO: Figure out a way to get the view title ($$CURRENT maybe?)

db.journals.drop();
db.createView("journals", "journalsMaster", [
    {$match: {isActive: true}},
    {$addFields: {
      baseCase: {
        $toLower: {
          $replaceAll: {
            input: "$title",
            find: " ",
            replacement: "-"
          }
        }
      }
    }
  },
  {$addFields: {
      realPath: {
        $concat: ["journals", "/", "$baseCase"]
      }
    }
  },
  {$project: {isActive: 0}}
])

db.homes.drop();
db.createView("homes", "homesMaster", [
    {$match: {isActive: true}},
    {$addFields: {
      baseCase: {
        $toLower: {
          $replaceAll: {
            input: "$title",
            find: " ",
            replacement: "-"
          }
        }
      }
    }
  },
  {$addFields: {
      realPath: {
        $concat: ["homes", "/", "$baseCase"]
      }
    }
  },
  {$project: {isActive: 0}}
])

db.stories.drop();
db.createView("stories", "storiesMaster", [
    {$match: {isActive: true}},
    {$addFields: {
      baseCase: {
        $toLower: {
          $replaceAll: {
            input: "$title",
            find: " ",
            replacement: "-"
          }
        }
      }
    }
  },
  {$addFields: {
      realPath: {
        $concat: ["stories", "/", "$baseCase"]
      }
    }
  },
  {$project: {isActive: 0}}
])


