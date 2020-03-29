import React from 'react'

import './Comment.scss'

class Comment extends React.Component {
    state={
        value: ''
    }

    submitHandler = event => {
        event.preventDefault();
    }

    changeHandler = event => {
        // event.persist() // для взаимодействия с event.target
        // console.log(this.state);

		// this.setState(prev => ({...prev, ...{ //вторые круглые скобки для того чтобы сразу вызывать метод // prev это предыдущий стейт // мы складываем предыдущий стйет с новым(спред оператором, это делает код более универсальным, хотя во многих случаях и без этого норм работать будет)
        //     [event.target.name]: event.target.value
        // }}))
        this.setState({
            value: event.target.value
        })
    }


    render(){
        return(
            <div className="comment">
                <h3>Комментарии</h3>
                <form onSubmit={this.submitHandler} className="form">
                    <div>
                        <label htmlFor="textarea">Оставить Комментарий</label>
                        <textarea id="textarea" name="textarea" rows="5" cols="25" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="firstName">Имя</label>
                        <input id="firstName" type="text" name="firstname" onChange={this.changeHandler}/>
                    </div>
                    <div>    
                        <label htmlFor="lastName">Фамилия</label>
                        <input id="lastName" type="text" name="lastname" onChange={this.changeHandler}/>
                    </div> 
                    <button>Оставить комментарий</button>  
                </form>
                <p>{this.state.value}</p>
                
            </div>
        )
    }
}

export default Comment