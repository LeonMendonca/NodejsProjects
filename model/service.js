import { DtoRequest } from '../dto/dtoreq.js';
import { DtoResponse } from '../dto/dtores.js';

import Joi from 'joi'

import { DaoUser } from './dao.js';

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(15).max(60).required(),
  city: Joi.string().required(),
  zipcode: Joi.number().integer().min(400000).max(499999).required()
})

const joiSchemaUpdate = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  age: Joi.number().integer().min(15).max(60),
  city: Joi.string(),
  zipcode: Joi.number().integer().min(400000).max(499999)
})

class Service {
  static async CreateUser(body) {
    const dtoObjectReq = new DtoRequest(body);
    const { error } = joiSchema.validate(dtoObjectReq)
    if(error) { throw error };
    try {
      const newUser = await DaoUser.createUser(dtoObjectReq);
      return { username:newUser.name, id:newUser._id }; 
    } catch(error) {
      throw error;
    }
  }

  static async GetAllUsers() {
    let arrOfUsers = [];
    try {
      const allusers = await DaoUser.getAllUsers();
      if(!allusers.length) {
        return null;
      }
      for(let user of allusers) {
        let dtoObjectRes = new DtoResponse(user);
        arrOfUsers.push(dtoObjectRes);
      }
      return arrOfUsers;
    } catch (error) {
      throw error;
    }
  }

  static async GetUserById(id) {
    try {
      const userDb = await DaoUser.getUserById(id);
      if(!userDb) { return null };
      const user = new DtoResponse(userDb);
      return user;
    } catch(error) {
      throw error;
    }
  }

  static async UpdateUserById(id,toUpdate) {
    try {
      const toUpdateObj = new DtoRequest(toUpdate);
      //remove the undefined properties
      for(let key in toUpdateObj) {
        if(toUpdateObj[key] === undefined || toUpdateObj[key] === null) {
          delete toUpdateObj[key];
        }
      }
      const { error } = joiSchemaUpdate.validate(toUpdateObj)
      if(error) { 
        throw error 
      };
      const result = await DaoUser.updateUserById(id,toUpdateObj)
      return result;
    } catch(error) {
      throw error;
    }
  }
}

export { Service };
