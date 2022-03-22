const { Model, DataTypes } = require('sequelize');

class Usuarios extends Model{
    static init(sequelize){
        super.init(
            {
                nome: DataTypes.STRING,
                tipousuario: DataTypes.STRING,
                senha: DataTypes.STRING,
                cpf: DataTypes.STRING,
                email: DataTypes.STRING,
                cep: DataTypes.STRING,
                logradouro: DataTypes.STRING,
                numero: DataTypes.STRING,
                bairro: DataTypes.STRING,
                cidade: DataTypes.STRING,
                uf: DataTypes.STRING,
                complemento: DataTypes.STRING,
                permissao_excluir: DataTypes.INTEGER,
                permissao_alterar: DataTypes.INTEGER,
                permissao_baixa: DataTypes.INTEGER,
            },
            {
                sequelize,
                tableName: 'usuarios',
            }
        );
        return this;
    }
}
module.exports = Usuarios;
