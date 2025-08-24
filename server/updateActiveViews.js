use journal

db.activeViews.drop();
db.createView("activeViews", "journals", [
    { $match: {}},
    { $group: { _id: "journals", active: { $sum: 1 } } } ,
    { $unionWith: { coll: "homes" , pipeline: [{ $match: {} },
    { $group: { _id: "homes", active: { $sum: 1 } }  } ] } },
    { $unionWith: { coll: "stories" , pipeline: [{ $match: {} },
    { $group: { _id: "stories", active: { $sum: 1 } }  } ] } } ])
