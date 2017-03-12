import React, {Component} from 'react'

class PersonList extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const peopleNodes = this.props.peopleData.map((person, index) => {
      return <p key={index}>{person.name}, {person.hairColour}</p>
    })
    return (
      <div> 
        {peopleNodes}
      </div>
    )
  }
}

export default PersonList