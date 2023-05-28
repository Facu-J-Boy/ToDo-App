import {sequelize} from './src/db';
import app from './src/app';
import cors from 'cors';

// app.use(
//     cors({
//      origin: 'http://localhost:3000',
//      credentials: true,
//      methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
//      allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
//     })
//    );

sequelize
 .sync({force: true, logging: false})
 .then(() => {
  console.log('base de datos conectada! :D');
  app.listen(3001, function () {
   console.log('App is listening on port 3001!');
  });
 })
 .catch((err) => console.error(err));