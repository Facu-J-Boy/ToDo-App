import {Sequelize} from 'sequelize-typescript';  
import config from './lib/config';
import { User } from './models/User';
import { ToDo } from './models/ToDo';
config;

const {URL_DATABASE} = process.env;

// export const sequelize = new Sequelize({
//  dialect: 'postgres',
//  database: config.dbName,
//  password: config.dbPassword,
//  username: config.dbUser,
//  storage: ':memory:',
//  models: [__dirname + '/models'],
// });


const sequelize = new Sequelize (`${URL_DATABASE}`)
sequelize.addModels([User, ToDo]);

export default sequelize;