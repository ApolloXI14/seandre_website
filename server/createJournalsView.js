
// MongoDB script to create "journalsMaster" with new "isActive" prop and recreate "journals" as a view for isActive
'use server';

// 1. Copy journals collection into new "journalsMaster"
db.journals.aggregate([{ $match: {}}, {$out: "journalsMaster"} ])

// 2. Make new "isActive" prop on all docs
db.journalsMaster.updateMany({}, {$set: {isActive: true}})

// 3. Drop old journals collection
db.journals.drop()

// 4. Recreate "journals" as a view that only matches on "isActive" docs
db.createView("journals", "journalsMaster", [ { $match: {isActive: true}}  ])



db.homes.aggregate([{ $match: {}}, {$out: "homesMaster"} ])

// 2. Make new "isActive" prop on all docs
db.homesMaster.updateMany({}, {$set: {isActive: true}})

// 3. Drop old journals collection
db.homes.drop()

// 4. Recreate "journals" as a view that only matches on "isActive" docs
db.createView("homes", "homesMaster", [ { $match: {isActive: true}}  ])
