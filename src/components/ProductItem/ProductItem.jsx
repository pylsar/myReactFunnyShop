import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import './ProductItem.scss'

const ProductItem = ({product}) => {
    return (
        <div className="product-item">
            <h3>{product.title}</h3>
            <div className="product-item__img">
                <img src={require(`../../assets/img/${product.img}`)} alt={product.title}/>
            </div>
            <div className="product-item__info">
                <span>Цена: {product.price}</span>
                <span>Кол-во: {product.quantity}</span>
            </div>
            <Link to={`/products/${product.id}`}>Посмотреть продукт</Link>
        </div>
    )
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductItem