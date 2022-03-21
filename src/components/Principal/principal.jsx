import './styles.css';

export const Principal = (props) => {

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
                    <li>
                        <a href="/principal"><button className="botao">Comprar</button></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}