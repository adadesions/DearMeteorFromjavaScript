if (Meteor.isClient) {
  let data = [
    {name: 'ada', age:20},
    {name: 'coy', age:25},
    {name: 'ter', age:30},
    {name: 'poping', age:70},
  ]

  Template.adacode.helpers({
    getData: function () { return data},
    checkName: function (name) {
      return name === 'ada'
    }
  })

  Template.adacode.events({
    'click li': function (e) {
      alert($(e.target).html())
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
