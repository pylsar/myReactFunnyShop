import React from 'react'
import PropTypes from 'prop-types'

import './PersonalPage.scss'

class PersonalPage extends React.Component{

    state={
        promocode: ''
    }

    handlePromocode = () =>{
        this.setState({
            promocode: Math.random()
        })
        
    }
    render(){
        return (
            <div className="personalPage">
                <p>Добро пожаловать в личный кабинет, {this.props.firstname}</p>
                <button onClick={this.handlePromocode}>получить промокод</button>
                <p>{this.state.promocode}</p>
            </div>
        )
    }
}

PersonalPage.propTypes = {
    firstname: PropTypes.string.isRequired,
  }

export default PersonalPage
