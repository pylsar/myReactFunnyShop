import React from 'react'
import {getAllProducts} from '../../API'
import ProductItem from '../../components/ProductItem/ProductItem'

import SearchIcon from '../../assets/img/SearchIcon.png'
import './Search.scss'

class Search extends React.Component {
    state={
        search: '',
        products: []
    }

    componentDidMount(){
        getAllProducts()
            .then(products => {
                this.setState({
                    products: products
                })
            })
    }

    handleSearch = (event) => {     
        this.setState({
            search: event.target.value
        })
    }

    render(){
        const filterSearch = this.state.products.filter(product =>{
                return (
                    // в нижний регистр и убираем все что не совпадает
                    product.title.toLowerCase().indexOf(this.state.search.toLowerCase()) >-1
                    // выводим все совпадения
                )}).map(product => {
                return (
                    < ProductItem key={product.id} product={product} />
                )
            })
        return (
            <div className="search">
                <h2>Введите имя товара</h2>
                <div className="search__place">
                    <div className="search__place__img">
                        <img className="search__place__img--icon" src={SearchIcon} alt="search" />
                    </div>
                    <input className="search__place--input" onChange={this.handleSearch} type="text" value={this.state.search} />
                </div>
                {/* выводим текст поиска на экран */}
                {this.state.search && <p className="search__place--result">Вы ввели: {this.state.search}</p>}
                {/* если поиск не пустой выводим кол-во найденного товара */}
                <p>товаров найдено: {this.state.search ? filterSearch.length : '0'}</p>
                {/* выводим карточку товара если не пустая строка поиска */}
                {this.state.search && <div className="search__box">{filterSearch}</div> } 
            </div> 
        )
    }
}

export default Search
