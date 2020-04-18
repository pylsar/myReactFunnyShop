import React from 'react'

class SortFilter extends React.Component {
   render(){
    return (
        <div>
            <p>Товаров на сайте: {this.props.count}</p>
            <label>
                Отсортировать по цене:
                <select value={this.props.sort} onChange={this.props.handleSort}>
    <option value="">{!this.props.sort ? 'сортировать по:' : 'вернуть как было'}</option>
                    <option value="expensive">Ого как дорого</option>
                    <option value="cheap">Дешманские</option>
                </select>
            </label>
        </div>
        )
    }
   
}

export default SortFilter
