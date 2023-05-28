import { User } from "../../models/User";
import { inputUser } from "interface";
import { NullishPropertiesOf } from "sequelize/types/utils";

export const controller = {

    listUsers: async (): Promise <User[]> => {
        try {
            return User.findAll();
        } catch (error) {
            console.error('ERROR: ', error);
            throw error;
        }
    },


    getUser: async (id: string): Promise <User | null> => {
        try {
            return await User.findByPk(id);
        } catch (error) {
            console.error('ERROR: ', error);
            throw error;
        }
    },

    createUser: async (dates: inputUser & Omit<User, NullishPropertiesOf<User>>): Promise <User> => {
        try {
            const newUser = await User.create (dates);
            return newUser;            
        } catch (error) {
            console.error('ERROR TO CREATE USER: ', error);
            throw error;
        }
    }
}