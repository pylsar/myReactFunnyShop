import React from 'react'
import PropTypes from 'prop-types'

import './SortFilter.scss'

class SortFilter extends React.Component {
   render(){
    return (
        <div className="sortFilter">
            <p>Товаров на сайте: {this.props.countProducts}</p>
            <label>
                Сортировать по цене: 
                <select value={this.props.sort} onChange={this.props.handleSort}>
                    <option value="">{!this.props.sort ? 'сортировать по:' : 'вернуть как было'}</option>
                    <option value="expensive">ого как дорого</option>
                    <option value="cheap">дешманские</option>
                </select>
            </label>
        </div>
        )
    }
}

SortFilter.propTypes = {
    countProducts: PropTypes.number.isRequired,
    sort: PropTypes.string.isRequired,
}

export default SortFilter
