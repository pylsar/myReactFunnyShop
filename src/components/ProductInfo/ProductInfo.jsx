import React from 'react'
import {Link} from 'react-router-dom'

const ProductInfo = ({product}) => {
    return (
        <div>
            <h3>{product.title}</h3>
            <span>Цена: {product.price}</span>
            <span>Кол-во: {product.quantity}</span>
            <div className="product__img">
                <img src={require(`../../assets/img/${product.img}`)} alt={product.title}/>
            </div>
            <Link to='/products'>назад</Link>
        </div>
    )
}

export default ProductInfo