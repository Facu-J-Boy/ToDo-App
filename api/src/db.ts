import {Sequelize} from 'sequelize-typescript';  
import config from './lib/config';
config;

// export const sequelize = new Sequelize({
//  dialect: 'postgres',
//  database: config.dbName,
//  password: config.dbPassword,
//  username: config.dbUser,
//  storage: ':memory:',
//  models: [__dirname + '/models'],
// });

export const sequelize = new Sequelize ("postgres://default:NfhR5uSsDUd6@ep-quiet-glitter-902094.us-east-1.postgres.vercel-storage.com:5432/verceldb")