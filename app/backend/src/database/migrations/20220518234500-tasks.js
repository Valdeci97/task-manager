module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: { primaryKey: true, type: Sequelize.UUID },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'users', key: 'id' },
      },
      content: { type: Sequelize.STRING, allowNull: false },
      when: { type: Sequelize.STRING, allowNull: false },
      done: { type: Sequelize.BOOLEAN, allowNull: false },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('tasks');
  },
};
