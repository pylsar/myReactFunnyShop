import React from 'react'

import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                <li>
                    <a href="https://codepen.io/collection/Aawzba" target="_blank" rel="noopener noreferrer">CodePen</a>
                </li>
                <li>
                    <a href="https://codesandbox.io/u/pylsar" target="_blank" rel="noopener noreferrer">CodeSandbox</a>
                </li>
                <li>
                    <a href="https://github.com/pylsar" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li>
                    <a href="www.codewars.com/users/pylsar" target="_blank" rel="noopener noreferrer">CodeWars</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
