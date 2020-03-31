import React from 'react'

import isLoadingIcon from '../../assets/img/isLoading.png'  
import ProductItem from '../../components/ProductItem/ProductItem'
import { getAllProducts} from '../../API'

import './Products.scss'

class Products extends React.Component {

    state={
        isLoading: true,
        products: []
    }

    componentDidMount(){
        getAllProducts()
            .then(products => {
                setTimeout(() => {
                    this.setState({
                        isLoading: false,
                        products: products
                    })
                },1000)
            })
    }

    render(){
        return(
            <div className="products">
                <h1>Каталог Товаров</h1>
                <div className="products__box">
                    {this.state.isLoading ? 
                    <div>
                        <h2>Товар приносят на сайт...</h2>
                        <img src={isLoadingIcon} alt="wait"/> 
                    </div>
                    : 
                    this.state.products.map((product) => {
                            return (
                                < ProductItem key={product.id} product={product}/>
                            )
                        })}
                </div>    
            </div>
        )
    }
}

export default Products