import React from "react"
import {connect} from 'react-redux'
import { actions } from '../../store'
import "./Like.scss"

class Like extends React.Component {
 
  // state = {
  //   like: 0
  // }

  // handleIncrement = () => {
  //   this.setState({
  //     like: this.state.like + 1
  //   })
  // }

  // handleIncrement = () => {
  //   this.props.dispatch({type: 'LIKES_INCREMENT'})
  // }



  // handleDecrement = () => {
  //   this.setState({
  //     like: this.state.like - 1
  //   })
  // }

  // handleLikes = event => {
  //   this.props.handleLikes(event)
  // }

  render() {
    return (
      <div className="like">
        {/* <span className="like__plus" onClick={this.handleIncrement}> */}
        <span className="like__plus" onClick={this.props.onlikeChanged}>
          +
        </span>
        {/* {this.state.like < 0 ? ( */}
          {this.props.like < 0 ? (
          <span className="like__result like__result--red">
            {/* {this.state.like} */}
            {this.props.like}
            {/* {this.props.getState()} */}
          </span>
        ) : (
          // <span className="like__result">{this.state.like}</span>
          <span className="like__result">{this.props.like}</span>
        )}
        <span className="like__minus" onClick={this.handleDecrement}>
          -
        </span>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    like: state.like
  }
}

function mapDispatchToProps(dispatch){
  return{
    onlikeChanged(like){
      dispatch(actions.likeChanged(like)) //actions во множетвенном числе см импорты
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Like)
// export default connect(mapStateToProps)(Like)
