import React from 'react'
import {getAllProducts} from '../../API'
import ProductItem from '../../components/ProductItem/ProductItem'

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
        return (
            <div>
                <h2>Введите имя товара</h2>
                <input onChange={this.handleSearch} type="text" value={this.state.search} />
                {this.state.search && <p>Вы ввели: {this.state.search}</p>}
                
                {this.state.products.filter(product =>{
                    return (
                        // в нижний регистр и удаляем все что не совпадает
                        product.title.toLowerCase().indexOf(this.state.search.toLowerCase()) >-1
                        // выводим все совпадения
                    )}).map(product => {
                    return (
                        < ProductItem key={product.id} product={product} />
                    )
                })}
            </div> 
        )
    }
}

export default Search
