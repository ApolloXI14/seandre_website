use admin

db.createRole({ role: "viewSystemViewsAnyDB", privileges: [{actions: ["find"], resource: { db: "", collection: "system.views" } }] , roles: []})
//db.createRole({ role: "viewSystemViewsJournal", privileges: [{actions: ["find"], resource: { db: "journal", collection: "system.views" } }] , roles: []})

db.grantRolesToUser("myUserAdmin", ["viewSystemViewsAnyDB"])
