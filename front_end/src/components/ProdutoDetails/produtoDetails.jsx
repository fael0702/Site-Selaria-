import React from 'react';
import './styles.css'
import data from '../../data'
import { useParams } from 'react-router-dom';

//import { useParams } from 'react-router-dom';

export const ProdutoDetails = (props) => {

    //let { alt } = props;
    let { nome } = props;
    //let { src } = props;
    // let { id } = props;

    //const produto = data.produtos.find(x => x._id === props.id)

    const { id } = useParams();
    console.log(id)

    /* if(!produto){
        return(<p>produto não encontrado</p>)
        
    } */

    return(
        <div className="card">

            <div>
                <p>{nome}</p>
                <img className='produto' /* src={produto.img} alt={produto.alt} */ />
                
            </div>
        </div>
    );
}