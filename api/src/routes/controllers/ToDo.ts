import { ToDo } from '../../models/ToDo';
import { User } from '../../models/User';
import { NullishPropertiesOf } from 'sequelize/types/utils';

export const controller = {
  createToDo: async (
    id: string,
    dates: Omit<ToDo, NullishPropertiesOf<ToDo>>
  ): Promise<ToDo | null> => {
    try {
      const user: User | null = await User.findByPk(id);
      if (!user) {
        console.log('Usuario no encontrado');
        return null;
      }

      const lastOrderTodo = await ToDo.findOne({
        where: {
          userId: id,
        },
        order: [['order', 'DESC']],
      });

      let order = 1;

      if (lastOrderTodo) {
        order = lastOrderTodo.order + 1;
      }

      const create: ToDo = await ToDo.create({
        ...dates,
        order: order,
        userId: id,
      });

      console.log(
        'ToDo creado y relacionado al usuario correctamente'
      );
      return create;
    } catch (error) {
      console.error('ERROR: ', error);
      return null;
    }
  },

  getTodosByUser: async (userId: string): Promise<ToDo[]> => {
    try {
      const todos: ToDo[] = await ToDo.findAll({
        where: { userId: userId },
        order: [['order', 'DESC']],
      });
      return todos;
    } catch (error) {
      console.error('ERROR: ', error);
      return [];
    }
  },

  deleteToDo: async (id: string) => {
    try {
      await ToDo.destroy({
        where: { id: id },
      });
      console.log('ToDo deleted');
    } catch (error) {
      console.error('ERROR: ', error);
    }
  },

  updateToDo: async (id: string, text: string) => {
    try {
      await ToDo.update({ text: text }, { where: { id: id } });
      console.log('ToDo updated');
    } catch (error) {
      console.error('ERROR: ', error);
    }
  },
};
