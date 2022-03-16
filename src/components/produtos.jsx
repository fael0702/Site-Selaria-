import React, { useState } from 'react';
import './produtos.css';

const Produtos = props => {

    let { alt } = props;
    let { nome } = props;
    let { src } = props;
    let min = 0
    let max = 30

    let aleatorio = Math.floor(Math.random() * (max - min) + min);

    const [estoque] = useState([aleatorio])

    return (

        <div className="card">

            <div>
                <p>{nome}</p>
                <img className='produto' src={src} alt={alt}></img>
            </div>
            {estoque > 0 ?
                (
                    <div>
                        <p>Pronta entregua</p>
                    </div>
                ) :
                (
                    <div>
                        <p className="aviso">sem estoque!!!</p>
                    </div>
                )
            }

            <div>
                <ul>
                    <li><button className="botao">Comprar</button></li>
                </ul>
            </div>
        </div>
        
        
    )
}

export default Produtos