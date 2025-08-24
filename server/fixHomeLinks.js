// Copy all documents into "newHomesMaster" while replacing all "/journal\/\d+" references with "LINK_TO_JOURNALS"
db.homesMaster.updateMany({}, [{ $set: { match: { $regexFind: { input: "$content", regex: /journal\/\d+/ } } } }, { $set: { content: { $cond: { if: { $ne: ["$match", null] }, then: { $replaceOne: { input: "$content", find: "$match.match", replacement: "LINK_TO_JOURNALS" } }, else: "$content" } } } } ])

// 2. Delete the temporarily made "match" key
db.homesMaster.updateMany({}, {$unset: {match: ""}})

// 3. Update "homes" view with new pipeline to create "baseLink" by kebab-casing "$title" and
// concating as needed
db.runCommand( {
   collMod: "homes",
   viewOn: "homesMaster",
   "pipeline": [ {$match: {isActive: true}}, { $addFields: { baseLink: { $toLower: { $replaceAll: { input: "$title", find: " ", replacement: "-" } } } } }, { $addFields: { content: { $replaceAll: { input: "$content", find: "LINK_TO_JOURNALS", replacement: {$concat: ["journals", "/", "$baseLink"]} } } }}, {$project: {isActive: 0}} ]
} )
