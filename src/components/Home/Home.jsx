import React from 'react'
import {Link} from 'react-router-dom'

import './Home.scss'

const Home = () => {
    return (
        <div className="home">
           <h1>Магазин крутых вещей</h1>
           <p className="home--subtitle">тут можно купить все(это вам не али экспресс какой-нибудь)</p> 
           <p>
               <Link to="/products" className="home--link">Каталог тут</Link>
           </p>
        </div>
    )
}

export default Home
