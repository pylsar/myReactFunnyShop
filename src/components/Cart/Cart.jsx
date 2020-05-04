import React, { Fragment } from 'react'

import './Cart.scss'
import cartIcon from '../../assets/img/cart.png'

const Cart = ({ cartItems, product, handleRemoveFromCart, handleIsVisibleCart, isVisibleCart }) => {
    
    return (
        <Fragment>
            {/* <div className="cart"> */}
            <div className={!isVisibleCart ? 'cart' : 'cart cart__active'}>
                {/* начальное положение, когда товаров нет */}
                {cartItems.length === 0 ? 'товар еще не добавлен' : <div>Товаров вырано: {cartItems.length}</div>}
                {/* если товар выбран, добавляем его название в корзину */}
                <div className="cart__product">
                    {cartItems.length !== 0 && product.title}
                    { cartItems.length !== 0 && <span className="cart__product--close" onClick={handleRemoveFromCart}>&times;</span> }
                </div>
                <div className="cart__icon">
                    <img src={cartIcon} alt='cart' onClick={handleIsVisibleCart}/>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart