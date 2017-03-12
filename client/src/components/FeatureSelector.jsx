import React, {Component} from 'react'


class FeatureSelector extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
    this.onFeatureSelectChange = this.onFeatureSelectChange.bind(this)
    this.onValueSelectChange = this.onValueSelectChange.bind(this)
  }

  render() {
    const featureOptions = this.props.features.map((feature, index) => {
      return <option key={index} value={feature}> {feature} </option>
    })
    const valueOptions = this.props.values.map((value, index) => {
      return <option key={index} value={value}> {value} </option>
    })
    return (
      <div> 
        <select onChange={this.onFeatureSelectChange}> 
          {featureOptions}
        </select>
        <select onChange={this.onValueSelectChange}> 
          {valueOptions}
        </select>
      </div>
    )
  }

  onFeatureSelectChange(event) {
    const selectedFeature = event.target.value
    this.props.onFeatureChange(selectedFeature)
  }

  onValueSelectChange(event) {
    const selectedValue = event.target.value
    this.props.onValueChange(selectedValue)
  }
}

export default FeatureSelector