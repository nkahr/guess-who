import React, {Component} from 'react'

class GuessWhoContainer extends Component {

  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div> 
        <PersonList peopleData={this.state.peopleData}/>
      </div>
    )
  }
}