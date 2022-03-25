import React from 'react';
import './styles.css'

export const Produtos = (props) => {

    let { id } = props;
    let { alt } = props;
    let { nome } = props;
    let { src } = props;

    return (

        <div className="card">

            <div>

                <p>{nome}</p>
                <img className='produto' src={src} alt={alt}></img>

            </div>

            <div>
                <p>Pronta entregua</p>
            </div>

            <div>
                <ul>
                    <li>
                        <a href= {`/comprar/${id}`}>
                            <button className="botao">Comprar</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>


    );
}

/* let min = 0
    let max = 30

    let aleatorio = Math.floor(Math.random() * (max - min) + min);

    const [estoque] = useState([aleatorio]) */