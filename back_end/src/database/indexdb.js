const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const conexao = new Sequelize(dbConfig);

const usuarios = require('../api/models/usuariosModels.js');
const solicitacoes = require('../api/models/solicitacoesModels.js');

try{
    conexao.authenticate();
    console.log('Conexão Estabelecida!!!');
}
catch (error) {
    console.log('Falha na conexão', error);
}

usuarios.init(conexao);
solicitacoes.init(conexao);

module.exports = conexao;