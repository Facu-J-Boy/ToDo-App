import { Sequelize } from 'sequelize-typescript';
import config from './lib/config';
import pg from 'pg';
config;

const { URL_DATABASE } = process.env;

// export const sequelize = new Sequelize({
//  dialect: 'postgres',
// dialectModule: pg,
//  database: config.dbName,
//  password: config.dbPassword,
//  username: config.dbUser,
//  storage: ':memory:',
//  models: [__dirname + '/models'],
// });

export const sequelize = new Sequelize(`${URL_DATABASE}`, {
  dialect: 'postgres',
  logging: false,
  native: false,
  dialectModule: pg,
  models: [__dirname + '/models'],
});
