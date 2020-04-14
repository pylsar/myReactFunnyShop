import React from 'react'
import {Link} from 'react-router-dom'

import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                <li>
                    <Link to="https://codepen.io/collection/Aawzba">CodePen</Link>
                </li>
                <li>
                    <Link to="https://codesandbox.io/u/pylsar">CodeSandbox</Link>
                </li>
                <li>
                    <Link to="https://github.com/pylsar">GitHub</Link>
                </li>
                <li>
                    <Link to="www.codewars.com/users/pylsar">CodeWars</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
