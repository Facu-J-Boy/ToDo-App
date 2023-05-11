import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, {Request, Response, NextFunction} from 'express';
import morgan from 'morgan';
import config from './lib/config';
import routes from './routes/index';
import bodyParser from 'body-parser';
//-----------------------------------

interface error {
    status: number;
    message: string;
}

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);
app.use(express.urlencoded({extended: true, limit: '50mb'})); //middleware
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(
 cors({
  origin: config.cors,
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
 })
);

app.use((err: error, req: Request, res: Response, next: NextFunction) => {
 // eslint-disable-line no-unused-vars
 const status = err.status || 500;
 const message = err.message || err;
 console.error(err);
 res.status(status).send(message);
});

export default app;

// app.get('/', (req: Request, res: Response) => {
//     res.send('hola typescript!');
//    });