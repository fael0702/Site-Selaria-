const { update, create } = require('../models/usuariosModels');
const Usuarios = require('../models/usuariosModels');

module.exports = {

/*     async index(req,res) {
    const usuarios = await Usuarios.findAll();
    return res.json(usuarios);
    }, */

    async index(req,res) {
        const {email} = req.params

        if (email) {
            const usuario = await Usuarios.findAll({
                where: {email: email}
            })
            return res.status(200).send({
                usuario
            })
        }else{
            const usuarios = await Usuarios.findAll();
            return res.json(usuarios);
        }

    },

    async create(req,res) {
        const {nome,tipousuario,senha,cpf,email,cep,logradouro,numero,bairro,cidade,uf, complemento,permissao_alterar,permissao_excluir,permissao_baixa} = req.body;
        const usuario = await Usuarios.create({nome,tipousuario,senha,cpf,email,cep,logradouro,numero,bairro,cidade,uf,complemento,permissao_alterar,permissao_excluir,permissao_baixa});
        return res.status(200).send({
            status: 1,
            message: "Usuario cadastrado com sucesso!",
            usuario
        })
    },

    async update(req, res){
        const {nome,tipousuario,senha,cpf,email,cep,logradouro,numero,bairro,cidade,uf, complemento,permissao_alterar,permissao_excluir,permissao_baixa} = req.body;
        const { codigo } = req.params;

        await Usuarios.update({
            nome,
            tipousuario,
            senha,
            cpf,
            email,
            cep,
            logradouro,
            numero,
            bairro,
            cidade,
            uf, 
            complemento,
            permissao_alterar,
            permissao_baixa,
            permissao_excluir},
            {where: {id: codigo}});
        return res.status(200).send({
            status: 1,
            message: "Usuario atualizado com sucesso",
        })
    },

    async delete(req, res) {
        const { codigo } =req.params;

        await Usuarios.destroy({
            where: {
                id: codigo
            }
        });
        return res.status(200).send({
            status: 1,
            message: "Usuario excluído com sucesso"
        })
    }

}
