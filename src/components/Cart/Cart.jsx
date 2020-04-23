import React from 'react'

import './Cart.scss'

const Cart = ({ cartItems, product }) => {
    
    return (
        <div className="cart">
            {/* начальное положение, когда товаров нет */}
            {cartItems.length === 0 ? 'товар еще не добавлен' : <div>У вас выбран {cartItems.length} товар</div>}
            {/* если товар выбран, добавляем его название в корзину */}
            <div>
                 {cartItems.length !== 0 && product.title}
                 
            </div>
        </div>
    )
}

export default Cart