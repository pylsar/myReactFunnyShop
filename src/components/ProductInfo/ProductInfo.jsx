import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import Comments from '../../containers/Comments/Comments'

import './ProductInfo.scss'

const ProductInfo = ({product, handleAddToCart, productInCart, handleRemoveFromCart }) => {

    return (
        <div className="productInfo">
            <div className="productInfo__left">
                <h3>{product.title}</h3>
                <div className="productInfo__left__mobile">
                    <div className="productInfo__left__img">
                        <img src={require(`../../assets/img/${product.img}`)} alt={product.title}/>
                    </div>
                    <div className="productInfo__left__mobile__content">
                        <span>Цена: {product.price} {product.currency}</span>
                        {/* если товар в корзине то убавляем кол-во */}
                        { productInCart ? <span>Кол-во: {product.quantity -1}</span> : <span>Кол-во: {product.quantity}</span> }
                        <div className="productInfo__left__descr">{product.longDescr}</div>
                        <Link to='/products' className="productInfo__left--link">назад</Link>
                        { productInCart ? <button className="productInfo__left__btn" onClick={handleRemoveFromCart}>Убрать из карзины</button> : <button className="productInfo__left__btn" onClick={handleAddToCart}>Добавить в корзину</button> }
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    )
}

ProductInfo.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired, 
    productInCart: PropTypes.bool.isRequired, 
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default ProductInfo