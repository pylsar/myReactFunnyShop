import React from 'react'
import {Link} from 'react-router-dom'
import Comments from '../../containers/Comments/Comments'

import './ProductInfo.scss'

const ProductInfo = ({product}) => {
    return (
        <div className="productInfo">
            <div className="productInfo__left">
                <h3>{product.title}</h3>
                <div className="productInfo__left__img">
                    <img src={require(`../../assets/img/${product.img}`)} alt={product.title}/>
                </div>
                <span>Цена: {product.price}</span>
                <span>Кол-во: {product.quantity}</span>
                <div className="productInfo__left__descr">{product.longDescr}</div>
                <Link to='/products' className="productInfo__left--link">назад</Link>
            </div>
            <Comments />
        </div>
    )
}

export default ProductInfo