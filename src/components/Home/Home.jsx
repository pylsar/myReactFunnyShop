import React from 'react'
import {Link} from 'react-router-dom'

import cartIcon from '../../assets/img/cart.png'

import './Home.scss'

const Home = () => {
    return (
        <div className="home">
           <h1>Магазин крутых вещей</h1>
           <p className="home--subtitle"> <time dateTime="2020-01-01">Мы открылись!</time> и у нас можно купить все</p> 
           <small>(это вам не али экспресс какой-нибудь)</small>
           <p>
               <Link to="/products" className="home--link">Каталог тут</Link>
           </p>
           <img src={cartIcon} alt="магазин"/>
           
        </div>
    )
}

export default Home
