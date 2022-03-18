import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';
import face from '../img/facebook-64x64.png';
import insta from '../img/instagram-64x64.png';
import whats from '../img/whatsapp-64x64.png';
import {BrowserRouter} from 'react-router-dom'

const Footer = () => {
    <div>
        <BrowserRouter>
          <footer>
          <nav className='social'>
            <div>
              <h4>Institucional</h4>
              <ul>
                <li><Link>Empresa</Link></li><br />
                <li><Link>Como comprar</Link></li><br />
                <li><Link>Segurança</Link></li><br />
                <li><Link>Envio</Link></li><br />
              </ul>
            </div>
          </nav>
          <nav className='social'>
            <div>
              <h4>Atendimento</h4>
              <ul>
                <li><Link>telefone: (16) 9999-9999</Link></li><br />
                <li><Link>Whatsapp: (16) 8888-8888</Link></li><br />
                <li><Link>Email: contato@gmail.com</Link></li><br />
              </ul>
              <p>Atendimento: segunda a sexta - 07:30 às 17:30</p>
            </div>
          </nav>
          <nav className='social'>
            <div>
              <h4>Redes sociais</h4>
              <ul>
                <li><Link><img src={face} alt="Facebook" />  Facebook</Link></li><br />
                <li><Link><img src={insta} alt="Instagram" />  Instagram</Link></li><br />
                <li><Link><img src={whats} alt="whatsapp" />  Whatsapp</Link></li><br />
              </ul>
            </div>
          </nav>
                </footer>
        </BrowserRouter>
    </div>
}

export default Footer 