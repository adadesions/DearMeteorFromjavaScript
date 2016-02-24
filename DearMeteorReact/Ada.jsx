Ada = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return{
      items: Projects.find({}).fetch()
    }
  },
  renderProjectItem() {
    return this.data.items.map( project => {
      return <ProjectItem key={project._id} item={project} />
    })
  },
  addNewRobot() {
    let newName = ReactDOM.findDOMNode(this.refs.newProjectName).value
    Projects.insert({name: newName})
    ReactDOM.findDOMNode(this.refs.newProjectName).value = ""
  },

  render() {
    return (
      <div className="container">
        <h1>Welcome to React + Meteor</h1>
        <input type="text" ref="newProjectName" placeholder="Type yours project name" />
        <button type="button" onClick={this.addNewRobot}>Add new Robot</button>
        <ul>
        {this.renderProjectItem()}
        </ul>
      </div>
    )
  }
})
