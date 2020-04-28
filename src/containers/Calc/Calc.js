import React, {Fragment} from "react"
import {connect} from 'react-redux'

import './Calc.scss'
import CalcIcon from '../../assets/img/calc.png'
import closeIcon from '../../assets/img/close.svg'
import { actions } from '../../actions/actions'

class Calc extends React.Component {

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
                  <input id="tug" onChange={event => this.props.onCalcOnChange(event.target.value)} type="number" min="0" value={this.props.valueInput}/>
                  <button onClick={this.props.oncalcClicked}>click</button>
              </div>
              {this.props.valueInput === '' 
              ? '' 
              // если кликнули то добавляем рубли
              : <p>{`${this.props.result} ${this.props.isClicked ? 'рублей' : ''} `}</p>}
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
      isClicked: state.calcs.isClicked,
      valueInput: state.calcs.valueInput,
      result: state.calcs.result
  }
}

function mapDispatchToProps(dispatch){
  return{
      onCalcToggle(){
      dispatch(actions.calcToggle()) //actions во множетвенном числе см импорты
    },
      oncalcClicked(){
        dispatch(actions.calcClicked())
    },
    onCalcOnChange(value){
      dispatch(actions.calcOnChange(value))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Calc)

