import React from 'react';
import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer'
import { Produtos } from '../../components/Produtos/produtos';
import data from '../../data.js'

export function Comprar(props) {
  
    const product = data.products.find((x) => x._id === props._id)

    if (!product){
        return <div> Produto não encontrado </div>
    }

    return (
        <div>
            <Header />
            <Produtos> <img src={product.img} /> </Produtos>
            <Footer />
        </div>
    )
}
