import React from "react"
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


import { actions } from '../../actions/actions'

import "./Like.scss"

class Like extends React.Component {
 

  render() {
    return (
      <div className="like">
        <span className="like__plus" onClick={this.props.onlikeChangedIncrement}>
          +
        </span>
          {this.props.like < 0 ? (
          <span className="like__result like__result--red">
            {this.props.like}
          </span>
        ) : (
          <span className="like__result">{this.props.like}</span>
        )}
        <span className="like__minus" onClick={this.props.onlikeChangedDecrement}>
          -
        </span>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    like: state.likes.like   // likes берется из rootReducer
  }
}

function mapDispatchToProps(dispatch){
  return{
    onlikeChangedIncrement(like){
      dispatch(actions.likeChangedIncrement(like)) //actions во множетвенном числе см импорты
    },
    onlikeChangedDecrement(like){
      dispatch(actions.likeChangedDecrement(like))
    }
  }
}

Like.propTypes = {
  like: PropTypes.number.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Like)
