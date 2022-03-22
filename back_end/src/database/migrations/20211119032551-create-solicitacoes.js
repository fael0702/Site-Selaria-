'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('solicitacoes', {
       id: { //protocolo
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
       },

       codusuario: {
         type: Sequelize.INTEGER,
         allowNull: false,
         references: {model: 'usuarios', key:'id'},
         onDelete: 'CASCADE',
       },
      
       dataregistro:{
         type: Sequelize.DATE,
         allowNull: false,
       },

       databaixa: {
        type: Sequelize.DATE,
        allowNull: true,        
       },

       baixamotivo: {
         type: Sequelize.STRING(1),
         allowNull: true,
       },

       estadosolicitacao: {
          type: Sequelize.STRING(50),
          allowNull: true,
       },

       observacoes: {
          type: Sequelize.STRING(200),
          allowNull: true,
       },

       cep:{
          type: Sequelize.STRING(10),
          allowNull: true,          
       },

       logradouro: {
          type: Sequelize.STRING(100),
          allowNull: false,
       },

       referencia: {
        type: Sequelize.STRING(50),
        allowNull: false
       },

       bairro: {
        type: Sequelize.STRING(50),
        allowNull: true,
       },

       latitude: {
         type:Sequelize.FLOAT,
         allowNull: true,
       },

       longitude: {
         type: Sequelize.FLOAT,
         allowNull: true,
       },
       
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },

        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        }

      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
