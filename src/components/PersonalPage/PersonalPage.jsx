import React from 'react'
import PropTypes from 'prop-types'

import './PersonalPage.scss'

class PersonalPage extends React.Component{

    state={
        promocode: ''
    }

    handlePromocode = () =>{
        this.setState({
            promocode: Math.round(Math.random()*6796785)
        })
        
    }
    render(){
        return (
            <div className="personalPage">
                <p className="personalPage__greeting">Добро пожаловать в личный кабинет, {this.props.firstname}</p>
                <button className="personalPage__btn" onClick={this.handlePromocode}>получить промокод</button>
                <p className="personalPage__promo">{this.state.promocode}</p>
            </div>
        )
    }
}

PersonalPage.propTypes = {
    firstname: PropTypes.string.isRequired,
  }

export default PersonalPage
