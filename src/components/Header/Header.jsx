import React from 'react'
import {Link} from 'react-router-dom'

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
                </ul>
            </nav>
        </header>
    )
}

export default Home
