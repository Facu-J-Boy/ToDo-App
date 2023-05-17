import { User } from "../../models/User";
import { NullishPropertiesOf } from "sequelize/types/utils";

export const controller = {
    createUser: async (datos: Omit<User, NullishPropertiesOf<User>>) => {
        try {
            const newUser = await User.create (datos);
            return newUser;            
        } catch (error) {
            console.error('Error al crear el usuario', error);
            throw error;
        }
    }
}