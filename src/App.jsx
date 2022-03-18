import './App.css';
import React from 'react'
import Produtos from './components/produtos.jsx';
import Principal from './components/principal';
import guaiaca from './img/guaiaca.png'
import cinto from './img/cinto.png'
import bala from './img/bala.png'
import faca from './img/faca.png'
import capinha from './img/capinha.png'
import manta from './img/manta.png'
import cabecada from './img/cabecada.png'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (

    <div>
      <Header />
      <div className='linha1'>
        <Principal nome='Cinto R$ 59,90' src={cinto} alt='Cinto' />
      </div>

      <div className='linha1'>
        <Produtos nome='Cinturão de bala R$ 119,99' src={bala} alt='Cinturão de bala' />
        <Produtos nome='Guaiaca R$ 69,90' src={guaiaca} />
        <Produtos nome='Bainha de faca R$ 49,90' src={faca} alt='Bainha de faca' />
      </div>
      <div className='linha2'>
        <Produtos nome='Cabeçada R$ 79,99' src={cabecada} alt='Cabeçada' />
        <Produtos nome='Capinha de celular R$ 49,90' src={capinha} alt='capinha de celular' />
        <Produtos nome='Manta R$ 79,99' src={manta} alt='Manta' />
      </div>
      <Footer/>
    </div>
  );
}
export default App;

