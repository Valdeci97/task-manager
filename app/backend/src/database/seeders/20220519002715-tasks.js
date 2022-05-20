module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('tasks', [{
      id: 'fb75e839-e5e6-4846-8c10-0cfae9e39dc2',
      user_id: 1,
      content: 'Fazer um exercício do HackerRank por dia',
      when: '2022-05-16 22:30:00',
      done: false,
    }, {
      id: '2289d471-dbeb-4e75-9351-23be15ab6c89',
      user_id: 1,
      content: 'Melhorar Linkedin',
      when: '2022-05-16 22:45:00',
      done: false,
    }, {
      id: '2d3a965d-a7fc-440e-b7d8-b1badbbad4f1',
      user_id: 2,
      content: 'Estudar princípios SOLID',
      when: '2022-05-17 06:50:00',
      done: false,
    }], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
