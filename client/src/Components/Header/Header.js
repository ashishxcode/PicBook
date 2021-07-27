import React from 'react'
import '../../index.css'

const Header = () => {
    return (

        <header className="header">
            
            <div className="brand">
                <a className="nav__item brand__name" href="/">
                    <img className="brand__logo" src="/images/PicBook-Logo.svg" alt=''/>
                </a>
            </div>

            <nav className="nav">
                <a className="nav__item" href="/">Home</a>
                <a className="nav__item" href="/signin">Sing In</a>
                <a className="nav__item button button__primary" href="/signup">Sing Up</a>
            </nav>
        </header>
    )
}

export default Header
