import React from 'react'

import './Comment.scss'

class Comment extends React.Component {
    state={
        title: '',
        isShow: false
    }

    submitHandler = event => {
        event.preventDefault();
        this.setState({ title: "" })
    }

    changeHandler = event => {
        // event.persist() // для взаимодействия с event.target
        // console.log(this.state);

		// this.setState(prev => ({...prev, ...{ //вторые круглые скобки для того чтобы сразу вызывать метод // prev это предыдущий стейт // мы складываем предыдущий стйет с новым(спред оператором, это делает код более универсальным, хотя во многих случаях и без этого норм работать будет)
        //     [event.target.name]: event.target.value
        // }}))
        this.setState({
            value: event.target.value
            // [event.target.name]: event.target.value
            
        })

    }

    clickHandler = () => {
        this.setState({
            isShow: true
        })
    }


    render(){
        return(
            <div className="comment">
                <h3>Комментарии</h3>
                <form onSubmit={this.submitHandler} className="form">
                    <div>
                        <label htmlFor="textarea">Оставить Комментарий</label>
                        <textarea id="textarea" name="title" rows="5" cols="25" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="firstName">Имя</label>
                        <input id="firstName" type="text" name="title" onChange={this.changeHandler}/>
                    </div>
                    <div>    
                        <label htmlFor="lastName">Фамилия</label>
                        <input id="lastName" type="text" name="title" onChange={this.changeHandler}/>
                    </div> 
                    <button onClick={this.clickHandler}>Оставить комментарий</button>  
                </form>
                {this.state.isShow ? 
                <div>
                    <p>{this.state.value}</p>
                </div>
                : <p>комментариев нет</p>}  
            </div>
        )
    }
}

export default Comment