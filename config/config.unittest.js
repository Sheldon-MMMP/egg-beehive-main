'use strict';

exports.security = {
  csrf: {
    enable: false,
  },
};

exports.sequelize = {
  dialect: 'mysql',
  host: '192.168.84.131',
  port: 3306,
  password: '123456',
  database: 'egg-beehive-test',
  timezone: '+08:00',
  define: {
    raw: true,
    underscored: false,
    charset: 'utf8',
    timestamp: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      // collate: 'utf8_general_ci',
    },
  },
};

exports.redis = {
  client: {
    port: 6379,
    host: '127.0.0.1',
    password: '',
    db: 1,
  },
};
