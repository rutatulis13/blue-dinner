import React from 'react'
// import foto from "../../assets/foto.jpg"
import './HeaderMobile.scss'

const HeaderMobile = () => {
    return (
        <header className='mobile__header'>
            <h1 className='mobile__header--title'>KURIAME MĖLYNĄJĄ <br/> VAKARIENĘ!</h1>
            <p className='mobfooter__text'>Dabar kuriame svetainę.</p>
          <p className='mobfooter__email'>info@melynojivakariene.lt</p>
        </header>
    )
}

export default HeaderMobile