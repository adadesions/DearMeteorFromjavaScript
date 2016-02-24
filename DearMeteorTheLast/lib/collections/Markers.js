Markers = new Mongo.Collection('markers')

Markers.allow({
  insert: function () {
    return true
  },
  update: function () {
    return true
  },
  remove: function () {
    return true
  }
})
