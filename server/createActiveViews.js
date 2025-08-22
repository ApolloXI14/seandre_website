// Create a unified view to return active views and their count
db.createView("activeViews", "journals", [
    { $match: {}},
    { $group: { _id: "journals", active: { $sum: 1 } } } ,
    { $unionWith: { coll: "homes" , pipeline: [{ $match: {} },
    { $group: { _id: "homes", active: { $sum: 1 } }  } ] } } ])
