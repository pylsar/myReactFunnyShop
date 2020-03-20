import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
           <h1>Магазин крутых вещей</h1>
           <p>тут можно купить все(это вам не али экспресс какой-нибудь)</p> 
           <p>
               <Link to="/products">Каталог тут</Link>
           </p>
        </div>
    )
}

export default Home
