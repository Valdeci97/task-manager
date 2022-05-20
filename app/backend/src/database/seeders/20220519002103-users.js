module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: '7d7fa2ad-cdc2-4a13-af78-0925854f670e',
        email: 'first.user@test.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW', // secret_admin
      },
      {
        id: '0bf1b68f-a1f5-4b94-b97a-63dd149c24b6',
        email: 'second.user@test.com',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO', // secret_user
      },
    ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
