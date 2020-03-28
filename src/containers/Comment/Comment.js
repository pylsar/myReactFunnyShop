import React from 'react'

import './Comment.scss'

class Comment extends React.Component {
    render(){
        return(
            <div className="comment">
                <h3>Комментарии</h3>
                <form>
                    <label htmlFor="textarea">Оставить Комментарий</label>
                    <textarea id="textarea" />
                    <label htmlFor="firstName">Имя</label>
                    <input id="firstName" typer="text"/>
                    <label htmlFor="lastName">Фамилия</label>
                    <input id="lastName" typer="text"/>   
                </form>
            </div>
        )
    }
}

export default Comment