import {Response, Request, Router} from 'express';
import { controller } from './controllers/User';

const router = Router()

router.post('/', async (req: Request, res: Response) => {
    const dates = req.body;
    try {
        const newUser = await controller.createUser(dates);
        res.status(201).send(newUser)
    } catch (error: any) {
        res.status(404).send(error.message);
    }
});

export default router;