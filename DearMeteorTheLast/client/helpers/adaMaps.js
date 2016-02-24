Template.adaMaps.onRendered(function () {
  Meteor.subscribe('allLocation')
  GoogleMaps.load()
})

Template.adaMaps.helpers({
  mapOption: function () {
    if(GoogleMaps.loaded()){
      return {
        center: new google.maps.LatLng(13.756331,100.501765),
        zoom: 16
      }
    }
  }
})

Template.adaMaps.onCreated(function () {
  GoogleMaps.ready('myMap', function (map) {
    let marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    })

    google.maps.event.addListener(map.instance, 'click', function (e) {
      Markers.insert({lat: e.latLng.lat(), lng: e.latLng.lng()})
    })

    let markers = {} //Object
    Markers.find().observe({
      added: function (doc) {
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(doc.lat, doc.lng),
          map: map.instance,
          animation: google.maps.Animation.DROP,
          draggable: true,
          id: doc._id
        })
        google.maps.event.addListener(marker, 'dragend', function (e) {
          Markers.update({_id: marker.id}, {$set: {lat: e.latLng.lat(), lng: e.latLng.lng()}})
        })
        google.maps.event.addListener(marker, 'dblclick', function (e) {
          Markers.remove({_id: marker.id})
        })
        markers[doc._id] = marker
      },
      changed: function (newDoc, oldDoc) {
        markers[newDoc._id].setPosition({lat: newDoc.lat, lng: newDoc.lng})
      },
      removed: function (oldDoc) {
          markers[oldDoc._id].setMap(null)
          google.maps.event.clearInstanceListeners(markers[oldDoc]._id)
          delete markers[oldDoc._id]
      }
    })
  })
})
