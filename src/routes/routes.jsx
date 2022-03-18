import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cadastro from '../pages/Cadastro.jsx'
import Comprar from '../pages/Comprar'
import App from '../App.jsx'

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/Cadastro' element={<Cadastro/>}/>
                <Route path='/Comprar'element={<Comprar/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas