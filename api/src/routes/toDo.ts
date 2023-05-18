import {Response, Request, Router} from 'express';
import { controller } from './controllers/ToDo';

const router = Router()

router.post('/', async (req: Request, res: Response) => {
    const {id, dates} = req.body
    try {
        const newToDo = await controller.createToDo(id, dates);
        res.status(201).send(newToDo);
    } catch (error: any) {
        res.status(404).send(error.message)
    }
});

export default router;