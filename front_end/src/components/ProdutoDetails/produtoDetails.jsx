import React from 'react';
import './styles.css'
import data from '../../data'
import { useParams } from 'react-router-dom';

export const ProdutoDetails = (props) => {

    console.log(alt)

    const produto = data.produtos.find(x => x._id === props.id)

    const { id } = useParams();

    /* if(!produto){
        return(<p>produto não encontrado</p>)    
    }  */  

    return(
        <div className="card">
            <div>
                <p>{nome}</p>
                <img className='produto' src={src} alt={alt}/>
            </div>
        </div>
    );
}