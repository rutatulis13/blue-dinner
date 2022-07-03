import React from 'react'
// import foto from "../../assets/foto.jpg"
import './HeaderMobile.scss'

const HeaderMobile = () => {
    return (
        <header className='mobile__header'>
            {/* <img className='header__img' src={foto} alt='blue dinner' /> */}
            <h1 className='mobile__header--title'>KURIAME MĖLYNĄJĄ <br/> VAKARIENĘ!</h1>
            <p className='mobile__header--text'>Dabar kuriame svetainę.</p>
        </header>
    )
}

export default HeaderMobile