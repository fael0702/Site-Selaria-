const { Model, DataTypes } = require('sequelize');

class Solicitacoes extends Model{
    static init(sequelize){
        super.init(
            {
                codusuario: DataTypes.INTEGER,
                dataregistro: DataTypes.DATE,
                databaixa: DataTypes.DATE,
                baixamotivo: DataTypes.STRING,
                estadosolicitacao: DataTypes.STRING,
                observacoes: DataTypes.STRING,
                cep: DataTypes.STRING,
                logradouro: DataTypes.STRING,
                referencia: DataTypes.STRING,
                bairro: DataTypes.STRING,
                latitude: DataTypes.STRING,
                longitude: DataTypes.STRING,
                
            },
            {
                sequelize,
                tableName: 'solicitacoes',
            }
        );
    }
}
module.exports = Solicitacoes;