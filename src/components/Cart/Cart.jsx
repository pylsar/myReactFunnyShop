import React from 'react'

import './Cart.scss'

const Cart = ({ cartItems, product, handleRemoveFromCart }) => {
    
    return (
        <div className="cart">
            {/* начальное положение, когда товаров нет */}
            {cartItems.length === 0 ? 'товар еще не добавлен' : <div>Товаров вырано: {cartItems.length}</div>}
            {/* если товар выбран, добавляем его название в корзину */}
            <div className="cart__product">
                {cartItems.length !== 0 && product.title}
                {
                    cartItems.length !== 0 && <span className="cart__product--close" onClick={handleRemoveFromCart}>&times;</span>
                }
                  
            </div>
        </div>
    )
}

export default Cart