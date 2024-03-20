import { Response, Request, Router } from 'express';
import { controller } from './controllers/ToDo';

const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const todos = await controller.getTodosByUser(id);
    todos.length === 0
      ? res.status(201).end('Your list is empty')
      : res.status(201).send(todos);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const { id, dates } = req.body;
  try {
    const newToDo = await controller.createToDo(id, dates);
    res.status(201).send(newToDo);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleteToDo = await controller.deleteToDo(id);
    res.status(201).send(deleteToDo);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

router.put('/update/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { text } = req.body;
  try {
    const updateToDo = await controller.updateToDo(id, text);
    res.status(201).send(updateToDo);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

export default router;
