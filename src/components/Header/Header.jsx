import React from 'react'
import {Link} from 'react-router-dom'
import Calc from '../../containers/Calc/Calc'
import Auth from '../../containers/Auth/Auth'

import './Header.scss'

const Home = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/products">Каталог</Link>
                    </li>
                    <li>
                        <Link to="/search">Поиск</Link>
                    </li>
                </ul>
            </nav>
            <Calc />
            <Auth />
        </header>
    )
}

export default Home
