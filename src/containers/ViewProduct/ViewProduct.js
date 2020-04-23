import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import ProductInfo from '../../components/ProductInfo/ProductInfo'
import Loader from '../../components/Loader/Loader'
import {getProduct} from '../../API'
import Cart from '../../components/Cart/Cart'

import './ViewProduct.scss'


class ViewProduct extends React.Component {

    state={
        isLoading: true,
        product: {},
        productInCart: false,
        cartItems: []
    }


    componentDidMount(){
        // console.log(this.props)
        // взяли из консоли
        const {id} = this.props.match.params
        getProduct(id)
            .then(product => {
                setTimeout(() => {
                    this.setState({
                        isLoading: false,
                        product: product
                    })
                },1500)
            })
    }

    handleAddToCart = (product) => {
        this.setState({
            productInCart: true
          });
          // добавляем товар в массив корзины
          if (!this.state.productInCart) {
            this.state.cartItems.push({ ...product, countCartItems: 1 });
          }
      };



    render(){
        return (
            <div className="viewProduct">
                {
                    this.state.isLoading ?
                    <Fragment>
                        <h2>Идет Загрузка товара</h2>
                        <Loader />
                    </Fragment>
                    :
                    <Fragment>
                        <Cart cartItems={this.state.cartItems} product={this.state.product}/>
                        <ProductInfo product={this.state.product} handleAddToCart={this.handleAddToCart} productInCart={this.state.productInCart} />
                    </Fragment>
                }
          
            </div>
        )
    }
}

ViewProduct.propTypes = {
    product: PropTypes.object,
    isLoading: PropTypes.bool
}

export default ViewProduct
