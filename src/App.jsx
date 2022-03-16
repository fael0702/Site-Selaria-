import './App.css';
import Produtos from './components/produtos.jsx';
import logo from './img/cavaloLogoFinal.png';
import face from './img/facebook-64x64.png';
import insta from './img/instagram-64x64.png';
import whats from './img/whatsapp-64x64.png';
import Principal from './components/principal';
import guaiaca from './img/guaiaca.png'
import cinto from './img/cinto.png'
import bala from './img/bala.png'
import faca from './img/faca.png'
import capinha from './img/capinha.png'
import manta from './img/manta.png'
import cabecada from './img/cabecada.png'

function App() {

  return (
    <div>
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
              <li><a href="#">Home</a></li>
              <li><a href="#">Cadastro</a></li>
              <li><a href="#">Sobre</a></li>
            </ul>
          </div>
        </nav>
        <nav class="redes">
          <ul>
            <li><a href="#"><img src={face} alt="Facebook" /></a></li>
            <li><a href="#"><img src={insta} alt="Instagram" /></a></li>
            <li><a href="#"><img src={whats} alt="whatsapp" /></a></li>
          </ul>
        </nav>
      </header>

      <div className='linha1'>
        <Principal nome='Cinto R$ 59,90' src={cinto} alt='Cinto' />
      </div>

      <div className='linha1'>
        <Produtos nome='Cinturão de bala R$ 119,99' src={bala} alt='Cinturão de bala'/>
        <Produtos nome='Guaiaca R$ 69,90' src={guaiaca}/>
        <Produtos nome='Bainha de faca R$ 49,90' src={faca} alt='Bainha de faca' />
      </div>

      <div className='linha2'>
        <Produtos nome='Cabeçada R$ 79,99' src={cabecada} alt='Cabeçada' />
        <Produtos nome='Capinha de celular R$ 49,90' src={capinha} alt='capinha de celular'/>
        <Produtos nome='Manta R$ 79,99' src={manta} alt='Manta' />
      </div>

      <footer>
        <nav className='social'>
          <div>
            <h4>Institucional</h4>
            <ul>
              <li><a href='#'>Empresa</a></li><br />
              <li><a href='#'>Como comprar</a></li><br />
              <li><a href='#'>Segurança</a></li><br />
              <li><a href='#'>Envio</a></li><br />
            </ul>
          </div>
        </nav>
        <nav className='social'>
          <div>
            <h4>Atendimento</h4>
            <ul>
              <li><a href='#'>telefone: (16) 9999-9999</a></li><br />
              <li><a href='#'>Whatsapp: (16) 8888-8888</a></li><br />
              <li><a href='#'>Email: contato@gmail.com</a></li><br />
            </ul>
            <p>Atendimento: segunda a sexta - 07:30 às 17:30</p>
          </div>
        </nav>
        <nav className='social'>
          <div>
            <h4>Redes sociais</h4>
            <ul>
              <li><a href="#"><img src={face} alt="Facebook" />  Facebook</a></li><br />
              <li><a href="#"><img src={insta} alt="Instagram" />  Instagram</a></li><br />
              <li><a href="#"><img src={whats} alt="whatsapp" />  Whatsapp</a></li><br />
            </ul>
          </div>
        </nav>
      </footer>

    </div>
  );
}

export default App;

/* const items = [
  {
    id: 0,
    nome: 'Cinturão',
    img: { bala },
    quantidade: 10
  },
  {
    id: 2,
    nome: 'Guaiaca',
    img: { guaiaca },
    quantidade: 10
  },
  {
    id: 3,
    nome: 'Capinha',
    img: { capinha },
    quantidade: 10
  }, 
  {
    id: 4,
    nome: 'Arreio',
    img: { arreio },
    quantidade: 10
  }, 
  {
    id: 5,
    nome: 'Cinto',
    img: { cinto },
    quantidade: 10
  },
  {
    id: 6,
    nome: 'Faca',
    img: { faca },
    quantidade: 10
  }, 
] */