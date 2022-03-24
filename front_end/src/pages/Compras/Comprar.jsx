import React from 'react';

//import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer'
import { ProdutoDetails } from '../../components/ProdutoDetails/produtoDetails'

import data from '../../data'

export function Comprar(props) {

   const produto = data.produtos.find((x) => x._id === props.id)

    return (
        <div>
            <Header />
            <ProdutoDetails src={produto.img}/>
            <Footer />
        </div>
    )
}
