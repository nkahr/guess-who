import React, {Component} from 'react'
import classNames from 'classnames'

class Person extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className={classNames({
        person: true, 
        removed: this.props.person.removed,
      })}> 
        <p>Name: {this.props.person.name} </p>
        <p>Hair Colour: {this.props.person.hairColour} </p>
      </div>
    )
  }
}

export default Person