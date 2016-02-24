Meteor.publish('allLocation', function () {
  return Markers.find()
})
