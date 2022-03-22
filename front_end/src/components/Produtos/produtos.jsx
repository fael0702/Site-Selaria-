import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'

export const Produtos = (props) => {


    let { alt } = props;
    let { nome } = props;
    let { src } = props;
    let min = 0
    let max = 30
    const navigate = useNavigate()

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
                    <li>
                        <a href='/comprar/:id'>
                            <button className="botao">Comprar</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>


    );
}