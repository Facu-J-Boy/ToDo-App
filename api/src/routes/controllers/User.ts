import { User } from "../../models/User";
import { NullishPropertiesOf } from "sequelize/types/utils";

export const controller = {
    createUser: async (dates: Omit<User, NullishPropertiesOf<User>>) => {
        try {
            const newUser = await User.create (dates);
            return newUser;            
        } catch (error) {
            console.error('ERROR TO CREATE USER: ', error);
            throw error;
        }
    }
}