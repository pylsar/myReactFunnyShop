import React from 'react'
import axios from 'axios'

import isLoadingIcon from '../../assets/img/isLoading.png'  

class Products extends React.Component {

    state={
        isLoading: true,
        products: []
    }

    componentDidMount(){
        axios.get('http://localhost:3001/products')
            .then(res => {
                console.log(res.data)
                setTimeout(() => {
                    this.setState({
                        isLoading: false,
                        products: res.data
                    })
                }, 1000)
            })
    }

    render(){
        return(
            <div>
                <h1>Каталог Товаров</h1>
                {this.state.isLoading ? 
                <div>
                    <h2>Товар приносят на сайт...</h2>
                    <img src={isLoadingIcon} alt="wait"/> 
                </div>
                : 
                this.state.products.map((product, index) => {
                        return (
                            <div key={index} className="product">
                                <h3>{product.title}</h3>
                                <div className="product__img">
                                    <img src={require(`../../assets/img/${product.img}`)} alt={product.title}/>
                                </div>
                                <span>Цена: {product.price}</span>
                                <span>Кол-во: {product.quantity}</span>
                            </div>
                        )
                    })}
            </div>
        )
    }
}

export default Products