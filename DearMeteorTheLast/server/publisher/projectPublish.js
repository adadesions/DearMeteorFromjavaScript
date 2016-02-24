Meteor.publish('allProject', function () {
  return Projects.find()
})
//
Meteor.publish('ownProject', function () {
  return Projects.find({ownerId: this.userId})
})

Meteor.publish('adaProject', function () {
  return Projects.find({name: 'ada'})
})
