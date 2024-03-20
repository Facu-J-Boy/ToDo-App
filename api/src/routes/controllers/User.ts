import { User } from '../../models/User';

export const controller = {
  listUsers: async (): Promise<User[]> => {
    try {
      return User.findAll();
    } catch (error) {
      console.error('ERROR: ', error);
      throw error;
    }
  },

  findOrCreateUser: async (id: string, email: string) => {
    try {
      const [user, created] = await User.findOrCreate({
        where: { id },
        defaults: { id, email },
      });
      if (created) {
        return user;
      } else {
        return user;
      }
    } catch (error) {
      console.error('Error al buscar o crear el usuario:', error);
    }
  },
};
