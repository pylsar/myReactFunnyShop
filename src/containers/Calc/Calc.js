import React from "react"

import './Calc.scss'
import CalcIcon from '../../assets/img/calc.png'

class Calc extends React.Component {
  state = {
    value: '',
    result: '',
    isClicked: false,
    isVisibleCalc: false
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleCalcVisible = () => {
      this.setState({
          isVisibleCalc: !this.state.isVisibleCalc
      })
  }

  handleCalculate = () => {
    this.setState({
      result: this.state.value * 8.5,
      isClicked: true
    })
  }
  render() {
    return (
      <div className="calc">
        <span onClick={this.handleCalcVisible}><img src={CalcIcon} alt='калькулятор' /></span>
        {this.state.isVisibleCalc &&
        <div className="calc__box">
            <div>
                <label htmlFor="tug">Тугрики</label>
                <input id="tug" onChange={this.handleChange} type="number" min="0" />
                <button onClick={this.handleCalculate}>click</button>
            </div>
            {this.state.value === '' 
            ? '' 
            : <p>{`${this.state.result} ${this.state.isClicked 
            ? 'рублей' 
            : ''}`}</p>}
        </div> }      
      </div>
    )
  }
}

export default Calc

