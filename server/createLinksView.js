use journal

// Create a view of all links with unique IDs as HREF placeholders
db.createView("journalsLinks", "journals", [ {$match: {} }, {$set: { _id: {$concat: ["journals_", {$toString: "$$CURRENT._id"} ] }}}, {$set: {baseCase: "$$CURRENT.baseCase" }}, {$set: {realPath: "$$CURRENT.realPath" } }, {$project: { title: 0, date: 0, content: 0 }} ])

db.createView("homesLinks", "homes", [ {$match: {} }, {$set: { _id: {$concat: ["homes_", {$toString: "$$CURRENT._id"} ] }}}, {$set: {baseCase: "$$CURRENT.baseCase" }}, {$set: {realPath: "$$CURRENT.realPath" } }, {$project: { title: 0, date: 0, content: 0 }} ])

db.createView("storiesLinks", "stories", [ {$match: {} }, {$set: { _id: {$concat: ["stories_", {$toString: "$$CURRENT._id"} ] }}}, {$set: {baseCase: "$$CURRENT.baseCase" }}, {$set: {realPath: "$$CURRENT.realPath" } }, {$project: { title: 0, date: 0, content: 0 }} ])

