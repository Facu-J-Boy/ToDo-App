import { ToDo } from "models/ToDo";
import { User } from "models/User"
import { NullishPropertiesOf } from "sequelize/types/utils";


export const controller = {

    createToDo: async (id: string, dates: Omit<ToDo, NullishPropertiesOf<ToDo>>): Promise <ToDo | null> => {
        try {
            const user: User | null = await User.findByPk(id);
            if (!user) {
                console.log('Usuario no encontrado');
                return null;
              }
            const create = await ToDo.create(dates);
            await create.setUser(user);
            return create
        } catch (error) {
            console.error('ERROR: ', error);
            return null
        }
    }
}