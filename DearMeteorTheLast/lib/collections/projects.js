Projects = new Mongo.Collection('projects')


Projects.allow({
  insert: function (userId, doc) {
    //userId and ownerId == userId
    return (userId && doc.ownerId === userId)
  },
  update: function (userId, doc, fields, modifier) {
    //owner of the project
    return userId === doc.ownerId
  },
  remove: function (userId, Id) {
    return userId === doc.ownerId
  }
})

Projects.deny({

})

// //Server Method
Meteor.methods({
  updateProjectName: function (userId, newName) {
    Projects.update({ownerId: userId}, {
      $set: {
        name: newName
      }
    }, {multi: true})
  }
})
