'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  await queryInterface.createTable('usuarios', { 
    
    id: {  
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    
    nome: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    
    tipousuario: {
      type: Sequelize.STRING(1),
      allowNull: false,
    },

    senha: {
      type: Sequelize.STRING(12),
      allowNull:false,
    },

    cpf: {
      type: Sequelize.STRING(12),
      allowNull: false,
    },

    email: {
      type: Sequelize.STRING(50),
      allowNull:false,
    },

    cep: {
      type: Sequelize.STRING(10),
    },

    logradouro: {
      type: Sequelize.STRING(100),
    },

    numero: {
      type: Sequelize.STRING(10),
    },

    bairro: {
      type: Sequelize.STRING(50),
    },

    cidade: {
      type: Sequelize.STRING(50),
    },

    uf: {
      type: Sequelize.STRING(2),
    },

    complemento: {
      type: Sequelize.STRING(50),
    },

    permissao_alterar: {
        type: Sequelize.INTEGER,
    },

    permissao_excluir: {
      type: Sequelize.INTEGER,
    },

    permissao_baixa: {
      type: Sequelize.INTEGER,
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
