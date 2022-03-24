import './App.css';
import React from 'react'

import { Produtos } from '../../components/Produtos/produtos';
import { Principal } from '../../components/Principal/principal';
import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer';

import guaiaca from '../../img/guaiaca.png' 
import cinto from '../../img/cinto.png'
import bala from '../../img/bala.png'
import faca from '../../img/faca.png'
import capinha from '../../img/capinha.png'
import manta from '../../img/manta.png'
import cabecada from '../../img/cabecada.png'

export function Inicio() {

  return (
    <div>
      <Header />
      <div className='linha1'>
        <Principal nome='Cinto R$ 59,90' src={cinto} alt='Cinto' id= '1' />
      </div>

      <div className='linha1'>
        <Produtos nome='Cinturão de bala R$ 119,99' src={bala} alt='Cinturão de bala' id= '2' />
        <Produtos nome='Guaiaca R$ 69,90' src={guaiaca} id= '3'/>
        <Produtos nome='Bainha de faca R$ 49,90' src={faca} alt='Bainha de faca' id= '4'/>
      </div>
      <div className='linha2'>
        <Produtos nome='Cabeçada R$ 79,99' src={cabecada} alt='Cabeçada' id= '5'/>
        <Produtos nome='Capinha de celular R$ 49,90' src={capinha} alt='capinha de celular' id= '6'/>
        <Produtos nome='Manta R$ 79,99' src={manta} alt='Manta' id= '7'/>
      </div>
      <Footer/>
    </div>
  );

}

