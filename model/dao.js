import { userModel } from './db/model.js';


class DaoUser {
  static async createUser(userData) {
    try {
      const createdUser = await userModel.create(userData);
      return createdUser;
    } catch(error) {
      throw new Error('E11000 duplicate email');
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
      throw error;
    }
  }

  static async patchUpdateUserById(id,toUpdateFiltered) {
    try {
      const result = await userModel.findByIdAndUpdate(id, {$set: toUpdateFiltered });
      if(!result) {
        return null;
      }
      const name = toUpdateFiltered?.name ?? result.name
      return `${name} has been updated`;
    } catch(error) {
      if(error.code === 11000) {
        throw new Error("11000 duplicate email");
      }
      throw error;
    }
  }

  static async putUpdateUserById(id,toUpdate) {
    try {
      const result = await userModel.findByIdAndUpdate({_id:id}, {$set: toUpdate });
      if(!result) {
        return null;
      }
      return `all fields are updated of ${result.name}`
    } catch (error) {
      if(error.code === 11000) {
        throw new Error("11000 duplicate email");
      }
      throw error;
    }
  }

  static async deleteUserById(id) {
    try {
      const result = await userModel.findByIdAndDelete(id);
      if(!result) {
        return null;
      }
      return `${result.name} has been deleted!`;
    } catch(error) {
      if(error.code === 11000) {
        throw new Error("11000 duplicate email");
      }
      throw error;
    }
  }
}

export { DaoUser };
