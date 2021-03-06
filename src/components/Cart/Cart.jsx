import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './Cart.scss'
import cartIcon from '../../assets/img/cart.png'

const Cart = ({ cartItems, product, handleRemoveFromCart, handleIsVisibleCart, isVisibleCart }) => {
    
    return (
        <Fragment>
            {/* <div className="cart"> */}
            <div className={!isVisibleCart ? 'cart' : 'cart cart__active'}>
                {/* начальное положение, когда товаров нет */}
                {cartItems.length === 0 ? 'товар еще не добавлен' : <div>Товаров выбрано: {cartItems.length}</div>}
                {/* если товар выбран, добавляем его название в корзину */}
                <div className="cart__product">
                    {cartItems.length !== 0 && product.title}
                    { cartItems.length !== 0 && <span className="cart__product--close" onClick={handleRemoveFromCart}>&times;</span> }
                </div>
                
            </div>
            <div className={!isVisibleCart ? 'cart__icon' : 'cart__icon cart__icon__active'}>
                <img src={cartIcon} alt='cart' onClick={handleIsVisibleCart}/>
            </div>
        </Fragment>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    product: PropTypes.object.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
    handleIsVisibleCart: PropTypes.func.isRequired,
    isVisibleCart: PropTypes.bool.isRequired
  }

export default Cart