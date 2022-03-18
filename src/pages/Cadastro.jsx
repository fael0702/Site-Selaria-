import React from 'react';
import './cadastro.css'

import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

const Cadastro = () => {
    return (
        <div>
            <Header />
            <form>

                <div class="half-box spacing">
                    <label>Nome</label>
                    <input type="text" name="nome" class="form-control" required />
                </div>
                <div class="half-box">
                    <label>Sobrenome</label>
                    <input type="text" name="sobrenome" class="form-control" required />
                </div>
                <div class="full-box">
                    <label>Email</label>
                    <input type="email" name="email" class="form-control" required />
                </div>
                <div class="half-box spacing">
                    <label>Senha</label>
                    <input type="password" name="senha" class="form-control" required />
                </div>
                <div class="half-box">
                    <label>Confirme sua senha</label>
                    <input type="password" name="confirmarsenha" class="form-control" required />
                </div>
                <div>
                    <input type="checkbox" name="agreement" id="agreement" />
                    <label id="agreement-label">Eu li e aceito os termos de uso</label>
                </div>
                <input type="submit" name="acao" value="Enviar" />
            </form>
            <Footer />
        </div>
    )
}

export default Cadastro 