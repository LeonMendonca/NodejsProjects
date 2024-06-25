import { userModel } from './db/model.js';

class DaoUser {
  static async createUser(userData) {
    try {
      const createdUser = await userModel.create(userData);
      return createdUser;
    } catch(error) {
      throw new Error('E11000');
    }
  }

  static async getAllUsers() {
    try {
      const allusers = await userModel.find();
      return allusers;
    } catch(error) {
      throw new Error('something went wrong');
    }
  }

  static async getUserById(id) {
    try {
      const user = await userModel.findOne({_id:id});
      return user;
    } catch(error) {
      throw new Error('not a valid id');
    }
  }

  static async updateUserById(id,toUpdatePrecise) {
    try {
      const result = await userModel.findOneAndUpdate({_id:id}, {$set: toUpdatePrecise });
      if(!result) {
        return null;
      }
      const name = toUpdatePrecise?.name ?? result.name
      return `${name} has been updated`;
    } catch(error) {
      throw error;
    }
  }
}

export { DaoUser };
