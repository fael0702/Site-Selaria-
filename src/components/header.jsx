import './header.css'
import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../img/cavaloLogoFinal.png';
import face from '../img/facebook-64x64.png';
import insta from '../img/instagram-64x64.png';
import whats from '../img/whatsapp-64x64.png';
import {BrowserRouter} from 'react-router-dom'

const Header = () => {

    return(
        <div>
            <BrowserRouter>
              <header>
                <nav class="logo">
                  <ul>
                    <li>
                      <img src={logo} alt="logo" />
                    </li>
                  </ul>
                </nav>
                <nav class="social">
                  <div className="menu">
                    <ul>
                      <li><Link to='/'>Home</Link></li>
                      <li><Link to='/Cadastro'>cadastro</Link></li>
                      <li><Link to='/'>Sobre</Link></li>
                    </ul>
                  </div>
                </nav>
                <nav class="redes">
                  <ul>
                    <li><Link><img src={face} alt="Facebook" /></Link></li>
                    <li><Link><img src={insta} alt="Instagram" /></Link></li>
                    <li><Link><img src={whats} alt="whatsapp" /></Link></li>
                  </ul>
                </nav>
              </header>
            </BrowserRouter>
        </div>
    )
}

export default Header