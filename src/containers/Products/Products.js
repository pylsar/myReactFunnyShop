import React from 'react'

import ProductItem from '../../components/ProductItem/ProductItem'
import { getAllProducts} from '../../API'
import SortFilter from '../../components/SortFilter/SortFilter'

import isLoadingIcon from '../../assets/img/isLoading.png'  
import './Products.scss'

class Products extends React.Component {

    state={
        isLoading: true,
        products: [],
        sort: ''
    }

    componentDidMount(){
        getAllProducts()
            .then(products => {
                setTimeout(() => {
                    this.setState({
                        isLoading: false,
                        products: products
                    })
                },1000)
            })
    }

    handleSort(event){
        this.setState({
            sort: event.target.value
        })
        this.listSort()
    }

    listSort = () => {
        this.setState(state =>{
            // сортируем по убыванию или возрастанию
            if(state.sort !==''){
                state.products.sort((a,b) => (state.sort === 'expensive') ? (a.price < b.price ? 1 : -1) : (a.price > b.price ? 1 : -1))
            }else{
                // возвращаем как было по умолчанию
                state.products.sort((a,b) => (a.id > b.id ? 1: -1))
            }
        })
    }

    render(){
        return(
            <div className="products">
                <h1>Каталог Товаров</h1>
                <SortFilter sort={this.state.sort} handleSort={this.handleSort.bind(this)} count={this.state.products.length}/>
                <div className="products__box">
                    {this.state.isLoading ? 
                    <div className="products__loading">
                        <h2>Товар приносят на сайт...</h2>
                        <img src={isLoadingIcon} alt="wait"/> 
                    </div>
                    : 
                    this.state.products.map((product) => {
                            return (
                                < ProductItem key={product.id} product={product}/>
                            )
                        })}
                </div>   
            </div>
        )
    }
}

export default Products