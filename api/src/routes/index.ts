import {Router} from 'express';
import userRoutes from './user';
import toDoRoutes from './toDo';

const router = Router();

router.use('/user', userRoutes);
router.use('/todo', toDoRoutes);

export default router;