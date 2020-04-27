import React, {Fragment} from "react"
import {connect} from 'react-redux'

import './Calc.scss'
import CalcIcon from '../../assets/img/calc.png'
import closeIcon from '../../assets/img/close.svg'
import { actions } from '../../actions/actions'

class Calc extends React.Component {
  state = {
    value: '',
    result: '',
    isClicked: false,
    // isVisibleCalc: false
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  // handleCalcVisible = () => {
  //     this.setState({
  //         isVisibleCalc: !this.state.isVisibleCalc
  //     })
  // }

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
        <span onClick={this.props.onCalcToggle}><img className="calc--icon" src={CalcIcon} alt='калькулятор' /></span>
        {this.props.isVisibleCalc &&
        <Fragment>
          {/* добавляем слой для затемнения */}
          <div className="calc__modalOverlay" onClick={this.props.onCalcToggle}></div>
          <div className="calc__box">
              <img className="calc__box__close" src={closeIcon} alt="closeBtn" onClick={this.props.onCalcToggle}/>
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

function mapStateToProps(state){
  return{
      //тут наши стейты
      isVisibleCalc: state.calcs.isVisibleCalc,   // берётся из rootReducer
  }
}

function mapDispatchToProps(dispatch){
  return{
      onCalcToggle(){
      dispatch(actions.calcToggle()) //actions во множетвенном числе см импорты
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Calc)

