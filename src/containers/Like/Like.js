import React from "react"

import "./Like.scss"

class Like extends React.Component {
  state = {
    like: 0
  }

  handleIncrement = () => {
    this.setState({
      like: this.state.like + 1
    })
  }

  handleDecrement = () => {
    this.setState({
      like: this.state.like - 1
    })
  }

  render() {
    return (
      <div className="like">
        <span className="like__plus" onClick={this.handleIncrement}>
          +
        </span>
        {this.state.like < 0 ? (
          <span className="like__result like__result--red">
            {this.state.like}
          </span>
        ) : (
          <span className="like__result">{this.state.like}</span>
        )}
        <span className="like__minus" onClick={this.handleDecrement}>
          -
        </span>
      </div>
    )
  }
}

export default Like
