let allOrSomeState = true
let subscribe = Meteor.subscribe('allProject')

Template.reactive.onRendered(function () {
  Tracker.autorun(function () {
    // if(Meteor.userId())
    //   Meteor.subscribe("ownProject")
    // else
    //   Meteor.subscribe("allProject")
  })

  const countingProject = function () {
    let counting = Projects.find().count()
    console.log(`${counting} projects`)
  }
  Tracker.autorun(countingProject)
})

Template.reactive.events({
  'click .add-new-project': function (e) {
    let obj = {
      ownerId: Meteor.userId(),
      name: 'From click',
      createdAt: new Date()
    }
    Projects.insert(obj)
  },
  'click .update-name': function (e) {
    Meteor.call('updateProjectName', Meteor.userId(), 'Changed now we have 2 viewers')
  },
  'click .all-or-some': function (e) {
    subscribe.stop()
    if(allOrSomeState)
      subscribe = Meteor.subscribe('allProject')
    else
      subscribe =  Meteor.subscribe('ownProject')
    allOrSomeState = !allOrSomeState    
  }
})

Template.reactive.helpers({
  getProjects: function () {
    return Projects.find()
  }
})
