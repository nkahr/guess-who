import React, {Component} from 'react'
import PeopleData from '../seeds'
import PersonList from '../components/PersonList'
import FeatureSelector from '../components/FeatureSelector'
import GameFunctions from '../models/GameFunctions'

let Functions = new GameFunctions()

class GuessWhoContainer extends Component {

  constructor() {
    super()
    const pplData = new PeopleData();
    this.state = {
      data: pplData.seeds, 
      selectedFeature: Object.keys(pplData.seeds[0])[0], 
      selectedValue: undefined, 
      selectedPersonIndex: Math.floor(Math.random() * PeopleData.length)
    }
    this.onFeatureChange = this.onFeatureChange.bind(this)
    this.onValueChange = this.onValueChange.bind(this)
    this.findUniqueValues = this.findUniqueValues.bind(this)
  }

  render() {

    const values = this.findUniqueValues();

    return (
      <div> 
        <FeatureSelector 
          peopleData={this.state.data} 
          selectedFeature={this.state.selectedFeature} 
          features={Object.keys(this.state.data[0])} 
          values={values}
          onFeatureChange={this.onFeatureChange} 
          onValueChange={this.onValueChange}
          reply={this.state.reply}/>
        <PersonList 
          peopleData={this.state.data} 
          selectedPersonIndex={this.state.selectedPerson}/>
      </div>
    )
  }

  onFeatureChange(slctFeature) {
    this.setState({selectedFeature: slctFeature})
  }

  onValueChange(value) {
    let reply;
    let selectedPerson = this.state.data[this.state.selectedPersonIndex];
    if (selectedPerson[this.state.selectedFeature] === value) {
      reply = " Yes!";
      Functions.removePeopleWithoutFeature(this.state.data, this.state.selectedFeature, value)
    } else {
      reply = " Nope";
      Functions.removePeopleWithFeature(this.state.data, this.state.selectedFeature, value)
    }

    this.setState({selectedValue: value, reply: reply});

  }

  findUniqueValues() {
    const feature = this.state.selectedFeature;
    const valueArray = [];
    this.state.data.forEach((person) => {
      const value = person[feature];

      if (valueArray.indexOf(value) === -1) {
        valueArray.push(value);
      }
    })
    return valueArray;
  }
}

export default GuessWhoContainer