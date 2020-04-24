import React, {Fragment} from "react"

import './Calc.scss'
import CalcIcon from '../../assets/img/calc.png'
import closeIcon from '../../assets/img/close.svg'

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

  handleCalcToggle = () => {
    this.setState({
      isVisibleCalc: false
    })
  }
  render() {
    return (
      <div className="calc">
        <span onClick={this.handleCalcVisible}><img className="calc--icon" src={CalcIcon} alt='калькулятор' /></span>
        {this.state.isVisibleCalc &&
        <Fragment>
          {/* добавляем слой для затемнения */}
          <div className="calc__modalOverlay" onClick={this.handleCalcToggle}></div>
          <div className="calc__box">
              <img className="calc__box__close" src={closeIcon} alt="closeBtn" onClick={this.handleCalcToggle}/>
              <div className="calc__box__main">
                  <label htmlFor="tug">Тугрики</label>
                  <input id="tug" onChange={this.handleChange} type="number" min="0" />
                  <button onClick={this.handleCalculate}>click</button>
              </div>
              {this.state.value === '' 
              ? '' 
              : <p>{`${this.state.result} ${this.state.isClicked 
              ? 'рублей' 
              : ''}`}</p>}
          </div> 
        </Fragment>}      
      </div>
    )
  }
}

export default Calc

