import React, {Component} from 'react'
import Person from './Person'

class PersonList extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const peopleNodes = this.props.peopleData.map((person, index) => {
      return <Person key={index} person={person}> </Person>
    })
    return (
      <div className="grid"> 
        {peopleNodes}
      </div>
    )
  }
}

export default PersonList