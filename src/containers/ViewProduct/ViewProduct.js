import React, {Fragment} from 'react'

import ProductInfo from '../../components/ProductInfo/ProductInfo'
import Loader from '../../components/Loader/Loader'
import {getProduct} from '../../API'

import './ViewProduct.scss'


class ViewProduct extends React.Component {

    state={
        isLoading: true,
        product: {}
    }


    componentDidMount(){
        // console.log(this.props)
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

    render(){
        return (
            <div className="viewProduct">
                {
                    this.state.isLoading ?
                    <Fragment>
                        <h2>Идет Загрузка товара</h2>
                        <Loader />
                    </Fragment>
                    :
                    <ProductInfo product={this.state.product}/>
                }
          
            </div>
        )
    }
}

export default ViewProduct
