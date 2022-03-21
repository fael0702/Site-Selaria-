/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.css';
import face from '../../img/facebook-64x64.png';
import insta from '../../img/instagram-64x64.png';
import whats from '../../img/whatsapp-64x64.png';

export const Footer = () => {
  return (
    <div>
      <footer>
        <nav className='social'>
          <div>
            <h4>Institucional</h4>
            <ul>
              <li><a>Empresa</a></li><br />
              <li><a>Como comprar</a></li><br />
              <li><a>Segurança</a></li><br />
              <li><a>Envio</a></li><br />
            </ul>
          </div>
        </nav>
        <nav className='social'>
          <div>
            <h4>Atendimento</h4>
            <ul>
              <li><a>telefone: (16) 9999-9999</a></li><br />
              <li><a>Whatsapp: (16) 8888-8888</a></li><br />
              <li><a>Email: contato@gmail.com</a></li><br />
            </ul>
            <p>Atendimento: segunda a sexta - 07:30 às 17:30</p>
          </div>
        </nav>
        <nav className='social'>
          <div>
            <h4>Redes sociais</h4>
            <ul>
              <li><a><img src={face} alt="Facebook" />  Facebook</a></li><br />
              <li><a><img src={insta} alt="Instagram" />  Instagram</a></li><br />
              <li><a><img src={whats} alt="whatsapp" />  Whatsapp</a></li><br />
            </ul>
          </div>
        </nav>
      </footer>
    </div>
  );
}