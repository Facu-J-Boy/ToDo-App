import {Response, Request, Router} from 'express';
import { controller } from './controllers/User';

const router = Router()

router.get('/', (req: Request, res: Response) => {
 res.send('soy la ruta get!');
});

router.post('/', async (req: Request, res: Response) => {
    const datos = req.body
    try {
        const newUser = await controller.createUser(datos);
        res.status(201).send(newUser)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
});

export default router;