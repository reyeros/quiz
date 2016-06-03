'use strict';

var crypto = require('crypto');


function encryptPassword(password, salt) {
    return crypto.createHmac('sha1', salt).update(password).digest('hex');
};


module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Users', [ 
         { username: 'admin', 
           password: encryptPassword('1234', 'aaaa'),
           salt:     'aaaa',
           isAdmin: true,
           createdAt: new Date(), updatedAt: new Date() },
         { username: 'pepe',  
           password: encryptPassword('5678', 'bbbb'),
           salt:     'bbbb',
           createdAt: new Date(), updatedAt: new Date() },
         { username: 'manolo',  
           password: encryptPassword('9876', 'cccc'),
           salt:     'cccc',
           createdAt: new Date(), updatedAt: new Date() },
          { username: 'francisco',  
           password: encryptPassword('3455', 'dddd'),
           salt:     'dddd',
           createdAt: new Date(), updatedAt: new Date() }
        ]);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
