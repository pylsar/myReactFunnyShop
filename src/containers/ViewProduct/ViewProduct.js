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
        cartItems: [],
        isVisibleCart: false
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
          })
          
        // добавляем товар в массив корзины
        if (!this.state.productInCart) {
            this.state.cartItems.push({ ...product, countCartItems: 1 })
        } 
    }

    handleRemoveFromCart = (product) => {
        this.setState({
            productInCart: false
        })

        //удаляем товар из массива корзины
        if (this.state.productInCart) {
            this.state.cartItems.pop({ ...product, countCartItems: 1 })
        } 
    }

    handleIsVisibleCart = () => {
        this.setState({
            isVisibleCart: !this.state.isVisibleCart
        })
    }

    render(){
        return (
            <section className="viewProduct">
                {
                    this.state.isLoading ?
                    <Fragment>
                        <h2>Идет Загрузка товара</h2>
                        <Loader />
                    </Fragment>
                    :
                    <div className="viewProduct__box">
                        <ProductInfo product={this.state.product} handleAddToCart={this.handleAddToCart} productInCart={this.state.productInCart} handleRemoveFromCart={this.handleRemoveFromCart} />
                        <Cart cartItems={this.state.cartItems} product={this.state.product} handleRemoveFromCart={this.handleRemoveFromCart} handleIsVisibleCart={this.handleIsVisibleCart} isVisibleCart={this.state.isVisibleCart}/>
                    </div>
                }
            </section>
        )
    }
}

ViewProduct.propTypes = {
    product: PropTypes.object,
    isLoading: PropTypes.bool
}

export default ViewProduct
