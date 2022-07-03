import React from 'react'
// import foto from "../../assets/foto.jpg"
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            {/* <img className='header__img' src={foto} alt='blue dinner' /> */}
            <h1 className='header__title'>KURIAME MĖLYNĄJĄ <br/> VAKARIENĘ!</h1>
            <p className='header__text'>Dabar kuriame svetainę.</p>
        </header>
    )
}

export default Header