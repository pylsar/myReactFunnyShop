import React from 'react'

import CreateForm from '../CreateForm/CreateForm'

class CreateProduct extends React.Component{

    state={
        product: {
            id : "",
            title: "",
            price: "",
            quantity: 0,
            img: "",
            longDescr: ""
        },
        creating: false
    }

    render(){
        return(
            <div>
               <h1>Добавьте товар</h1>
               <CreateForm product={this.state.product}/> 
            </div>
        )
    }
}

export default CreateProduct