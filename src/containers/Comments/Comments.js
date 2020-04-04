import React from "react"
import CommentInput from '../../containers/CommentInput/CommentInput'
import CommentList from '../../components/CommentList/CommentList'

import "./Comments.scss"

class Comments extends React.Component {
  // создадим пустой массив коментов чтобы их можно было передать в дочерние компоненты. все наши коментарии будут жить здесь
  state = {
    comments: [],
    isNotCommented: true
  }

  // таким способом выводим только 1 сообщение и след его затрет
  // addComment = comment => {
  //   this.setState({
  //     comments: [comment]
  //   });
  // };

  // сообщения выводятся каждый раз в новом массиве, где предыдущие сообщени + новое сообщение
  addComment = comment => {
    this.setState(prevState => ({
      comments: [...prevState.comments, comment],
      isNotCommented: false
    }))
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <CommentInput addComment={this.addComment} />
        {this.state.isNotCommented ? (
          <p>Вы будете первым кто оставит комментарий</p>
        ) : (
          <CommentList comments={this.state.comments} />
        )}
      </div>
    )
  }
}

export default Comments
