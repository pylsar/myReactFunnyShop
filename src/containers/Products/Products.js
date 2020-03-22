import React from 'react'

import isLoadingIcon from '../../assets/img/isLoading.png'  
import ProductItem from '../../components/ProductItem/ProductItem'
import { getAllProducts} from '../../API'

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
            <div>
                <h1>Каталог Товаров</h1>
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
        )
    }
}

export default Products