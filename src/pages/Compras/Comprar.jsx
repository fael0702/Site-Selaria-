import React from 'react';
import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer'
import { Produtos } from '../../components/Produtos/produtos';
import { useParams } from 'react-router-dom';
//import data from '../../data.js'

export function Comprar(props) {

    //let { id } = props 
    let { img } = props
    let { alt } = props  
    
    const { id } = useParams();


    return (
        <div>
            <Header />
            <Produtos> <img src={img} alt={alt} /> </Produtos>
            <Footer />
        </div>
    )
}
