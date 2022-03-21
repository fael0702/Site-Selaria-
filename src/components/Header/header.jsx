/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.css'
import React from 'react';
import logo from '../../img/cavaloLogoFinal.png';
import face from '../../img/facebook-64x64.png';
import insta from '../../img/instagram-64x64.png';
import whats from '../../img/whatsapp-64x64.png';

export const Header = () => {

  return (
    <div>
      <header>
        <nav className='logo'>
          <ul>
            <li>
              <img src={logo} alt="logo" />
            </li>
          </ul>
        </nav>
        <nav className="social">
          <div className="menu">
            <ul>
              <li>
                <a
                  href='/'>
                  Home
                </a>
              </li>

              <li>
                <a
                  href='/cadastro/'>
                  cadastro
                </a>
              </li>

              <li>
                <a
                  href='/'>
                  Sobre
                </a>
              </li>

            </ul>
          </div>
        </nav>
        <nav className="redes">
          <ul>

            <li>
              <a>
                <img src={face} alt="Facebook" />
              </a>
            </li>
            <li>
              <a>
                <img src={insta} alt="Instagram" />
              </a>
            </li>

            <li>
              <a>
                <img src={whats} alt="whatsapp" />
              </a>
            </li>

          </ul>
        </nav>
      </header>
    </div>
  )
}