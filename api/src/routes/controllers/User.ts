import { User } from "../../models/User";
import { inputUser } from "interface";
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
    }
}