module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('taks', [{
      id: '1',
      user_id: '1',
      content: 'Fazer um exercício do HackerRank por dia',
      when: '2022-05-16 22:30:00',
      done: false,
    }, {
      id: '2',
      user_id: '1',
      content: 'Melhorar Linkedin',
      when: '2022-05-16 22:45:00',
      done: false,
    }, {
      id: '3',
      user_id: '2',
      content: 'Estudar princípios SOLID',
      when: '2022-05-17 06:50:00',
      done: false,
    }], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
