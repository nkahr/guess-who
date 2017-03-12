import React, {Component} from 'react'
import PeopleData from '../seeds'
import PersonList from '../components/PersonList'
import FeatureSelector from '../components/FeatureSelector'

class GuessWhoContainer extends Component {

  constructor() {
    super()
    const pplData = new PeopleData();
    this.state = {
      data: pplData.seeds, 
      selectedFeature: undefined, 
      selectedValue: undefined
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
          onValueChange={this.onValueChange}/>
        <PersonList 
          peopleData={this.state.data} 
          selectedPerson={Math.floor(Math.random() * PeopleData.length)}/>
      </div>
    )
  }

  onFeatureChange(slctFeature) {
    this.setState({selectedFeature: slctFeature})
  }

  onValueChange(value) {
    this.setState({selectedValue: value})
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