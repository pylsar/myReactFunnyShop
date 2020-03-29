import React from 'react'
import {Link} from 'react-router-dom'

import './ProductItem.scss'

const ProductItem = ({product}) => {
    return (
        <div className="productItem">
            <h3>{product.title}</h3>
            <div className="product__img">
                <img src={require(`../../assets/img/${product.img}`)} alt={product.title}/>
            </div>
            <span>Цена: {product.price}</span>
            <span>Кол-во: {product.quantity}</span>
            <Link to={`/products/${product.id}`}>Посмотреть продукт</Link>
        </div>
    )
}

export default ProductItem