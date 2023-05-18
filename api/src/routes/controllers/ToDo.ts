import { CreateOptions } from "sequelize";
import { ToDo } from "../../models/ToDo";
import { User } from "../../models/User";
import { NullishPropertiesOf } from "sequelize/types/utils";


export const controller = {

    createToDo: async (id: string, dates: Omit<ToDo, NullishPropertiesOf<ToDo>>): Promise <ToDo | null> => {
        try {
            const user: User | null = await User.findByPk(id);
            if (!user) {
                console.log('Usuario no encontrado');
                return null;
              }
            const create: ToDo = await ToDo.create(dates);
            user.setToDo(create);
            console.log('ToDo creado y relacionado al usuario correctamente');
            return create
        } catch (error) {
            console.error('ERROR: ', error);
            return null
        }
    },

    deleteToDo: async (id: string) => {
        try {
            await ToDo.destroy({
                where: {id: id}
            });
            console.log('ToDo deleted');
        } catch (error) {
            console.error('ERROR: ', error);
        }
    }
}