import {Response, Request, Router} from 'express';
import { controller } from './controllers/User';

const router = Router()

router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await controller.listUsers();
        res.status(201).send(users);
    } catch (error: any) {
        res.status(404).send(error.message);
    }
})

router.post('/', async (req: Request, res: Response) => {
    const {id, email} = req.body;
    try {
        const findOrCreate = await controller.findOrCreateUser(id, email);
        res.status(201).send(findOrCreate);
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

export default router;