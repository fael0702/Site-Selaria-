import React from 'react';

const Comprar = props => {

    let { alt } = props;
    let { nome } = props;
    let { src } = props;

    return(
        <div>
            <p>{nome}</p>
            <img className='produto' src={src} alt={alt}></img>
        </div>
    )
}

export default Comprar