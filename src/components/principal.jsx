import './produtos.css';

const principal = props => {

    let { nome } = props;
    let { src } = props;
    let { alt } = props;

    return (

        <div className="principal">

            <div>
                <p>{nome}</p>
                <img className='produto' src={src} alt={alt}></img>
            </div>

            <div>
                <p>Personalizável!!!</p>
            </div>

            <div>
                <ul>
                    <li><button className="botao">Comprar</button></li>
                </ul>
            </div>
        </div>
    )
}

export default principal 
