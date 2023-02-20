"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "items",
      [
        {
          image: "lampadas.svg",
          title: "Lâmpadas",
        },
        {
          image: "baterias.svg",
          title: "Pilhas e Baterias",
        },
        {
          image: "papeis-papelao.svg",
          title: "Papéis e Papelão",
        },
        {
          image: "eletronicos.svg",
          title: "Resíduos Eletrônicos",
        },
        {
          image: "organicos.svg",
          title: "Resíduos Orgânicos",
        },
        {
          image: "oleo.svg",
          title: "Óleo de Cozinha",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
   
  },
};
