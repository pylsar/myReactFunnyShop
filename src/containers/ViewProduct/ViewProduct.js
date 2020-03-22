import React, {Fragment} from 'react'

// import ProductItem from '../../components/ProductItem/ProductItem'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import {getProduct} from '../../API'
 
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
                },1000)
            })
    }

    render(){
        return (
            <Fragment>
                {
                    this.state.isLoading ?
                    <h2>Идет Загрузка товара</h2>:
                    <ProductInfo product={this.state.product}/>

                }
          
            </Fragment>
        )
    }
}

export default ViewProduct
