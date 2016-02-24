Projects = new Mongo.Collection('projects')

if (Meteor.isClient) {
  Meteor.startup(function () {
    ReactDOM.render(<Ada />, document.getElementById('yield'))
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
