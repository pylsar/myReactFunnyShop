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
