import { User } from "../../models/User";
import { inputUser, outputUser } from "interface";
import { NullishPropertiesOf } from "sequelize/types/utils";

export const controller = {
    createUser: async (dates: inputUser & Omit<User, NullishPropertiesOf<User>>) => {
        try {
            const newUser: outputUser = await User.create (dates);
            return newUser;            
        } catch (error) {
            console.error('ERROR TO CREATE USER: ', error);
            throw error;
        }
    }
}