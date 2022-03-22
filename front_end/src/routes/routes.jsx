import { Routes, Route} from 'react-router-dom'
import { Cadastro } from '../pages/Cadastro/Cadastro.jsx'
import { Inicio } from '../pages/Inicio/Home.jsx'
import { Comprar } from '../pages/Compras/Comprar.jsx'
import { Principal } from '../components/Principal/principal.jsx'

export function Rotas(props) {
    
    let { id } = props

    return(
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path={`/comprar/:${id}`} element={<Comprar/>}/>
                <Route path='/principal' element={<Principal/>}/>
            </Routes>
    )
}
