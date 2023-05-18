import { User } from "../../models/User";
import { inputUser } from "interface";
import { ToDo } from "../../models/ToDo";
import { NullishPropertiesOf } from "sequelize/types/utils";

export const controller = {

    createUser: async (dates: inputUser & Omit<User, NullishPropertiesOf<User>>): Promise <User> => {
        try {
            const newUser = await User.create (dates);
            return newUser;            
        } catch (error) {
            console.error('ERROR TO CREATE USER: ', error);
            throw error;
        }
    },

    user: async (id: string) => {
        try {
            const user = await User.findOne({
                where: {id: id},
                include: {model: ToDo}
            });
            return user;
        } catch (error) {
            console.error('ERROR TO FIND USER: ', error);
            throw error;
        }
    }
}